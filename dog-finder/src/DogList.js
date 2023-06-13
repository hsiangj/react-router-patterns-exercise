import { Link } from "react-router-dom/";
import "./DogList.css";

const DogList = ({dogs}) => {
  return (
    <div className="DogList">
      
      <h1>Welcome to pet finder!</h1>
      
      {dogs.map(dog => (
        <div key={dog.name} >
          <img src={dog.src} alt={`dog ${dog.name}`} />
          <h4>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </h4>
        </div>
      ))}
      
    </div>

  )
}

export default DogList;