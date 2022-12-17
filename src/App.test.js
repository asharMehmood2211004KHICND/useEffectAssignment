import { render, screen } from '@testing-library/react';
import App from './App';
import BlogPosts from './components/BlogPosts'; 

import {rest} from "msw";
import {setupServer} from "msw/node";

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

const handlers = [myResponse]

const server =  setupServer(...handlers);


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






