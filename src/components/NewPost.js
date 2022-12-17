import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');
  
  const [submitButton, setsubmitButton] = useState('Save')

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  


  function submitHandler(event) {
    event.preventDefault();
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
    // console.log('submitted')

    setsubmitButton('Saving...')

    const myPost = {
      "userId": 5,
      "id": 6,
      "title": "posting",
      "body": "post"
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(myPost)
    }).then(()=>{
      setsubmitButton('Save')
      console.log('new post added')
  });

  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button onClick={submitHandler} >{submitButton}</button>
    </form>
  );
}

export default NewPost;
