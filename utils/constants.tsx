import { BsCode } from 'react-icons/bs';
import { FaPaw, FaTshirt, FaLaughSquint } from 'react-icons/fa';
import { MdTheaterComedy, MdSportsBasketball } from 'react-icons/md';
import { IoGameController, IoMusicalNotes } from "react-icons/io5";
import { TbSalad } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'

export const topics = [
  {
    name: 'development',
    icon: <BsCode />,
  },
  {
    name: 'comedy',
    icon: <MdTheaterComedy />,
  },
  {
    name: 'gaming',
    icon: <IoGameController />,
  },
  {
    name: 'entertainment',
    icon: <FaLaughSquint />,
  },
  {
    name: 'food',
    icon: <TbSalad />,
  },
  {
    name: 'fashion',
    icon: <FaTshirt />,
  },
  {
    name: 'animals',
    icon: <FaPaw />,
  },
  {
    name: 'sports',
    icon: <MdSportsBasketball />,
  },
  {
    name: 'music',
    icon: <IoMusicalNotes />,
  },
  {
    name: 'finance',
    icon: <GiReceiveMoney />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'TikTik for Good','Advertise','Developers','Transparency','TikTik Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]