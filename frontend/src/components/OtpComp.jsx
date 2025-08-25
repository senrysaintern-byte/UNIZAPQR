import AuthHeader from "./AuthHeader";

const OtpComp = ({phoneNo}) => {
	return (
		<div className="flex-1 h-full bg-white my-auto flex justify-center items-center">
			<div className="flex flex-col gap-3 w-90 mx-auto">
    
				<div className="flex flex-start">
					<h1 className="text-2xl text-blue-600 font-medium">
						 <AuthHeader firstText="Intern" secondText="Scan"/>
					</h1>
				</div>
				<div className="flex flex-start">
					<h1 className="text-2xl text-black-600 font-bold">Enter OTP</h1>
				</div>
				<div>
					<p className="text-gray-400 text-[13px] font-semibold">
						Enter the OTP sent to +91 {phoneNo} to verify your identity and
						continue securely
					</p>
				</div>

				<div className="mt-3">
					<input
						type="text"
						placeholder=""
						className="w-full border border-gray-300 rounded-md p-1 mt-1 focus:outline-none focus:ring-1"
					/>
				</div>

				<div className="mt-4">
     <button className="bg-blue-600 w-full text-white py-2 rounded-md cursor-pointer">Continue</button>
    </div>

				<div className="text-gray-400 text-sm font-semibold text-center">
					Already have an account?{" "}
					<span className="text-blue-500 cursor-pointer mt-2">Log in</span>
				</div>
			</div>
		</div>
	);
};

export default OtpComp;
