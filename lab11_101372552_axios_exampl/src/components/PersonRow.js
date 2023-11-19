import React, { Component } from 'react'

export default class PersonRow extends Component {
    render() {
        const { person } = this.props;
    return (
        <div style={{display: 'flex', backgroundColor: 'lightblue', marginBottom: '15px'}}>
            <div><img style={{ borderRadius: 100 }} width={200} height={200} src={person.picture.medium} alt="Person" /> <button style={{color: 'blue'}}>Details</button></div>
            <div key={person.login.uuid}>
                <p>Username: {`${person.login.username}`}</p>
                <p>Gender: {`${person.gender}`}</p>
                <p>Time Zone Description: {`${person.location.timezone.description}`}</p>
                <p>Address: {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode} `}</p>
                <p>Email: {`${person.email}`}</p>
                <p>Birth Date and Age: {`${person.dob.date} (${person.dob.age})`}</p>
                <p>Register Date: {`${person.registered.date}`}</p>
                <p>Phone#: {`${person.phone}`}</p>
                <p>Cell#: {`${person.cell}`}</p>
            </div>
      </div>
    )
  }
}
