import {useParams, Link, Redirect} from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({dogs}) => {
  const {name} = useParams();

  function filterDog(dogs){
    if (name) {
      const result = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
      return result;
    }
    return null;
  }
  
  const currentDog = filterDog(dogs);

  if(!currentDog) return <Redirect to="/dogs" />

  return (
    <div className='DogDetails'>
      <h3>Meet {currentDog.name}!</h3>
      <p>Age: {currentDog.age} </p>
      <img src={currentDog.src} alt={`dog ${currentDog.name}`}></img>
      <ul>
        {currentDog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go back</Link>
    </div>
  )
}

export default DogDetails;
