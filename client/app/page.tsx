import React, {Suspense} from 'react';
import Clients from '@/app/components/clients/Clients';
import Projects from '@/app/components/projects/Projects';

const Home = () => {
  return (
    <main>
      <div className='d-flex gap-3 mb-4'>
        {/*<AddClientModal />*/}
        {/*<AddProjectModal />*/}
      </div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Projects />
      </Suspense>
      <hr />
      <Suspense fallback={<p>Loading feed...</p>}>
        <Clients />
      </Suspense>
    </main>
  )
}

export default Home;
