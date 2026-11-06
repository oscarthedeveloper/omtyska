import Link from 'next/link';
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { LessonIntro, RelatedLessons } from './LessonGuide';
import MeaningSwitch from './MeaningSwitch';
import SentenceSteps from './SentenceSteps';
import SentenceTransform from './SentenceTransform';
import SentenceFrame from './SentenceFrame';
import CaseBox from './CaseBox';
import AudioButton from './AudioButton';
import Drill from './Drill';
import MiniQuiz from './MiniQuiz';

function Highlight({ children }: { children: ReactNode }) {
  return <span className="mdxHighlight">{children}</span>;
}

function heading(Tag: 'h2' | 'h3' | 'h4') {
  return function Heading({ id, children, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
    return (
      <Tag id={id} {...rest} className="anchorHeading">
        {children}
        {id ? (
          <a className="anchorLink" href={`#${id}`} aria-label="Direktlänk till avsnittet">
            #
          </a>
        ) : null}
      </Tag>
    );
  };
}

function Anchor({ href = '', children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const internal = href.startsWith('/') && !href.startsWith('//');
  if (internal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export const mdxComponents = {
  LessonIntro,
  RelatedLessons,
  MeaningSwitch,
  SentenceSteps,
  SentenceTransform,
  SentenceFrame,
  CaseBox,
  AudioButton,
  Drill,
  MiniQuiz,
  Highlight,
  a: Anchor,
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
};

export default mdxComponents;
