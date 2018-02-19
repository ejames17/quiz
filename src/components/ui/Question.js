import React, {Component} from 'react';
import {Row, Col, FormGroup, Radio, ControlLabel} from 'react-bootstrap';

class Question extends Component {
    render () {
        return (
            <Row className="show-grid">
                <Col xs={12}>
                    <form>
                        <FormGroup controlId="questionForm"  onChange={this.clearInput}  >
                            <ControlLabel> {this.props.question} </ControlLabel>


                            { Object.keys(this.props.choices).map(key => {
                                return <Radio checked={false}  onClick={    this.props.onSelectAnswer } value={JSON.stringify({questionIndex: this.props.questionIndex, answer: key})}  key={key} name="choices" >
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