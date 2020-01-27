import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import getAllClients from '../clientComp/clientPage'

/**
 * COMPONENT
 */

class TrainerHome extends Component {
  componentDidMount() {
    console.log('COMPONENTDIDMOUNT')
    // this.props.loadClients(this.props.user.id)
  }
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
    imageUrl: state.user.imageUrl,
    clients: state.user.clients
  }
}

const mapDispatch = function(dispatch) {
  return {
    loadClients: function(id) {
      dispatch(getAllClients(id))
    }
  }
}

export default connect(mapState, mapDispatch)(TrainerHome)

/**
 * PROP TYPES
 */
TrainerHome.propTypes = {
  email: PropTypes.string
}
