---
id: doc-getting-started
title: Getting Started
sidebar_label: Getting Started
---

- Clone the project: `git clone --depth=1 https://github.com/Gherciu/multipack.git <YOUR_PROJECT_NAME>`
- Setup project: `npm install`

Running `npm run link:packages` will installing all packages dependencies and linking any cross-dependencies. This command is crucial, as it allows you to use your package names in `require()` as if the packages were already existing and available in your `node_modules` folder.
