consconst Home= () => {

  const handleClick = () => {
    console.log("hello ninjas");
  }
  const handleClickAgain = (name, e) => {
    console.log("hello" + name, e.target);
  }
  return (
      <div className="home">
      <h1>LJS Homes</h1>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain('Lisa', e)}>Click me again</button>
      </div>
  );
}

export default Home;
