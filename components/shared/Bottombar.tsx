'use client';
import Link from 'next/link';
import { sidebarLinks } from '../../constant';
import { usePathname } from 'next/navigation';

export default function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          return (
            <div>
              <Link href={link.route} key={link.label} className={`bottombar_link hover:bg-primary-500 duration-300 ${isActive && 'bg-primary-500'}`}>
                <div className="text-white text-heading3-bold">{link.icon}</div>
                <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
