import { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Price from './price';
import Chart from './chart';
import { fetchCoinInfo, fetchCoinTickers } from './Api';
import { useQuery } from 'react-query';
import {Helmet} from "react-helmet";

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  color: black;
  margin-top: 30px
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{isActive : boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: teal;
  padding: 7px 0px;
  border-radius: 10px;
  color : ${props => props.isActive ?  "" : props.theme.textColor};
  a {
    display: block;
  }
`;

interface ICoinProps {
  isDark : boolean;
}

export default function Coin({isDark} : ICoinProps) {

  interface RouteParams { 
    coinId : string;
  }

  interface RouteState { 
    name : string;
  }

  interface InfoData {
    id :  string;
    name :  string;
    symbol :  string;
    rank :  number;
    is_new :  boolean;
    is_active :  boolean;
    type :  string;
    logo :  string;
    description :  string;
    message :  string;
    open_source :  boolean;
    started_at :  string;
    development_status :  string;
    hardware_wallet :  boolean;
    proof_type :  string;
    org_structure :  string;
    hash_algorithm :  string;
    first_data_at :  string;
    last_data_at :  string;
  }

  interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date
        :
        string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      }
    };
  }

  const {coinId} = useParams<RouteParams>(); 
  const {state} = useLocation<RouteState>();

  const priceMatch = useRouteMatch(`/${coinId}/price`);
  const chartMatch = useRouteMatch(`/${coinId}/chart`);
  
  const {isLoading: infoLoading, data: infoData} = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId),
    {
      refetchInterval : 5000,
    });
  const {isLoading: tickersLoading, data: tickersData} = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval : 5000,
    });

  const loading = infoLoading || tickersLoading;
  
// const [loading, setLoading] = useState(true);
//   const [info, setInfo] = useState<InfoData>();
//   const [priceInfo, setPriceInfo] = useState<PriceData>();

// useEffect(() => {
//   (async () => {
//     const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
//     const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
//     setInfo(infoData);
//     setPriceInfo(priceData);
//     setLoading(false);
//   })();
// }, [])



  return(
    <Container>
    <Helmet>
    <title>{state?.name ? state.name : loading ? "Loading" : infoData?.name}</title>
    </Helmet>
    <Header>
      <Title>{state?.name ? state.name : loading ? "Loading" : infoData?.name}</Title>
    </Header>
    <Link to={`/`}>Back</Link>

    {loading ? (<Loader>Loading...</Loader>) : 
    
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>{tickersData?.quotes.USD.price.toFixed(2)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          
          <Tabs>
            <Tab isActive={priceMatch !== null}>
            <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
            <Tab isActive={chartMatch !== null}>
            <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/${coinId}/price`}>
              <Price/>
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart isDark={isDark} coinId={coinId}/>
            </Route>
          </Switch>
        </>

    }
    </Container>
  )
}