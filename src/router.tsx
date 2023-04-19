import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './routes/coin';
import Coins from './routes/coins';

interface IRouterProps {
  toggleDark : () => void;
  isDark : boolean;
}

export default function Router({toggleDark, isDark} : IRouterProps) {
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/:coinId"><Coin isDark={isDark}/></Route>
      <Route path="/"><Coins toggleDark={toggleDark} /></Route>
    </Switch>
    </BrowserRouter>
  )
  
}

