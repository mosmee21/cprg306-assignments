import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import Link from 'next/link'; // Import Link from next/link

export default function Login() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user ? (
        <div className="space-x-4">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
          {/* Next.js Link to the shopping list page */}
          <Link href="./shopping-list">
            <a className="text-blue-500 hover:underline">Go to Shopping List</a>
          </Link>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
}
