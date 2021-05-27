import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home= () => {
const [blogs, setBlogs]= useState([
  {title: 'LJS Homes', body: 'Making Broken Homes Better', author: 'lisa', id: 1},
  {title: '46 westerleigh', body: '4400 square feet', author: 'lisa', id: 2},
  {title: '342 waxwood', body: '3/1 1100 square feet', author: 'chris', id: 3},
]);
const [name, setName] = useState('Parker');
const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !==id);
    setBlogs(newBlogs);
}
  useEffect(()=>{
    console.log("use effect ran");
    console.log(name);
  }, [name]);
  return (
      <div className="home">
        <BlogList blogs={blogs} title="all Homes" handleDelete={handleDelete} />
        <button onClick={()=> setName('Abby')}>Change Name</button>
        <p>{name}</p>
    
      </div>
  );
}

export default Home;
