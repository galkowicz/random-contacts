import { Contact } from './types'

export const fetchContacts = async (apiUrl: string, contactsAmount: number): Promise<Array<any>> => {
  const data = []

  for (let i = 0; i < contactsAmount; i++) {
    try {
      const response = await fetch(apiUrl)
      const { results, info } = await response.json()
      data.push({ ...results[0], id: info.seed })
    } catch {}
  }

  return data
}

export const parseContactsData = (rawList: Array<any>): Array<Contact> => {
  return rawList.map((contact) => {
    console.log('tthis is', contact);
    const { name = {}, picture = {}, phone, email, location = {}, id } = contact
    const { city, country, postcode, state, street } = location
    return {
      id,
      firstName: name.first,
      lastName: name.last,
      title: name.title,
      picture: { large: picture.large, medium: picture.medium, thumbnail: picture.thumbnail },
      phone,
      email,
      location: { city, country, postcode, state, street },
    }
  })
}
