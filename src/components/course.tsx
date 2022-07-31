import React, { Component } from 'react';
import { ICourseProps } from '../props/ICourse.props';
import { ICourseState } from '../state/ICourseState';

export default class course extends Component<ICourseProps, ICourseState> {
  state = { currLikes: this.props.courseDetails.likes };
  incrementLikes = () => {
    this.setState({ currLikes: this.state.currLikes + 1 });
  };
  onDelete = () => {
    this.props.deleteCourse(this.props.courseDetails.id);
  };
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.courseDetails.rating; index++) {
      ratings.push(<i className="fa-solid fa-star"></i>);
    }

    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.courseDetails.imageUrl}
            height="150px"
            className="card-img-top"
            alt={this.props.courseDetails.title}
          />
          <div className="card-body">
            <p>{ratings}</p>

            <h5 className="card-title">{this.props.courseDetails.title} </h5>
            <p className="card-title">{this.props.courseDetails.trainer} </p>
            <p className="card-text">
              {' '}
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {this.props.courseDetails.price}{' '}
            </p>

            <button className="btn btn-primary" onClick={this.incrementLikes}>
              {this.state.currLikes} <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button className="btn btn-danger mx-2" onClick={this.onDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
