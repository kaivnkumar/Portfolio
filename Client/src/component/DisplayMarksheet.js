import React from 'react';
import { useSelector } from "react-redux";

function DisplayMarksheet() {

  const { Marksheet } = useSelector((state) => {
    return state.MarksheetImage
  });

  return (
    <div className='bg-black pt-[90px] min-h-screen'>
      {
        Marksheet?.length > 0 && Marksheet.map((obj) => {
          const base64String = btoa(
            new Uint8Array(obj?.Marksheet?.data?.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
          return (
            <div key={obj._id} className='flex justify-center'>
              <img
                className='w-[550px] h-[800px]'
                src={`data:image/png;base64,${base64String}`}
                alt="Marksheet">
              </img>
            </div>
          );
        })
      }
    </div>
  )
}

export default DisplayMarksheet
