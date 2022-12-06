import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCertificate } from "../Store/Slice/getCertificate";

function DisplayCertificate() {

    const dispatch = useDispatch();

    const { Certificate, dataLoading } = useSelector((state) => state.certificateImage);

    return (
        <div className='bg-black'>
            {
            Certificate?.length > 0 && Certificate.map((obj) => {
              const base64String = btoa(
                new Uint8Array(obj?.profilePic?.data?.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              )
              return (
                <div key={obj._id} className='flex justify-center'>
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

export default DisplayCertificate