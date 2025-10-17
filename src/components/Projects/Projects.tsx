import { projects } from '../../profile'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import uniqid from 'uniqid';

const Projects = () => {
    if (!projects.length) return null

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects__grid'>
                {projects.map((project: any) => (
                    <ProjectContainer key={uniqid()} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
