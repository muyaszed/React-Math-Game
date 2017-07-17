import React, { Component } from 'react';
import './Quiz.css';
import AnswerBox from './AnswerBox';

class Quiz extends Component {
	constructor(props) {
		super(props);
		
		let riddle = {
			answerArray: [8,9,10,11],
			field1: Math.floor(Math.random()*10),
			field2: Math.floor(Math.random()*10),
			answer: 10
		};

		this.state = {riddle}

		this.renderAnswers = this.renderAnswers.bind(this);
	}

	renderAnswers() {
		return(
			<div className="answer-container">
				{this.state.riddle.answerArray.map((answer, i) => 
					<AnswerBox answerValue={answer} key={i}/>	
				)}
				
						
			</div>
		);
	}

	render() {
		return(
			<div className="quiz-question-row">
				<div className="quiz-question-content">
					<p>What is the sum of {this.state.riddle.field1} and {this.state.riddle.field2}?</p>
				</div>

				<div className="quiz-answer-content">
					
					{this.renderAnswers()}
					
				</div>

				<div className="play-again">
					<button className="palya-again-button">Play Again</button>
				</div>
			</div>
		);
	}
}

export default Quiz;