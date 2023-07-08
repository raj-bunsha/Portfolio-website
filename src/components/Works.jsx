import React from 'react'

function FeaturedProject(props) {
    // Destructure the props object to get the project details
    const { image, title, description, link } = props;
  
    // Return the JSX element for the component
    return (
      <div className="featured-project">
        <img src={image} alt={title} className="w-2/5 object-cover" />
        <div className="w-11/20 ml-8">
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
          <p className="text-lg text-gray-600 mt-2">{description}</p>
          <a href={link} className="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">View Project</a>
        </div>
      </div>
    );
  }

const Works = () => {
  return (
    <div className="works">
        <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
        <p className="text-lg text-gray-600 mt-2">Here are some of my projects I've worked on recently. Want to see more? <a href="" className="text-blue-600 hover:underline">Email me.</a></p>
        
    </div>
  )
}

export default Works