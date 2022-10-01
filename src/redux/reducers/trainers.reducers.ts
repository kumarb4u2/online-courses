import { FETCH_ALL_TRAINERS } from '../actions/constants';

export function trainers(state: any = [], { type, payload }: any) {
  switch (type) {
    case FETCH_ALL_TRAINERS:
      console.log(type, payload);
      return [...state, payload];

    default:
      return state;
  }
}
