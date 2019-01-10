import React, { Component } from 'react';
import _ from 'lodash';
import { Container, Card, Header, Form, Search, Label, Dropdown, Loader, Button } from 'semantic-ui-react';
import { Users } from '../../api/user/user.js';
import { Teams } from '../../api/team/team.js';
import Team from '../components/Team.js';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { withTracker } from 'meteor/react-meteor-data';
import 'semantic-ui-css/semantic.min.css';

//Provide search filter options for the dropdown menu
const searchOptions = [
    { text: 'First Name',
      value: 'firstName'},
    { text: 'Last Name',
      value: 'lastName'}
]
class TeamPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName: '',
            memberName: ''
        };
    } 
    componentWillMount() {
        this.resetComponent();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    /*
    handleMemberChange = (e, index) => {
        let members = this.state.memberName.slice();
        members[index] = e.target.value;
        this.setState({
            memberName: members
        })
    } */

    //On successful submit, insert data to database
    handleSubmit = (e) => {
        e.preventDefault();
        const { teamName, memberName } = this.state;
        const owner = Meteor.user().username;
        Teams.insert({ teamName, memberName, owner }, this.insertCallback);

    };

    //Notify the user of the results of submission. If successful, clear the form
    insertCallback = (error) => {
        if(error) {
            Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` })
        } else {
            Bert.alert({ type: 'success', message: 'Add succeed'});
            this.setState({
                teamName: '',
                memberName: []
            })
        }
    };
    
    // Sets the value of this.state.filter to the value selected in the dropdown menu
    handleDropdownChange = (e, { value }) => this.setState({ filter: value })

    // Resets the search-dependent values of this.state
    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    // Sets this.state.value to the value obtained from the search function
    handleResultSelect = (e, { result }) => this.setState({ value: result.value });

    // Sets this.state.results to the profile value that matches the search text
    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        // Search filter is set to "First Name"
        if (this.state.filter === 'firstName') {
        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.firstName);

            this.setState({
            isLoading: false,
            results: _.filter(this.props.users, isMatch),
            });
        }, 300);
        }

        // Search filter is set to "Last Name"
        else if (this.state.filter === 'lastName') {
        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.lastName);

            this.setState({
            isLoading: false,
            results: _.filter(this.props.users, isMatch),
            });
        }, 300);
        }
    };
        
    /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
    render() {  
        const { loading } = this.props;
        console.log(this.props);
        if(!loading) { 
            return this.renderPage();
        } else {
            return (<Loader>Getting data</Loader>);
        }
    }
    /** Render the page once subscriptions have been received. */
    renderPage() { 
        const resultRenderer = ({ firstName, lastName }) => 
            <Label color='blue' content={firstName + ' ' + lastName} tag/>
        const { isLoading, value, results } = this.state;
        return (
            <Container>
                <Card.Group>
                    {this.props.teams.map((team, index) => <Team key={index} team={team} />)}
                </Card.Group>
                <br />
                <Dropdown placeholder='Filter Search'
                    selection
                    options={searchOptions}
                    onChange={this.handleDropdownChange}/>
                <br />
                
                <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    results={results}
                    value={value}
                    resultRenderer={resultRenderer}
                    {...this.props}
                />
                <Header as="h2" textAlign="center" inverted>Create a team</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label htmlFor="teamName">Add Team Name </label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            placeholder="Please enter team name"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="memberName">Add Member Name </label>
                        <input
                            type="text"
                            id="memberName"
                            name="memberName"
                            placeholder="Please enter member name"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Button primary>Submit</Button>
                </Form>
            </Container>
        )  
    }
}

//withTracker connect Meteor data with to react component
export default withTracker(() => {
    //Get access to Users and Teams data
    const subscription = Meteor.subscribe('Users');
    const subscription2 = Meteor.subscribe('Teams');
    return { 
        users: Users.find({}).fetch(),
        teams: Teams.find({}).fetch(),
        loading: (!subscription.ready() && !subscription2.ready())
    };
})(TeamPage);