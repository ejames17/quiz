import React, {Component} from 'react';
import {Row, Col, FormGroup, Radio, ControlLabel } from 'react-bootstrap';

class Question extends Component {
    componentDidMount(){
        console.log('this.props is ', this.props);
    }
    
    render () {
        return (
            <Row className="show-grid">
                <Col xs={12}>
                    <form>
                        <FormGroup controlId="questionForm">
                            <ControlLabel> {this.props.question} </ControlLabel>


                            { Object.keys(this.props.choices).map(key => {
                                return <Radio onClick={    this.props.onSelectAnswer(key)}  key={key} name="choices" >
                                    <b>{key}.</b> {this.props.choices[key]}
                                </Radio>
                            })}

                        </FormGroup>
                    </form>
                </Col>
            </Row>
        )
    }
}

export default Question;