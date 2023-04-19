import { useQuery } from 'react-query';
import { fetchCoinHistory } from './Api';
import ApexChart from "react-apexcharts";



interface ChartProps {
  coinId : string;
  isDark : boolean;
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

export default function Chart({coinId, isDark} : ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId))
  return(
    <div>
      {isLoading ? "Loading Chart..." : 
      <ApexChart 
      type='line' 
      series={[
        {
          name : "price",
          data : data?.slice(0, 22).map((price) => Number(price.close)) as number[],
        }
      ]}
      options={{        
        chart : {
          width: 500,
          height: 500,
          toolbar: {
            show: false,
          }
        },   
        theme: {
          mode: isDark ? "dark" : "light",
        },
        xaxis: {
          categories: data?.map((price) => new Date(price.time_close * 1000).toISOString()),
          type: "datetime"
        }
      }}/>
      }
    </div>
  )
}