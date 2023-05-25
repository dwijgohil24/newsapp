import React, { Component } from 'react'
import loading from './../Assets/loader.gif'
export class Spinner extends Component {

  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loader"/>
      </div>
    )
  }
}

export default Spinner