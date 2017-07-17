import React, {Component} from 'react';

class AnswerBox extends Component {
	render() {
		return(
			<div className="answer-box">{this.props.answerValue}</div>
		);
	}
}

export default AnswerBox;