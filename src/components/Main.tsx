import * as React from "react";
import { Grid } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import SpecialButton from "./SpecialButton";
import SpecialInputSection from "./SpecialInputSection";

export interface IMainProps {
  isButtonPressed: boolean;
  callbackMethod: () => void;
  callbackMethodToGoBack: () => void;
  UserName: string;
  onClickUserNameSetButton: (Username: string) => void;
}

export default class Main extends React.Component<IMainProps> {
  public render() {
    const {
      isButtonPressed,
      callbackMethod,
      callbackMethodToGoBack,
      UserName,
      onClickUserNameSetButton,
    } = this.props;

    let buttonPressHeader: JSX.Element;

    if (isButtonPressed) {
      buttonPressHeader = <h1>Login Page</h1>;
    } else {
      buttonPressHeader = <h1>User Profile</h1>;
    }

    return (
      <Grid>
        <Grid.Row centered>{buttonPressHeader}</Grid.Row>
        <Grid.Row centered>
          {isButtonPressed ? (
            <ProfileCard userName={UserName} />
          ) : (
            <h1>Please Login</h1>
          )}
        </Grid.Row>
        <Grid.Row centered>
          <SpecialButton
            callbackMethod={callbackMethod}
            isButtonPressed={isButtonPressed}
            callbackMethodToGoBack={callbackMethodToGoBack}
          />
        </Grid.Row>

        <Grid.Row centered>
          <SpecialInputSection
            onClickUserNameSetButton={onClickUserNameSetButton}
          />
        </Grid.Row>
      </Grid>
    );
  }
}
