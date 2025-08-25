import React from 'react'
import Banner from '../components/Banner'
import LoginComp from '../components/LoginComp'
import OtpComp from '../components/OtpComp'
const Auth = () => {
  return (
    <>
      <div className='flex w-full h-screen'>
        {/* <LoginComp /> */}
        <OtpComp phoneNo = "9876543210"/>
        <Banner />
      </div>
    </>
  )
}

export default Auth