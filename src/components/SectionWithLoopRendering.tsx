import * as React from "react";
import { IUserProfile } from "../models/userProfile";
import MiniProfile from "./MiniProfile";
import { Grid } from "semantic-ui-react";

export interface ISectionWithLoopRenderingProps {}

interface ISectionWithLoopRenderingState {
  userProfiles: IUserProfile[];
}

export default class SectionWithLoopRendering extends React.Component<
  ISectionWithLoopRenderingProps,
  ISectionWithLoopRenderingState
> {
  constructor(props: ISectionWithLoopRenderingProps) {
    super(props);

    this.state = {
      userProfiles: [
        {
          name: "John",
          birthday: "08-08-1990",
          favoritePizza: "pineapples",
          id: 101,
        },
        {
          name: "Jose",
          birthday: "09-09-2000",
          favoritePizza: "pepperoni",
          id: 102,
        },
        {
          name: "Jimmy",
          birthday: "01-01-2001",
          favoritePizza: "cheese",
          id: 103,
        },
      ],
    };
  }

  public render() {
    const { userProfiles } = this.state;

    return (
      <Grid>
        {userProfiles.map((individualProfile) => (
          <Grid.Row centered>
            <MiniProfile user={individualProfile} />
          </Grid.Row>
        ))}
        ;
      </Grid>
    );
  }
}
