import Routes from "./Routes";
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {dogs} from './App';


it('renders without crashing', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <Routes dogs={dogs}/>
    </MemoryRouter>
  );
  //obtain an array of dog names
  const dogNames = dogs.map(dog => dog.name)
  for (const name of dogNames) {
    expect(getByText(name)).toBeInTheDocument();
  };
});

it('only renders Whiskey\'s info', () => {
  const {getByText, queryByText} = render(
    <MemoryRouter initialEntries={["/dogs/whiskey"]}>
      <Routes dogs={dogs}/>
    </MemoryRouter>
  );
  
  const whiskeyInfo = dogs.find(dog => dog.name ==='Whiskey');
  const perryInfo = dogs.find(dog => dog.name === 'Perry');
  
  expect(getByText(whiskeyInfo.facts[0])).toBeInTheDocument();
  expect(queryByText(perryInfo.facts[0])).toBeNull();
});

it('renders /dogs on a non-existing route', () => {
  const {getByText, queryByText} = render(
    <MemoryRouter initialEntries={["/nope"]}>
      <Routes dogs={dogs}/>
    </MemoryRouter>
  );
  
  const dogNames = dogs.map(dog => dog.name)
  for (const name of dogNames) {
    expect(getByText(name)).toBeInTheDocument();
  };
});



