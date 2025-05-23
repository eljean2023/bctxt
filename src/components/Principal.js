import { useState, useEffect, useRef, useMemo } from "react";
import DemoModal from "./DemoModal"; // Import the reusable modal
import "../utils/i18n";
import { useTranslation } from "react-i18next";

export default function Principal() {
  const [currentText, setCurrentText] = useState(0);
  const [isFixed] = useState(false);
  const videoRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized texts so they update immediately when the language changes
  const texts = useMemo(
    () => [
      {
        title: t("section1.title"),
        subtitle: t("section1.subtitle"),
        button: true,
      },
      {
        title: t("section2.title"),
        subtitle: t("section2.subtitle"),
        button: true,
      },
    ],
    [i18n.language] // Recompute texts when language changes
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]); // Re-run if texts array changes

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div
        ref={videoRef}
        className={`left-0 w-full transition-all duration-100 ${
          isFixed ? "fixed top-0 h-[43vh] z-20" : "absolute top-0 h-screen z-10"
        }`}
      >

<video className="object-cover w-full h-full opacity-100" muted autoPlay loop>
  <source src="https://staging.bodyshopconnect.com/bcwebsite/public/NewSlide.mp4" type="video/mp4" />
</video>

</div>

  {/* Dark Overlay for Better Text Visibility */}
    <div className="absolute top-0 left-0 w-full h-full bg-black z-15"></div>

  {/*Content with Text */}
      <div className="relative z-30 flex items-center justify-center h-screen text-white text-center">
        <div className="max-w-3xl p-5">
          {texts.length > 0 && (
            <>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                {texts[currentText].title}
              </h1>
              {texts[currentText].subtitle && (
                <p className="text-lg md:text-xl mt-2">{texts[currentText].subtitle}</p>
              )}
              {texts[currentText].button && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition hover:underline decoration-white"
                >
                  {t("schedule_demo")}
                </button>
              )}
            </>
          )}

          {/* Reusable Modal */}
          <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </div>
  );
}




