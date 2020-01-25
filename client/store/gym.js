import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ALL_GYMS = 'ALL_GYMS'

/**
 * INITIAL STATE`
 */
// state = [] in reducer below

/**
 * ACTION CREATORS
 */
const allGyms = gyms => ({type: ALL_GYMS, gyms})

/**
 * THUNK CREATORS
 */

// export const getAllGyms = async function(dispatch) {
//   try {
//       const {data} = await axios.get("/api/gyms");
//       dispatch(allGyms(data))
//   } catch (error) {}
// }

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case All_GYMS:
      return action.user
    default:
      return state
  }
}
