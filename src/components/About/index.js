import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {
    faNodeJs,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import Loader from 'react-loaders'
import './index.scss'

const About = () => {
    
    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass("text-animate-hover")
        },3000)
    }, [])
    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>My name is Subhav Batra, a Computer Science undergraduate at Thapar Institute of Engineering and Technology. Full stack web developer with background in MERN stack.</p>
                <p>Proficient in C/C++ and Python. Solving problems everyday :).</p>
                <p>Seeking to utilize broad educational background with excellent analytical, technical and programming skills to thrive as an entry level software engineer.</p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
                    </div>

                </div>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About