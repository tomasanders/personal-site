import { ReadmeLine } from './Readme/ReadmeLine';
import { ReadmeHeyBlock } from './Readme/ReadmeHeyBlock';
import { ReadmeAboutMeBlock } from './Readme/ReadmeAboutMeBlock';
import { ReadmeAboutSiteBlock } from './Readme/ReadmeAboutSiteBlock';

export const Readme = () => {
  return (
    <>
      <ReadmeLine lineNumber={1} low isBlank isComment content="// Click on the arrows to expand/collapse the text!" />

      <ReadmeLine lineNumber={2} low isBlank />

      <ReadmeHeyBlock />

      <ReadmeLine lineNumber={5} low isBlank />

      <ReadmeAboutMeBlock />

      <ReadmeLine lineNumber={9} low isBlank />

      <ReadmeAboutSiteBlock />
    </>
  );
};
