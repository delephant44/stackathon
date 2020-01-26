import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AllGymsComp extends Component {
  //   componentDidMount() {
  //     // console.log("PROPS from componentdidmount", this.props)
  //     // console.log('ComponentDidMount reached')
  //     this.props.loadAllGyms(this.props.gyms)
  //   }

  render() {
    console.log('PROPS', this.props)
    console.log('Gym Component Reached')
    return (
      <div>
        <h3 className="headers"> All Gyms component </h3>
        <ul>List out all of the gyms for all the current users</ul>
      </div>
    )
  }
}

const mapState = function(state) {
  return {
    gyms: state.gyms
  }
}

// const mapDispatch = function(dispatch) {
//   console.log('mapDispatch reached')
//   return {
//     loadAllGyms: function(gyms) {
//       console.log('loadAllGyms reached')
//       dispatch(getAllGyms(gyms))
//     }
//   }
// }

export default connect(mapState)(AllGymsComp)
