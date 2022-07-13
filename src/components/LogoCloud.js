import Image from 'next/image';

export default function LogoCloud() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 dark:text-gray-200 tracking-wider">
          Trusted by over 5 very average small businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-2 px-8 bg-gray-100 dark:bg-gray-800">
            <Image
              height="130"
              width="130"
              src="/transistor-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center py-2 px-8 bg-gray-100 dark:bg-gray-800">
            <Image
              height="130"
              width="130"
              src="/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center py-2 px-8 bg-gray-100 dark:bg-gray-800">
            <Image
              height="130"
              width="130"
              src="/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center py-2 px-8 bg-gray-100 dark:bg-gray-800">
            <Image
              height="130"
              width="130"
              src="/laravel-logo-gray-400.svg"
              alt="Laravel"
            />
          </div>
          <div className="col-span-1 flex justify-center py-2 px-8 bg-gray-100 dark:bg-gray-800">
            <Image
              height="130"
              width="130"
              src="/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center py-2 px-8 bg-gray-100 dark:bg-gray-800">
            <Image
              height="130"
              width="130"
              src="/statamic-logo-gray-400.svg"
              alt="Statamic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
