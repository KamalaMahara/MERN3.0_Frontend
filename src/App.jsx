import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import SingleBlog from '../Pages/SingleBlog';
import CreateBlog from '../Pages/CreateBlog';
import EditBlog from '../Pages/EditBlog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:_id" element={<SingleBlog />}></Route>
        <Route path="/create" element={<CreateBlog />}></Route>
        <Route path="/edit/:_id" element={<EditBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
