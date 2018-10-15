import * as React from "react";
import { CounterComponent } from "src/components/CounterComponent";
import { counterStore, ICounter } from "src/stores/Counter";

export class CounterContainer extends React.Component<{}, ICounter> {
  constructor(props: {}) {
    super(props);
    this.state = counterStore.getState();
  }

  /* start the subscription when the container is mounted. */
  public componentWillMount() {
    counterStore.subscribe(this.subscribeCounter);
  }

  /* end the subscription when the container is unmounted. */
  public componentWillUnmount() {
    counterStore.unsubscribe(this.subscribeCounter);
  }

  /* pass state to the component just simply. */
  public render() {
    return <CounterComponent {...this.state} />;
  }

  private subscribeCounter = (val: ICounter) => {
    this.setState({ count: val.count });
  };
}
