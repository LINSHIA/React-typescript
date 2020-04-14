import * as React from "react";
import { Grid } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import SpecialButton from "./SpecialButton";
import SpecialInputSection from "./SpecialInputSection";

export interface IMainSectionProps {
  isButtonPressed: boolean;
  callbackMethod: () => void;
  callbackMethodToGoBack: () => void;
  userName: string;
  onClickUserNameSetButton: (username: string) => void;
}

export default class MainSection extends React.Component<IMainSectionProps> {
  public render() {
    const {
      isButtonPressed,
      callbackMethod,
      callbackMethodToGoBack,
      userName,
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
            <ProfileCard userName={userName} />
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
