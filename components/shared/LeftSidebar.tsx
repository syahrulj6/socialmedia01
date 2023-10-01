'use client';

import Link from 'next/link';
import { sidebarLinks } from '../../constant/index';
import { usePathname, useRouter } from 'next/navigation';
import { SignOutButton, SignedIn, useAuth } from '@clerk/nextjs';
import { BiLogOut } from 'react-icons/bi';

export default function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          if (link.route === '/profile') link.route = `${link.route}/${userId}`;

          return (
            <>
              <Link href={link.route} key={link.label} className={`leftsidebar_link hover:bg-primary-500 duration-300 ${isActive && 'bg-primary-500'}`}>
                <div className="text-white text-heading3-bold">{link.icon}</div>
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            </>
          );
        })}
      </div>
      <div className="mt-10 mx-6 hover:bg-neutral-800 rounded-lg duration-300">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push('/sign-in')}>
            <div className="flex cursor-pointer gap-4 p-4">
              <BiLogOut className="text-light-2 text-heading3-bold " />
              <p className="text-light-2 max-lg:hidden text-body-medium">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}
