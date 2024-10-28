import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be among the first to experience the future of community building
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={submitted}
            />
            <button
              type="submit"
              disabled={submitted}
              className="absolute right-2 top-2 px-6 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              {submitted ? (
                <>
                  <Check className="h-5 w-5" />
                  Joined
                </>
              ) : (
                <>
                  Join Now
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-600"
            >
              Thanks for joining! We'll notify you when we launch.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}