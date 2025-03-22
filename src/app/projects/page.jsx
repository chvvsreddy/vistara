"use client"

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Projects() {
  const [filters, setFilters] = useState({});
  const [projects, setProjects] = useState([
    // Sample projects
    { id: 1, name: 'Project 1', description: 'Description 1', images: ['/img1.jpg', '/img2.jpg'] },
    { id: 2, name: 'Project 2', description: 'Description 2', images: ['/img3.jpg', '/img4.jpg'] },
  ]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProjects = projects.filter(project => {
    // Apply filters here
    return true;
  });

  return (
    <div>
      <h1>Projects</h1>
      <div>
        <input type="text" name="name" placeholder="Project Name" onChange={handleFilterChange} />
        {/* Add more filters as needed */}
      </div>
      <div>
        {filteredProjects.map(project => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <Carousel>
              {project.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${project.name} image ${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}