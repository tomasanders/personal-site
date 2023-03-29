import { useState } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { ReadmeLine } from './ReadmeLine';
import { ReadmeBlock } from './ReadmeBlock';
import { ReadmeHeyBlock } from './ReadmeHeyBlock';
import { ReadmeAboutMeBlock } from './ReadmeAboutMeBlock';
import { ReadmeAboutSiteBlock } from './ReadmeAboutSiteBlock';

export const Readme = () => {
  return (
    <>
      <ReadmeLine lineNumber={1} isBlank isComment content="// Click on the arrows to expand/collapse the text!" />

      <ReadmeLine lineNumber={2} isBlank />

      <ReadmeHeyBlock />

      <ReadmeLine lineNumber={5} isBlank />

      <ReadmeAboutMeBlock />

      <ReadmeLine lineNumber={9} isBlank />

      <ReadmeAboutSiteBlock />
    </>
  );
};
