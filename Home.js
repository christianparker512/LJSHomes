import {useState} from 'react';

const Home= () => {
const [name, setName]= useState('Chris');
const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('Lisa')
    setAge(30);
  }
  // const handleClickAgain = (name, e) => {
  //   console.log("hello" + name, e.target);
  // }
  return (
      <div className="home">
      <h1>LJS Homes</h1>
      <p>{name}</p>
        <button onClick={handleClick}>Click me</button>
        {/* <button onClick={(e) => handleClickAgain('Lisa', e)}>Click me again</button> */}
      </div>
  );
}

export default Home;
