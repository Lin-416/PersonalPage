import { Github, Rocket } from 'lucide-react'
import './ProjectContainer.css'

const ProjectContainer = ({ project }: { project: any }) => (
    <div className='project flex flex-col items-center'>

        <h3>{project.name}</h3>

        <p style={{ whiteSpace: "pre-line" }} className='project__description'>{project.description}</p>
        {project.stack && (
            <ul className='project__stack'>
                {project.stack.map((item: any) => (
                    <li key={item.key} className='project__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon flex items-center'
            >
                <Github />
            </a>
        )}

        {project.livePreview && (
            <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <Rocket />
            </a>
        )}
    </div>
)

export default ProjectContainer
