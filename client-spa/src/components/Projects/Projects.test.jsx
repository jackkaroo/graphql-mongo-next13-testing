import {render, fireEvent, screen, waitForElementToBeRemoved, queryByText} from '@testing-library/react'
import Projects from "./Projects";
import projects from '../../__mocks__/projects'
import {MockedProvider} from "@apollo/client/testing";
import {GET_PROJECTS} from "../../queries/projectQueries";

const mocks = [
  {
    request: {
      query: GET_PROJECTS,
    },
    result: {
      data: {
        projects,
      },
    },
  },
];

describe('Projects', () => {
  it('renders project when data is loaded', async () => {
    const { getByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Projects />
      </MockedProvider>
    );

    await waitForElementToBeRemoved(() => getByText('Loading...'));

    expect(getByText('eCommerce Website')).toBeInTheDocument();
    expect(getByText('Auction Website')).toBeInTheDocument();
  })

  it('renders error message when error occurs', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_PROJECTS,
        },
        error: new Error('Something went wrong'),
      },
    ];

    const { getByText} = render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Projects />
      </MockedProvider>
    );

    await waitForElementToBeRemoved(() => getByText('Loading...'));

    const projectName = screen.queryByText('eCommerce Website')

    expect(getByText('Something Went Wrong')).toBeInTheDocument();
    expect(projectName).toBeNull();
  })

  it('renders an info label when data is null', async () => {
    const mocksNoData = [
      {
        request: {
          query: GET_PROJECTS,
        },
        result: {
          data: {
            projects: [],
          },
        },
      },
    ];

    const { getByText} = render(
      <MockedProvider mocks={mocksNoData} addTypename={false}>
        <Projects />
      </MockedProvider>
    );

    await waitForElementToBeRemoved(() => getByText('Loading...'));

    const projectName = screen.queryByText('eCommerce Website')

    expect(getByText('No Projects')).toBeInTheDocument();
    expect(projectName).toBeNull();
  })
})


