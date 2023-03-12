import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { validation } from '../Store/Slice/validation';

function LockScreen() {

    const dispatch = useDispatch();
    const { Password } = useSelector((state) => state.ValidateInfo);
    const [ValidationStatus, setValidationStatus] = useState({ status: 0, message: "" });
    const Navigate = useNavigate();

    useEffect(() => {
        if (Password?.data?.response == "success") {
            Navigate("/view");
        }
        else if (Password?.data?.response == "Incorrect") {
            setValidationStatus({
                status: 1,
                message: "Incorrect Password"
            });
        }
    }, [Password])

    const handleSuggestions = (e) => {
        e.preventDefault();
        const ele = e.target.elements;
        const Password = ele[0].value;
        ele[0].value = "";
        dispatch(
            validation({ Password })
        );
    };

    return (
        <div className='pt-[90px] min-h-screen bg-black flex justify-center items-center'>
            <form onSubmit={handleSuggestions} className="text-white">
                <div className='grid gap-8 bg-slate-300 p-14 rounded-lg'>
                    <div className='flex justify-center'>
                        <h1 className='text-zinc-400 text-xl font-semibold'>Enter the Password</h1>
                    </div>
                    <div>
                        <input type="text" placeholder='Password' className='bg-slate-500 text-center h-10 rounded-lg' />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-slate-500 h-10 w-20 rounded-lg'>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LockScreen
