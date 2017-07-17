import React, {Component} from 'react';

class AnswerBox extends Component {
	constructor(props) {
		super(props);
		
		this.callParentCheckAnswer = this.callParentCheckAnswer.bind(this);
	}
	callParentCheckAnswer() {
		
		this.props.checkAnswer(this.props.answerValue);
	
	}

	render() {
		return(
			<div className="answer-box" onClick={this.callParentCheckAnswer}>{this.props.answerValue}</div>
		);
	}
}

export default AnswerBox;