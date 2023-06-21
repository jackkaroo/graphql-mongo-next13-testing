export default function ProjectCard({ project }) {
  const handleClickButton = () => {
    console.log('hi');
  }

  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{project.name}</h5>

            <a className='btn btn-light' href={`/projects/${project.id}`}>
              View
            </a>
            <button className='btn btn-light' onClick={handleClickButton}>
              Click me
            </button>
          </div>
          <p className='small'>
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
