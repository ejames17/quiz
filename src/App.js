import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import Question from './components/containers/QuestionContainer';
import './App.css';

class App extends Component {
  render() {
    return (
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8} className="pull-right">
                    <h2>
                        Please Answer The Following Questions
                    </h2>
                </Col>
                <Question/>
            </Row>

        </Grid>
    );
  }
}

export default App;
