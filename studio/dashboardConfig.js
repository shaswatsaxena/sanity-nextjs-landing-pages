export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e78657abe1baf65967b3108',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3uzswwab',
                  apiId: '4f8c84c0-1cf4-45d5-add4-7dd41925981d'
                },
                {
                  buildHookId: '5e78657ad59d67f5de8d48dd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6zvsvejj',
                  apiId: 'c82f6dae-787a-4005-90a2-2db0dcb01d64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shaswatsaxena/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6zvsvejj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
