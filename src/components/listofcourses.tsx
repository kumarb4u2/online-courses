import React from 'react';
import { IListOfCourses } from '../state/IListOfCourse';
import Course from './course';

export class ListOfCourses extends React.Component<{}, IListOfCourses> {
  state: Readonly<IListOfCourses> = {
    courses: [
      {
        id: 1,
        title: 'React',
        price: 5000,
        likes: 400,
        rating: 5,
        trainer: 'Micheal Kim',
        imageUrl:
          'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg',
      },
      {
        id: 2,
        title: 'Redux',
        price: 4000,
        likes: 600,
        rating: 5,
        trainer: 'Andrew Collan',
        imageUrl: 'https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg',
      },
      {
        id: 3,
        title: 'Node',
        price: 6000,
        likes: 900,
        rating: 4,
        trainer: 'Sumeet Wajpe',
        imageUrl:
          'https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1',
      },
      {
        id: 4,
        title: 'Angular',
        price: 5000,
        likes: 200,
        rating: 3,
        trainer: 'John Carter',
        imageUrl:
          'https://fs.hubspotusercontent00.net/hubfs/6426302/Imported_Blog_Media/7fad34d867a32f732b37534ff013e916-3-2.jpg',
      },
      {
        id: 5,
        title: 'Flutter',
        price: 7000,
        likes: 700,
        rating: 4,
        trainer: 'M Johnas',
        imageUrl:
          'https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg',
      },
    ],
  };
  deleteCourse = (id: number): void => {
    const filteredItems = this.state.courses.filter((item) => item.id !== id);
    this.setState({ courses: filteredItems });
  };
  render(): React.ReactNode {
    let coursesToBeCreated = this.state.courses.map((course) => (
      <Course
        courseDetails={course}
        key={course.id}
        deleteCourse={this.deleteCourse}
      />
    ));
    return (
      <>
        <h1>List of books</h1>
        <div className="row">{coursesToBeCreated}</div>
      </>
    );
  }
}
