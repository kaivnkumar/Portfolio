import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSuggestions } from '../Store/Slice/getSuggestions';

function ViewSuggestion() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch]);

  const { SuggestionsData } = useSelector((state) => state.SuggestedInfo);

  // const { SuggestionsData } = useSelector((state) => {
  //   console.log(state.SuggestedInfo.SuggestionsData);
  //   return (state.SuggestedInfo)
  // });

  return (
    <div className='pt-[90px] min-h-screen bg-black'>
      <div className='mb-10'>
        <h1 className='text-2xl font-bold sm:text-lg sm:font-semibold text-white text-center'>Suggestions</h1>
      </div>
      {
        SuggestionsData?.length > 0 && SuggestionsData.map((data) => (
          <div className='w-full flex justify-center' key={data._id}>
            <div className="h-56 w-96 relative cursor-pointer mb-5 group overflow-hidden">
              <div className="absolute inset-0 bg-sky-200 rounded-lg shadow-2xl pt-5 pl-5">
                <h3 className="text-xl font-bold text-gray-900 sm:text-xl">{data.Name}</h3>
                <h3 className="text-base font-bold text-gray-900 sm:text-xl">{data.Email}</h3>
                <h3 className="text-base font-bold text-gray-900 sm:text-xl">{data.MobileNumber}</h3>
                <p className="w-80 text-sm text-gray-500 pb-5">{data.Suggestions}</p>
                <div className='grid justify-end align-bottom'>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-xs font-medium">48:32 minutes</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 transform group-hover:-translate-x-96 transition duration-700">
                <div className="h-full w-full bg-slate-500 rounded-lg shadow-2xl flex justify-center items-center">
                  <h3 className="text-xl font-bold text-gray-900 sm:text-xl">{data.Name}</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ViewSuggestion
