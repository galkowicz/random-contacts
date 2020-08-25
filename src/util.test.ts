import { parseContactsData } from './util'
import { Contact } from './types'

test('parseContactsData function', async () => {
  const mockRawContact = {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Ernest',
      last: 'Steeves ',
    },
    location: {
      street: {
        number: 6164,
        name: 'Timber Wolf Trail',
      },
      city: 'Addison',
      state: 'Montana',
      country: 'United States',
      postcode: 54145,
      coordinates: {
        latitude: '82.9258',
        longitude: '-160.6659',
      },
      timezone: {
        offset: '+3:30',
        description: 'Tehran',
      },
    },
    email: 'ernest.steeves@example.com',
    login: {
      uuid: '5d99d087-ba83-46e3-a28d-66cb469060ca',
      username: 'lazysnake473',
      password: 'blade',
      salt: 'TOIlx5m5',
      md5: 'bad695e7aa0569039a1fbd948417154a',
      sha1: '4ab8cf23a1ba4a63769d92b6faff0231aa7aa308',
      sha256: '1b4c8c08892b54d62e4b2eb369c0fd5704342d5724595a672826c353715f29bb',
    },
    dob: {
      date: '1966-07-28T07:28:58.712Z',
      age: 54,
    },
    registered: {
      date: '2015-06-20T22:42:51.687Z',
      age: 5,
    },
    phone: '(236)-030-8660',
    cell: '(217)-655-1181',
    id: 'a94d1d528f523e38',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/72.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/72.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/72.jpg',
    },
    nat: 'US',
  }
  const parsedContactObject = {
    email: 'ernest.steeves@example.com',
    firstName: 'Ernest',
    id: 'a94d1d528f523e38',
    lastName: 'Steeves ',
    location: {
      city: 'Addison',
      country: 'United States',
      postcode: 54145,
      state: 'Montana',
      street: {
        name: 'Timber Wolf Trail',
        number: 6164,
      },
    },
    phone: '(236)-030-8660',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/72.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/72.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/72.jpg',
    },
    title: 'Mr',
  }
  const parsedData: Array<Contact> = [parsedContactObject]

  const result = parseContactsData([mockRawContact])

  expect(result).toEqual(parsedData)
})
