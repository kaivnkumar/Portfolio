import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMarksheet } from "../Store/Slice/getMarkSheet";

function DisplayMarksheet() {

    const dispatch = useDispatch();

    const { Marksheet, dataLoading } = useSelector((state) =>{ 
      console.log(state.MarksheetImage.Marksheet);
      return state.MarksheetImage});

    return (
        <div className='bg-black'>
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
                    alt="">
                  </img>
                </div>
              );
            })
          }
        </div>
    )
}

export default DisplayMarksheet
