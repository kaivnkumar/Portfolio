import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getgradeandcer } from "../Store/Slice/getGredeAndCer";
import { getCertificate } from "../Store/Slice/getCertificate";

function Education() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getgradeandcer());

  }, []);

  const { Grade, dataLoading } = useSelector((state) => state.Score);

  const handleCertificatePage = (e) => {
    const ID = e.target.id;

    Grade?.length > 0 && Grade.map((obj) => {
      if (obj.GradeId === ID) {
        dispatch(getCertificate({ ID }))
        Navigate("/education/certificate")
      }
    })
  }

  return (
    <div>
      {
        Grade?.length > 0 && Grade.map((obj) => (
          <div key={obj._id} onClick={(e) => handleCertificatePage(e)} className='flex justify-center'>
            <p id={obj.GradeId}>{obj.Score}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Education
