import { ArrowTrendingUpIcon, ChartBarIcon, CloudArrowUpIcon, GiftIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CakeIcon, CalendarIcon, ClockIcon, CogIcon, CurrencyPoundIcon, EyeIcon, FaceSmileIcon, KeyIcon, MapIcon, MapPinIcon, ScaleIcon, StarIcon, TableCellsIcon, TruckIcon, TvIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
    {
        title: 'Competitive Pay:',
        description: 'Earn a solid basic wage per hour plus additional delivery costs to cover your petrol expenses. We believe in fair compensation for your hard work.',
        icon: ArrowTrendingUpIcon,
      },
      {
        title: 'Flexible Working Hours:',
        description: 'Enjoy the freedom to set your own schedule. Work as much or as little as you want, giving you the flexibility to balance work with your life.',
        icon: ClockIcon,
      },
      {
        title: 'Guaranteed Pay:',
        description: 'At SwiftBytes, your time is valuable. We offer guaranteed pay, ensuring that your efforts are always rewarded, regardless of order volume.',
        icon: CurrencyPoundIcon,
      },
      {
        title: 'Customer Focus:',
        description: 'Join a team that prioritizes customer satisfaction. Your role goes beyond just deliveries; you\'re an essential part of creating a positive and reliable experience for our customers.',
        icon: ChartBarIcon,
      },
      {
        title: 'Versatility:',
        description: 'SwiftBytes offers a variety of opportunities. In addition to deliveries, engage in promotional work to boost your income and become an ambassador for local businesses. Earn commission on promotional activities!',
        icon: CogIcon,
      },
      {
        title: 'Driver Portal:',
        description: 'Access your own dedicated driver portal where you can seamlessly accept jobs, view your pay details, and book timeslots that suit your schedule. SwiftBytes puts the control in your hands.',
        icon: EyeIcon,
      },
      {
        title: 'Weekly Pay:',
        description: 'Enjoy the convenience of weekly pay, ensuring that you receive your hard-earned money on a regular and reliable basis.',
        icon: CalendarIcon,
      },
      {
        title: 'Dynamic Work Environment:',
        description: 'SwiftBytes offers a dynamic work experience. You might find yourself working with different restaurants, providing variety and excitement in your daily tasks.',
        icon: UserCircleIcon,
      },
      {
        title: 'Choose Your Territory:',
        description: 'Say goodbye to competition for places. Work in your preferred area without the worry of overlapping with other drivers. SwiftBytes values your choice of working environment.',
        icon: MapPinIcon,
      },
      {
        title: 'Work Where You Like:',
        description: 'Whether you prefer the bustling city streets or the quiet suburbs, SwiftBytes gives you the freedom to work in areas that suit your preferences.',
        icon: MapIcon,
      },
  ];
  

export default function Sales() {
    const [start, setStart] = useState(false);

    const Navigate = useNavigate();
    




    if (start) {
        Navigate('/driversignup/application');
    }


  return (
    <div className="overflow-hidden bg-gradient-to-t from-transparent from-0% via-blue-100 to-fuchsia-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
                <img className="h-30 w-auto sm:h-30" src="bytes.png" alt="SwiftBytes" />
              <p className="mt-6 text-lg leading-8 font-bold text-black">
              Join SwiftBytes - Drive Your Success!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-purple-600" aria-hidden="true" />
                      {feature.title}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <button onClick={()=> setStart(true)} className="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-900 hover:bg-purple-700">
            Sign Up
            <CloudArrowUpIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <img
            src="screenshot1.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
       

      </div>
    </div>
  )
}
