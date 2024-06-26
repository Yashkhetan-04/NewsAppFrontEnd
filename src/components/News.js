import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import BackToTop from './BackToTop';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: '5',
    category: 'general',
  }

  capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
    // .slice(1) 1st letter ko hata ke baki ki string de dega
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - DAILY-NEWS`;
  }

  async componentDidMount() {
    // this will execute after render will has run
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b3c09feacf04425b8648cf0d476635f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // this.props.setProgress(60);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    })
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b3c09feacf04425b8648cf0d476635f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
    })
  };

  // moveNextPage = async () => {

  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b3c09feacf04425b8648cf0d476635f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles
  //   })
  // }
  // movePrevPage = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b3c09feacf04425b8648cf0d476635f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   });
  // }
  render() {
    return (
      <>
        <h2 className="my-4 text-center">DAILY-NEWS - Daily News on {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading &&<Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          className='overflow-hidden'
        >
          {/* style={{ margin: '20px 0px' }} */}
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.key} >
                  <NewItem title={element.title} description={element.description?element.description.slice(0,100):element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} /></div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.movePrevPage}>Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.moveNextPage}>Next</button>
        </div> */}
        <BackToTop/>
      </>


    )
  }

}
