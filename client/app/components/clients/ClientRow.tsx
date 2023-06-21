import React, {FC} from 'react';
import {FaTrash} from 'react-icons/fa';
import {useRouter} from 'next/router';
import {getClient} from '@/lib/apollo-client';
import {GET_CLIENTS} from '@/queries/client';
import {DELETE_CLIENT} from '@/mutations/client';

type Props = {
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
  }
}

async function fetchDeleteClients(id: string) {
  const { data } = await getClient().query({
    query: DELETE_CLIENT,
    variables: {id}
  });
  return data;
}

const ClientRow: FC<Props> = ({ client })  => {


  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={() => fetchDeleteClients(client.id)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export default ClientRow;
