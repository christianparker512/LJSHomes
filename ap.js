import logo from './logo.svg';
import './App.css';


function App() {
  const title = 'Welcome to LJS Homes';
  const likes = 50;
  const link ="http://www.hgtv.com"
  
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{2021}</p>
        <p>{"Making broken homes happy"}</p>
        <p>{"Establish 2010"}</p>
        <p>{Math.random()}</p>
        <a href={link}>her site</a>

        
      </div>
    </div>
  );
}
export default App;
