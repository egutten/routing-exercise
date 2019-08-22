import React, { Component } from 'react';

class Course extends Component {
    render () {
        const title = this.props.match.params.title;
    
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
