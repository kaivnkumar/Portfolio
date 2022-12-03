import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getpersonalDetail } from '../Store/Slice/getPersonalDetail';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpersonalDetail());
  }, []);

  const { personalData, dataLoading } = useSelector((state) => state.personalInfo);

  return (
    <div className='text-center'>
      {
        personalData?.length > 0 && personalData.map((data) => (
          <div key={data._id}>
            <p>{data.Firstname} {data.Lastname}</p>
            <p>{data.Email}</p>
            <p>{data.PhoneNumber}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home
