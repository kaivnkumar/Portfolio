import React from 'react'
import { useDispatch } from "react-redux";
import { validation } from '../Store/Slice/validation';

function LockScreen() {

    const dispatch = useDispatch();

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