import Link from 'next/link';

import { ContactDrawer } from './ContactDrawer';

import { IoDocumentTextOutline } from 'react-icons/io5';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithubAlt } from 'react-icons/vsc';

export const SideNav = () => {
  return (
    <div className="flex flex-col items-center col-span-1 col-start-1 row-start-2 py-2 bg-sideBg text-sideIcon row-span-full">
      <ContactDrawer />

      <div className="flex flex-col gap-4 mt-auto text-3xl">
        <Link href='/resume' target='_blank'><IoDocumentTextOutline /></Link>

        <Link href='https://www.github.com/tomasanders' target='_blank'><VscGithubAlt /></Link>

        <Link href='https://www.linkedin.com/in/thomasasanders/' target='_blank'><SlSocialLinkedin /></Link>
      </div>
    </div>
  );
};
