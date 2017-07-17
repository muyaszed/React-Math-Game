import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
	render() {
		return(
			<div className="quiz-question-row">
				<div className="quiz-question-content">
					<p>What is the sum of 2 and 6?</p>
				</div>

				<div className="quiz-answer-content">
					<div className="answer-container">
						<div className="answer-box">2</div>
						<div className="answer-box">2</div>
						<div className="answer-box">2</div>
						<div className="answer-box">2</div>
					</div>
				</div>

				<div className="play-again">
					<button className="palya-again-button">Play Again</button>
				</div>
			</div>
		);
	}
}

export default Quiz;