import React, { Component } from 'react'
import './QuestionCard.css'

function QuestionCard(props) {

    const {question, answer, id} = props;
  
    return (
      <div className='question-card-body' id={id}>
        <h4 className='question-card-question'>Q: {question}</h4>
        <h4 className='question-card-answer'>A: {answer}</h4>
      </div>
    )
}

export default QuestionCard
