import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`} className="block max-w-sm">
      <div className="bg-neutral-primary-soft p-6 border border-default hover:border-green-400 rounded-lg shadow-xs">
        <img
          className="rounded-base w-full h-50"
          src={`${blog.image}`}
          alt={blog.title}
        />
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
          {blog.title}
        </h5>
        <p className="mb-6 text-body">{blog.description}</p>
        <span className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium rounded-sm hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
          Read more
          <svg
            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default Cards