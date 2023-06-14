import Routes from "./Routes";
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

it('renders /colors', () => {
  render(
    <MemoryRouter initialEntries={["/colors"]}>
      <Routes />
    </MemoryRouter>
  )
});

it('shows default color list and welcome', () => {
  const {getByText, queryByText} = render(
    <MemoryRouter initialEntries={["/colors"]}>
      <Routes />
    </MemoryRouter>
  )
  expect(getByText('Welcome to the color factory')).toBeInTheDocument();
  expect(getByText('blue')).toBeInTheDocument();
  expect(queryByText('green')).toBeNull();
});

it('only renders \'blue\' on /colors/:color', () => {
  const {getByText, queryByText} = render(
    <MemoryRouter initialEntries={["/colors/blue"]}>
      <Routes />
    </MemoryRouter>
  )
  expect(getByText('THIS IS BLUE')).toBeInTheDocument();
  expect(queryByText('green')).toBeNull();
})

it('renders /colors on a non-existing route', () => {
  const {getByText, queryByText} = render(
    <MemoryRouter initialEntries={["/nope"]}>
      <Routes />
    </MemoryRouter>
  )
  expect(getByText('Welcome to the color factory')).toBeInTheDocument();
  expect(getByText('blue')).toBeInTheDocument();
})

it('renders /colors/new', () => {
  const {getByLabelText, queryByText} = render(
    <MemoryRouter initialEntries={["/colors/new"]}>
      <Routes />
    </MemoryRouter>
  )
  const colorNameField = getByLabelText('Name your color');
  const welcomeMsg = queryByText('Welcome to the color factory')
  expect(colorNameField).toBeInTheDocument();
  expect(welcomeMsg).toBeNull();
})