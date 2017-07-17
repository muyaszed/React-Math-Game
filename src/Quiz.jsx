import React, { Component } from 'react';
import './Quiz.css';
import AnswerBox from './AnswerBox';
import classNames from 'classnames';

class Quiz extends Component {
	constructor(props) {
		super(props);
		
		let riddle = this.playGame();
		let correct = false;
		let gameOver = false;

		this.state = {
			riddle,
			correct,
			gameOver

		}

		this.renderAnswers = this.renderAnswers.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
		this.playAgain = this.playAgain.bind(this);
	}

	genRandAnsw(sum) {
		let result = sum;
		let answerArray = [];
		let randNumArr = [];

		while (randNumArr.length <= 3) {
			let randNum = this.randomNum(1,7);
			if(randNumArr.indexOf(randNum) > -1) continue 
			randNumArr.push(randNum);
		}

		for(let i=0; i<3; i++) {
			let addSubtract = this.randomNum(0,1);

			if (addSubtract === 1) {
				result += randNumArr[i];
				answerArray.push(result);
			}else {
				result -= randNumArr[i];
				answerArray.push(result);
			}

		}
		
		
		return answerArray;
	}

	randomNum(min, max) {
		return Math.floor((Math.random()*(max-min)) + 1) + min;
	}

	playGame() {

		let field1 = this.randomNum(10, 50);
		let field2 = this.randomNum(10, 50);
		let result = field1 + field2;
		let answerArray = this.genRandAnsw(result);
		answerArray.push(result);
		answerArray.sort(function(a,b) {
			return 0.5 - Math.random();
		});
		let riddle = {
			answerArray: answerArray,
			field1: field1,
			field2: field2,
			answer: result
		};

		if (this.state && this.state.gameOver) {
			this.setState({riddle: riddle});
		}else {
			return riddle;	
		}

		
	}

	checkAnswer(val) {
		if (val === this.state.riddle.answer) {
			console.log("your answer is correct");
			this.setState({
				correct: true,
				gameOver: true
			});
		}else {
			this.setState({
				correct: false,
				gameOver: true
			});
			console.log("your answer is incorrect");
			
		}
		console.log("answer is "+val);
	}

	renderAnswers() {
		return(
			<div className="answer-container">
				{this.state.riddle.answerArray.map((answer, i) => 
					<AnswerBox answerValue={answer} key={i} checkAnswer={this.checkAnswer}/>	
				)}
				
						
			</div>
		);
	}

	playAgain() {
		this.setState({
			correct: false,
			gameOver: false
		});
		this.playGame();
	}

	renderAnswerMessage() {
		if (this.state.correct) {
			return <h3>Good Job! Please click the button below to play again.</h3>
		}else {
			return <h3>Sorry! Please click the button below to play again.</h3>
		}
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
					<button className="play-again-button" onClick={this.playAgain}>Play Again</button>
				</div>

				<div className={classNames('modal', {'hide': !this.state.gameOver}, {'bg-red': !this.state.riddle.correct}, {'bg-green': this.state.correct})}>
					{this.renderAnswerMessage()}
				</div>
			</div>
		);
	}
}

export default Quiz;