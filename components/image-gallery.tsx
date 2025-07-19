import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@heroui/react";

interface ImageGalleryProps {
  images: readonly string[];
}

const ImageGallery = memo(({ images }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setImageLoaded(false);
  };

  const handleImageClick = () => {
    setFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setFullscreen(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex]}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center w-full max-w-xl h-80 md:h-[40vh] overflow-hidden rounded-xl bg-black cursor-pointer group"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleImageClick();
            }
          }}
        >
          <Skeleton className="w-full h-full rounded-lg" isLoaded={imageLoaded}>
            <img
              alt={`Project image ${activeIndex + 1}`}
              className="max-h-full max-w-full object-contain"
              style={{ display: 'block', margin: '0 auto', maxHeight: '100%', maxWidth: '100%' }}
              loading="lazy"
              src={images[activeIndex]}
              onLoad={() => setImageLoaded(true)}
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white bg-black/60 px-3 py-1 rounded opacity-80 group-hover:opacity-100 pointer-events-none select-none transition">
              Click to view fullscreen
            </span>
          </Skeleton>
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 cursor-zoom-out"
          onClick={handleCloseFullscreen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCloseFullscreen();
            }
          }}
        >
          <img
            alt={`Project image fullscreen ${activeIndex + 1}`}
            className="max-h-[95vh] max-w-[95vw] object-contain shadow-2xl"
            src={images[activeIndex]}
            style={{ background: 'black' }}
          />
        </div>
      )}

      <div className="flex gap-3">
        {images.map((img, index) => (
          <motion.div
            key={img}
            className={`w-15 h-19 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${index === activeIndex
              ? "border-blue-500"
              : "border-transparent"
              }`}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleThumbnailClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleThumbnailClick(index);
              }
            }}
          >
            <img
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
              src={img}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default ImageGallery;

ImageGallery.displayName = "ImageGallery";
