import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = ({dogs}) => {
  return (
    <nav className='Nav'>
      <NavLink exact to="/dogs">Home</NavLink>
      
      {dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
      ))}
    </nav>
  )
}

export default Nav;