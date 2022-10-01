import React from 'react';
import { useForm } from 'react-hook-form';
import { CourseModel, Input } from '../model/course.model';
import { NewCourseProps } from '../props/ICourse.props';
import { useDispatch } from 'react-redux';
import { AddACourse } from '../redux/actions/actions';

export const NewCourse: React.FC<NewCourseProps> = () => {
  const dispatch = useDispatch();

  const addNewCourse = (data: Input) => {
    const newCourse = new CourseModel(
      data.CourseId,
      data.CourseTitle,
      data.CoursePrice,
      data.CourseRating,
      data.CourseLikes,
      data.CourseTrainer,
      data.CourseImageUrl
    );
    dispatch(AddACourse({ course: newCourse }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ mode: 'onChange' });
  return (
    <div className="col-md-4">
      <form
        onSubmit={handleSubmit((data) => {
          addNewCourse(data);
        })}
      >
        <h2>New course</h2>
        <label htmlFor="txtCourseId" className="mb-2">
          Id:
        </label>
        <input
          id="txtCourseId"
          type="number"
          className="form-control"
          {...register('CourseId', { required: 'Course id is required' })}
        />
        {errors.CourseId && (
          <p style={{ color: 'red' }}>{errors.CourseId?.message}</p>
        )}
        <label htmlFor="txtCourseTitle" className="mb-2">
          Title:
        </label>
        <input
          id="txtCourseTitle"
          type="text"
          className="form-control"
          {...register('CourseTitle', {
            required: 'Course Title is required',
            maxLength: {
              value: 20,
              message: 'You exceed max length of 20.',
            },
          })}
        />
        {errors.CourseTitle && (
          <p style={{ color: 'red' }}>{errors.CourseTitle?.message}</p>
        )}
        <label htmlFor="txtCoursePrice" className="mb-2">
          Price:
        </label>
        <input
          id="txtCoursePrice"
          type="number"
          className="form-control"
          {...register('CoursePrice', { required: 'Course price is required' })}
        />
        <label htmlFor="txtCourseLikes" className="mb-2">
          Likes:
        </label>
        <input
          id="txtCourseLikes"
          type="number"
          className="form-control"
          {...register('CourseLikes', { required: 'Likes is required' })}
        />
        <label htmlFor="txtCourseRating" className="mb-2">
          Rating:
        </label>
        <input
          id="txtCourseRating"
          type="number"
          className="form-control"
          {...register('CourseRating', { required: 'Rating is required' })}
        />
        <label htmlFor="txtCourseRating" className="mb-2">
          Trainer:
        </label>
        <input
          id="txtCourseTrainer"
          type="string"
          className="form-control"
          {...register('CourseTrainer', { required: 'Trainer is required' })}
        />
        <label htmlFor="txtCourseRating" className="mb-2">
          ImageUrl:
        </label>
        <input
          id="txtCourseImageUrl"
          type="string"
          className="form-control"
          {...register('CourseImageUrl', { required: 'ImageUrl is required' })}
        />
        <button className="btn btn-success my-2">Add new course</button>
      </form>
    </div>
  );
};
