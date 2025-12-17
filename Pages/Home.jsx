import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import axios from 'axios'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog")
    setBlogs(response.data.data)
  }
  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <>
      <Navbar />
      <div className='flex  flex-wrap gap-8 justify-center mt-20 mb-14'>
        {blogs.map((blog, index) => {
          return <Cards key={index} blog={blog} />
        })}
      </div>
    </>
  )
}

export default Home