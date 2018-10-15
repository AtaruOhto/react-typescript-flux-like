import { Action } from "src/libs/Action";

// tslint:disable:max-classes-per-file
export class IncrementCount extends Action<null> {}
export class DecrementCount extends Action<null> {}
export class SetCount extends Action<number> {}
