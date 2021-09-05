import { configureStore } from '@reduxjs/toolkit'
import app from './app';
import merchant from './merchant'
import person from './person';
import user from './user';
import account from './account';

const store = configureStore({
  reducer : {
    merchant: merchant,
    person: person,
    app: app,
    user: user,
    account: account,
  }
})

export default store
