import { CourseModel } from '../model/course.model';

export interface ICourseProps {
  courseDetails: CourseModel;
  deleteCourse: (id: number) => void;
}

export interface ICoursePropsFC {
  courseDetails: CourseModel;
}

export interface NewCourseProps {}
