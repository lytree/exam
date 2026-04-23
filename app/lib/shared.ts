import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RootProvider } from 'fumadocs-ui/provider/react-router';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

export const appName = '题库 ◦ 柳';
export const docsRoute = '/docs';
export const docsContentRoute = '/llms.mdx/docs';
export const docsApiRoute = '/api/docs';

export { RootProvider, DocsLayout, HomeLayout };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}