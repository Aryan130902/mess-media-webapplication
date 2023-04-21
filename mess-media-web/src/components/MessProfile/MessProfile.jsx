import React, { useState } from 'react';
import { MessTabs } from '../../constants/data';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Overview from './Overview/Overview';
import Photo from './Photos/Photo';





const MessProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'photos':
        return <Photo />;
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className=" rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="/Mess_header.svg" />
          </div>
          <h2 class="text-2xl font-bold text-white mt-6 mb-3">Ganesh</h2>
          <div className="flex items-center ">
            <FaEnvelope style={{ color: 'white' }} className="mr-2" />
            <span className="leading-relaxed text-white text-sm">ganeshMess1345@gmail.com</span>
          </div>
          <div className="flex items-center mb-16">
            <FaPhone style={{ color: 'white' }} className="mr-2" />
            <span className="leading-relaxed text-white text-sm">+917089716980</span>
          </div>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-primary dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              {MessTabs.map(data => (
                <li className="mr-2" key={data.id}>
                  <button
                    className={`text-white inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-gray-300 dark:hover:text-gray-300 ${
                      activeTab === data.id ? 'border-primary' : ''
                    }`}
                    onClick={() => setActiveTab(data.id)}
                  >
                    {data.tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default MessProfile;
