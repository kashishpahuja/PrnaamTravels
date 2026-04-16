"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  // Timer logic for Resend OTP
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Step 1: Request OTP
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/user/request-otp`, { email });
      toast.success(res.data.message || "OTP sent to your email!");
      setStep(2);
      setTimer(60); // 1 minute cooldown
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP & Login
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!otp) return toast.error("Please enter the OTP");

    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/user/verify-otp`, 
        { email, otp }, 
        { credentials: "include" } // Important for HTTP-only cookies
      );

      toast.success("Login Successful!");
      
      // Save non-sensitive user info for UI (Role check handled by Layout)
      localStorage.setItem("prnaamAdmin", JSON.stringify(res.data.admin));
      
      // Redirect to Dashboard
      window.location.href = "/admin";
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:grid grid-cols-2 min-h-screen">
      {/* Left side: Hero Image */}
      <div className="hidden md:block relative">
        <Image
          alt="Admin Login"
          src="/Images/admin1.webp" 
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side: Auth Form */}
      <div className="flex items-center justify-center px-4 bg-[#FAF7F2]">
        <ToastContainer />
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="group">
              <Image
                width={150}
                height={60}
                src="/Images/logo.webp"
                alt="Logo"
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#E6D3C1]">
            <h2 className="text-3xl font-bold text-[#99571d] text-center mb-2">
              Admin Access
            </h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              {step === 1 ? "Enter your email to receive an OTP" : "Enter the 6-digit code sent to your email"}
            </p>

            <form onSubmit={step === 1 ? handleRequestOTP : handleVerifyOTP} className="space-y-6">
              {step === 1 ? (
                /* EMAIL INPUT */
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="admin@prnaamtravels.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-[#D5BBA3] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B67032] transition-all bg-[#FAF7F2]"
                    required
                  />
                </div>
              ) : (
                /* OTP INPUT */
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-2 ml-1">Verification Code</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="0 0 0 0 0 0"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border border-[#D5BBA3] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B67032] transition-all bg-[#FAF7F2] text-center tracking-[1rem] text-xl font-bold"
                    required
                  />
                  <div className="text-right mt-2">
                    <button
                      type="button"
                      disabled={timer > 0}
                      onClick={handleRequestOTP}
                      className={`text-sm font-medium ${timer > 0 ? "text-gray-300" : "text-[#B67032] hover:underline"}`}
                    >
                      {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#99571d] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#7a4517] transform active:scale-[0.98] transition-all disabled:bg-gray-400"
              >
                {loading ? "Processing..." : step === 1 ? "Send OTP" : "Verify & Login"}
              </button>
            </form>

            {step === 2 && (
              <button 
                onClick={() => setStep(1)} 
                className="w-full text-center text-sm text-gray-400 mt-6 hover:text-gray-600"
              >
                ← Use a different email
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}