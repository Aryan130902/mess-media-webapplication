import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom'

// importing icons
import { MessTabs } from '../../constants/data';
import { FaEnvelope, FaPhone } from 'react-icons/fa';


// importing components
import Overview from './Overview/Overview';
import Photo from './Photos/Photo';
import Reviews from './Reviews/Reviews';
import Menu from './Menu/Menu';



const MessProfile = () => {

  const [activeTab, setActiveTab] = useState(1);
  const [messData, setMessData] = useState({});

  let { id } = useParams();

  const fetchMessData = async () => {
    const response = await fetch(`https://mess-media.cyclic.app/api/mess/${id}`);
    const data = await response.json();
    setMessData(data.data);
  };

  

  useEffect(() => {
    fetchMessData();
  }, [id]);

//switching the components
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Overview />;
      case 2:
        return <Reviews />;
      case 3:
        return <Menu />;
      case 4:
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
            <img alt="content" className="object-cover object-center h-full w-full" src={messData.photo} />
          </div>
          <h2 class="text-2xl font-bold text-white mt-6 mb-3">{messData.name}</h2>
          <div className="flex items-center ">
            <FaEnvelope style={{ color: 'white' }} className="mr-2" />
            <span className="leading-relaxed text-white text-sm">{messData.address}</span>
          </div>
          <div className="flex items-center mb-16">
            <FaPhone style={{ color: 'white' }} className="mr-2" />
            <span className="leading-relaxed text-white text-sm">+91 708971****</span>
          </div>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-primary dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">

              {
                MessTabs.map(data => (
                <li className="mr-2" key={data.id}>
                  <button
                    className="text-white inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-gray-300 dark:hover:text-gray-300 "
                    onClick={() => setActiveTab(data.id)}
                  >
                    {data.tab}
                  </button>
                </li>
              ))
              }
            </ul>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default MessProfile;
