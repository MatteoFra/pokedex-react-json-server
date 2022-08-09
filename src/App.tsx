import React, { FunctionComponent, useState, useEffect } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PageNotFound from "./pages/page-not-found"
import PokemonEdit from "./pages/pokemon-edit"
import PokemonAdd from "./pages/pokemon-add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* {navbar} */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        {/* systeme de gestion des routes */}
        <Switch>
          <PrivateRoute  exact path="/" component={PokemonList} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/pokemons" component={PokemonList} />
          <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
          <PrivateRoute path="/pokemons/edit/:id" component={PokemonEdit} />
          <PrivateRoute path="/pokemons/:id" component={PokemonDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
