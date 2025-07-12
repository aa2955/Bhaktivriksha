import { auth } from "../firebase";
import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen p-6 pb-20">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        👤 Profile
      </h1>

      {user ? (
        <div className="text-center">
          <p><strong>Email:</strong> {user.email}</p>
          {/* You can add more user info later */}
        </div>
      ) : (
        <p className="text-center text-gray-600">Not logged in.</p>
      )}

      <BottomNav />
    </div>
  );
}
