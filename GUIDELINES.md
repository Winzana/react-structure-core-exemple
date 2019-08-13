# Règles de développement React

# Conventions de nommage

- Un container : <feature.name>.container.js
   - Une view : <feature.name>.view.js
   - Un component standalone : <feature.name>.js
- Classe d'api : <feature.name>.api.js
- Un HOC : <feature.name>.hoc.js
- Un Hook : <feature.name>.hook.js
- Feuille de style : <feature.name>.styles.js  |  `eg : const styleSheet=() =>({...})`
- Service : <feature.name>.service.js  |  `eg : mapData()`
- Un service utilitaire: <feature.name>.util.js    |  `eg : formatDate()`
- Layout:  <feature.name>.layout.js

Nom de dossier : Tout en minuscule séparés pas un -
`Eg : shared-component`

# Dossier

Pour react-native: Penser à utiliser les "name" dans les packages.json pour faire des imports explicites :

```json
{
  "name": "@screens"
}
import xyz from "@screens/xyz"
```

# Quelques règles

## Ne pas stocker de tableau

Ne pas stocker de tableau dans le redux store, mais plutot des objets. Normaliser les tableau pour les transformer en objet à l'aide du normalizr.
https://github.com/paularmstrong/normalizr
L'objectif est de transformer ce genre de tableau :

```javascript
[
  { id: 254, firstName: 'John', lastName: 'Khon' },
  { id: 252, firstName: 'Lukas', lastName: 'Eren' },
  { id: 251, firstName: 'Peter', lastName: 'Andrews' },
];
```

en cet objet :

```javascript
{
    254: { id: 254, firstName: "John", lastName: "Khon"},
    252: { id: 252, firstName: "Lukas", lastName: "Eren"},
    251: { id: 251, firstName: "Peter", lastName: "Andrews"},
}
```

Cela permet d'éviter les filters, et simplifie les processus de suppression et d'accès d'un élément.

## Respecter le pattern Smart&Dump component

Ce pattern consiste à créer un component contenant la logique et un component contenant la vue. L'objectif est que chaque component n'est qu'un seul rôle (Single Responsability Principle). Le container s'occupe de la d'affichage, des actions, et la view ne fait qu'afficher.
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

```jsx
import React from "react";

const AwesomeContainer = ({}) => (

    const { users, getUsers } = useUsers();
    let doAwesomeStuff = useCallback(()=>{
        // do so much stuff
    });

    return(
        <AwesomeView
            doAwesomeStuff={doAwesomeStuff}
            users={users}
        />
    );
);
export default AwesomeContainer;
```

Et la vue :

```jsx
import React from 'react';
import { Button } from '@material-ui/core';

const AwesomeView = React.memo(({ doAwesomeStuff }) => (
  <div>
    <Button onClick={doAwesomeStuff}>Do Awesome Stuff !</Button>
  </div>
));
export default AwesomeView;
```

## Ne pas créer de fonction dans un render

_A éviter :_

```jsx
render() {
    return (
        <AwesomeComponent
            myAwesomeHandler={(e) => this.setState({value : e.target.value })}
        />
    );
}
```

Préférer créer une fonction dans le component parent et l'instancier dans le component Enfant comme ci-dessous.

```jsx
render() {
    return (
        <AwesomeComponent
            myAwesomeHandler={this.awesomeHandler}
        />
    );
}
```

## Préférer les components stateless

Wrapper les components stateless avec Memo.

```jsx
import React, { useState, useCallback } from 'react';
import { Button } from '@material-ui/core';
const ToggleComponent = () => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen(!open);
  });
  return (
    <div>
      <span>{open}</span>
      <Button onClick={toggle}>Toggle</Button>
    </div>
  );
};
export default AwesomeView;
```

## Optimiser les renders

Wrapper les stateless component avec le HOC pure de recompose, ou les Hooks de react lorsqu'ils seront disponibles dans une version stable (actuellement 16.8.0-alpha1 ) :

```jsx
import React from 'react';
import { Button } from '@material-ui/core';
const ToggleComponent = ({ toggle, open }) => (
  <div>
    <Button onClick={toggle}>Toggle</Button>
  </div>
);
export default React.memo(AwesomeView);
```

Hooks : https://reactjs.org/docs/hooks-intro.html

## ReactJS : Appliquer le code splitting avec Loadable

Pour React.js, utiliser le code splitting avec loadable pour optimiser les temps de chargement. En utilisant loadable, les components seront chargé à la volé lors de la première visite par l'utilisateur. Cela permet de dimininuer la taille des fichiers .js a chargé lors de l'initialisation de l'app.
https://github.com/jamiebuilds/react-loadable
Par exemple sur un menu, charger les routes lors des visites par l'utilisateurs.

## Ne pas passer d'objet à un component enfant

Préférer passer un index de l'objet ou un ID plutôt que l'objet entier, cela pourrait entrainer des issues au niveau du render. En récupérant l'ID le composant enfant peut récupérer l'objet directement à la source : Redux Store.

## This

Utiliser les arrow functions pour les click handlers, etc... Plutôt que des bind dans le constructeur.

## Utiliser les selecteurs

Lorsque qu'un component est mappé avec Redux, utiliser les selecteurs de reselect pour mappé les propriétés :

```jsx
const valueSelector = (state) => state.value; #reducer.js
const mapStateToProps = state => { #component.js
    return {value: valueSelector}
}
```

https://github.com/reduxjs/reselect
