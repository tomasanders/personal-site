import { ReadmeLine } from './Readme/ReadmeLine';
import { ReadmeHeyBlock } from './Readme/ReadmeHeyBlock';
import { ReadmeAboutMeBlock } from './Readme/ReadmeAboutMeBlock';
import { ReadmeAboutSiteBlock } from './Readme/ReadmeAboutSiteBlock';

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
