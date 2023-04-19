import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './routes/coin';
import Coins from './routes/coins';

interface IRouterProps {

}

export default function Router({} : IRouterProps) {
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/:coinId"><Coin/></Route>
      <Route path="/"><Coins/></Route>
    </Switch>
    </BrowserRouter>
  )
  
}

