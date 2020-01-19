export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "sagittarius",
      "logo": {
        "alt": "sagittarius",
        "src": "img/logo.png"
      },
      "links": [
        {
          "to": "docs/doc-introduction",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/Gherciu/sagittarius",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting started",
              "to": "docs/doc-introduction"
            },
            {
              "label": "API Reference",
              "to": "docs/doc-api-introduction"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "User Showcase",
              "to": "users"
            },
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/sagittarius"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/Gherciu/sagittarius"
            }
          ]
        }
      ],
      "logo": {
        "href": "https://gherciu.github.io/",
        "alt": "Gherciu Gheorghe Open Source Logo",
        "src": "img/organisation-logo.png"
      },
      "copyright": "Copyright © 2020. Gherciu Gheorghe"
    }
  },
  "title": "sagittarius",
  "tagline": "🎯 A set of javascript most used utils.",
  "url": "https://gherciu.github.io",
  "baseUrl": "/sagittarius/",
  "favicon": "img/logo.png",
  "organizationName": "Gherciu",
  "projectName": "sagittarius",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\User\\Desktop\\projects\\sagittarius\\www\\sidebars.js",
          "editUrl": "https://github.com/Gherciu/sagittarius/edit/master/www/"
        },
        "theme": {
          "customCss": "C:\\Users\\User\\Desktop\\projects\\sagittarius\\www\\src\\css\\custom.css"
        }
      }
    ]
  ]
};