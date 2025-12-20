import React from 'react'
import Navbar from '../components/Navbar'

const CreateBlog = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900 m-10 rounded-lg shadow">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-2xl text-center font-bold text-gray-900 dark:text-white"> Create a New Blog</h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title *</label>
                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
              </div>
              <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Subtitle *</label>
                <input type="text" name="subtitle" id="subtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
              </div>

              <div className="sm:col-span-2">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description *</label>
                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
            </div>

            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Upload Files *</label>
            <div className="flex items-center justify-center w-full">

              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium   border  rounded-lg cursor-pointer hover:bg-neutral-tertiary-medium ">
                <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" /></svg>
                  <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs">SVG, PNG, JPG or GIF (Max file size 30kb)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-1 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Create Blog
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default CreateBlog