import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getSchoolInfo } from "../Store/Slice/getSchoolInfo";
import { getMarksheet } from "../Store/Slice/getMarkSheet";
import { getCollegeInfo } from '../Store/Slice/getCollegeInfo';
import { getCertificate } from '../Store/Slice/getCertificate';
import loader from './Image/Loading-gif.gif';

function Education() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getSchoolInfo());
    dispatch(getCollegeInfo());
    dispatch(getCertificate());
  }, []);

  const { SchoolData, dataLoading } = useSelector((state) => state.SchoolInfo);
  const { CollegeData, datasLoading } = useSelector((state) => state.CollegeInfo);
  const { CertificateData } = useSelector((state) => state.CertificateInfo);

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
    <div className='bg-black text-red-200 min-h-screen leading-[40px] pt-[90px] pl-[80px] sm:pl-[30px]'>
      <div>
        <div className='text-lg font-bold text-[20px] text-blue-50'>
          <h1>Schooling</h1>
        </div>
        <div>
          {
            dataLoading && <div>
              <img className='h-[125px] w-[200px]' src={loader} alt="Loading..."></img>
            </div>
          }
          {
            SchoolData?.length > 0 && SchoolData.map((obj) => (
              <div key={obj._id} onClick={(e) => handleMarksheetPage(e)} className='mb-[60px] sm:mb-[40px]'>
                <p className='font-extrabold sm:text-sm sm:pb-[10px]'>{obj.MarksheetType}</p>
                <p className='sm:text-sm sm:pb-[10px]'>{obj.Year}</p>
                <p className='font-bold text-lg sm:text-sm sm:pb-[10px]'>{obj.School}</p>
                <div className='flex'>
                  <p className='cursor-pointer sm:text-sm' id={obj.MarksheetId}>Percentage : {obj.Percentage} %</p>
                  <p className='text-gray-400 ml-[5%] cursor-pointer sm:text-sm' id={obj.MarksheetId}>Marksheet</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div>
        <div className='text-lg font-bold text-[20px] text-blue-50'>
          <h1>College</h1>
        </div>
        <div>
          {
            datasLoading && <div>
              <img className='h-[125px] w-[200px]' src={loader} alt="Loading..."></img>
            </div>
          }
          {
            CollegeData?.length > 0 && CollegeData.map((obj) => (
              <div key={obj._id} className='pb-10'>
                <p className='font-bold text-lg sm:text-sm sm:pb-[10px]'>{obj.College}</p>
                <p className='sm:text-sm sm:pb-[10px]'>{obj.Year}</p>
                <p className='sm:text-sm sm:pb-[10px]'>CGPA : {obj.Cgpa}</p>
                <div className='relative'>
                  <input type='checkbox' id='input' className='absolute peer opacity-0'></input>
                  <label for='input' class="relative inline-flex items-center justify-start px-1 overflow-hidden font-bold rounded-lg group">
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Load More</span>
                    <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
                  </label>
                  <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='sm:text-sm sm:pb-[10px]'>SGPA1 : {obj.Sgpa1}</p>
                    <p className='sm:text-sm sm:pb-[10px]'>SGPA2 : {obj.Sgpa2}</p>
                    <p className='sm:text-sm sm:pb-[10px]'>SGPA3 : {obj.Sgpa3}</p>
                    <p className='sm:text-sm sm:pb-[10px]'>{obj.Sgpa4}</p>
                    <p className='sm:text-sm sm:pb-[10px]'>{obj.Sgpa5}</p>
                    <p className='sm:text-sm sm:pb-[10px]'>{obj.Sgpa6}</p>
                    <p className='sm:text-sm sm:pb-[10px]'>{obj.Sgpa7}</p>
                    <p className='sm:text-sm sm:pb-[10px]'>{obj.Sgpa8}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div>
        <div className='text-lg font-bold text-[20px] text-blue-50 pb-8'>
          <h1>Certificate</h1>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-1'>
          {
            CertificateData?.length > 0 && CertificateData.map((obj) => {
              const base64String = btoa(
                new Uint8Array(obj?.CertificateImage?.data?.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              )
              const ImageURL = `data:image/png;base64,${base64String}`;
              return (
                <div>
                  <div className="mx-auto antialiased">
                    <div>
                      <div className="mx-auto w-[500px] shadow-xl bg-cover bg-center h-[300px] transform duration-500 hover:-translate-y-2 cursor-pointer group"
                        style={{ backgroundImage: `url(${ImageURL})` }}>
                        <div className="bg-black bg-opacity-20 h-[300px] px-10 flex flex-wrap flex-col pt-16 hover:bg-opacity-75 transform duration-300">
                          <h1 className="text-white text-3xl mb-5 transform translate-y-32 group-hover:translate-y-0 duration-300">
                            {obj.Title}
                          </h1>
                          <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-32 group-hover:translate-y-0 duration-300">
                          </div>
                          <div className='opacity-0 group-hover:opacity-80 transform duration-500'>
                            <p className="text-white text-xl mb-4">
                              {obj.Description}
                            </p>
                            <a href="#" class="w-[130px] relative inline-flex items-center justify-center overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group/button">
                              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover/button:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                              </span>
                              <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover/button:translate-x-full ease">View Certificate</span>
                              <span class="relative invisible">View Certificate</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Education
