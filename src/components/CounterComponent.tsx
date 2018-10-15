import * as React from "react";

import { DecrementCount, IncrementCount, SetCount } from "src/actions/Counter";

import { asyncDecrement, asyncIncrement } from "src/actionTasks/Counter";
import { counterStore, ICounter } from "src/stores/Counter";

// tslint:disable:jsx-no-lambda
export const CounterComponent = (props: ICounter) => (
  <div>
    <h1>{props.count}</h1>
    <div>
      <input
        type="button"
        value="INCREMENT"
        onClick={() => {
          counterStore.dispatch(new IncrementCount(null));
        }}
      />
      <input
        type="button"
        value="DECREMENT"
        onClick={() => {
          counterStore.dispatch(new DecrementCount(null));
        }}
      />
      <input
        type="button"
        value="INCREMENT Async"
        onClick={() => {
          asyncIncrement();
        }}
      />
      <input
        type="button"
        value="DECREMENT Async"
        onClick={() => {
          asyncDecrement();
        }}
      />

      <input
        type="button"
        value="SET 100"
        onClick={() => {
          counterStore.dispatch(new SetCount(100));
        }}
      />
    </div>
  </div>
);
