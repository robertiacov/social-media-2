import React from 'react'
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover: NextPage = () => {
    const router = useRouter();
    const { topic } = router.query;

    const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-[#663399] px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-[#663399]';
    const topicStyle = 'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-black group bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800';

  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
        <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
            Popular Topics
        </p>
        <div className='flex gap-3 flex-wrap'>
        {topics?.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ? activeTopicStyle : topicStyle}>
              <span className='font-bold text-2xl xl:text-md'>
                {item.icon}
              </span>
              <span className={`font-medium text-md hidden xl:block capitalize`}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
        </div>
    </div>
  )
}

export default Discover