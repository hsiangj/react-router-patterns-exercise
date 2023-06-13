import {useParams, Link} from 'react-router-dom';

const Color = () => {
  const {color} = useParams();
  console.log(color)
  return (
    <div>
      <h1>THIS IS {color.toUpperCase()}</h1>
      <Link to="/colors">Go Back</Link>
    </div>

  )



}

export default Color;