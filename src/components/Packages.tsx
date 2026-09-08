"use client";

import { useState } from 'react';
import { Check, X } from 'lucide-react';

const tabs = [
  '8-9 STUDENTS',
  '10-12 STUDENTS',
  'COLLEGE GRADUATES',
  'WORKING PROFESSIONALS',
  'CUSTOMISE PLAN',
];

const plans = {
  '8-9 STUDENTS': [
    {
      level: 'STANDARD',
      title: 'Discover',
      price: '₹ 5,500',
      features: [
        { text: 'Psychometric assessment to measure your interests', included: true },
        { text: '1 career counselling session with Mentoria’s expert career coaches', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Invites to live webinars by industry experts', included: true },
        { text: 'Customised reports after each session with education pathways', included: false },
        { text: 'Guidance on studying abroad', included: false },
        { text: 'CV building during internships/graduation', included: false },
      ],
    },
    {
      level: 'PREMIUM',
      title: 'Discover plus+',
      price: '₹ 15,000',
      features: [
        { text: 'Psychometric assessments to measure your interests, personality and abilities', included: true },
        { text: '6 career counselling sessions (1 every year) with Mentoria’s expert career coaches until graduation', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Invites to live webinars by industry experts', included: true },
        { text: 'Customised reports after each session with education pathways', included: true },
        { text: 'Guidance on studying abroad', included: true },
        { text: 'CV building during internships/graduation', included: true },
      ],
    },
  ],
  '10-12 STUDENTS': [
    {
      level: 'STANDARD',
      title: 'Achieve Online',
      price: '₹ 5,999',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { text: '1 career counselling session', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Pre-recorded webinars by industry experts', included: true },
        { text: 'Customised reports after each session with education pathways', included: false },
        { text: 'Guidance on studying abroad', included: false },
        { text: 'CV reviews during internships/graduation', included: false },
      ],
    },
    {
      level: 'PREMIUM',
      title: 'Achieve Plus+',
      price: '₹ 10,599',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { text: '4 career counselling sessions', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Attend live webinars by industry experts', included: true },
        { text: 'Customised reports after each session with education pathways', included: true },
        { text: 'Guidance on studying abroad', included: true },
        { text: 'CV reviews during internships/graduation', included: true },
      ],
    },
  ],
  'COLLEGE GRADUATES': [
    {
      level: 'STANDARD',
      title: 'Ascend Online',
      price: '₹ 6,499',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { text: '1 career counselling session', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Pre-recorded webinars by industry experts', included: true },
        { text: 'Customised reports after each session with information on certificate/online courses', included: false },
        { text: 'Guidance on studying abroad', included: false },
        { text: 'CV reviews for job application', included: false },
      ],
    },
    {
      level: 'PREMIUM',
      title: 'Ascend Plus+',
      price: '₹ 10,599',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { text: '3 career counselling sessions', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Attend live webinars by industry experts', included: true },
        { text: 'Customised reports after each session with information on certificate/online courses', included: true },
        { text: 'Guidance on studying abroad', included: true },
        { text: 'CV reviews for job application', included: true },
      ],
    },
  ],
  'WORKING PROFESSIONALS': [
    {
      level: 'STANDARD',
      title: 'Ascend Online',
      price: '₹ 6,499',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { text: '1 career counselling session', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Pre-recorded webinars by industry experts', included: true },
        { text: 'Customised reports after each session with information on certificate/online courses', included: false },
        { text: 'Guidance on studying abroad', included: false },
        { text: 'CV reviews for job application', included: false },
      ],
    },
    {
      level: 'PREMIUM',
      title: 'Ascend Plus+',
      price: '₹ 10,599',
      features: [
        { text: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { text: '3 career counselling sessions', included: true },
        { text: 'Lifetime access to Knowledge Gateway', included: true },
        { text: 'Attend live webinars by industry experts', included: true },
        { text: 'Customised reports after each session with information on certificate/online courses', included: true },
        { text: 'Guidance on studying abroad', included: true },
        { text: 'CV reviews for job application', included: true },
      ],
    },
  ],
};

const customAddOns = [
  {
    title: 'Knowledge Gateway + Career Helpline Access',
    price: '₹250/month',
    desc: 'Unlock holistic information on your career paths and get direct access to Mentoria\'s experts who will resolve your career-related queries.',
  },
  {
    title: 'One-to-One Session with a Career Expert',
    price: '₹3500 per interaction for 1 hour',
    desc: 'Resolve your career queries and glimpse into your future world through a one-on-one session with an expert.',
  },
  {
    title: 'Overseas Admission Planner',
    price: '₹3000 for a planner with top 10 colleges',
    desc: 'Planning your masters studies? Get unbiased recommendations and details on your future college options.',
  },
  {
    title: 'Interview Prep Session',
    price: '₹2000',
    desc: 'Ace your upcoming interviews with guidance from India\'s top HR experts and increase your chances of landing your dream job.',
  },
  {
    title: 'CV Building',
    price: '₹2000',
    desc: 'Is your CV making a great first impression? Our HR experts will help you build the kind of CV that stands out.',
  },
  {
    title: 'LinkedIn Profile + CV Building',
    price: '₹3500',
    desc: 'Build the kind of profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR experts.',
  },
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeTab === tab
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white text-slate-500 hover:bg-orange-100 hover:text-orange-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      {activeTab !== 'CUSTOMISE PLAN' ? (
        <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
          {plans[activeTab as keyof typeof plans].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex-1 max-w-lg relative flex flex-col"
            >
              {plan.level === 'PREMIUM' && (
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-rose-500 rounded-full z-[-1]" />
              )}
              
              <p className="text-slate-400 font-bold text-xs tracking-wider mb-4 uppercase">{plan.level}</p>
              <h3 className="text-3xl font-bold text-teal-600 mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold text-slate-700 mb-8">{plan.price}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-slate-600' : 'text-slate-400 line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold transition-colors mt-auto">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customAddOns.map((addon, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-16 h-16 bg-orange-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-orange-500 font-bold text-xl">+</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{addon.title}</h3>
              <p className="text-teal-600 font-semibold mb-3">{addon.price}</p>
              <p className="text-slate-500 text-sm mb-6 flex-1">{addon.desc}</p>
              <button className="w-full py-3 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold transition-colors mt-auto text-sm">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
