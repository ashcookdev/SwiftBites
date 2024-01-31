import { CloudArrowUpIcon, GiftIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CakeIcon, ClockIcon, CurrencyPoundIcon, EyeIcon, FaceSmileIcon, KeyIcon, ScaleIcon, StarIcon, TableCellsIcon, TruckIcon, TvIcon, UserIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
    {
      name: 'Introduction.',
      description:
        'Welcome to SwiftBytes, where we go beyond traditional delivery services. We are not just a delivery platform; we are your partner in complete business management. Tired of high commissions and hidden fees? Say goodbye to those challenges with SwiftBytes - your dedicated partner in seamless, cost-effective, and efficient food delivery. But that is not all. We offer a full-scale business management system, including advanced stock control features, providing you unparalleled insights into your operations and profits.',
      icon: FaceSmileIcon,
    },
    {
      name: 'Transparent Pricing:',    
      description: 'At SwiftBytes, we believe in transparent and fair pricing. You pay a monthly fee for our software and forget about hefty commissions. Pay only a straightforward admin fee for each hour your dedicated driver works, ensuring a stable basic wage, along with a minimal delivery fee per order. No surprises, just clear, predictable costs.',
      icon: CurrencyPoundIcon,
    },
    {
      name: 'Dedicated Drivers for Your Restaurant:',
      description: 'With SwiftBytes, we provide exclusive drivers for your restaurant, ensuring reliability, consistency, and a seamless extension of your brand. Your admin fee covers the cost of a dedicated driver working specifically for your business.',
      icon: TruckIcon,
    },
    {
      name: 'Full Driver Tracking Capabilities:',
      description: 'Track your deliveries in real-time with our advanced GPS technology. Know exactly where your orders are and estimate accurate delivery times to enhance your customer experience.',
      icon: EyeIcon,
    },
    {
      name: 'Easy-to-Use Portal:',
      description: 'Take control of your orders and drivers effortlessly through our intuitive portal. Manage everything from delivery schedules to driver assignments, all in one place.',
      icon: PlusCircleIcon,
    },
    {
      name: 'Driver Rating System:',
      description: 'Choose the best drivers for your restaurant based on performance ratings. Our transparent rating system ensures that you have the cream of the crop delivering for you, enhancing the overall customer experience.',
      icon: StarIcon,
    },
    {
      name: 'Cost-Effective Promotions:',
      description: 'SwiftBytes drivers are not just delivery personnel – they can be powerful ambassadors for your brand. Use them for promotions, discounts, and special offers to attract more customers.',
      icon: GiftIcon,
    },
    {
      name: 'Rigorous Driver Vetting Process:',
      description: 'Rest easy knowing that only the best drivers are representing your brand. Our thorough vetting process includes interviews and comprehensive background checks, ensuring the safety and reliability of our drivers.',
      icon: LockClosedIcon,
    },
    {
      name: 'Unbeatable Affordability:',
      description: 'SwiftBytes is not just about quality; it\'s about affordability too. Enjoy our services at a fraction of the cost compared to our competitors, maximizing your profits without compromising on service excellence.',
      icon: CurrencyPoundIcon,
    },
    {
      name: 'Full Stock Control System:',
      description: 'Take your restaurant management to the next level with SwiftBytes\'s full stock control system. Know to the penny how much profit you are making on each item in real-time. Our point of sale system, coupled with financial breakdowns, provides unparalleled insights into your business performance.',
      icon: ScaleIcon,
    },
    {
      name: 'API Integration with Delivery Companies:',
      description: 'SwiftBytes seamlessly integrates with APIs from other delivery companies, offering you flexibility and expanded reach. Expand your customer base by tapping into multiple delivery platforms, all managed effortlessly through SwiftBytes.',
      icon: KeyIcon,
    },
    {
      name: 'Table Booking System:',
      description: 'For restaurants, SwiftBytes offers a sophisticated table booking system that integrates seamlessly with technology from VersaSoft Technologies, our sister company. Enhance your dining experience by managing both delivery and in-house reservations in one unified system.',
      icon: TableCellsIcon,
    },
    {
      name: 'Wholesaler Partnerships:',
      description: 'We go beyond delivery software. Partnering with wholesalers, we ensure you get the best prices on your ingredients, optimizing your costs and maximizing your profits.',
      icon: CakeIcon,
    },
    {
      name: 'Limited-Time Offer:',
      description: 'Join SwiftBytes Now and Enjoy a Transparent, Commission-Free Trial! Ready to take your restaurant\'s delivery service to the next level? Sign up with SwiftBytes today and experience the future of food delivery – where your success is our priority.',
      icon: ClockIcon,
    },
  ];
  
  

export default function Sales() {
    const [start, setStart] = useState(false);

    const Navigate = useNavigate();
    




    if (start) {
        Navigate('/sales/pricing');
    }


  return (
    <div className="overflow-hidden bg-gradient-to-t from-transparent from-0% via-cyan-100 to-fuchsia-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
                <img className="h-30 w-auto sm:h-30" src="bytes.png" alt="SwiftBytes" />
              <p className="mt-6 text-lg leading-8 text-black font-bold">
              Revolutionizing Food Delivery for Restaurants and Takeaways with Zero Commissions!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-purple-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <button onClick={()=> setStart(true)} className="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-900 hover:bg-purple-700">
            Get started
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
