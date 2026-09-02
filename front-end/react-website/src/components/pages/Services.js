import React from "react";
import '../../App.css';
import QuestionCard from "../QuestionCard";

export default function Services() {

    const questions = [
        {
            id: 110,
            question: "What is Cougar Jam?",
            answer: "Cougar Jam is SIUE's Game Development Group's annual game jam."
        },
        {
            id: 111,
            question: "Where is Cougar Jam?",
            answer: "The Atrium in SIUE's Engineering Building."
        },
        {
            id: 107,
            question: "When is Cougar Jam?",
            answer: "November 6th - 8th, 2026."
        },
        {
            id: 112,
            question: "How long is the event?",
            answer: "Cougar Jam is a 3 day long jam."
        },
        {
            id: 113,
            question: "Who can participate?",
            answer: "Cougar Jam is open to any college student."
        },
        {
            id: 103,
            question: "Will food be provided?",
            answer: "Yes, we will provide food everyday of the event."
        },
        {
            id: 114,
            question: "Are we allowed to stay overnight?",
            answer: "Yes, we encourage people to bring sleeping supplies."
        },
        {
            id: 115,
            question: "Do I have to stay overnight?",
            answer: "No, Students are free to come and go."
        },
        {
            id: 116,
            question: "Is there free parking?",
            answer: "Yes, there is free parking all weekend."
        },
        {
            id: 117,
            question: "Where can I find more information?",
            answer: "The event discord is where announcements will be posted."
        },

    ];



    return( <div className="services">
        
                <h1 className="services-title">Frequently Asked Questions</h1>
                <div className="services-question-body">
                    {questions.map((item,index) => (
                        <QuestionCard key={item.id} question={item.question} answer={item.answer}/>
                    ))}
                </div>
        {/* </div> */}
            

        </div>
        
    )
}