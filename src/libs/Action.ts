export class Action<P> {
  private type: string;
  private payload: P;
  private error: boolean;
  private meta: any;

  constructor(payload: P, error: boolean = false, meta: any = null) {
    this.type = this.constructor.name;
    this.payload = payload;
    this.error = error;
    this.meta = meta;
  }

  public getType = () => this.type;
  public getPayload = () => this.payload;
  public getError = () => this.error;
  public getMeta = () => this.meta;
}

export const createAction = <P>(payload: P): Action<P> => new Action(payload);
