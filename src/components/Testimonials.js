import { MdLocationOn } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Peter parker',
    address: 'Bolder, Colorado',
    image: '/sun-style-1.avif',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
  },
  {
    name: 'Geralt of rivia',
    address: 'Bolder, Colorado',
    image: '/sun-style-3.avif',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
  },

  {
    name: 'Bruce wayne',
    address: 'Bolder, Colorado',
    image: '/sun-style-5.avif',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
  },
];

const FiveStars = () => {
  return (
    <ul className="flex justify-center mb-0">
      {[1, 2, 3, 4, 5].map((i) => (
        <li key={i}>
          <svg
            ariaHidden="true"
            focusable="false"
            dataPrefix="fas"
            dataIcon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
      ))}
    </ul>
  );
};

function Testimonials() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-3 dark:text-gray-200">
          Testimonials
        </h2>
        <h4 className="text-md md:text-lg mb-14 text-gray-600 dark:text-gray-300">
          See what our customers are saying about us.
        </h4>
        <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="mb-12 md:mb-0 border-2 border-gray-300 dark:border-gray-700 p-4 pb-6 rounded-lg"
            >
              <div className="flex justify-center mb-6">
                <img src={review.image} className="rounded-md w-full" />
              </div>
              <h5 className="text-lg font-bold mb-4 dark:text-gray-200">
                {review.name}
              </h5>
              <h6 className="font-medium text-emerald-600 mb-4">
                <MdLocationOn className="inline-block mr-1 mb-1" />
                {review.address}
              </h6>
              <p className="mb-4 dark:text-gray-400">
                <FaQuoteLeft className="w-6 pr-2 inline-block dark:text-gray-300" />
                {review.text}
              </p>
              <FiveStars />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
