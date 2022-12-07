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
    <div className='bg-black'>
      {
        SchoolData?.length > 0 && SchoolData.map((obj) => (
          <div key={obj._id} onClick={(e) => handleMarksheetPage(e)} className='text-red-200'>
            <p>{obj.School}</p>
            <p>{obj.Year}</p>
            <p>{obj.MarksheetType}</p>
            <p id={obj.MarksheetId}>{obj.Percentage}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Education
