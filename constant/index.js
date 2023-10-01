import { AiFillHome, AiOutlineSearch, AiOutlineHeart, AiOutlineUser, AiOutlineTag } from 'react-icons/ai';
import { RiCommunityLine } from 'react-icons/ri';
import { BsReplyAll } from 'react-icons/bs';
import { BiSolidUserDetail } from 'react-icons/bi';
import { IoCreateOutline } from 'react-icons/io5';

export const sidebarLinks = [
  {
    icon: <AiFillHome />,
    route: '/',
    label: 'Home',
  },
  {
    icon: <AiOutlineSearch />,
    route: '/search',
    label: 'Search',
  },
  {
    icon: <AiOutlineHeart />,
    route: '/activity',
    label: 'Activity',
  },
  {
    icon: <IoCreateOutline />,
    route: '/create-thread',
    label: 'Create Thread',
  },
  {
    icon: <RiCommunityLine />,
    route: '/communities',
    label: 'Communities',
  },
  {
    icon: <AiOutlineUser />,
    route: '/profile',
    label: 'Profile',
  },
];

export const profileTabs = [
  { value: 'threads', label: 'Threads', icon: <BsReplyAll /> },
  { value: 'replies', label: 'Replies', icon: <BiSolidUserDetail /> },
  { value: 'tagged', label: 'Tagged', icon: <AiOutlineTag /> },
];

export const communityTabs = [
  { value: 'threads', label: 'Threads', icon: <BsReplyAll /> },
  { value: 'members', label: 'Members', icon: <BiSolidUserDetail /> },
  { value: 'requests', label: 'Requests', icon: <AiOutlineTag /> },
];
