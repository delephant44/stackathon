import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export class TrainerHome extends Component {
  render() {
    console.log('PROPS', this.props)
    return (
      <div>
        <h3 className="headers">{`Welcome, ${this.props.name}`}</h3>
        <div className="homeNav">
          <ul>
            <img className="homeImage" src={this.props.imageUrl} />
          </ul>
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
    name: state.user.name,
    email: state.user.email,
    imageUrl: state.user.imageUrl
  }
}

export default connect(mapState)(TrainerHome)

/**
 * PROP TYPES
 */
TrainerHome.propTypes = {
  email: PropTypes.string
}
