import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {
    constructor(){
        super();
        console.log("New object of news is created !");
        this.state = {
            articles : [],
            loading : false,
        }
    }
  async componentDidMount(){

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=62a08eda3a134c90a82aa8f3741ddaf2";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    
  }
  render() {
    return (
      <div className="container my-3">

        <h2>News-Monkey Top Headlines !</h2>

        <div className="row">

        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                
                      <NewItem title={element.title?element.title.slice(0,45) : ""} description={element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage?element.urlToImage:""} newsUrl = {element.url?element.url:""}/>
                    
                   </div>
            })}

        </div>

      </div>
    )
  }
}

export default News