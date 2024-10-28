import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full mb-8"
        >
          <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
          <span className="text-indigo-600 font-medium">Introducing AI-Powered Campaign Planning</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Questor
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-600 mb-12"
        >
          Embark on your digital journey
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-xl text-gray-600 mb-12"
        >
          Transform your regional Makers cohort with AI-driven insights. Generate personalized campaign strategies in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-colors"
          >
            Join Waitlist
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}