// import {
//   ChatAltIcon,
//   DocumentReportIcon,
//   HeartIcon,
//   InboxIcon,
//   PencilAltIcon,
//   ReplyIcon,
//   TrashIcon,
//   UsersIcon,
// } from '@heroicons/react/outline';
import {
  HiChatAlt as ChatAltIcon,
  HiDocumentReport as DocumentReportIcon,
  HiHeart as HeartIcon,
  HiInbox as InboxIcon,
  HiPencilAlt as PencilAltIcon,
  HiReply as ReplyIcon,
  HiTrash as TrashIcon,
  HiUsers as UsersIcon,
  HiCheck as CheckIcon,
} from 'react-icons/hi';

const features = [
  {
    name: 'Step 1: Understand your needs',
    description:
      'Every home or business has different sunlight patterns, weather considerations, roof materials and inclines, sizes, etc. We customize your solar system by having an on-sight inspection before designing & planning out.',
  },
  {
    name: 'Step 2: Pick your power output',
    description:
      'Usually people go for rooftop solar However, some installations require custom racks away from your home or business. Basically, we just need to know how much electricity you use, or plan to use.',
  },
  {
    name: 'Step 3: We design your installation',
    description:
      'we plan your solar installation to custom fit your needs. Some people want battery storage. Others don’t. Some roofing materials need to be retrofitted. Others don’t. We make sure whatever we install will properly deliver your electricity with maximum efficiency.',
  },
  {
    name: 'Step 4: Payment, Taxes, and Financing',
    description:
      "Many of our customers are eligible for financing, and there are several state and federal tax incentives that can help lower the cost of installation. Your sales representative will discuss all options, and  you pick what works best for you. We don't up-sell you the most expensive system. We’re here to help you find the right system for your budget.",
  },
  {
    name: 'Step 5: Let’s get ready to install.',
    description:
      'It’s time to install your solar panels, battery backups, and whatever else is on your estimate. Installation time can be varied. Please keep in mind that we are dealing with high-voltage electricity, and doing things fast is not ideal. Safety and long-term reliability are more important to us.',
  },
  {
    name: 'Step 6: We connect you to the Grid',
    description:
      'Once your solar panels are installed, we run everything to your main circuit breaker panel. That will help you later for Net Metering. Some of our customers generate enough electricity to sell power back to the grid. Instead of a power bill, they get a power… check. That’s pretty cool.',
  },
  {
    name: 'Step 7: Follow up and Recommendations',
    description:
      'About one month after installation, your sales representative will call you to go over your new power bill, and what you should expect from your solar panels. If you didn’t get a battery backup installed with your panels, your sales representative may recommend battery solutions based on how much extra electricity you’re generating.',
  },
  {
    name: 'Step 8: You’re making Green Energy',
    description:
      'Eight minutes ago, a roaring nuclear fusion reactor set loose radiation that finally reached our planet in the form of light. What we call sunlight, your’e now harnessing the power of the sun, the largest source of power in our solar system, to light, heat, cook, play with your robo-vacuums, and everything else.',
  },
];

export default function AboutSection() {
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-emerald-600 uppercase tracking-wide">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
            What we&apos;re doing at Sopris Solar
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            We&apos;re installing the latest and greatest the solar industry has
            to offer all over Colorado.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
