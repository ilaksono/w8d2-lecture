# React - Advanced Topics

## Content

- React Router V5

  - How to use React Router
  - Passing props
  - Url Parameter
  - Query String
  - Private Route

- useContext

## React Router V5

### Why use React Router?

React Router allows us to build a single-page web application with client-side navigation without the page refreshing as the user navigates. React router also allows the user to utilize the back button and the refresh page while maintaining the correct view of the application.

- The back-end is an API, it will not do any routing involving client-side navigation
- In React, a page reload will reset the state (we don't want that)

- note: a page reload in React will reset to the initial state

### How to use React Router

- BrowserRouter component
- Switch will only render the first route that match, without it the \* and a 404 will always match

`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';`

```js

...

return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="*">
        <h1>404 - Path not found</h1>
      </Route>
    </Switch>
  </Router>
)
```


### Passing Props

- Since React Router V5 utilizes a child component, we can pass it any props to it much like any other.

```js
<Route exact path="/">
  <Home title="Welcome home" />
</Route>
```


### URL Parameters

- Value set dynamically in the URL
- for example, `/superheros/:id`

- we need a route to handle it

```js
<Route path="/superheros/:id">
  <SuperheroPage />
</Route>
```
- in the target component, we need to use `useParams`

```js
import { useParams } from 'react-router-dom';

export default function SuperheroPage({ superheros }) {
  const { id } = useParams();
...
```

### Query Strings

- A query string can be added to the url
- For example: `/search?name=batman`

- to extract the query string, we need to use the `useLocation` hook
- to parse the query string, we need to install the `query-string` npm package

```js
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export default function Search() {
  const { search } = useLocation();
  const { name } = queryString.parse(search);

...
```

### Nested Routes

- Whenever we need to re-use the current path into our route, we can use `path` from the `useRouteMatch` hook

```js
import { Link, useRouteMatch } from 'react-router-dom';

export default function Superhero({id, name}) {
  const { path } = useRouteMatch();

  return (
    Link to={`${path}/${id}`}>{name}</Link>
  )

```

- const { path } = useRouteMatch()

### Navigating

#### Link to

- How to use Link to
- Passing props to Link to using an object

- Redirect (extra piece of state, more declarative)
- useHistory (more imperative, history.push, history.replace)

#### useHistory

- The `useHistory` hook allows us to redirect to another page.
- We can also use the Redirect component

```js
import { useHistory } from 'react-router-dom';

export default function Component() {
  const history = useHistory();
  ...
```

- To redirect, we simply use `history.push` providing the new path.
- For example: `history.push('/')` to redirect to home page.


### Authentication

- client-side protected routes only for UX
- Data coming from back-end still need to be protected as well

```js
export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
}
```

- in Login, we can extract the location with `useLocation`

```js
  import { useHistory, useLocation } from 'react-router-dom';

  export default function Login() {
  const history = useHistory();
  const { state } = useLocation();

...

history.push(state.from || '/');

```

## Context

Allows to pass props to children without having to pass props manually at every level.

1. Provider: Declare the data that we want to make available
2. Consumer: Have components that need the data to subscribe => useContext hook

- We need to create a context

```js
import React, {createContext} from 'react';

const StateContext = createContext();

export default StateContext;

```

- Wrapped the components we want to provide the context with:

```js
 return (
    <div className="App">
        <StateContext.Provider value={state}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
...
```

- Any children can then utilize `useContext` to get access to the state

```js
import StateContext from './StateContext';

export default function Home() {
  const state = useContext(StateContext);
...
```