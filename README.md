# react-shared

## Initialisation du projet

Installer le project : `make install-all`

(Comprend le build-core/build-web)

## Autre commandes

Etablir les liens symboliques : `make link-all`

Builder le core : `make build-core`

Builder le web : `make build-web`

Builder l'app ios ( Application mode Ad Hoc ) : `make build-ios`

Builder l'app android : `make build-android`

## Folder structure

```bash
.
├── GUIDELINES.md
├── LICENSE
├── README.md
├── core
│   ├── package.json
│   ├── rollup.config.js
│   ├── src
│   │   ├── configureStore.ts
│   │   ├── index.ts
│   │   ├── root.saga.ts
│   │   ├── store.ts
│   │   └── users
│   │       ├── actions
│   │       │   └── users.action.ts
│   │       ├── api
│   │       │   └── users.api.ts
│   │       ├── reducers
│   │       │   └── users.reducer.ts
│   │       └── sagas
│   │           └── users.saga.ts
│   ├── tsconfig.json
│   ├── tslint.json
│   ├── typedoc.json
│   └── yarn.lock
├── lerna.json
├── mobile
│   ├── App.tsx
│   ├── ios
│   ├── android
│   ├── app.json
│   ├── babel.config.js
│   ├── doczrc.js
│   ├── index.js
│   ├── jest.config.js
│   ├── metro.config.js
│   ├── package.json
│   ├── rn-cli.config.js
│   ├── setupTest.ts
│   ├── src
│   │   ├── __tests__
│   │   │   └── App.spec.tsx
│   │   ├── assets
│   │   │   └── styles
│   │   │       └── theme.ts
│   │   ├── navigators
│   │   │   ├── home.navigation.tsx
│   │   │   ├── package.json
│   │   │   └── root.navigation.tsx
│   │   ├── screens
│   │   │   ├── login
│   │   │   │   ├── containers
│   │   │   │   ├── package.json
│   │   │   │   └── views
│   │   │   └── package.json
│   │   └── shared-components
│   │       ├── package.json
│   │       └── text
│   │           ├── __mdx__
│   │           ├── components
│   │           └── package.json
│   ├── tsconfig.jest.json
│   ├── tsconfig.json
│   ├── tslint.json
│   ├── yarn-error.log
│   └── yarn.lock
├── package.json
├── web
│   ├── README.md
│   ├── doczrc.js
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src
│   │   ├── App.css
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── react-app-env.d.ts
│   │   ├── serviceWorker.ts
│   │   └── shared-components
│   │       └── button
│   │           ├── __mdx__
│   │           ├── components
│   │           └── package.json
│   ├── tsconfig.json
│   ├── tslint.json
│   └── yarn.lock
└── yarn.lock
```

## Ajouter une nouvelle feature

Création d'une fonctionnalité dans le projet mobile ou web :

```bash
web/mobile ── <feature-name>
       ├── components
       │   └── sample.view.js
       ├── containers
       │   └── sample.container.js
       └── styles
           └── sample.styles.js
```

Création d'une fonctionnalité dans le projet core :

```bash
core ── <feature-name>
    	├── actions
    	│   ├── sample.action.js
    	│   └── sample.action.types.js
    	├── reducers
    	│   └── sample.reducer.js
    	└── sagas
    	     └── sample.saga.js
```
