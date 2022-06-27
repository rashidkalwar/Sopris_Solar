import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { images } from 'src/components/ImageSlider/image-data';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Dots = ({ length, activeIndex, setActiveIndex }) => {
  return (
    <div className="">
      {new Array(length).fill('').map((_, i) => (
        <span onClick={() => setActiveIndex([i])} key={i}>
          <GoPrimitiveDot
            className={`text-xl md:text-3xl mx-1 md:mx-2 inline cursor-pointer transform' +
              ${
                i === activeIndex
                  ? 'text-white scale-125'
                  : 'text-gray-800 scale-100'
              }`}
          />
        </span>
      ))}
    </div>
  );
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Slider = () => {
  const [paused, setPaused] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const next = () => {
    paginate(1);
  };

  const prev = () => {
    paginate(-1);
  };

  React.useEffect(() => {
    if (!paused) {
      const timer = setInterval(() => next(), 5000);
      return () => clearInterval(timer);
    }
  }, [next, 5000]);

  return (
    <div className="relative aspect-video max-h-[600px] mx-auto mt-5 flex justify-center items-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute top-0 object-cover bg-center h-full w-auto bg-no-repeat"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="top-[calc(50% - 20px)] absolute text-white opacity-80 hover:opacity-100 rounded-3xl w-16 h-16 flex justify-center items-center select-none cursor-pointer font-bold text-7xl z-[1] right-8"
        onClick={next}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <BsChevronRight />
      </div>
      <div
        className="top-[calc(50% - 20px)] absolute text-white opacity-80 hover:opacity-100 rounded-3xl w-16 h-16 flex justify-center items-center select-none cursor-pointer font-bold text-7xl z-[1] left-8"
        onClick={prev}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <BsChevronLeft />
      </div>
    </div>
  );
};
