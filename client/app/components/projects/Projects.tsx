import React, {FC} from 'react';
import {getClient} from '@/lib/apollo-client';
import {GET_PROJECTS} from '@/queries/project';

async function fetchGetProjects() {
  const { data } = await getClient().query({
    query: GET_PROJECTS,
  });
  return data;
}

const Projects: FC = async () => {
  const { projects } = await fetchGetProjects();

  return (
    <div>
      {projects.map((project: any) => {
        return <div>{project.name}</div>
      })}
    </div>
  );
};

export default Projects;
