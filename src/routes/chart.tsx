import { useQuery } from 'react-query';
import { fetchCoinHistory } from './Api';

interface ChartProps {
  coinId : string;
}

export default function Chart({coinId} : ChartProps) {
  const {isLoading, data} = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId))
  return(
    <>Chart</>
  )
}