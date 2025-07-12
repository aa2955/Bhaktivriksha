import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase";
import { useEffect, useState } from 'react';
import BottomNav from "../components/BottomNav";

function LandingPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-blue-50 to-white text-center pb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Bhakti Vriksha Tracker
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-md mb-6">
        Build your spiritual habits. Track Japa, Ekadashi, and social media discipline — all in one place.
      </p>

      {user ? (
        <button onClick={handleLogout} className="text-red-500 underline">
          Logout
        </button>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Log In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
          >
            Sign Up
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default LandingPage;
