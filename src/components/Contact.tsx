import React from 'react'
import { Image, Segment, Header, Icon } from 'semantic-ui-react'
import { Location } from '../types'

interface ContactProps {
  onBackClick(): void
  isContactSelected: boolean
  imageUrl: string
  fullName: string
  location: Location
  email: string
  phone: string
}

const Contact: React.FC<ContactProps> = ({
  imageUrl,
  fullName,
  location,
  email,
  isContactSelected,
  onBackClick,
  phone,
}) => {
  const { city = '', country = '', postcode = '', state = '', street = { number: '', name: '' } } = location || {}

  if (!isContactSelected) return null

  return (
    <>
      <Icon name="arrow left" onClick={onBackClick}  />
      <Segment textAlign="center">
        <Image src={imageUrl} centered size={'small'}/>
        <Header as="h3">{fullName}</Header>
        <Header as="h3">{email}</Header>
        <Header as="h3">{`${street.number} ${street.name}, ${city} ${country} ${state}, ${postcode}`}</Header>
      </Segment>
    </>
  )
}

export default Contact
