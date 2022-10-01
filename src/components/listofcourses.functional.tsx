import React from 'react';

import { CourseFC } from './course.functional';
import { useSelector } from 'react-redux';

export const ListOfCourcesFC: React.FC = () => {
  const allCourses = useSelector((state: any) => state.courses);

  let coursesToBeCreated = allCourses?.map((course: any) => (
    <CourseFC courseDetails={course} key={course.id} />
  ));

  return (
    <>
      <h1>List of courses</h1>

      <div className="row">{coursesToBeCreated}</div>
    </>
  );
};
