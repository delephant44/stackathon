import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class TrainerHome extends Component {
  render() {
    return (
      <div>
        <h3 className="headers">Welcome, bro</h3>
        <div className="homeNav">
          <ul>trainer profile pic</ul>
          <ul>Your clients:</ul>
          {/* map through all the trainer's clients, then link to the individual client page */}
          <ul>
            <Link to="/newclient">Add new clients</Link>
            {/* ENTER NEW CLIENT FORM HERE - make sure to include fields for everything on the client model */}
          </ul>
          <ul>Next training session</ul>
          <ul>Your gym:</ul>
          {/* link to home-gym */}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(TrainerHome)

/**
 * PROP TYPES
 */
TrainerHome.propTypes = {
  email: PropTypes.string
}
