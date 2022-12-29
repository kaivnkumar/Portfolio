import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProgLangDetail } from '../Store/Slice/getProgLang';
import { getdevSkill } from '../Store/Slice/getDevSkills';

function Skills() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProgLangDetail());
    dispatch(getdevSkill());
  }, []);

  const { ProgramingLanguage } = useSelector((state) => state.ProgramingInfo);
  const { DevSkills } = useSelector((state) => state.DevSkillInfo);
  
  return (
    <div className='bg-sky-50 min-h-screen pt-[90px]'>
      <div>
        <div className='ml-[5%] mb-5'>
          <p className='font-bold'>Programing Skills</p>
        </div>
        <div className='flex flex-wrap'>
          {
            ProgramingLanguage?.length > 0 && ProgramingLanguage.map((data) => (
              <div key={data._id} className='ml-[5%] mb-[20px]'>
                <div className=''>
                  <p>{data.Language}</p>
                </div>
                <div className='w-[390px]'>
                  <div style={{ marginLeft: `${data.Percentage}` }}>
                    <div className="bg-contain bg-no-repeat bg-background text-[13px] text-red-100 font-bold h-[45px] pl-[9px] pt-[8px]">
                      {data.Percentage}
                    </div>
                  </div>
                </div>
                <div className='bg-neutral-300 border-2 h-[10px] w-[400px]'>
                  <div className='bg-yellow-600 h-full' style={{ width: `${data.Percentage}` }}></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='ml-[5%] mb-5'>
        <p className='font-bold'>Development Skills</p>
      </div>
      <div className='ml-[5%] flex flex-wrap gap-[150px]'>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>FronEnd Development</p>
          </div>
          {
            DevSkills?.length > 0 && DevSkills.map((data) => (
              <div key={data._id} className='ml-[3%] mb-1'>
                <p>{data.FrontEnd}</p>
              </div>
            ))
          }
        </div>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>BackEnd Development</p>
          </div>
          {
            DevSkills?.length > 0 && DevSkills.map((data) => (
              <div key={data._id} className='ml-[3%] mb-1'>
                <p>{data.BackEnd}</p>
              </div>
            ))
          }
        </div>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>Database</p>
          </div>
          {
            DevSkills?.length > 0 && DevSkills.map((data) => (
              <div key={data._id} className='ml-[3%] mb-1'>
                <p>{data.Database}</p>
              </div>
            ))
          }
        </div>
        <div>
          <div className='mb-3'>
            <p className='font-bold'>Software</p>
          </div>
          {
            DevSkills?.length > 0 && DevSkills.map((data) => (
              <div key={data._id} className='ml-[3%] mb-1'>
                <p>{data.Software}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
