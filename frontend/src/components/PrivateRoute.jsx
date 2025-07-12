// src/components/PrivateRoute.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login");
    });
    return () => unsub();
  }, [navigate]);

  return children;
}
