import React, { useState } from 'react'
import CourseHeading from './CourseHeading'
import CourseCard from './CourseCard'
import { backendCourse, frontendCourse } from '../courses';

export default function Courses() {

    var description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates praesentium eligendi facere vero hic a quas, quos at iste eum molestiae mollitia aut sunt aspernatur. Accusamus sequi nemo aliquam.';

    const [fronendCourses, setFrontendCourses] = useState(frontendCourse);
    const [backendCourses, setBackendCourses] = useState(backendCourse);

    return (
        <>
            <div className='outer_courses'>
                <CourseHeading heading='Frontend Courses' description={description} />

                <div className='inner_courses'>
                    {
                        fronendCourses.map((v, i) => {
                            return(
                                <CourseCard key={i} item={v} />
                            )
                        })
                    }
                </div>
            </div>

            <div className='outer_courses'>
                <CourseHeading heading='Backend Courses' description={description}>
                    {description}
                </CourseHeading>

                <div className='inner_courses'>
                    {
                        backendCourses.map((v, i) => {
                            return(
                                <CourseCard key={i} item={v} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
