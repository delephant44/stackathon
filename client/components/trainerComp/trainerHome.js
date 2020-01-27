import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllClients} from '../../store/user'

/**
 * COMPONENT
 */

class TrainerHome extends Component {
  componentDidMount() {
    console.log('COMPONENTDIDMOUNT')
    console.log('PROPS in mount', this.props)
    this.props.loadClients(this.props.id)
  }
  render() {
    console.log('this.props.clients', this.props.clients)
    return (
      <div>
        <h3 className="headers">{`Welcome, ${this.props.name}`}</h3>
        <div className="homeNav">
          <ul>
            <img className="homeImage" src={this.props.imageUrl} />
          </ul>
          <ul>Your clients:</ul>
          {this.props.clients.map(function(currentClient) {
            return (
              <ul key={currentClient.id}>
                <div>
                  <img className="clientImages" src={currentClient.imageUrl} />
                </div>
              </ul>
            )
          })}
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
  console.log('STATE.USER', state.user)
  return {
    id: state.user.id,
    name: state.user.name,
    email: state.user.email,
    imageUrl: state.user.imageUrl,
    clients: state.user.clients || [] //if clients comes out undefined (the first render), then add the || [] so it will return an empty array to begin with, then it will load the clients on the second render
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
