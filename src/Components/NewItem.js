import React, { Component } from 'react'

export class NewItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>                                                    
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl : "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg"} height="256px" width="256px" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}....</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">View-More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewItem