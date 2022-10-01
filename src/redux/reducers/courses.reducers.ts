import {
  ADD_A_COURSE,
  DELETE_A_COURSE,
  INCREMENT_LIKES,
} from '../actions/constants';

export function courses(state: any = [], { type, payload }: any) {
  switch (type) {
    case INCREMENT_LIKES:
      return state.map((item: any) => {
        if (item.id === payload.id) {
          item.likes = item.likes + 1;
        }
        return item;
      });
    case DELETE_A_COURSE:
      return state.filter((item: any) => item.id !== payload.id);
    case ADD_A_COURSE:
      return [...state, payload.course];
    default:
      return state;
  }
}
