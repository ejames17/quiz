import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Question from './components/containers/QuestionContainer';
import NewQuestion from './components/containers/NewQuestionContainer';
import './App.css';


const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Question}/>
            <Route exact path="/add" component={NewQuestion}/>
        </div>
    </Router>
);
class App extends Component {
  render() {
    return (
        <Router>
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8} className="pull-right">
                    <h2>
                        Please Answer The Following Questions
                    </h2>
                    <hr/>
                    <a href="/add"> ADD New</a> |<a href="/"> Index</a>
                </Col>
                <Routes/>
            </Row>

        </Grid>
        </Router>
    );
  }
}

export default App;

