import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
      url: '/',
      transparentMode: "always",
    },
    links: [
      { text: '常识', url: '/docsd/commonsense/' },
      { text: '资料分析', url: '/docs/dataanalysis/' },
      { text: '言语理解', url: '/docs/inferring/' },
      { text: '数量', url: '/docs/quantity/' },
      { text: '判断推理', url: '/docs/lalognosis/' },
      { text: '申论', url: '/docs/political/' },
      { text: '模考', url: '/docs/fenbi/' },
    ],
  };
}