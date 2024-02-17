import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
const ValentineCard = () => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const patnername = params.name.split('$')[0];
  const yourname = params.name.split('$')[1];
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        {isOpen ? 'Close Card' : 'Open Card'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="bg-white p-8 rounded-lg shadow-lg max-w-md"
            >
              <h1 className="text-xl font-bold mb-4">Happy Valentine's Day! Dear {patnername}</h1>
              <p className="mb-4">You're the love of my life, Dear {patnername}</p>
              <p className="mb-4">my heart beats for you, Dear {patnername}</p>
              <p className="mb-4">and I'm grateful for every moment with you.</p>
              <p className="mb-4">I love you more than words can express.</p>
              <p className="font-semibold">Forever yours,</p>
              <p className="font-semibold">{yourname}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentineCard;
