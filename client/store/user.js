import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_CLIENTS = 'GET_CLIENTS'

/**
 * INITIAL STATE
 */
const defaultUser = {
  clients: [],
  currentUser: {}
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const getClients = clients => ({type: GET_CLIENTS, receivedClients: clients})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const getAllClients = function(id) {
  console.log('GETALLCLIENTS THUNK')
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/users/${id}/clients`)
      dispatch(getClients(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const newClient = function(clientInfo) {
  return async function(dispatch) {
    try {
      const {data} = await axios.post(XXXXX)
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  console.log('USER REDUCER')
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case GET_CLIENTS:
      return action.receivedClients
    default:
      return state
  }
}
