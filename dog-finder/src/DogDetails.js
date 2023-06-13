import {useParams} from 'react-router-dom';


const DogDetails = () => {
  const {name} = useParams();
  return (
    <div>
      <h3>Meet {name}!</h3>
      <p>Age: </p>
      <img ></img>

    </div>
  )
}

export default DogDetails;