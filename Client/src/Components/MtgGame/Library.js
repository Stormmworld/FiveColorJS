import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import '../../StyleSheets/Library.css';

const Library = (props) => {
    return (
        <Col className="edgeless card-size library-image" xs={12} sm={12} md={12} lg={12}>
            ({props.cards ? props.cards.length : '0'}) Cards
        </Col>
    );
}

export default Library;