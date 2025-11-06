"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AdminPage() {
  const { data: session } = useSession();

  if (!session)
    return (
      <main className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const email = (e.currentTarget as any).email.value;
            const password = (e.currentTarget as any).password.value;
            await signIn("credentials", { email, password, redirect: false });
          }}
          className="p-6 bg-white rounded-xl shadow-md w-80"
        >
          <h2 className="text-xl font-semibold mb-3 text-center">Admin Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 w-full mb-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </main>
    );

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => signOut({ redirect: false })}
          className="text-sm underline"
        >
          Logout
        </button>
      </div>
      {/* your editable content UI goes here (same as before) */}
    </main>
  );
}
