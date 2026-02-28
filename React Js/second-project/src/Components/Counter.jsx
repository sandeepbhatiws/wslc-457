import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Counter() {

    // var count = 5;

    // const decrement = () => {
    //     count--;
    //     console.log(count);
    // }

    // const increment = () => {
    //     count++;
    //     console.log(count);
    // }

    var [count, setCount] = useState(0);

    const decrement = () => {
        count--;
        setCount(count);
        console.log(count);
    }

    const increment = () => {
        count++;
        setCount(count);
        console.log(count);
    }

    return (
        <>
            <Header/>

            <div className='buttons'>
                <button onClick={ decrement }>-</button>
                <button>{ count }</button>
                <button onClick={ increment }>+</button>
            </div>

            <Footer/>
        </>
    )
}
