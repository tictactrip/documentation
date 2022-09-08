import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c20'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '361'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f84'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '350'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '643'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '635'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3b2'),
    exact: true
  },
  {
    path: '/api/',
    component: ComponentCreator('/api/', '01a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '874'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a1f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '4c1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2c5'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '05f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'd43'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fc4'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '4a4'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '6b3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '99d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ba7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3af'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'de1'),
    routes: [
      {
        path: '/docs/category/how-to-guides',
        component: ComponentCreator('/docs/category/how-to-guides', '04c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/reference',
        component: ComponentCreator('/docs/category/reference', '8c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greeting',
        component: ComponentCreator('/docs/greeting', 'ea0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-to Guides/congratulations',
        component: ComponentCreator('/docs/How-to Guides/congratulations', '4b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-to Guides/create-a-blog-post',
        component: ComponentCreator('/docs/How-to Guides/create-a-blog-post', '519'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-to Guides/create-a-document',
        component: ComponentCreator('/docs/How-to Guides/create-a-document', 'efa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-to Guides/create-a-page',
        component: ComponentCreator('/docs/How-to Guides/create-a-page', '7de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-to Guides/deploy-your-site',
        component: ComponentCreator('/docs/How-to Guides/deploy-your-site', '246'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-to Guides/markdown-features',
        component: ComponentCreator('/docs/How-to Guides/markdown-features', '5d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Reference/manage-docs-versions',
        component: ComponentCreator('/docs/Reference/manage-docs-versions', '3e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Reference/translate-your-site',
        component: ComponentCreator('/docs/Reference/translate-your-site', '274'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd3b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
