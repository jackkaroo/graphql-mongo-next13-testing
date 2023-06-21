import React, {FC} from 'react';
import {getClient} from '@/lib/apollo-client';
import {GET_CLIENTS} from '@/queries/client';
import ClientRow from '@/app/components/clients/ClientRow';

async function fetchGetClients() {
  const { data } = await getClient().query({
    query: GET_CLIENTS,
  });
  return data;
}

const Clients: FC = async () => {
  const { clients } = await fetchGetClients();

  return (
    <table className='table table-hover mt-3'>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {clients.map((client: any) => (
        <ClientRow key={client.id} client={client} />
      ))}
      </tbody>
    </table>
  );
};

export default Clients;
