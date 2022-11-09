import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

   let  {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://s.yimg.com/os/creatr-uploaded-images/2022-07/6dae5ac0-0db8-11ed-bce7-e4f8ed4e4853":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} className="btn  btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}
