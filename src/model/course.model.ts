export class CourseModel {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public likes: number,
    public trainer: string,
    public imageUrl: string
  ) {}
}

export type Input = {
  CourseId: number;
  CourseTitle: string;
  CoursePrice: number;
  CourseRating: number;
  CourseLikes: number;
  CourseTrainer: string;
  CourseImageUrl: string;
};
