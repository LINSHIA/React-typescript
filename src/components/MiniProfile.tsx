import * as React from "react";
import { IUserProfile } from "../models/userProfile";
import { Grid } from "semantic-ui-react";

export interface IMiniProfileProps {
  user: IUserProfile;
}

export default class MiniProfile extends React.Component<IMiniProfileProps> {
  public render() {
    const { name, favoritePizza, birthday, id } = this.props.user;

    return (
      <Grid>
        <Grid.Row>
          <h1>{name}</h1>
        </Grid.Row>
        <Grid.Row>
          <h1>{id}</h1>
        </Grid.Row>
        <Grid.Row>
          <h1>{favoritePizza}</h1>
        </Grid.Row>
        <Grid.Row>
          <h1>{birthday}</h1>
        </Grid.Row>
      </Grid>
    );
  }
}
