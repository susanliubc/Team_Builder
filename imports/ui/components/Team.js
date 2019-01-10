import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Team extends Component {
    render() {
        const { team } = this.props;
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header as='h3'>List Teams</Card.Header>
                    <Card.Description as='h4'>
                        <ul>
                            <li>{team.teamName}: {team.memberName}</li>
                        </ul>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
};

export default Team;