import {useState} from 'react';
import BlogList from './BlogList';


const Home= () => {
const [blogs, setBlogs]= useState([
  {title: 'LJS Homes', body: 'Making Broken Homes Better', author: 'lisa', id: 1},
  {title: '46 westerleigh', body: '4400 square feet', author: 'lisa', id: 2},
  {title: '342 waxwood', body: '3/1 1100 square feet', author: 'chris', id: 3},
]);
  
  return (
      <div className="home">
        <BlogList blogs={blogs} title="all Homes"/>
        <BlogList blogs={blogs.filter((blog)=> blog.author ==='lisa')} title="Current Project"/>
      </div>
  );
}

export default Home;
