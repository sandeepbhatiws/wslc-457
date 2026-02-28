import React from 'react'


export default function CourseHeading({heading, description, children}) {

    console.log(children);
  return (
    <>
      <div className='course_heading'>
        <h1>{ heading }</h1>
        <p>{ description }</p>
      </div>
    </>
  )
}

// export default function CourseHeading(data) {
//     console.log(data);
//   return (
//     <>
//       <div className='course_heading'>
//         <h1>{ data.heading }</h1>
//         <p>{ data.description }</p>
//       </div>
//     </>
//   )
// }
