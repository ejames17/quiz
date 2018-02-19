import React, {Component} from 'react';
import {Row, Col, FormControl, ControlLabel, Form, FormGroup, Button} from 'react-bootstrap';

class NewQuestion extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            disabled: true,
            formData: {
                question: '',
                choices: {
                    a: '',
                    b: '',
                    c: '',
                    d: ''
                },
                answerKey: ''
            }
        }
    }
    handleChange(e) {
        console.log('handling change ', e.target.id);
       // this.setState

        switch(e.target.id){
            case 'question':
                this.setState({
                    formData: {
                        ...this.state.formData,
                        question: e.target.value
                    }
                });

                break;

            case 'choiceA':
                this.setState({
                    formData: {
                        ...this.state.formData,
                        choices: {
                            ...this.state.formData.choices,
                            a: e.target.value
                        }
                    }
                });

                break;



            case 'choiceB':
                this.setState({
                    formData: {
                        ...this.state.formData,
                        choices: {
                            ...this.state.formData.choices,
                            b: e.target.value
                        }
                    }
                });

                break;


            case 'choiceC':
                this.setState({
                    formData: {
                        ...this.state.formData,
                        choices: {
                            ...this.state.formData.choices,
                            c: e.target.value
                        }
                    }
                });

                break;

            case 'choiceD':
                this.setState({
                    formData: {
                        ...this.state.formData,
                        choices: {
                            ...this.state.formData.choices,
                            d: e.target.value
                        }
                    }
                });

                break;


            case 'answerKey':
                this.setState({
                    formData: {
                        ...this.state.formData,
                        answerKey: e.target.value
                    }
                });

                break;

            default:
            break;
        }
        const choices = Object.values(this.state.formData.choices);
        const vals = Object.values(this.state.formData);
        console.log('vals are ',vals, ' choices are ', choices);
        (choices.every(choice => choice) && vals.every(val => val )) ? this.setState({
            ...this.state.formData,
            disabled:false

        }) :
            this.setState({
                ...this.state.formData,
                disabled:true

            })

    }
    handleClick(e) {

        this.props.addQuestion(this.state.formData);
        this.setState({
            formData: {
                question: '',
                choices: {
                    a: '',
                    b: '',
                    c: '',
                    d: ''
                },
                answerKey: ''
            }

        });

    }
    render () {
        return (
            <Row className="show-grid">
                <Col xs={12} md={8}>


                    <Form horizontal>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Question
                            </Col>
                            <Col sm={10}>
                                <FormControl id="question" value={this.state.formData.question} onChange={this.handleChange.bind(this)} type="text" placeholder="Enter Quiz Question" />
                            </Col>
                        </FormGroup>

                        <hr/>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Option A
                            </Col>
                            <Col sm={10}>
                                <FormControl value={this.state.formData.choices.a}  onChange={this.handleChange.bind(this)}  id="choiceA" type="text" placeholder="Enter Choice A " />
                            </Col>


                            <Col componentClass={ControlLabel} sm={2}>
                                Option B
                            </Col>
                            <Col sm={10}>
                                <FormControl value={this.state.formData.choices.b}  onChange={this.handleChange.bind(this)}  id="choiceB" type="text" placeholder="Enter Choice B " />
                            </Col>



                            <Col componentClass={ControlLabel} sm={2}>
                                Option C
                            </Col>

                            <Col sm={10}>
                                <FormControl value={this.state.formData.choices.c} onChange={this.handleChange.bind(this)}  id="choiceC" type="text" placeholder="Enter Choice C " />
                            </Col>



                            <Col  componentClass={ControlLabel} sm={2}>
                                Option D
                            </Col>

                            <Col sm={10}>
                                <FormControl id="choiceD" value={this.state.formData.choices.d} onChange={this.handleChange.bind(this)}  type="text" placeholder="Enter Choice D " />
                            </Col>





                        </FormGroup>


                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Correct Answer
                            </Col>
                            <Col sm={10}>
                                <FormControl id="answerKey" value={this.state.formData.answerKey} onChange={this.handleChange.bind(this)} type="text" placeholder="Enter Correct Option" />
                            </Col>
                        </FormGroup>


                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="button" onClick={this.handleClick.bind(this)} disabled={this.state.disabled} bsStyle="success">Add Question</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default NewQuestion;