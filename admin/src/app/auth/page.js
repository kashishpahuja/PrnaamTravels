'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ShieldCheck, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

// Ensure axios sends cookies for the 24-hour session
axios.defaults.withCredentials = true;

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  // --- AUTO-VERIFY LOGIC ---
  // When the OTP reaches 6 digits, it triggers verification automatically
  useEffect(() => {
    if (otp.length === 6) {
      handleVerifyLogin();
    }
  }, [otp]);

  // Timer for Resend OTP cooldown
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // --- STEP 1: REQUEST OTP ---
  const handleRequestOTP = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/user/request-otp`, { email });
      if (response.status === 200) {
        setStep(2);
        setTimer(60);
        toast.success("Verification code sent to your email.");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Unauthorized: Admin access only.");
    } finally {
      setLoading(false);
    }
  };

  // --- STEP 2: VERIFY OTP (Triggered by useEffect) ---
  const handleVerifyLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_PORT}/user/verify-otp`, { 
        email, 
        otp 
      });
      
      if (response.status === 200) {
        toast.success("Login Successful!");
        // Redirect to dashboard. window.location.href ensures a full state refresh for auth guards.
        window.location.href = "/"; 
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid or expired OTP.");
      setOtp(''); // Clear input on failure for retry
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#FAF7F2] font-sans overflow-hidden">
      <ToastContainer position="top-right" />

      {/* --- LEFT SIDE: BRANDING --- */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-white p-12 flex-col justify-between overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full opacity-10">
          <svg viewBox="0 0 1000 100" className="w-full h-32">
            <path d="M0,80 Q250,10 500,80 T1000,80" stroke="#144487" strokeWidth="2" strokeDasharray="10,10" fill="none" />
          </svg>
        </div>

        <div className="z-10">
          <Link href="/">
            <Image src="/logo.webp" alt="Prnaam Travels" width={140} height={50} className="mb-8" />
          </Link>
          <h1 className="text-5xl font-serif italic text-slate-900 leading-tight mb-6">
            Welcome to the <br /> Heart of Dev Bhoomi
          </h1>
          <p className="text-slate-500 max-w-sm leading-relaxed italic">
            Your reliable partner for authentic Uttarakhand journeys. Manage with devotion.
          </p>
        </div>

        <div className="relative z-10 max-w-full mx-auto grid grid-cols-5 gap-4 px-4">
          {['/Images/puri.webp', '/Images/uttrakhand.webp', '/Images/Harsil.webp', '/Images/puri.webp', '/Images/uttrakhand.webp'].map((src, index) => (
            <div key={index} className={`${index % 2 !== 0 ? "lg:-translate-y-10" : ""} transition-transform duration-500`}>
              <Image src={src} alt="Travel" width={300} height={400} className="w-full aspect-[3/4] object-cover rounded-4xl shadow-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-blue-50">
          
          <div className="text-center">
            <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-[#144487] mb-4">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-serif italic text-slate-900">Admin Portal</h2>
            <p className="text-slate-500 text-sm mt-2">
              {step === 1 ? "Enter your email to receive a secure login link" : `Verify the code sent to ${email}`}
            </p>
          </div>

          <form onSubmit={step === 1 ? handleRequestOTP : (e) => e.preventDefault()} className="space-y-6">
            {step === 1 ? (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    required
                    placeholder="name@prnaamtravels.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#144487]/20 focus:border-[#144487] outline-none transition-all text-slate-900"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1 text-center block">6-Digit Code</label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="••••••"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} // Remove non-numeric chars
                  autoFocus
                  className="w-full py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#144487]/20 focus:border-[#144487] outline-none transition-all text-center text-3xl tracking-[0.5em] font-bold text-[#144487]"
                />
                <div className="text-right">
                   <button 
                    type="button"
                    disabled={timer > 0 || loading}
                    onClick={handleRequestOTP}
                    className="text-xs font-bold text-[#144487] hover:underline disabled:text-slate-300 transition-colors"
                   >
                    {timer > 0 ? `Resend code in ${timer}s` : "Resend Code"}
                   </button>
                </div>
              </div>
            )}

            {/* Manual button only visible in Step 1 or as fallback in Step 2 */}
            <button
              type="submit"
              disabled={loading || (step === 2 && otp.length < 6)}
              className="w-full mainbutton !justify-center !py-4 shadow-lg shadow-blue-900/10 group disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : (
                <div className="flex items-center">
                  <span className="font-semibold tracking-wide">
                    {step === 1 ? "Send Access Link" : "Verifying Identity..."}
                  </span>
                  {step === 1 && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />}
                </div>
              )}
            </button>
          </form>

          {step === 2 && (
            <button 
              onClick={() => { setStep(1); setOtp(''); }} 
              className="w-full text-slate-400 text-xs hover:text-[#144487] transition-colors mt-4"
            >
              Back to Email
            </button>
          )}

          <div className="pt-6 border-t border-slate-50 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Secure Dev Bhoomi Management</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;