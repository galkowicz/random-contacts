// eslint-disable-next-line max-classes-per-file
import { Contact } from '../types'

export enum Actions {
  setContacts = 'SET_CONTACTS',
  SetSelectedContact = 'SET_SELECTED_CONTACT',
}

export interface AppAction {
  type: string
}

export class SetContacts implements AppAction {
  readonly type = Actions.setContacts

  constructor(public payload: { contacts: Array<Contact> }) {}
}

export class SetSelectedContact implements AppAction {
  readonly type = Actions.SetSelectedContact

  constructor(public payload: { index: number }) {}
}

export type AppActions = SetContacts | SetSelectedContact
