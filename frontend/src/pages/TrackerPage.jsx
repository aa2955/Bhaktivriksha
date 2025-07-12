import BottomNav from "../components/BottomNav";

export default function TrackerPage() {
  return (
    <div className="min-h-screen p-6 pb-20">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        📿 Tracker
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Track your Japa, Ekadashi, and social media habits here.
      </p>

      {/* Placeholder for actual tracker UI (Sprint 4) */}
      <div className="bg-white shadow-md rounded p-4 text-center text-gray-500">
        Tracker UI coming in Sprint 4...
      </div>

      <BottomNav />
    </div>
  );
}
