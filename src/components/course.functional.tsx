import React from 'react';
import { ICoursePropsFC } from '../props/ICourse.props';
import { useDispatch } from 'react-redux';
import { DeleteACourse, IncrementLikes } from '../redux/actions/actions';

export const CourseFC: React.FC<ICoursePropsFC> = ({ courseDetails }) => {
  const dispatch = useDispatch();
  const incrementLikes = () => {
    dispatch(IncrementLikes({ id: courseDetails.id }));
  };
  let ratings = [];
  const onDelete = () => {
    dispatch(DeleteACourse({ id: courseDetails.id }));
  };
  for (let index = 0; index < courseDetails.rating; index++) {
    ratings.push(
      <i
        className="fa-solid fa-star"
        style={{ color: 'orange' }}
        key={index}
      ></i>
    );
  }
  return (
    <>
      <div className="col-md-3 my-4">
        <div className="card">
          <img
            src={courseDetails.imageUrl}
            height="150px"
            className="card-img-top"
            alt={courseDetails.title}
          />
          <div className="card-body">
            <p>{ratings}</p>

            <h5 className="card-title">{courseDetails.title} </h5>
            <p className="card-title">{courseDetails.trainer} </p>
            <p className="card-text">
              {' '}
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {courseDetails.price}{' '}
            </p>

            <button className="btn btn-primary" onClick={incrementLikes}>
              {courseDetails.likes} <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button className="btn btn-danger mx-2" onClick={onDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
