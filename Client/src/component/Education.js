import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getgradeandcer } from "../Store/Slice/getGredeAndCer";

function Education() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getgradeandcer());
  }, []);

  const { Grade, dataLoading } = useSelector((state) => state.Score);

  return (
    <div>
      {
            Grade?.length > 0 && Grade.map((obj) => {
              const base64String = btoa(
                new Uint8Array(obj?.profilePic?.data?.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              )
              return (
                <div key={obj._id} className='flex justify-center'>
                  <p>{obj.Score}</p>
                  <img
                    className='w-[550px] h-[800px]'
                    src={`data:image/png;base64,${base64String}`}
                    alt="">
                  </img>
                </div>
              );
            })
          }
    </div>
  )
}

export default Education