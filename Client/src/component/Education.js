import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getSchoolInfo } from "../Store/Slice/getSchoolInfo";
import { getMarksheet } from "../Store/Slice/getMarkSheet";
import { getCollegeInfo } from '../Store/Slice/getCollegeInfo';

function Education() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getSchoolInfo());
    dispatch(getCollegeInfo());
  }, []);

  const { SchoolData } = useSelector((state) => state.SchoolInfo);
  const { CollegeData } = useSelector((state) => state.CollegeInfo);

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
    <div className='bg-black min-h-screenen leading-[40px]'>
      <div>
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
      <div className='text-red-200'>
        {
          CollegeData?.length > 0 && CollegeData.map((obj) => (
            <div key={obj._id}>
              <p className='font-bold text-lg'>{obj.College}</p>
              <p>{obj.Year}</p>
              <p>CGPA : {obj.Cgpa}</p>
              <p>{obj.Sgpa1}</p>
              <p>{obj.Sgpa2}</p>
              <p>{obj.Sgpa3}</p>
              <p>{obj.Sgpa4}</p>
              <p>{obj.Sgpa5}</p>
              <p>{obj.Sgpa6}</p>
              <p>{obj.Sgpa7}</p>
              <p>{obj.Sgpa8}</p>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Education
