import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { RiDoubleQuotesL, RiDoubleQuotesR, RiStarFill } from 'react-icons/ri';
import { BsArrowLeft } from 'react-icons/bs';

const reviews = [
  {
    name: 'John wick',
    address: 'Bolder, Colorado',
    image: '/sun-style-0.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat elit quis augue varius, in volutpat magna molestie. Suspendisse potenti.',
  },
  {
    name: 'Peter parker',
    address: 'Bolder, Colorado',
    image: '/sun-style-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat elit quis augue varius, in volutpat magna molestie. Suspendisse potenti.',
  },
  {
    name: 'Deckerd shaw',
    address: 'Bolder, Colorado',
    image: '/sun-style-2.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat elit quis augue varius, in volutpat magna molestie. Suspendisse potenti.',
  },
  {
    name: 'Geralt of rivia',
    address: 'Bolder, Colorado',
    image: '/sun-style-3.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat elit quis augue varius, in volutpat magna molestie. Suspendisse potenti.',
  },
  {
    name: 'Stephen Strange',
    address: 'Bolder, Colorado',
    image: '/sun-style-4.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat elit quis augue varius, in volutpat magna molestie. Suspendisse potenti.',
  },
  {
    name: 'Bruce wayne',
    address: 'Bolder, Colorado',
    image: '/sun-style-5.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat elit quis augue varius, in volutpat magna molestie. Suspendisse potenti.',
  },
];

const Card = (props) => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 pointer-events-none">
        <img className="rounded-t-lg" src={props.image} alt="" />
        <div className="p-4">
          <h5 className="text-lg md:text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <div className="flex justify-center mt-1">
            <MdOutlineLocationOn className="text-gray-500 mr-1" />
            <h6 className="mb-3 text-[10px] md:text-xs text-center font-medium tracking-normal text-gray-500">
              {props.address}
            </h6>
          </div>
          <div className="flex justify-center items-center my-2">
            <RiStarFill className="text-amber-400 text-xl md:text-2xl mx-0.5" />
            <RiStarFill className="text-amber-400 text-xl md:text-2xl mx-0.5" />
            <RiStarFill className="text-amber-400 text-xl md:text-2xl mx-0.5" />
            <RiStarFill className="text-amber-400 text-xl md:text-2xl mx-0.5" />
            <RiStarFill className="text-amber-400 text-xl md:text-2xl mx-0.5" />
          </div>
          <RiDoubleQuotesL className="text-xl" />
          <p className="mb-3 font-normal text-sm md:text-base text-center text-gray-700 dark:text-gray-400">
            {props.text}
          </p>
          <div className="w-full flex justify-end">
            <RiDoubleQuotesR className="text-xl -mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};

function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="w-full text-center pt-10 md:pt-20">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3">
          Testimonials
        </h1>
        <h4 className="text-sm md:text-lg text-gray-600 dark:text-gray-300">
          See what our customers are saying about us.
        </h4>
      </div>
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden mt-10"
        whileTap={{ cursor: 'grabbing' }}
      >
        <div className="flex items-center md:hidden">
          <BsArrowLeft className="text-2xl mr-2 text-slate-700 dark:text-white" />
          <p className="text-lg"> Swipe left to see more... </p>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex"
        >
          {reviews.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="min-h-[10rem] md:min-h-[20rem] min-w-[20rem]  md:min-w-[30rem] p-5 md:p-10"
              >
                {/* <img
                  className="w-full h-full rounded-3xl pointer-events-none"
                  src={image}
                  alt=""
                /> */}
                <Card
                  image={item.image}
                  name={item.name}
                  text={item.text}
                  address={item.address}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Testimonials;
