export default function Loader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        <div className="flex flex-col items-center">
          {/* Animated Spinner */}
          <div className="w-16 h-16 border-t-4 border-b-4 border-orange-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }
  