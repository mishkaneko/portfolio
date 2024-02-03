import { IoPeople, IoCarSport, IoTime } from 'react-icons/io5';
import { MdOutlinePayment, MdOutlineRateReview, MdHistoryEdu, MdAttachMoney } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { FaRoute, FaChartArea, FaChartLine } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import React from 'react';
import './features.css';

const RideLinkerFeatures = () => {
  const featuresArr = [
    {
      person: 'Passenger',
      content: [
        { icon: IoPeople, featureName: 'Match Ride Buddy' },
        { icon: IoCarSport, featureName: 'Request Ride' },
        { icon: IoTime, featureName: 'Realtime Tracking' },
        { icon: MdOutlinePayment, featureName: 'Payment Integration' },
        { icon: MdOutlineRateReview, featureName: 'Review Ride Buddy' },
        { icon: MdHistoryEdu, featureName: 'View Ride History' },
      ],
      className: 'passenger-feature',
    },
    {
      person: 'Driver',
      content: [
        { icon: TiTick, featureName: 'Accept Jobs' },
        { icon: FaRoute, featureName: 'View Suggested Route' },
        { icon: IoTime, featureName: 'Realtime Tracking' },
        { icon: MdOutlinePayment, featureName: 'Payment Handling' },
        { icon: MdHistoryEdu, featureName: 'View Earning History' },
        { icon: FaChartArea, featureName: 'View Earning Summary' },
      ],
      className: 'driver-feature',
    },
    {
      person: 'Admin',
      content: [
        { icon: FaPeopleGroup, featureName: 'User Account Management' },
        { icon: IoCarSport, featureName: 'Ride Activity Management' },
        { icon: MdAttachMoney, featureName: 'Driver Payout Recording' },
        { icon: FaChartLine, featureName: 'Data Analysis' },
      ],
      className: 'admin-feature',
    },
  ];

  return (
    <div className="feature-container">
      {featuresArr.map((section, outerIndex) => (
        <div
          key={outerIndex}
          className={`project-container feature-content ${section.className}`}
          data-aos="zoom-out"
          data-aos-duration="1500">
          <p className="feature-title">{section.person}</p>

          {section.content.map((feature, innerIndex) => (
            <div key={innerIndex} className="feature-item">
              <span className="features-icon-container">{React.createElement(feature.icon)}</span>
              <span className="features-name">{feature.featureName}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RideLinkerFeatures;
