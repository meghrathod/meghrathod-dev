import '../App.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hand from "/hand.webp";
import memoji from "/memoji_new.webp";  


function Home() {
    return (
        <div className='global-body'>
            <div className='background-wrapper'>
                <div className='gradient'></div>
            </div>
            <div>
                <div className="memoji-container">
                    <img src={memoji} alt="megh's memoji" className="memoji" />
                    <img src={hand} alt="megh's memoji" className="hand" />
                </div>

            </div>
            <h1>Hi, I{"'"}m Megh!</h1>
            <div className='tagline'>
                <code>Code, Netflix, Chill, Repeat.</code>

            </div>
            <div className="card">
                <p>
                    Learn more about me or Get in touch!
                </p>
                <div className='reach-icons'>
                    <button >
                        About Me
                    </button>
                    <a href="mailto:me@meghrathod.dev">
                        <button >
                            < FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </a>

                    <a href="https://github.com/meghrathod">
                        <button >
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/meghrathod/">
                        <button >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>
                    </a>


                </div>


            </div>
        </div>
    )
}

export default Home;