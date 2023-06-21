import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT, GET_PROJECTS } from '../api'; // import your API constants

import DeleteProjectButton from '../DeleteProjectButton';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@apollo/client', () => ({
  useMutation: jest.fn(),
}));

describe('DeleteProjectButton', () => {
  beforeEach(() => {
    useNavigate.mockClear();
    useMutation.mockClear();
  });

  test('calls deleteProject mutation and navigates to root after successful deletion', () => {
    const projectId = '123';

    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const deleteProjectMock = jest.fn();
    useMutation.mockReturnValue([deleteProjectMock]);

    const { getByText } = render(<DeleteProjectButton projectId={projectId} />);

    const deleteButton = getByText('Delete Project');
    fireEvent.click(deleteButton);

    expect(deleteProjectMock).toHaveBeenCalledTimes(1);
    expect(deleteProjectMock).toHaveBeenCalledWith({
      variables: { id: projectId },
      onCompleted: expect.any(Function),
      refetchQueries: [{ query: GET_PROJECTS }],
    });

    // Simulate the completion of the mutation
    deleteProjectMock.mock.calls[0][1].onCompleted();

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
