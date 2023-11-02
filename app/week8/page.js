"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useUserAuth } from './_utils/auth-context';

const Page = () => {
    const [isClient, setIsClient] = useState(false);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    if (!isClient) {
        return <div className="flex justify-center items-center h-screen">
                <div>Loading...</div>
                </div>;
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
           <div className="text-center">
            {user ? (
                <div>
                    <h1 className="text-3xl font-semibold mb-2 hover:animate-fade-in-down">Welcome, {user.displayName}</h1>
                    <p className="mb-4 text-gray-400 hover:animate-zoom-in">({user.email})</p>
                    <Link href="/week8/shopping-list" className="text-blue-500 m-5 hover:text-blue-400 transition duration-500 ease-in-out hover:underline hover:scale-110 hover:shadow-lg">
                        Go to Shopping List
                    </Link>
                    <button onClick={handleLogout} className="px-6 m-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-500 ease-in-out mb-4 hover:animate-pulse">
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    
                    <button onClick={handleLogin} className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-500 ease-in-out hover:animate-bounce">
                        Login with GitHub
                    </button>
                </div>
            )}
          </div>
        </div>
      );

};

export default Page;