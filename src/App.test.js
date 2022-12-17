import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BlogPosts from './components/BlogPosts'; 

import {rest} from "msw";
import {setupServer} from "msw/node";
import NewPost from './components/NewPost';

const myResponse = rest.get("https://jsonplaceholder.typicode.com/posts",(req,res,ctx)=>{
    return res(ctx.json([

      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
    
      
    ]))
});

const postResponse = rest.post("https://jsonplaceholder.typicode.com/posts",(req,res,ctx)=>{
      return res(ctx.json({
        "userId": 5,
        "id": 101,
        "title": "posting",
        "body": "post"
    }))
});


const handlers = [myResponse,postResponse]

const server =  setupServer(...handlers);

beforeAll(()=>server.listen());
afterEach(()=>server.resetHandlers());
afterAll(()=>server.close());

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
 
test('should render post titles',async ()=>{
  render(<BlogPosts/>);
  const blogItem = await screen.findByText("eum et est occaecati");
  expect(blogItem).toBeVisible();
})

test('post', async ()=>{
  render(<NewPost/>)
  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  const postText = await screen.findByText("Posted");
  expect(postText).toBeVisible();
})






