import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">

        <h2>News-Monkey Top Headlines ! </h2>

        <div className="row">
            <div className="col-md-4">
                <NewItem title="my title" description="my description"/>
            </div>
            <div className="col-md-4">
                <NewItem title="my title" description="my description"/>
            </div>
            <div className="col-md-4">
                <NewItem title="my title" description="my description"/>
            </div>
        </div>
        
      </div>
    )
  }
}

export default News