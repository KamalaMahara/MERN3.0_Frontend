import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlogs] = useState({});

  const fetchSingleBlog = async () => {
    const response = await axios.get(`http://localhost:3000/blog/${_id}`);
    setBlogs(response.data.data);
    console.log(response);
  }

  useEffect(() => {
    fetchSingleBlog();
  }, [])

  const deleteBlog = async () => {
    const response = await axios.delete(`http://localhost:3000/blog/${_id}`)
    console.log(response.status);
    if (response.status === 200) {
      alert("Blog Deleted Successfully");
      navigate("/");

    }
    else {
      alert(" kuch to gadbad hai ");
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-800 py-8 m-10 rounded-lg shadow">
        <div className="flex justify-end gap-2 mb-4 mx-8">
          <a href="/"
            className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-blue-600 hover:text-white ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
              </path>
            </svg>
            <span className="ml-1 font-bold text-lg">Back</span>
          </a>

        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img className="w-full h-full object-cover" src={`${blog.image}`} />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link to={`/edit/${blog._id}`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit Blog</button>
                  </Link>
                </div>

                <div className="w-1/3 px-2">
                  <button className="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 " onClick={deleteBlog}>Delete Blog</button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {blog.subtitle}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {blog.description}
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleBlog