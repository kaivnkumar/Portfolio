import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImage } from '../Store/Slice/getImage';
import { getpersonalDetail } from '../Store/Slice/getPersonalDetail';
import loader from './Image/loading.gif';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpersonalDetail());
    dispatch(getImage());
  }, []);

  const { personalData } = useSelector((state) => state.personalInfo);
  const { Image, ImageLoading } = useSelector((state) => state.image);

  return (
    <>
      {
        ImageLoading && <div className='bg-black h-screen items-center'>
          <img className='h-[300px] w-[350px] ml-[40%]' src={loader}></img>
        </div>
      }
      {
        ImageLoading === false && (
          <div>
            <div className='flex'>
              <div className='bg-black h-screen text-red-200 w-1/2 text-center'>
                <div>
                  {
                    personalData?.length > 0 && personalData.map((data) => (
                      <div className='mt-[30%]' key={data._id}>
                        <p className='decoration-orange-900n font-semibold font-marker text-5xl italic p-8'>MERN STACK DEVELOPER</p>
                        <p className='text-2xl font-bold font-marker'>{data.FirstName} {data.LastName}</p>
                      </div>
                    ))
                  }
                </div>
                <div className='mt-[20px]'>
                  <Link to="/about">
                    <button className='text-gray-500 font-marker'>About Me</button>
                  </Link>
                </div>
              </div>
              <div className='bg-black w-1/2'>
                {
                  Image?.length > 0 && Image.map((img) => {
                    const base64String = btoa(
                      new Uint8Array(img?.profilePic?.data?.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                    )
                    return (
                      <div key={img._id} className='flex justify-center'>
                        <img
                          className='w-[510px] h-[600px]'
                          src={`data:image/png;base64,${base64String}`}
                          alt="">
                        </img>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Home
