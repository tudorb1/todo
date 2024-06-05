// src/components/Navbar.tsx
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
        <h1 className="text-xl font-bold">My Todo App</h1>
      </div>
      <div>
        {session ? (
          <>
            <span className="mr-4">Welcome, {session.user?.name}</span>
            <button onClick={() => signOut()} className="bg-red-500 p-2 rounded">Logout</button>
          </>
        ) : (
          <button onClick={() => signIn("google")} className="bg-blue-500 p-2 rounded">Login with Google</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
