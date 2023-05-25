import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page:1
        }
    }
  async componentDidMount(){

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=62a08eda3a134c90a82aa8f3741ddaf2&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults : parsedData.totalResults, loading : false});
  }

  handlePrevClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=62a08eda3a134c90a82aa8f3741ddaf2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles,
      loading : false,
    })

  }

  handleNextClick = async() =>{
    //console.log("ok back");
    if( (this.state.page + 1) <= Math.ceil(this.state.totalResults / this.props.pageSize) ){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=62a08eda3a134c90a82aa8f3741ddaf2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page : this.state.page + 1,
        articles : parsedData.articles,
        loading : false,
      })
    }
    else{

    }

  }

  render() {
    return (
      <div className="container my-3">

        <h1 className="text-center">News-Monkey Top Headlines !</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">

        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                
                      <NewItem title={element.title?element.title.slice(0,45) : ""} description={element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage?element.urlToImage:""} newsUrl = {element.url?element.url:""}/>
                    
                   </div>
            })}

        </div>
            <div className="container d-flex justify-content-between pt-3" >
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}

export default News