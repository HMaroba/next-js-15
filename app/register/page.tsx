'use client'

export default function Register() {
  return (
    <div className="p-2 flex justify-center items-center min-h-screen"> 
      <input
        className="p-2 border-2 border-gray-400 text-gray-600 rounded-md w-2/6 ring-0 focus:ring-0"
        placeholder="Username"
        type="text"
      />
    </div>
  );
}
