import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Composant/pages/Home';
import Login from './Composant/Login';
import { Gate } from './Composant/Gate';
import { Calendar } from './Composant/pages/Calendar';
import Recipes from './Composant/pages/Recipes';
import Profil from './Composant/Elements/Profil/Profil'
import { Overlay } from './Composant/Elements/Overlay';
import { useSelector } from 'react-redux';
import CreateRecipe from "./Composant/pages/recipe/Create";
import Navbar from "./Composant/Elements/Navbar";

function App() {

  const isBusy = useSelector(state => state.app.isBusy)

  return (
      <Gate message={<Login />}>
           {isBusy && 
          <Overlay />}
          

        <Router>
           <Navbar />
          <Switch >

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/recipes">
              <Recipes />
            </Route>

            <Route path="/profil/:type/:id">
              <Profil />
            </Route>

            <Route path="/calendar">
              <Calendar />
            </Route>

            <Route path="/choose/recipes">
              <Recipes />
            </Route>

            <Route path="/recipe/create">
              <CreateRecipe />
            </Route>

          </Switch>

        </Router>
      </Gate>
  );
}

export default App;
