import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import './App.scss'
import { fetchContacts, parseContactsData } from './util'
import { appReducer, initialState } from './store/reducer'
import { Actions } from './store/actions'
import ContactsList from './components/ContactsList'
import Contact from './components/Contact'

const URL = 'https://randomuser.me/api'
const contactsAmount = 10

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  const { contacts = [], selectedContactIndex, isContactSelected } = state

  const { firstName, lastName, title, picture, phone, email, location } = contacts[selectedContactIndex] || {}

  React.useEffect(() => {
    const initialFetch = async () => {
      const data = await fetchContacts(URL, contactsAmount)
      const parsedData = parseContactsData(data)
      dispatch({ type: Actions.setContacts, payload: { contacts: parsedData } })
    }
    initialFetch()
  }, [])

  return (
    <div className="App" style={{ paddingTop: '2em' }}>
      <Container textAlign="center">
        <Header as="h2">Randomize me!</Header>
        <ContactsList
          contacts={contacts}
          isContactSelected={isContactSelected}
          onContactClick={(index) => dispatch({ type: Actions.SetSelectedContact, payload: { index } })}
        />
        <Contact
          onBackClick={() => dispatch({ type: Actions.SetSelectedContact, payload: { index: -1 } })}
          isContactSelected={isContactSelected}
          imageUrl={picture?.medium}
          fullName={`${title} ${firstName} ${lastName}`}
          location={location}
          email={email}
          phone={phone}
        />
      </Container>
    </div>
  )
}

export default App
