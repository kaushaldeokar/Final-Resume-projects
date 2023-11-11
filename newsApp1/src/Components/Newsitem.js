import React, { Component } from "react";

export class Newsitem extends Component {

    

  render() {
    // important//
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div className="card" style={{width: "18rem;"}}>
        <img className="card-img-top" src={!imageUrl?"http://cdn.wionews.com/sites/default/files/2022/12/14/318052-new-wion.png":imageUrl} alt=".." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-danger">
            Read More..
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
