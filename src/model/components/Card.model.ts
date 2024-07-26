import { TypeAssetsEnum } from "@/enum/service/type-assets";

interface ValueDataCards {
  ips: number;
  live: Array<number>;
  monitored: Array<number>;
  ports: number;
  total: number;
  total_live: number;
  total_monitored: number;
  vulns: number
}
  
export interface DataCards {
  key: TypeAssetsEnum;
  value: ValueDataCards;
}