import React, { useState } from 'react'
import { categories, faqData } from '../faqdata';
// import faqData from '../faqdata';    //Single import

export default function HomePage() {

    // const [] = useState(categories);

    const [currentIndex, setCurrentIndex] = useState(2);

    const faqQuestion = (i) => {
        setCurrentIndex(i);
    }
    return (
        <>
            <div className="freqently_questions">
                <div className="frequently_heading">
                    <h1>Frequently Questions</h1>
                </div>

                <div className="outer_questions">

                    {
                        faqData.map((item, index) => {
                            return(
                                <div className="question_answer" key={index}>
                                    <div className="question" onClick={ () => faqQuestion(index) }>
                                        <div>{ item.question }</div>
                                        <div className="icon">{ currentIndex == index ? '-' : '+' }</div>
                                    </div>
                                    <div className={ currentIndex == index ? 'answer' : 'answer d-none' }>
                                        { item.answer }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
