const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LJS Homes</h1>
      <div classNames="links">
        <a href="/">Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: 'blue',
          borderRadius: '8px'
        }}>New House</a>
      </div>
    </nav>
  );

}
export default Navbar;
