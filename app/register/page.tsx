import Link from 'next/link';

export default function Register() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Mobile Number Field */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            placeholder="+880 1XXXXXXXXX"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

          <Link href="/" className="text-blue-600 hover:underline">
            or login here
          </Link>
        </div>
      </form>
    </div>
  );
}
