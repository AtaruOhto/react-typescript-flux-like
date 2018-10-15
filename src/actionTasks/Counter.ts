import { DecrementCount, IncrementCount } from "src/actions/Counter";
import { counterStore } from "src/stores/Counter";

export const asyncIncrement = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      counterStore.dispatch(new IncrementCount(null));
    }, 3000);
  });

export const asyncDecrement = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      counterStore.dispatch(new DecrementCount(null));
    }, 3000);
  });
