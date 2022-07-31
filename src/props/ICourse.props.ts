import { CourseModel, Input } from '../model/course.model';

export interface ICourseProps {
  courseDetails: CourseModel;
  deleteCourse: (id: number) => void;
}

export interface ICoursePropsFC {
  courseDetails: CourseModel;
  deleteCourse: (id: number) => void;
}

export interface NewCourseProps {
  addNewCourse: (data: Input) => void;
}
