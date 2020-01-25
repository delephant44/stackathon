import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//COMPONENT

export class ClientComp extends Component {
  render() {
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

// const mapState = function (state) {
//     return {

//     }
// }
