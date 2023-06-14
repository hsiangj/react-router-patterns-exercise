import {useParams, Link, useHistory} from 'react-router-dom';
import './Color.css';

const Color = ({colors}) => {
  const {color} = useParams();
  let hex = colors[color];
  const history = useHistory();
  if (!hex) {
    history.push('/colors');
  }
  
  return (
    <div className="Color" style = {{backgroundColor: hex}}>
      <h1>THIS IS {color.toUpperCase()}</h1>
      <Link to="/colors">Go Back</Link>
    </div>

  )



}

export default Color;