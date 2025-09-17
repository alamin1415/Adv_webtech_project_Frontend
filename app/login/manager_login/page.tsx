import Link from "next/link";

export default function ManagerLogin(){
  
  return ( 
    <div className="flex justify-center items-center h-[80vh] bg-gray-100 ">
     <div className="bg-white p-6 mb-10 rounded-2xl w-full max-w-md"> {/**/} 
        <h2 className="text-2xl font-bold text-center mb-6">Manager Login</h2>
        <form  className="space-y-3">

          <div>
            <label htmlFor="username" className="block text-m"> Email: </label>
            <input type="email" id="username" name="username"  className="w-full px-3 py-2 border rounded-lg font-medium"/>
          </div>
        
          <div>
            <label htmlFor="password" className="block text-m"> Password: </label>
            <input type="password" id="password" name="password"  className="w-full px-3 py-2 border rounded-lg font-medium"/>
          </div>
                <Link href='/'>
                    <button type="submit" className="w-full bg-blue-600 text-white mt-8 py-2 rounded-lg hover:bg-blue-700"> Log In  </button>
                </Link>
        </form>

        <p className="text-m text-center mt-4">Haven't any account?{""}
            <Link href="/signup/manager_signup" className="text-green-600 hover:underline"> Sign Up</Link>
        </p>

        </div>

        </div>

)
}