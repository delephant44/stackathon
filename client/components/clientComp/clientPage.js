import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import getAllClients from "../store/client"

//COMPONENT

export class ClientComp extends Component {
  render() {
    console.log('PROPS', this.props)
    return (
      <div>
        <h3 className="headers">Client component</h3>
        <div className="homeNav">
          <ul>client profile pic</ul>
          <ul>client name</ul>
          <ul>Goals:</ul>
          <ul>Edit this client</ul>
        </div>
      </div>
    )
  }
}

//CONTAINER

const mapState = function(state) {
  return {
    name: state.client.name
  }
}

// const mapDispatch = function(dispatch) {
//     return {
//         loadClients: function(id) {
//             dispatch(getAllClients(id))
//         }

//     }
// }

export default connect(mapState)(ClientComp)
