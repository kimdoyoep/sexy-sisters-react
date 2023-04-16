import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Loader = styled.span`
  text-align : center;
  display : block;
  margin-top : 300px
`;

const Title = styled.h1`
color : ${porps => porps.theme.accentColor};
font-size : 48px;
`;

const Container = styled.div`
  margin : 0px auto;
  max-width : 480px;
`;

const Header = styled.header`
  height : 10vh;
  display : flex;
  justify-content : center;
  align-items : center;
`;



export default function Coin() {

  interface RouteParams { 
    coinId : string;
  }

  interface RouteState { 
    name : string;
  }

  const {coinId} = useParams<RouteParams>(); 
  const {state} = useLocation<RouteState>();

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [infoPrice, setInfoPrice] = useState({})

  useEffect(() => {
    (async () => {
      const infoData = await ( await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json;
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}}`)).json
      console.log(priceData);
    })();
  }, [])


  return(
    <Container>
    <Header>
      <Title>{state?.name || null}</Title>
    </Header>

    {loading ? (<Loader>Loading...</Loader>) : null }
    </Container>
  )
}