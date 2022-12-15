import { useEffect } from 'react';
import classes from './BlogPosts.module.css';
import { useState } from 'react';

function BlogPosts() {
    
    const [posts, setposts] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            res=>{return res.json();}
        ).then(data=>{setposts(data);
            //console.log(data);
        });
        
    },[]);

    // console.log(posts)
    //classes={classes.list}

  return (
    
  <ul classes={classes.posts}  >
                {/* {console.log(posts)} */}
  {
      posts.map(
          post => (
              <li  >
                      <p>{post.title}</p>
              </li>
          )
      )

  }




</ul>
    
  ); 
  
}

export default BlogPosts;
