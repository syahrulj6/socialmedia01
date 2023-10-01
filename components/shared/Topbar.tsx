import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export default function Topbar() {
  return (
    <nav className="topbar">
      <Link href={'/'} className="flex items-center gap-4">
        <AiFillHome className="text-white text-heading2-semibold" />
        <p className="text-light-1 text-heading2-bold max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="lg:block md:hidden xs:hidden sm:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer text-light-2 text-heading3-bold">
                <BiLogOut />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: 'py-2 px-4',
            },
          }}
        />
      </div>
    </nav>
  );
}
