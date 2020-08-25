import React from 'react'
import { List, Card, Image, Grid } from 'semantic-ui-react'
import { Contact } from '../types'

interface ContactsListProps {
  contacts: Array<Contact>
  isContactSelected: boolean
  onContactClick(index: number): void
}

const ContactsList: React.FC<ContactsListProps> = ({ contacts, onContactClick, isContactSelected }) => {
  if (isContactSelected) return null
  return (
    <>
      <List>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            {contacts.map((contact, index) => {
              return (
                <Grid.Column key={contact.id}>
                  <List.Item
                    onClick={() => {
                      onContactClick(index)
                    }}
                  >
                    <List.Content>
                      <Card>
                        <Image src={contact.picture.medium} wrapped ui={false} />
                        <Card.Header>{`${contact.firstName} ${contact.lastName}`}</Card.Header>
                        <Card.Meta>{`phone: ${contact.phone}`}</Card.Meta>
                      </Card>
                    </List.Content>
                  </List.Item>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
      </List>
    </>
  )
}

export default ContactsList
