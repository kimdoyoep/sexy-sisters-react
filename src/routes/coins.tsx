import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { fetchCoins } from './Api';
import { Helmet } from 'react-helmet';

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

const CoinList = styled.ul`
  
`;

const Coin = styled.li`
  background : white;
  color : ${props => props.theme.bgColor};
  margin-bottom : 20px;
  padding : 20px;
  a {
    display : flex;
    align-items : center;
    padding : 10px
  }
  &:hover{
    color : ${props => props.theme.accentColor};
  }
`;

const Loader = styled.span`
  text-align : center;
  display : block;
  margin-top : 300px
`;

const Img = styled.img`
  width : 25px;
  height : 25px;
  margin-right : 10px;
`;

interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

export default function Coins() {

  const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);

  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false)
  //   })();
  // }, [])

  return(
    <Container>

      <Helmet>
        <title>Coins</title>
      </Helmet>

      <Header>
        <Title>coins</Title>
      </Header>

      {isLoading ? (
        <Loader>Loading...</Loader>)
        :
        (
          <CoinList>
            {data?.slice(0, 100).map(coin => (
              <Coin key={coin.id}>
                <Link to={{
                  pathname : `/${coin.id}`,
                  state : {name : coin.name},
                }}>
                  <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                  {coin.name} &rarr;</Link>
              </Coin>
            ))}
          </CoinList>
        )}

    </Container>
  )
}