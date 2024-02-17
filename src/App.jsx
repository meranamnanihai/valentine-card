import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 p-5 ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Welcome to Our Love Story</h1>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="yourName" className="block text-gray-700 font-bold mb-2">Your Name:</label>
              <input 
                type="text" 
                id="yourName" 
                className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" 
                placeholder="Enter your name" 
                value={yourName} 
                onChange={(e) => setYourName(e.target.value)} 
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="partnerName" className="block text-gray-700 font-bold mb-2">Partner's Name:</label>
              <input 
                type="text" 
                id="partnerName" 
                className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" 
                placeholder="Enter your partner's name" 
                value={partnerName} 
                onChange={(e) => setPartnerName(e.target.value)} 
                required
              />
            </div>
            <button 
              type="submit"
              className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg text-center"
            >
              Create Valentine's Card
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-4">Your Name: {yourName}</p>
            <p className="mb-4">Partner's Name: {partnerName}</p>
            <p className="mb-4">Ready to create the card!</p>
           <Link to={`/${partnerName}$ ${yourName}`}>
            <button class="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Button</button>
            </Link>
          </div>

        )}
      </div>
      
    </div>
    <footer className="bg-gray-800 py-4 text-white text-center">
      <p>Made by Admya Salar 🗿</p>
      </footer>
    </>
  );
};

export default Home;
