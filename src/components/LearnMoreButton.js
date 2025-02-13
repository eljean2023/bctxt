"use client";

export default function LearnMoreButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
    >
      Learn More
    </button>
  );
}
