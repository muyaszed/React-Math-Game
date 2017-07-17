import React, { Component } from 'react';

class Quiz extends Component {
	render() {
		return(
			<div className="quiz-question-row">
				<div className="quiz-question-content">
					<p>What is the sum of 2 and 6?</p>
				</div>

				<div className="quiz-answer-content">
					<div clasName="answer-container">
						<div className="answer-box">2</div>
						<div className="answer-box">2</div>
						<div className="answer-box">2</div>
						<div className="answer-box">2</div>
					</div>
				</div>

				<div className="play-again">
					<button className="palya-again-button">Play</button>
				</div>
			</div>
		);
	}
}

export default Quiz;