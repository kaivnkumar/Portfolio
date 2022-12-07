import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getSchoolInfo } from "../Store/Slice/getSchoolInfo";
import { getMarksheet } from "../Store/Slice/getMarkSheet";

function Education() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getSchoolInfo());

  }, []);

  const { SchoolData, dataLoading } = useSelector((state) => state.SchoolInfo);

  const handleMarksheetPage = (e) => {
    const ID = e.target.id;

    SchoolData?.length > 0 && SchoolData.map((obj) => {
      if (obj.MarksheetId === ID) {
        dispatch(getMarksheet({ ID }))
        Navigate("/education/marksheet")
      }
    })
  }

  return (
    <div className='bg-black h-screen leading-[40px]'>
      {
        SchoolData?.length > 0 && SchoolData.map((obj) => (
          <div key={obj._id} onClick={(e) => handleMarksheetPage(e)} className='text-red-200 mb-[60px]'>
                <p className='font-extrabold'>{obj.MarksheetType}</p>
                <p>{obj.Year}</p>
            <p className='font-bold text-lg'>{obj.School}</p>
            <div className='flex'>
              <p className='cursor-pointer' id={obj.MarksheetId}>Percentage : {obj.Percentage} %</p>
              <p className='text-gray-500 ml-[5%] cursor-pointer' id={obj.MarksheetId}>Marksheet</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Education
