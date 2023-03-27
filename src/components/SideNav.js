import Link from 'next/link';

import { IoDocumentTextOutline } from 'react-icons/io5';
import { VscGithubAlt } from 'react-icons/vsc';
import { SlSocialLinkedin } from 'react-icons/sl';
import { ContactDrawer } from './ContactDrawer';

export const SideNav = () => {
  return (
    <div className="bg-sideBg text-sideIcon flex flex-col items-center py-2 row-start-2 row-span-full col-start-1 col-span-1">
      <ContactDrawer />

      <div className="flex flex-col gap-4 text-3xl mt-auto">
        <Link href='/resume' target='_blank'>
          <IoDocumentTextOutline />
        </Link>

        <Link href='https://www.github.com/tomasanders' target='_blank'>
          <VscGithubAlt />
        </Link>

        <Link href='https://www.linkedin.com/in/thomasasanders/' target='_blank'>
          <SlSocialLinkedin />
        </Link>
      </div>
    </div>
  );
};
