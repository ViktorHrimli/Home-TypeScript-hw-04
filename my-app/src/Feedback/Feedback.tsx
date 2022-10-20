import { Component, ReactNode, MouseEvent } from "react";
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButtons = (e: MouseEvent<HTMLButtonElement>) => {
    const name: string = e.currentTarget.name;
    this.setState((preventState: any) => {
      return { [name]: (preventState[name] += 1) };
    });
  };

  handleTotalClick = (): number => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  calcPercentageGoodFeedBack = (): string => {
    const { good, neutral, bad } = this.state;
    return ((good * 100) / (good + neutral + bad)).toFixed(1) + "%";
  };

  render(): ReactNode {
    const buttons = ["good", "neutral", "bad"];
    const entries = Object.entries(this.state);

    return (
      <>
        <ul>
          {buttons.map((item) => {
            return (
              <li key={item}>
                <button
                  onClick={this.handleClickButtons}
                  name={item}
                  type="button"
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        {this.handleTotalClick() ? (
          <>
            <h2>FeedBack</h2>
            <ul>
              {entries.map((item) => {
                return (
                  <li key={item[0]}>
                    <p>
                      {item[0]} <span>{item[1]}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
            <ul>
              <li>
                <p>
                  Total<span>{this.handleTotalClick()}</span>
                </p>
              </li>
              <li>
                <p>
                  Percentage<span>{this.calcPercentageGoodFeedBack()}</span>
                </p>
              </li>
            </ul>
          </>
        ) : (
          <div>NoFeedBack</div>
        )}
      </>
    );
  }
}
