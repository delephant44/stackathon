import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_GYMS = 'GET_ALL_GYMS'

/**
 * INITIAL STATE`
 */

const defaultGyms = {
  gyms: []
}

/**
 * ACTION CREATORS
 */
const allGyms = gyms => ({
  type: GET_ALL_GYMS,
  receivedGyms: gyms
})

/**
 * THUNK CREATORS
 */

export const getAllGyms = async function(dispatch) {
  console.log('getAllGyms Thunk Creator reached')

  try {
    const {data} = await axios.get('/api/gyms')
    dispatch(allGyms(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER - BREAKING APP VVVV
 */

export default function(state = defaultGyms, action) {
  console.log('Gym Reducer reached')
  switch (action.type) {
    case GET_ALL_GYMS:
      return {...state, gyms: [...state.gyms, ...action.receivedGyms]}
    default:
      return state
  }
}
