import {
  AiOutlineFacebook,
  AiOutlineGoogle,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FaYelp } from 'react-icons/fa';
import Link from 'next/link';

export default function LogoCloud() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold text-gray-600 dark:text-gray-200 tracking-wider">
          Already a Cusomter? Leave a review here!
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          <div className="col-span-1 flex justify-center items-center py-2 px-8 bg-gray-100 dark:bg-gray-800">
            <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fg.page%2Fr%2FCZ1c1cVPa6rPEB0%2Freview">
              <a>
                <AiOutlineFacebook className="text-gray-400 dark:text-gray-300 h-20 w-20" />
              </a>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center py-6 px-8 bg-gray-100 dark:bg-gray-800">
            <Link href="https://g.page/r/CZ1c1cVPa6rPEB0/review">
              <a>
                <AiOutlineGoogle className="text-gray-400 dark:text-gray-300 h-20 w-20" />
              </a>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center py-6 px-8 bg-gray-100 dark:bg-gray-800">
            <Link href="https://api.whatsapp.com/send?text=Sopris%20Solar%20would%20love%20your%20feedback.%20Post%20a%20review%20to%20our%20profile.%0Ahttps%3A%2F%2Fg.page%2Fr%2FCZ1c1cVPa6rPEB0%2Freview">
              <a>
                <AiOutlineWhatsApp className="text-gray-400 dark:text-gray-300 h-20 w-20" />
              </a>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center py-6 px-8 bg-gray-100 dark:bg-gray-800">
            <Link href="https://www.yelp.com/writeareview/biz/y2IkgxUrfPNZL-b-4ENGIw?return_url=%2Fbiz%2Fy2IkgxUrfPNZL-b-4ENGIw&review_origin=biz-details-war-button">
              <a>
                <FaYelp className="text-gray-400 dark:text-gray-300 h-20 w-20" />
              </a>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center py-6 px-8 bg-yellow-700 bg-opacity-50 dark:bg-gray-800">
            <Link href="https://www.solarreviews.com/add-review?type=installer&typeid=6194">
              <a>
                <img src="/solarreviews.png" className="h-20 w-20" />
              </a>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center py-6 px-8 bg-yellow-700 bg-opacity-50 dark:bg-gray-800">
            <Link href="http://www.energysage.com/review/supplier/22622/">
              <a>
                <img src="/energysage.png" className="h-20 w-14" />
              </a>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center py-6 px-8 bg-yellow-700 bg-opacity-50 dark:bg-gray-800">
            <Link href="https://www.bbb.org/us/co/lakewood/profile/solar-energy-contractors/sopris-solar-1296-90249381/customer-reviews">
              <a>
                <img src="/bbb.png" className="h-20 w-14" />
              </a>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center py-6 px-8 bg-yellow-700 bg-opacity-50 dark:bg-gray-800">
            <Link href="https://bestcompany.com/solar/company/sopris-solar/leave-a-review">
              <a>
                <img src="/bc.png" className="h-20 w-20" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
