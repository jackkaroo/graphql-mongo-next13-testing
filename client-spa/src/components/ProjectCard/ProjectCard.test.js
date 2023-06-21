import {render, fireEvent, screen} from '@testing-library/react'
import ProjectCard from "./ProjectCard";
import projects from '../../__mocks__/projects'

describe('ProjectCard', () => {
  const project = projects[0];

  test('render project name and status', async () => {
    render(<ProjectCard project={project}/>)

    const projectName = screen.getByText('eCommerce Website');
    const projectStatus = screen.getByText('In Progress');

    expect(projectName).toBeInTheDocument()
    expect(projectStatus).toBeInTheDocument()
  })

  test('render href and click', async () => {
    render(<ProjectCard project={project}/>)

    const href = screen.getByRole('link', {name : 'View'})

    expect(href).toBeInTheDocument()
    expect(href.getAttribute('href')).toBe('/projects/1')
  })

  test('render button and trigger click event', async () => {
    render(<ProjectCard project={project}/>)

    const button = screen.getByRole('button', {name : 'Click me'})
    expect(() => {
      fireEvent.click(button);
    }).not.toThrow();
  })
})


