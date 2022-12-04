import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getImage } from '../Store/Slice/getImage';
import { getpersonalDetail } from '../Store/Slice/getPersonalDetail';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpersonalDetail());
    dispatch(getImage());
  }, []);

  const { personalData, dataLoading } = useSelector((state) => state.personalInfo);
  const { Image, ImageLoading } = useSelector((state) => state.image);

  return (
    <div>
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
      <div>
        {
          Image?.length > 0 && Image.map((img) => {
            const base64String = btoa(
              new Uint8Array(img?.profilePic?.data?.data)
                .reduce((data, byte) => data + String.fromCharCode(byte), '')
            )
            return (
              <div key={img._id}>
                <img
                  className='w-[300px] h-[400px]'
                  src={`data:image/png;base64,${base64String}`}
                  alt="">
                </img>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Home
