import React, { Component } from 'react';
import '../StyleSheets/Health.css';

const Health = () => {
    return (
        <div className="align-center">
            {this.props.Hitpoints}
        </div>
    );
}
export default Health;