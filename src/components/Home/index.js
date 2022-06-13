// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import './index.scss'

const Home = () => {
  // const [letterClass, setLetterClass] = useState('text-animate')

  // const nameArray = ['N', 'a', 'g', 'a', 'r', 'a', 'j', 'u']
  // const jobArray = [
  //   'w',
  //   'e',
  //   'b',
  //   ' ',
  //   'd',
  //   'e',
  //   'v',
  //   'e',
  //   'l',
  //   'o',
  //   'p',
  //   'e',
  //   'r',
  //   '.',
  // ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone ">
          <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> */}
            Hi,
            <br />
            {/* <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> */}
            I'm
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            &nbsp;
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            /> */}
            Nagaraju
            <br />
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /> */}
            Web Developer
          </h1>
          <h2>Front End Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <div>
          <img
            className="sub-logo"
            src="https://avatars.githubusercontent.com/u/99111715?s=400&u=6b286d7e77592d05d676c5f04ce6fe05b6bac403&v=4"
            alt="Nagaraju"
            style={{
              borderRadius: '50%',
              position: 'absolute',
              right: '8%',
              top: '15%',
            }}
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
