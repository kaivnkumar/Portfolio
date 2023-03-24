import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSkill } from '../Store/Slice/getSkills';

function Skills() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkill());
  }, []);

  const { SkillsInfo } = useSelector((state) => state.TechnicalSkill);

  return (
    <div className='bg-black text-red-200 min-h-screen pt-[90px] pb-10'>
      <div className='ml-[5%] mb-5'>
        <p className='text-lg font-bold text-[20px] text-blue-50'>Technical Skills</p>
      </div>
      <div className='ml-[5%] gap-[150px]'>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>Programing Language</p>
          </div>
          <div className='flex flex-wrap'>
            {
              SkillsInfo?.length > 0 && SkillsInfo.map((data) => (
                (
                  data?.ProgramingLanguage?.length > 0 &&
                  <div key={data._id} className='ml-[3%] mb-1'>
                    <div className="h-20 w-32 rounded-xl bg-gray-900 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl hover:text-black">
                      <div className='flex justify-center'>
                        <img className='h-10 w-10 flex' src={data.ProgramingLanguageImg} alt=''></img>
                      </div>
                      <p className="text-sm ?leading-5 font-semibold text-center">{data.ProgramingLanguage}</p>
                    </div>
                  </div>
                )
              ))
            }
          </div>
        </div>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>FronEnd Development</p>
          </div>
          <div className='flex flex-wrap'>
            {
              SkillsInfo?.length > 0 && SkillsInfo.map((data) => (
                (
                  data?.FrontEnd?.length > 0 &&
                  <div key={data._id} className='ml-[3%] mb-1'>
                    <div className="h-20 w-32 rounded-xl bg-gray-900 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl hover:text-black">
                      <div className='flex justify-center'>
                        <img className='h-10 w-10 flex' src={data.FrontEndImg} alt=''></img>
                      </div>
                      <p className="text-sm ?leading-5 font-semibold text-center">{data.FrontEnd}</p>
                    </div>
                  </div>
                )
              ))
            }
          </div>
        </div>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>BackEnd Development</p>
          </div>
          <div className='flex flex-wrap'>
            {
              SkillsInfo?.length > 0 && SkillsInfo.map((data) => (
                (
                  data?.BackEnd?.length > 0 &&
                  <div key={data._id} className='ml-[3%] mb-1'>
                    <div className="h-20 w-32 rounded-xl bg-gray-900 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl hover:text-black">
                      <div className='flex justify-center'>
                        <img className='h-10 w-10 flex' src={data.BackEndImg} alt=''></img>
                      </div>
                      <p className="text-sm ?leading-5 font-semibold text-center">{data.BackEnd}</p>
                    </div>
                  </div>
                )
              ))
            }
          </div>
        </div>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>Database</p>
          </div>
          <div className='flex flex-wrap'>
            {
              SkillsInfo?.length > 0 && SkillsInfo.map((data) => (
                (
                  data?.Database?.length > 0 &&
                  <div key={data._id} className='ml-[3%] mb-1'>
                    <div className="h-20 w-32 rounded-xl bg-gray-900 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl hover:text-black">
                      <div className='flex justify-center'>
                        <img className='h-10 w-10 flex' src={data.DatabaseImg} alt=''></img>
                      </div>
                      <p className="text-sm ?leading-5 font-semibold text-center">{data.Database}</p>
                    </div>
                  </div>
                )
              ))
            }
          </div>
        </div>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>Software</p>
          </div>
          <div className='flex flex-wrap'>
            {
              SkillsInfo?.length > 0 && SkillsInfo.map((data) => (
                (
                  data?.Software?.length > 0 &&
                  <div key={data._id} className='ml-[3%] mb-1'>
                    <div className="h-20 w-32 rounded-xl bg-gray-900 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl hover:text-black">
                      <div className='flex justify-center'>
                        <img className='h-10 w-10 flex' src={data.SoftwareImg} alt=''></img>
                      </div>
                      <p className="text-sm ?leading-5 font-semibold text-center">{data.Software}</p>
                    </div>
                  </div>
                )
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
