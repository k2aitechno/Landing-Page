import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendWelcomeEmail = async (userEmail: string) => {
    try {
      await emailjs.send(
        'default_service',
        'template_o3ce14j',
        {
          to_email: userEmail,
          company_name: 'K2 AI Technologies',
        },
        '_2hs5rZGMnwJrXRiL'
      );
      toast.success('Welcome email sent successfully!');
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send welcome email');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendWelcomeEmail(email);
      setEmail('');
      toast.success('Thank you for subscribing!');
    } catch (error) {
      toast.error('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <Send size={20} className="text-white" />
        </button>
      </form>
    </div>
  );
}