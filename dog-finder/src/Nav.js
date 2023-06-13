import {NavLink} from 'react-router-dom';

const Nav = ({dogs}) => {
  return (
    <nav>
      <NavLink exact to="/dogs">Home</NavLink>
      
      {dogs.map(dog => (
        <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
      ))}
    </nav>
  )
}

export default Nav;