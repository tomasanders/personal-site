import Link from 'next/link';

import { IoDocumentTextOutline } from 'react-icons/io5';
import { VscGithubAlt } from 'react-icons/vsc';
import { SlSocialLinkedin } from 'react-icons/sl';
import { ContactDrawer } from './ContactDrawer';

export const SideNav = () => {
  return (
    <div className="flex flex-col bg-sideBg py-4 px-2 text-sideIcon">
      <ContactDrawer />

      <div className="flex flex-col gap-4 text-4xl mt-auto">
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
