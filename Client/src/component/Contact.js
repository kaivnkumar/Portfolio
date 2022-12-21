import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getContactInfo } from '../Store/Slice/getContactInfo';
import Linkedin from "./Image/linkedin.gif";
import Twitter from "./Image/twitter.gif";
import Whatsapp from "./Image/whatsapp.gif";
import Instagram from "./Image/instagram.gif";
import Facebook from "./Image/facebook.gif";
import Email from "./Image/mail.gif";
import Phone from "./Image/phone-ring.gif";

function Contact() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactInfo());
  }, []);

  const { contactDetails, dataLoading } = useSelector((state) => state.contactInfo);
  console.log(contactDetails);

  return (
    <div className='min-h-screen bg-black'>
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
  )
}

export default Contact
