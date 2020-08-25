export interface Location {
  city: string
  country: string
  postcode: number
  state: string
  street: { number: number | string; name: string }
}

export interface Contact {
  id: string
  firstName: string
  lastName: string
  title: string
  picture: { large: string; medium: string; thumbnail: string }
  phone: string
  email: string
  location: Location
}
