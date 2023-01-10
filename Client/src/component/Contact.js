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
      <div className='flex justify-center mb-20'>
        <form onSubmit={handleSuggestions}>
          <div className='grid gap-8'>
            <div className='flex gap-6'>
              <div className='grid gap-6'>
                <p>Name</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Suggestion</p>
              </div>
              <div className='grid gap-6'>
                <div>
                  <input
                    className='bg-black border-b-2 border-red-400 w-[300px] pl-3'
                    placeholder='Your name*' type="text" required></input>
                </div>
                <div>
                  <input
                    className='bg-black border-b-2 border-red-400 w-[300px] pl-3'
                    placeholder='Your Mobile Number   (optional)' type="tel" pattern="[0-9]{10}"></input>
                </div>
                <div>
                  <input
                    className='bg-black border-b-2 border-red-400 w-[300px] px-3'
                    placeholder='Your Email   (optional)' type="email"></input>
                </div>
                <div>
                  <textarea
                    className='bg-black border-b-2 border-red-400 w-[300px] pl-3'
                    placeholder='Give your suggestions*' rows="1" cols="100" required></textarea>
                </div>
              </div>
            </div>
            <div className='flex-row grid justify-center gap-4'>
              <div className='flex justify-center'>
                <button className='bg-red-900 py-2 px-3 rounded-lg'>SUBMIT</button>
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
                <div className='flex justify-center gap-10'>
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
