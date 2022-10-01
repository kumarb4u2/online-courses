import { CourseModel } from '../../model/course.model';
import store from '../store/store';
import {
  ADD_A_COURSE,
  ADD_TRAINER,
  DELETE_A_COURSE,
  DELETE_A_TRAINER,
  FETCH_ALL_TRAINERS,
  INCREMENT_LIKES,
} from './constants';

export function IncrementLikes({ id }: { id: number }) {
  return { type: INCREMENT_LIKES, payload: { id } };
}

export function DeleteACourse({ id }: { id: number }) {
  return { type: DELETE_A_COURSE, payload: { id } };
}

export function AddACourse({ course }: { course: CourseModel }) {
  return { type: ADD_A_COURSE, payload: { course } };
}

export function FetchAllTrainers(trainers: any) {
  return { type: FETCH_ALL_TRAINERS, payload: trainers };
}

export function FetchAllTrainersAsync() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((trainers) => {
      store.dispatch(FetchAllTrainers(trainers));
    });

  // return { type: FETCH_ALL_TRAINERS, payload: { trainers } };
}
export function AddTrainer() {
  return { type: ADD_TRAINER };
}
export function DeleteATrainer() {
  return { type: DELETE_A_TRAINER };
}
