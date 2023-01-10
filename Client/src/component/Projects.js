import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from '../Store/Slice/getProjects';

function Projects() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const { Projects } = useSelector((state) => state.ProjectInfo);

  return (
    <div className='bg-black text-red-200 min-h-screen pt-[90px]'>
      {
        Projects?.length > 0 && Projects.map((data) => (
          <div key={data._id}>
            <p>Project Title : </p>
            <p>{data.Title}</p>
            <p>Description : </p>
            <p>{data.Description}</p>
            <a href={data.Link}>View Project</a>
          </div>
        ))
      }
    </div>
  )
}

export default Projects
