export class Action<P> {
  private type: string;
  private payload: P;
  private error: boolean;

  constructor(payload: P, error: boolean = false) {
    this.type = this.constructor.name;
    this.payload = payload;
    this.error = error;
  }

  public getType = () => this.type;
  public getPayload = () => this.payload;
  public getError = () => this.error;
}

export const createAction = <P>(payload: P): Action<P> => new Action(payload);
