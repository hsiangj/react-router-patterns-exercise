import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './ColorForm.css';

const ColorForm = ({addColor}) => {
  const initialState = {
    colorName: null,
    colorHex: null
  }
  const [colorData, setColorData] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setColorData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [colorData.colorName]: colorData.colorHex })
    setColorData(initialState);
    history.push('/colors');
  }


  return (
    <div className='ColorForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor = "colorName">Name your color</label>
          <input 
            id = "colorName"
            type = "text"
            name = "colorName"
            value = {colorData.colorName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor = "colorHex">Pick a color</label>
          <input 
            id = "colorHex"
            type = "color"
            name = "colorHex"
            value = {colorData.colorHex}
            onChange={handleChange}
          />
        </div>
        <button>Add Color</button>
      </form>
    </div>
    

  )
}

export default ColorForm;