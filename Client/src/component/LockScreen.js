import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { validation } from '../Store/Slice/validation';

function LockScreen() {

    const dispatch = useDispatch();

    const { validate } = useSelector((state) => state.ValidateInfo);

    console.log(validate?.data?.token);

    useEffect(() => {
      console.log(validate?.data);
    }, [validate]);

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
    <div className='pt-[90px] min-h-screen'>
        LockScreen
        <form onSubmit={handleSuggestions}>
            <input type="text" placeholder='Password'/>
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default LockScreen