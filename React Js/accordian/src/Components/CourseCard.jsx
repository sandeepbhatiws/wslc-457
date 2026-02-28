import React from 'react'

export default function CourseCard({item}) {

  return (
    <>
      <div className='courses'>
        <div>
            <img src='https://deen3evddmddt.cloudfront.net/images/home-images/learn-web-dev.svg'/>
        </div>
        <div>
            <h2>{ item.title }</h2>
            <p>{item.description}</p>
        </div>
      </div>
    </>
  )
}
