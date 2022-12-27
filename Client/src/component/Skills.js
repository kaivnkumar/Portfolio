import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProgLangDetail } from '../Store/Slice/getProgLang';

function Skills() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProgLangDetail());
  }, []);

  const { ProgramingLanguage } = useSelector((state) => state.ProgramingInfo);

  return (
    <div className='bg-sky-50 min-h-screen pt-[90px]'>
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
            <div className=''>{data.FrontEndLanguage}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Skills
