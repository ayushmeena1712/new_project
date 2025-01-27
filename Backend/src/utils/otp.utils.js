import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;
const client = twilio(accountSid, authToken);

const sendOtpToPhone = async (req, res, ) => {
      const { phoneNumber } = req.body;
      
      try {
        const verification = await client.verify.v2
            .services(verifyServiceSid)
            .verifications.create({
            to: phoneNumber,
            code: `your otp verfication code is ${otp}`,
            channel: 'sms', 
            });
    
        res.status(200).json({ message: 'OTP sent successfully', sid: verification.sid });
      } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ message: 'Failed to send OTP', error: error.message });
      } 
};

export default sendOtpToPhone;


  