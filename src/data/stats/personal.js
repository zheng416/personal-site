import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-12-25T10:39:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 3,
    link:
      'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Crown Point, IN',
  },
  {
    key: 'status',
    label: 'Current status',
    value: 'Anxious',
  },
  {
    key: 'miles',
    label: 'Miles driven',
    value: '52,732 and counting',
  },
  {
    key: 'color',
    label: 'Favorite color',
    value: 'Teal',
  },
  {
    key: 'sleep',
    label: 'Average hours slept',
    value: '7.3',
  },
  {
    key: 'hobby',
    label: 'New hobby',
    value: 'Photography',
  },
  {
    key: 'music',
    label: 'Music genre',
    value: 'Pop',
  },
  {
    key: 'influencer',
    label: 'Favorite influencer',
    value: 'DisguisedToast',
  },
  {
    key: 'platform',
    label: 'Most used platform',
    value: 'TikTok',
  },
  {
    key: 'geek',
    label: 'Currently geeking',
    value: 'NFTs, VR/AR, CS',
  },
  {
    key: 'languange',
    label: 'First language',
    value: 'Python',
  },
  {
    key: 'languange',
    label: 'Fluent language',
    value: 'Java',
  },
  {
    key: 'emoji',
    label: 'Most used emoji',
    value: '🥺',
  },
  {
    key: 'electronic',
    label: 'Electronic devices count',
    value: '30+',
  },
  {
    key: 'aesthetic',
    label: 'Current aesthetic',
    value: 'Clean, Mono + Pastel',
  },
];

export default data;
