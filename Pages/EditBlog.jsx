import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: ""
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target
    setData({
      ...data,
      [name]: name === "image" ? files[0] : value
    })
  }

  const editBlog = async (e) => {
    e.preventDefault();
    const response = await axios.patch(`https://mern3-0-backend-blog.onrender.com/blog/${_id}`, data, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    if (response.status === 200) {
      navigate(`/blog/${_id}`);
    }
    else {
      alert("something went wrong");
    }
  }
  const fetchSingleBlog = async () => {
    const response = await axios.get(`https://mern3-0-backend-blog.onrender.com/blog/${_id}`);
    if (response.status === 200) {
      setData({
        title: response.data.data.title,
        subtitle: response.data.data.subtitle,
        description: response.data.data.description
      });

    }
    else {
      alert("something went wrong");
    }

  }

  useEffect(() => {
    fetchSingleBlog();
  }, [])

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900 m-10 rounded-lg shadow">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-2xl text-center font-bold text-gray-900 dark:text-white"> Edit a Blog</h2>
          <form onSubmit={editBlog} >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title *</label>
                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" onChange={handleChange} value={data.title} />

              </div>
              <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Subtitle *</label>
                <input type="text" name="subtitle" id="subtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" onChange={handleChange} value={data.subtitle} />

              </div>

              <div className="sm:col-span-2">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description *</label>
                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" name="description" onChange={handleChange} value={data.description}></textarea>

              </div>
            </div>

            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Upload Files *</label>
            <div className="flex items-center justify-center w-full">

              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium   border  rounded-lg cursor-pointer hover:bg-neutral-tertiary-medium ">
                <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" /></svg>
                  <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                  {data.image && (
                    <p className="mt-4 text-sm text-green-600">
                      selected {data.image.name}
                    </p>
                  )}
                </div>
                <input id="dropzone-file" name='image' type="file" className="hidden" onChange={handleChange} />

              </label>

            </div>


            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-1 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Save Changes
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default EditBlog