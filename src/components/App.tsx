import * as React from "react";
import "../styles/App.css";
import { Fragment } from "react";
import Main from "./Main";
import SectionWithLoopRendering from "./SectionWithLoopRendering";
import Navbar from "./Navbar";

export interface IAppProps {}

interface IState {
  isButtonPressed: boolean;
  UserName: string;
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      isButtonPressed: false,
      UserName: "default",
    };
  }

  public onClickButton = () => {
    this.setState({ isButtonPressed: true });
  };

  public onClickButtonToGoBack = () => {
    this.setState({ isButtonPressed: false });
  };

  public onClickUserNameSetButton = (newUserName: string) => {
    console.log(this.state);
    this.setState({ UserName: newUserName });
  };

  public render() {
    let { isButtonPressed, UserName } = this.state;
    return (
      <Fragment>
        <div className="App">
          <Main
            isButtonPressed={isButtonPressed}
            callbackMethod={this.onClickButton}
            callbackMethodToGoBack={this.onClickButtonToGoBack}
            UserName={UserName}
            onClickUserNameSetButton={this.onClickUserNameSetButton}
          />
          <Navbar />
          <div>
            {isButtonPressed ? (
              <SectionWithLoopRendering />
            ) : (
              <h4>Not Logged In</h4>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
