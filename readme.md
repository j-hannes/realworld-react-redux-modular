![Build Status](https://travis-ci.org/j-hannes/realworld-react-redux-modular.svg?branch=master)

# ![RealWorld Example App](logo.png)

> ### React-redux codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

I am aware of the existing [React + Redux Real World Example App](https://github.com/gothinkster/react-redux-realworld-example-app) but for educational purposes, to use a handsome composition of libraries but most importantly to follow a modular architecture with encapsulated modules as described in [Jack Hsu's excellent blog post](https://jaysoo.ca/2016/02/28/organizing-redux-application) I still want to create this application here myself.

---

> ### Specs: [FRONTEND_INSTRUCTIONS](FRONTEND_INSTRUCTIONS.md)

Based on [create-react-app](https://github.com/facebookincubator/create-react-app) (no-escape yet).

It uses the following library stack:
  * [x] [React](https://facebook.github.io/react)
  * [x] [Redux](http://redux.js.org)
  * [x] [Immutable](https://facebook.github.io/immutable-js)
  * [x] [Reselect](https://github.com/reactjs/reselect)
  * [x] [Redux-Saga](https://github.com/redux-saga/redux-saga)
  * [ ] ~~[Styled components](https://styled-components.com)~~ (not for now, migration too complex)
  * [x] [Prettier](https://github.com/prettier/prettier) (uses as editor plugin)
  * [x] [Eslint](http://eslint.org)

The first iteration will be test-free. :smile:

In a second iteration I will add:
  * [ ] [Jest](https://facebook.github.io/jest) unit (and integration?) testing
  * [ ] [Cypress](https://www.cypress.io) end-to-end testing

In a third iteration I might add
  * [ ] [Flow](https://flow.org)

I might also experiment in using [redux-observable](https://redux-observable.js.org) instead of redux-saga.

Later I might also port this application to [Elm](http://elm-lang.org) and/or play with a Haskell backend.


### [RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **React-redux** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **React-redux** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.


# How it works

This implementation uses a modular segmentation of application logic, so each
feature is added as module, containing components, actions, reducers, sagas,
selectors etc that concerns around that feature. Each module defines explicitly
what is exported, which hides implementation details and gives exposure to what
will affect things outside the module on change.

# Getting started

```
❯ npm install
❯ npm start
```
