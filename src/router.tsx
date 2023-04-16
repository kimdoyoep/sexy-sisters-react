import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './routes/coin';
import Coins from './routes/coins';

export default function Router() {
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/:coinId"><Coin/></Route>
      <Route path="/"><Coins/></Route>
    </Switch>
    </BrowserRouter>
  )
  
}

