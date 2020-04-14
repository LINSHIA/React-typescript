import * as React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export interface IProfileCardProps {
  userName: string;
}

export default class ProfileCard extends React.Component<IProfileCardProps> {
  public render() {
    const { userName } = this.props;
    return (
      <React.Fragment>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{userName}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2000</span>
            </Card.Meta>
            <Card.Description>
              Michael is a student living in Edmonton.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            500 Friends
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
