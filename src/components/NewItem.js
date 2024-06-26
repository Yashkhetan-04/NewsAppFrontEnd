import React, { Component } from 'react'

export default class NewItem extends Component {
    render() {
        // let {title, description,imageUrl , newsUrl} = this.props;
        return (
            <div>
                <div className="card my-3" style={{width:'350px', height:'100%'}}>
                    <img src={this.props.imageUrl ? this.props.imageUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-3382ZgdUhzsOz0VYE8KVNtX_HTwTxRSps08Nli1&s"} className="card-img-top" alt="..." style={{width:'100%', height:'200px'}} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}...</h5>
                        <p className="card-text">{this.props.description?this.props.description:"NULL"}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {this.props.author?this.props.author:"Unknown"} on {new Date(this.props.date).toGMTString()}</small></p>
                        <a href={this.props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
