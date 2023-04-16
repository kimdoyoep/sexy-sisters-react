import { Link, useParams } from 'react-router-dom';

export default function Coin() {

  interface RouteParams { 
    coinId : string;
  }

  const {coinId} = useParams<RouteParams>(); 

  return(
    <>
      <h1>coin : {coinId}</h1>
      <Link to={`/`}>home</Link>
    </>
  )
}