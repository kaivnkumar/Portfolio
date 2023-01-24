import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getContactInfo } from '../Store/Slice/getContactInfo';
import Linkedin from "./Image/linkedin.gif";
import Twitter from "./Image/twitter.gif";
import Whatsapp from "./Image/whatsapp.gif";
import Instagram from "./Image/instagram.gif";
import Facebook from "./Image/facebook.gif";
import Email from "./Image/mail.gif";
import Phone from "./Image/phone-ring.gif";
import { postSuggestions } from '../Store/Slice/postSuggestions';
import '../index.css'

function Contact() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactInfo());
  }, []);

  const { contactDetails } = useSelector((state) => state.contactInfo);
  const { Suggestions } = useSelector((state) => state.suggestionsData);
  const [SuggestionsStatus, setSuggestionsStatus] = useState({ status: 0, message: "" })

  useEffect(() => {
    if (Suggestions?.data?.response == "success") {
      setSuggestionsStatus({
        status: 1,
        message: "Your Suggestion have been recorded successfully!!!"
      });
    }
  }, [Suggestions]);

  const handleSuggestions = (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const Name = ele[0].value;
    const MobileNumber = ele[1].value;
    const Email = ele[2].value;
    const Suggestions = ele[3].value;
    ele[0].value = "";
    ele[1].value = "";
    ele[2].value = "";
    ele[3].value = "";
    dispatch(
      postSuggestions({ Name, MobileNumber, Email, Suggestions })
    );
  };

  return (
    <div className='bg-black text-red-200 min-h-screen pt-[90px]'>
      <div className='ml-[10%] mb-5'>
        <h1 className='text-2xl font-bold sm:text-lg sm:font-semibold'>Contact Details</h1>
      </div>
      <div className='flex justify-center gap-[150px] mb-20 sm:flex-col sm:gap-10'>
        <div className='sm:ml-5'>
          <div className='mb-2 sm:ml-5'>
            <h1 className='text-xl font-bold mb-3 sm:text-lg sm:font-semibold sm:mb-1'>Address :</h1>
            <div className='text-lg font-semibold pl-4 sm:text-sm sm:font-medium'>
              <p>Si.No:32,33,</p>
              <p>Sri Andal Nagar,</p>
              <p>Mahalingapuram Post,</p>
              <p>Pollachi</p>
              <p>Tamilnadu-642002</p>
            </div>
          </div>
          <div className='text-lg font-semibold sm:pl-4 sm:text-sm sm:font-medium'>
            <p>Email : kavinkumarmsakthivel@gmail.com</p>
            <p>Phone : +91 9994815599</p>
          </div>
        </div>
        <form onSubmit={handleSuggestions}>
          <div className='grid gap-6'>
            <div>
              <div className="flex justify-center items-center bg-black">
                <label className='relative cursor-pointer'>
                  <input type="text" placeholder="Input" required className='h-10 w-[350px] px-6 text-xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none 
                  focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200 sm:w-[250px] sm:h-8 sm:text-lg' />
                  <span className='text-xl text-red-200 text-opacity-80 bg-black absolute left-5 top-1 px-1 transition duration-200 input-text sm:text-sm'>Name</span>
                </label>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center bg-black">
                <label className='relative cursor-pointer'>
                  <input type="tel" pattern="[0-9]{10}" placeholder="Input" className='h-10 w-[350px] px-6 text-xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none 
                  focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200 sm:w-[250px] sm:h-8 sm:text-lg' />
                  <span className='text-xl text-red-200 text-opacity-80 bg-black absolute left-5 top-1 px-1 transition duration-200 input-text sm:text-sm'>Mobile Number</span>
                </label>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center bg-black">
                <label className='relative cursor-pointer'>
                  <input type="email" placeholder="Input" className='h-10 w-[350px] px-6 text-xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none 
                  focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200 sm:w-[250px] sm:h-8 sm:text-lg' />
                  <span className='text-xl text-red-200 text-opacity-80 bg-black absolute left-5 top-1 px-1 transition duration-200 input-text sm:text-sm'>Email</span>
                </label>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center bg-black">
                <label className='relative cursor-pointer'>
                  <textarea type="text" required placeholder="Input" rows="1" cols="100" className='h-10 w-[350px] px-6 text-xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none 
                  focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200 sm:w-[250px] sm:h-8 sm:text-lg' />
                  <span className='text-xl text-red-200 text-opacity-80 bg-black absolute left-5 top-1 px-1 transition duration-200 input-text sm:text-sm'>Suggestions</span>
                </label>
              </div>
            </div>
            <div className='flex-row grid justify-center gap-4'>
              <div className='flex justify-center'>
                <button className='bg-red-900 py-2 px-3 rounded-lg sm:py-1 sm:px-2'>SUBMIT</button>
              </div>
              {
                SuggestionsStatus.status === 1 ? (
                  <span className='bg-red-500 text-red-100 p-1 rounded-lg'>{SuggestionsStatus.message}</span>
                ) : null
              }
            </div>
          </div>
        </form>
      </div>
      <div>
        {
          contactDetails?.length > 0 && contactDetails.map((data) => {
            const preDefinedText = data.WAPredefinedText;
            const uri = encodeURI(preDefinedText);
            return (
              <div key={data._id}>
                <div className='ml-[20%]'>
                  <p className='font-light text-lg'>Contact Links</p>
                </div>
                <div className='flex justify-center gap-10 sm:gap-2'>
                  <div className='h-[75px] w-[75px] rounded-full bg-white border-[7px] border-red-800 flex justify-center items-center'>
                    <a href={"https://www.linkedin.com/in/" + data.Linkedin}>
                      <img src={Linkedin} alt='' className='h-[50px] w-[50px] rounded-full'></img>
                    </a>
                  </div>
                  <div className='h-[75px] w-[75px] rounded-full bg-white border-[7px] border-red-800 flex justify-center items-center'>
                    <a href={"https://twitter.com/" + data.Twitter}>
                      <img src={Twitter} alt='' className='h-[50px] w-[50px] rounded-full'></img>
                    </a>
                  </div>
                  {/* <div className='h-[75px] w-[75px] rounded-full bg-white border-[7px] border-red-800 flex justify-center items-center'>
                    <a href={"https://www.instagram.com/" + data.Instagram}>
                      <img src={Instagram} alt='' className='h-[50px] w-[50px] rounded-full'></img>
                    </a>
                  </div>
                  <div className='h-[75px] w-[75px] rounded-full bg-white border-[7px] border-red-800 flex justify-center items-center'>
                    <a href={"https://www.facebook.com/" + data.FaceBook}>
                      <img src={Facebook} alt='' className='h-[50px] w-[50px] rounded-full'></img>
                    </a>
                  </div> */}
                  <div className='h-[75px] w-[75px] rounded-full bg-white border-[7px] border-red-800 flex justify-center items-center'>
                    <a href={"https://wa.me/91" + data.WhatsAppNumber + "?text=" + uri}>
                      <img src={Whatsapp} alt='' className='h-[50px] w-[50px] rounded-full'></img>
                    </a>
                  </div>
                  <div className='h-[75px] w-[75px] rounded-full bg-white border-[7px] border-red-800 flex justify-center items-center'>
                    <a href={"mailto:" + data.Email}>
                      <img src={Email} alt='' className='h-[50px] w-[50px] rounded-full'></img>
                    </a>
                  </div>
                  <div className='h-[75px] w-[75px] rounded-full bg-white border-[7px] border-red-800 flex justify-center items-center'>
                    <a href={"tel:" + data.MobileNumber}>
                      <img src={Phone} alt='' className='h-[50px] w-[50px] rounded-full'></img>
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Contact
