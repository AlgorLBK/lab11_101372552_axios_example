import React, { Component } from 'react';
import axios from 'axios';
import PersonRow from './PersonRow';

class PersonList extends Component {
    // Define state default values
    state = {
        persons: []
    };

    // Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        const { persons } = this.state;

        return (
            <div>
                <h1 style={{ backgroundColor: 'green', padding: '10px' }}>Person List</h1>
                <ul>
                    {persons.map(person => (
                        <PersonRow key={person.login.uuid} person={person} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
