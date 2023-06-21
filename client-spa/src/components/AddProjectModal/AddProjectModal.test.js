import AddProjectModal from "./AddProjectModal";
import {fireEvent, render, screen} from "@testing-library/react";

describe('AddProjectModal', () => {
  beforeEach(() => {
    render(<AddProjectModal />);
  });

  test('renders the new project button', () => {
    const button = screen.getByText('New Project');
    expect(button).toBeInTheDocument();
  });

  test('opens the modal when the new project button is clicked', () => {
    const button = screen.getByText('New Project');
    fireEvent.click(button);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  test('opens the modal when the new project button is clicked', () => {
    const button = screen.getByText('New Project');
    fireEvent.click(button);

    const buttonClose = screen.getByText('Close');
    fireEvent.click(buttonClose);

    const modal = screen.queryByRole('dialog')
    expect(modal).not.toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    const button = screen.getByText('New Project');
    fireEvent.click(button);

    const nameInput = screen.getByLabelText('Name');
    const descriptionInput = screen.getByLabelText('Description');
    const statusSelect = screen.getByLabelText('Status');
    const clientSelect = screen.getByLabelText('Client');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'Project Name' } });
    fireEvent.change(descriptionInput, { target: { value: 'Project Description' } });
    fireEvent.change(statusSelect, { target: { value: 'progress' } });
    fireEvent.change(clientSelect, { target: { value: '1' } });

    fireEvent.click(submitButton);

    // Add your assertions here to check the form submission behavior
  });

  test('displays an error message if any required field is empty', () => {
    const button = screen.getByText('New Project');
    fireEvent.click(button);

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText('Please fill in all fields');
    expect(errorMessage).toBeInTheDocument();
  });
})
