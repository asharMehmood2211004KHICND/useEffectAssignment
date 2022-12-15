import logo from './logo.svg';
import './App.css';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';


function App() {
  return (
    <div className="App">
      <NewPost />
      <BlogPosts />
    </div>
  );
}

export default App;
