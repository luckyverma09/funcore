import React, { useState } from 'react';

interface SignupFormProps {
  onSubmit: (username: string, email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { username, email }); // Added logging

    // Basic validation
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      // Call the onSubmit prop to handle signup logic
      await onSubmit(username, email, password);
      // Optionally reset the form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');
    } catch (err) {
      console.error('Form submission error:', err); // Added error logging
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='username' className='block text-sm font-medium text-lime-300'>
          Username
        </label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime -300 focus:ring focus:ring-lime -200 focus:ring-opacity-50 p-2'
        />
      </div>
      <div>
        <label htmlFor='email' className='block text-sm font-medium text-lime-300'>
          Email
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime -300 focus:ring focus:ring-lime -200 focus:ring-opacity-50 p-2'
        />
      </div>
      <div>
        <label htmlFor='password' className='block text-sm font-medium text-lime-300'>
          Password
        </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime -300 focus:ring focus:ring-lime -200 focus:ring-opacity-50 p-2'
        />
      </div>
      {error && <p className='text-red-500'>{error}</p>}
      <button
        type='submit'
        className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400'
      >
        Sign Up
      </button>
    </form>
  );

  /// signup form
};

export default SignupForm;
