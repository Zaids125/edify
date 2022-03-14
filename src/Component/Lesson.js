import React, {useState} from 'react';
import Player from "react-player";
import RandomVid from './videoTest.mp4'
import './Lesson.css'
import {LessonData  } from './LessonData';

function Lesson() {
    const [lessons, setLesson]= useState('');
    

  return (
    <div className='workspace'>
            
            {/* <div className='workspace'>  */}
                <p className='title'><strong color='red'>Section 1: Algorithm:</strong> Introduction to algorithm</p>
                <div className='main'>
                <div className='primary-content'>
                    <Player width='712px' height='400px' className='player' controls url={RandomVid}/>
                    <h3 className='head3'>Overview</h3>
                    <p className='overview'> 
                        The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.  
                    </p>
                </div>
            <div className='content'>
                <h2>Course content</h2>
                <div className='divider'></div>
                <h3>section 1: Algorithms</h3>
                <p> Intoduction to algorithm
                    How to write an algorithm
                    types of algorithm
                </p>
            </div>
            {/* <h2>Course content</h2> */}
            <div></div>
            <div className='Select'>
		 		
	 		 		
            </div>
            
            </div>
        
    </div>
  )
}

export default Lesson