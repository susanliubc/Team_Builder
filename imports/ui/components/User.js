import React from 'react';

const User = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className='card-text'>{this.props.firstName} {this.props.lastName} {this.props.email}</div>
            </div>
        </div>
    )
};

export default User;