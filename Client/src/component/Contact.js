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
    <div className='min-h-screen'>
      <div>
        {
          contactDetails?.length > 0 && contactDetails.map((data) => {
            const preDefinedText = data.WAPredefinedText;
            const uri = encodeURI(preDefinedText);
            return (
              <div key={data._id}>
                <div className='flex gap-10 bg-white justify-center align-bottom'>
                  <a href={"https://www.linkedin.com/in/" + data.Linkedin}><img src={Linkedin} alt='' className='h-[50px] w-[50px]'></img></a>
                  <a href={"https://twitter.com/" + data.Twitter}><img src={Twitter} alt='' className='h-[50px] w-[50px]'></img></a>
                  <a href={"https://www.instagram.com/" + data.Instagram}><img src={Instagram} alt='' className='h-[50px] w-[50px]'></img></a>
                  <a href={"https://www.facebook.com/" + data.FaceBook}><img src={Facebook} alt='' className='h-[50px] w-[50px]'></img></a>
                  <a href={"https://wa.me/91" + data.WhatsAppNumber + "?text=" + uri}><img src={Whatsapp} alt='' className='h-[50px] w-[50px]'></img></a>
                  <a href={"mailto:" + data.Email}><img src={Email} alt='' className='h-[50px] w-[50px]'></img></a>
                  <a href={"tel:" + data.MobileNumber}><img src={Phone} alt='' className='h-[50px] w-[50px]'></img></a>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='justify-center'>
        <form onSubmit={handleSuggestions}>
          <div className=''>
            <div>
              <p>NAME : </p>
              <input
                className='border-b-2 border-gray-400 w-[300px]'
                placeholder='Enter your name*' type="text" required></input>
            </div>
            <div>
              <p>PHONE : </p>
              <input
                className='border-b-2 border-gray-400 w-[300px]'
                placeholder='Enter your Mobile Number (optional)' type="tel" pattern="[0-9]{10}"></input>
            </div>
            <div>
              <p>EMAIL : </p>
              <input
                className='border-b-2 border-gray-400 w-[300px]'
                placeholder='Enter your Email (optional)' type="email"></input>
            </div>
            <div>
              <p>SUGGESTION : </p>
              <textarea
                className='border-b-2 border-gray-400 w-[300px]'
                placeholder='Give your suggestions*' rows="1" cols="100" required></textarea>
            </div>
            <button>SUBMIT</button><br></br>
            {
              SuggestionsStatus.status === 1 ? (
                <span className='bg-red-500 text-red-100 p-1 rounded-lg'>{SuggestionsStatus.message}</span>
              ) : null
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
