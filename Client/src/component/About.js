import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getpersonalDetail } from '../Store/Slice/getPersonalDetail';

function About() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getpersonalDetail());
    }, []);

    const { personalData, dataLoading } = useSelector((state) => state.personalInfo);

    const Navigate = useNavigate();
    const handelProjectPage = () => {
        Navigate("/projects");
    };

    return (
        <div>
            <div className='flex bg-black h-screen text-red-200 justify-center'>
                {
                    personalData?.length > 0 && personalData.map((data) => (
                        <div className='mt-[50px] leading-[40px]' key={data._id}>
                            <div className='flex'>
                                <div className='w-[120px]'>
                                    <p>Full Name</p>
                                    <p>Date Of Birth</p>
                                    <p>Age</p>
                                    <p>Phone</p>
                                    <p>Email</p>
                                    <p>City</p>
                                    <p>Degree</p>
                                    <p>Major</p>
                                </div>
                                <div>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                </div>
                                <div className='ml-[20px]'>
                                    <p>{data.FirstName} {data.LastName}</p>
                                    <p>{data.DateOfBirth}</p>
                                    <p>{data.Age}</p>
                                    <p>+91 {data.PhoneNumber}</p>
                                    <p>{data.Email}</p>
                                    <p>{data.City}</p>
                                    <p>{data.Degree}</p>
                                    <p>{data.Major}</p>
                                </div>
                            </div>
                            <div className='mt-[50px] w-[850px]'>
                                <p>{data.IntroDescription}</p>
                                <p>{data.InterDescription}</p>
                                <p className='cursor-pointer' onClick={handelProjectPage}>{data.ProjectDescription}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default About
