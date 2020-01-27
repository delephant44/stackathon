import React, {Component} from 'react'

export class NewClient extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      goals: '',
      imageUrl: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.submitHelper = this.submitHelper.bind(this)
  }

  //   handleChange(event) {
  //     this.setState({
  //       [event.target.name]: event.target.value
  //     })
  //   }

  //   submitHelper(event) {
  //     event.preventDefault()
  //     this.props.register({
  //       name: this.state.name,
  //       goals: this.state.goals,
  //       imageUrl: this.state.imageUrl
  //     })
  //     this.setState({
  //       name: '',
  //       goals: '',
  //       imageUrl: ''
  //     })
  //   }

  render() {
    return (
      <div>
        {/* onSubmit={this.props.submitHelper()} */}
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Client goals</label>
          <input
            type="text"
            name="goals"
            placeholder="Goals"
            value={this.state.goals}
            onChange={this.handleChange}
          />
          <label>Client image</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// const mapDispatch = function(dispatch) {
//     return {
//         newClient: function(clientInfo) {
//             dispatch(XXXX(clientInfo))
//         }
//     }
// }

// connect(mapDispatch)(NewClient)
