// GalleryModal.jsx
"use client";

import { Maximize, Share2, X, ZoomIn, ZoomOut } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const GalleryModal = ({ isOpen, imageSrc, title, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Memoized handlers for better performance
  const handleOverlayClick = useCallback(
    (e) => {
      // Only close if clicked on the overlay itself, not on the image or buttons
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  const handleEsc = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  const handleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.warn("Fullscreen not supported:", error);
    }
  }, []);

  const handleZoom = useCallback(() => {
    setIsZoomed((prev) => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    try {
      if (navigator.share && navigator.canShare) {
        await navigator.share({
          title: title || "Image",
          url: imageSrc,
        });
      } else {
        await navigator.clipboard.writeText(imageSrc);
        // Toast notification with transition
        const notification = document.createElement("div");
        notification.textContent = "Image URL copied to clipboard!";
        notification.className =
          "fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded z-[10001] transition-all duration-300 opacity-0 translate-y-[-20px]";
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
          notification.style.opacity = "1";
          notification.style.transform = "translate(-50%, 0)";
        }, 10);

        // Animate out and remove
        setTimeout(() => {
          notification.style.opacity = "0";
          notification.style.transform = "translate(-50%, -20px)";
          setTimeout(() => {
            if (document.body.contains(notification)) {
              document.body.removeChild(notification);
            }
          }, 300);
        }, 2000);
      }
    } catch (error) {
      console.warn("Share not supported:", error);
    }
  }, [imageSrc, title]);

  // Handle modal opening/closing transitions
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      setImageLoaded(false);

      // Trigger animation after render
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    } else {
      setIsAnimating(false);
      setIsZoomed(false);
      setImageLoaded(false);

      // Wait for animation to complete before unmounting
      const timeout = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset";
      }, 300);

      return () => clearTimeout(timeout);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, handleEsc]);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Memoized button configs for better performance
  const buttonConfigs = useMemo(
    () => [
      {
        id: "fullscreen",
        icon: Maximize,
        onClick: handleFullscreen,
        title: isFullscreen ? "Exit Fullscreen" : "Fullscreen",
      },
      {
        id: "zoom",
        icon: isZoomed ? ZoomOut : ZoomIn,
        onClick: handleZoom,
        title: isZoomed ? "Zoom Out" : "Zoom In",
      },
      {
        id: "share",
        icon: Share2,
        onClick: handleShare,
        title: "Share",
      },
      {
        id: "close",
        icon: X,
        onClick: onClose,
        title: "Close",
      },
    ],
    [
      handleFullscreen,
      handleZoom,
      handleShare,
      onClose,
      isZoomed,
      isFullscreen,
    ],
  );

  // Don't render if not open and not animating, or if no image source
  if (!shouldRender || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Overlay with smooth transition */}
      <div
        className={`absolute inset-0 cursor-pointer transition-all duration-300 ease-in-out ${
          isAnimating ? "bg-midnight/90 opacity-100" : "bg-midnight/0 opacity-0"
        }`}
        onClick={handleOverlayClick}
        aria-label="Close modal"
      />

      {/* Modal Content with scale and fade transition */}
      <div
        className={`relative z-10 flex h-full max-h-screen w-full max-w-screen items-center justify-center p-4 transition-all duration-300 ease-in-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={handleOverlayClick}
      >
        {/* Utilities Bar with staggered animation */}
        <div
          className={`absolute top-4 right-4 z-20 flex items-center gap-2 transition-all delay-100 duration-500 ease-in-out ${
            isAnimating
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {buttonConfigs.map(({ id, icon: Icon, onClick, title }, index) => (
            <button
              key={id}
              onClick={onClick}
              className={`transform cursor-pointer rounded bg-black/70 p-2 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-black/90 focus:ring-2 focus:ring-white/50 focus:outline-none ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: `${(index + 1) * 50}ms`,
              }}
              title={title}
              aria-label={title}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Loading indicator with fade */}
        {!imageLoaded && isAnimating && (
          <div className="absolute inset-0 z-5 flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-white opacity-80"></div>
          </div>
        )}

        {/* Image Container with smooth scale transition */}
        <div
          className={`relative h-[70vh] overflow-hidden rounded transition-all duration-400 ease-in-out ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          } ${
            !imageLoaded
              ? "scale-90 opacity-0"
              : isAnimating
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleZoom();
          }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title || "Gallery image"}
              className={`h-full w-full max-w-full object-cover transition-all duration-400 ease-in-out ${
                isZoomed ? "scale-150" : "scale-100"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
              draggable={false}
              loading="eager"
            />
          ) : (
            <div className="flex h-64 w-64 items-center justify-center rounded bg-gray-800 text-gray-400">
              <span>No image available</span>
            </div>
          )}
        </div>

        {/* Image Title with slide up animation */}
        {title && imageLoaded && (
          <div
            className={`pointer-events-none absolute right-4 bottom-4 left-4 text-center transition-all delay-200 duration-500 ease-in-out ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="inline-block max-w-full truncate rounded bg-black/70 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryModal;
