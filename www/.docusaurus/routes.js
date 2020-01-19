
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/sagittarius/',
  component: ComponentCreator('/sagittarius/'),
  exact: true,
  
},
{
  path: '/sagittarius/blog',
  component: ComponentCreator('/sagittarius/blog'),
  exact: true,
  
},
{
  path: '/sagittarius/blog/tags',
  component: ComponentCreator('/sagittarius/blog/tags'),
  exact: true,
  
},
{
  path: '/sagittarius/blog/tags/hello',
  component: ComponentCreator('/sagittarius/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/sagittarius/blog/tags/v-1-0-0',
  component: ComponentCreator('/sagittarius/blog/tags/v-1-0-0'),
  exact: true,
  
},
{
  path: '/sagittarius/blog/welcome',
  component: ComponentCreator('/sagittarius/blog/welcome'),
  exact: true,
  
},
{
  path: '/sagittarius/users',
  component: ComponentCreator('/sagittarius/users'),
  exact: true,
  
},
{
  path: '/sagittarius/docs/:route',
  component: ComponentCreator('/sagittarius/docs/:route'),
  
  routes: [
{
  path: '/sagittarius/docs/doc-api-introduction',
  component: ComponentCreator('/sagittarius/docs/doc-api-introduction'),
  exact: true,
  
},
{
  path: '/sagittarius/docs/doc-api-sagittarius-debounce',
  component: ComponentCreator('/sagittarius/docs/doc-api-sagittarius-debounce'),
  exact: true,
  
},
{
  path: '/sagittarius/docs/doc-api-sagittarius-is-empty',
  component: ComponentCreator('/sagittarius/docs/doc-api-sagittarius-is-empty'),
  exact: true,
  
},
{
  path: '/sagittarius/docs/doc-api-sagittarius-random',
  component: ComponentCreator('/sagittarius/docs/doc-api-sagittarius-random'),
  exact: true,
  
},
{
  path: '/sagittarius/docs/doc-api-sagittarius-to-number',
  component: ComponentCreator('/sagittarius/docs/doc-api-sagittarius-to-number'),
  exact: true,
  
},
{
  path: '/sagittarius/docs/doc-api-sagittarius-unique-id',
  component: ComponentCreator('/sagittarius/docs/doc-api-sagittarius-unique-id'),
  exact: true,
  
},
{
  path: '/sagittarius/docs/doc-introduction',
  component: ComponentCreator('/sagittarius/docs/doc-introduction'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
