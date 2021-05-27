import {useState} from 'react';

const Home= () => {
const [blogs, setBlogs]= useState([
  {title: 'LJS Homes', body: 'Making Broken Homes Better', author: 'lisa', id: 1},
  {title: '46 westerleigh', body: '4400 square feet', author: 'lisa', id: 1},
  {title: '342 waxwood', body: '3/1 1100 square feet', author: 'chris', id: 2},
]);
  
  return (
      <div className="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Design by </p>
            </div>

        ))}
      </div>
  );
}

export default Home;
