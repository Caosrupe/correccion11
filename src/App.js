import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart';
import {CartProvider} from './components/CartContext';

function App() {
  return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/categories/:categoryid">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/categories">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/item/:itemid">
                            <ItemDetailContainer/>
                        </Route>
                        <Route path="/Cart">
                            <Cart/>
                        </Route>
                    </Switch>     
            </BrowserRouter>
            
        </CartProvider>
    );
}



export default App;