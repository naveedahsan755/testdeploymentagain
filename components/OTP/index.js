import OtpInput from 'react-otp-input';
import React from 'react'

const OTP = ({ setOTP, OTP }) => {
    return (

        <OtpInput
            value={OTP}
            onChange={setOTP}
            numInputs={6}
        />
    )
}

export default OTP;
