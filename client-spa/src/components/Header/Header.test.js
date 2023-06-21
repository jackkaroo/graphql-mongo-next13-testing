import {render, screen} from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
  it('renders Header', async () => {
    render(<Header />)

    const logoImg = screen.getByAltText('logo');
    const text = screen.getByText('ProjectMgmt');

    expect(logoImg).toBeInTheDocument();
    expect(text).toBeInTheDocument();
   })

})
