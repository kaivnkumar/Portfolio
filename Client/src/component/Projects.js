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
    <div className='bg-black text-red-200 min-h-screen pt-[90px] pl-14 pb-10'>
      <div className='flex sm:flex-col'>
        <div>
          <p className='text-xl font-bold flex justify-center pb-5'>Projects</p>
          <div className='flex flex-wrap gap-x-20 gap-y-10 grid-cols-2'>
            {
              Projects?.length > 0 && Projects.map((data) => {
                const base64String = btoa(
                  new Uint8Array(data?.ProjectPic?.data?.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                )
                return (
                  <div key={data._id}>
                    <div className='w-[400px]'>
                      <div className="group rounded-md bg-white w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-700">
                        <div>
                          <div className="w-[400px] h-[260px] rounded-t-md" >
                            <img src={`data:image/png;base64,${base64String}`} className='h-full w-full group-hover:opacity-25 rounded-t-md'></img>
                          </div>
                          <div className="py-8 px-4 bg-white h-[150px] w-full rounded-b-md fd-cl group-hover:opacity-25">
                            <span className="block text-lg text-gray-800 font-bold tracking-wide">{data.Title}</span>
                            <span className="block text-gray-600 text-sm">{data.Description}</span>
                          </div>
                        </div>
                        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                          <div className="pt-8 text-center">
                            <button className="text-center rounded-lg p-4 bg-white text-gray-700 font-bold text-lg"><a href={data.GitLink}>View Project</a></button>
                          </div>
                          <div className="pt-8 text-center">
                            <button className="text-center rounded-lg p-4 bg-white text-gray-700 font-bold text-lg"><a href={data.GitLink}>View Github</a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='min-h-screen pr-12'>
          <div className='h-full w-2 bg-slate-800 flex items-center justify-center rounded-lg'></div>
        </div>
        <div className='w-7/12 pr-7'>
          <p className='text-xl font-bold flex justify-center pb-5'>GitHub</p>
          <div className='group pb-3 flex w-52 hover:w-96'>
            <a href='https://github.com/kavinkumars21/' className='text-base font-bold'>UserName : kavinkumars21</a>
            <p className='px-2 text-sm hidden group-hover:inline-block bg-slate-200 text-gray-700'>Click to view profile</p>
          </div>
          <div className='grid gap-y-5'>
            <img src="https://github-profile-trophy.vercel.app/?username=kavinkumars21&theme=radical&no-frame=false&no-bg=false&margin-w=4" alt="kavinkumars21" />
            <img src="https://github-readme-stats.vercel.app/api?username=kavinkumars21&theme=blue-green&hide_border=false&include_all_commits=false&count_private=false" alt="kavinkumars21" />
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=kavinkumars21&theme=blue-green&hide_border=false" alt="kavinkumars21" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kavinkumars21&theme=blue-green&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="kavinkumars21"/>
            <img src="https://github-readme-activity-graph.cyclic.app/graph?username=kavinkumars21&bg_color=040f0f&color=22c55e&line=ec4899&point=22c55e&area_color=22272e&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph" alt="kavinkumars21" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
