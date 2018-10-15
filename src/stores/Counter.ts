import { DecrementCount, IncrementCount, SetCount } from "src/actions/Counter";

import { Action } from "src/libs/Action";
import { Store } from "src/libs/Store";

export interface ICounter {
  count: number;
}

const initialState = { count: 0 };

class CounterStore extends Store<ICounter> {
  /* Do not add any logics other than reducer() in the class. */

  /* implement reducer, which must return ICounter type */
  protected reducer(state: ICounter, action: Action<unknown>): ICounter {
    if (action instanceof IncrementCount) {
      return {
        ...state,
        count: state.count + 1
      };
    }

    if (action instanceof DecrementCount) {
      return {
        ...state,
        count: state.count - 1
      };
    }

    if (action instanceof SetCount) {
      return {
        ...state,
        count: action.getPayload()
      };
    }

    /* Throw an error when unexpected Action is thrown via dispatch() method. */
    throw new Error(`An invalid Action is passed! "${action}" is invalid!`);
  }
}

const buildStore = () =>
  process.env.NODE_ENV === "production"
    ? new CounterStore(initialState, false)
    : new CounterStore(initialState, false);

export const counterStore = buildStore();
