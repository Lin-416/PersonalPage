import { about } from '../../profile'
import './About.css'

const About = () => {
    const { name, role, description, resume, picture } = about

    return (
        <div className='about center'>
            <div className='about__header'>
                {picture && (
                    <img
                        src={
                            picture.startsWith('http')
                                ? picture
                                : `images/${picture}`
                        }
                        alt={name}
                        className='about__picture hidden md:flex'
                    />
                )}

                <div className='about__intro items-center md:items-start'>
                    {name && (
                        <h1>
                            Hi, I am
                            <span className='about__name'>
                                {" " + name}.
                            </span>
                        </h1>
                    )}

                    {role && <h2 className='about__role'>A {role}.</h2>}
                    <p className='about__desc'>{description && description}</p>
                </div>
            </div>

            <div className='about__contact center'>
                {resume && (
                    <a href={resume}>
                        <span className='btn btn--outline'>
                            My Github
                        </span>
                    </a>
                )}
            </div>
        </div >
    )
}

export default About
