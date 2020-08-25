import { Actions, AppActions } from './actions'
import { Contact } from '../types'

export type AppState = {
  contacts: Array<Contact>
  selectedContactIndex: number
  isContactSelected: boolean
}

export const initialState: AppState = {
  contacts: [],
  selectedContactIndex: -1,
  isContactSelected: false,
}

export const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case Actions.setContacts: {
      const { contacts } = action.payload

      return { ...state, contacts }
    }
    case Actions.SetSelectedContact: {
      const { index } = action.payload
      let isContactSelected = true
      if (index === -1) {
        isContactSelected = false
      }

      return { ...state, selectedContactIndex: index, isContactSelected }
    }

    default:
      throw new Error('reducer error')
  }
}
