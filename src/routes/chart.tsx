import { useQuery } from 'react-query';
import { fetchCoinHistory } from './Api';
import ApexChart from "react-apexcharts";


interface ChartProps {
  coinId : string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

export default function Chart({coinId} : ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId))
  return(
    <div>
      {isLoading ? "Loading Chart..." : 
      <ApexChart 
      type='line' 
      series={[
        {
          name : "hello",
          data : data?.slice(0, 14).map((price) => Number(price.close)) as number[],
        }
      ]}
      options={{
        chart : {
          width: 500,
          height: 500,
          toolbar: {
            show: false,
          }
        }
      }}/>
      }
    </div>
  )
}