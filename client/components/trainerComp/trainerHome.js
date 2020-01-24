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
          <ul>Profile pic</ul>
          <ul>Your clients</ul>
          <ul>
            <Link to="/newclient">Add new clients</Link>
            {/* ENTER NEW CLIENT FORM HERE */}
          </ul>
          <ul>Next training session</ul>
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
