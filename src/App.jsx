import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import SingleBlog from '../Pages/SingleBlog';
import CreateBlog from '../Pages/CreateBlog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:_id" element={<SingleBlog />}></Route>
        <Route path="/create" element={<CreateBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
