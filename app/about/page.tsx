import path from 'path';
import { Fragment, Suspense } from 'react';
import { readMDXFile } from 'app/blog/utils';
import { CustomMDX } from '../components/mdx';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About DroidPills',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <CustomMDX source={content} />
      <Suspense fallback="loading..">
      </Suspense>
    </Fragment>
  );
}
