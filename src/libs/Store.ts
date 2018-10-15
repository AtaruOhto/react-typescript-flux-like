import { Action } from "./Action";

export abstract class Store<T> {
  private state: T;
  private debugMode: boolean;
  private callbacks: Array<(val: T) => void> = [];

  constructor(state: T, debugMode: boolean) {
    this.debugMode = debugMode;
    this.state = state;
    this.exposeStoreToGlobal();
  }

  public subscribe = (callback: (val: T) => void) => {
    this.callbacks.push(callback);
  };

  public unsubscribe = (callback: (val: T) => void) => {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  };

  public getState = () => this.state;

  public dispatch = (action: Action<unknown>) => {
    this.logActionHistory(action);
    this.next(this.reducer(this.state, action));
  };

  /* protected */

  /* Need to be override in sub classes. */
  protected abstract reducer(state: T, action: Action<unknown>): T;

  /* Private */

  private next = (state: T) => {
    this.state = state;
    this.notify(this.state);
  };

  private logActionHistory = (action: Action<unknown>) => {
    if (this.debugMode) {
      // tslint:disable-next-line:no-console
      console.log({
        payload: action.getPayload(),
        store: this.constructor.name,
        type: action.getType()
      });
    }
  };

  private exposeStoreToGlobal = () => {
    if (this.debugMode) {
      (window as any)[this.constructor.name] = this;
    }
  };

  private notify = (val: T) => {
    this.callbacks.forEach(cb => {
      cb(val);
    });
  };
}
