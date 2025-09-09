'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormData, loginSchema } from '../../lib/validation/login.schema';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/authentication/login`,
        data
      );

      // Success হলে
      setIsSuccess(true);
      setServerMessage('Login successful!');
      console.log('Server Response:', response.data);
    } catch (error: any) {
      // Failure হলে
      setIsSuccess(false);
      setServerMessage(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

      {/* Server message */}
      {serverMessage && (
        <p
          className={`text-sm mb-4 ${
            isSuccess ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {serverMessage}
        </p>
      )}

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            {...register('phone')}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password')}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
          <Link href="/register" className="text-red-600 hover:underline">
            or register here
          </Link>
        </div>
      </form>
    </div>
  );
}
