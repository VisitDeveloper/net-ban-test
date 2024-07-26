// {
//     "assets": [
//       {
//         "grade": "F",
//         "lastSeen": 1652881666000,
//         "name": "sub2.targetB.com",
//         "total_vuls": 54,
//         "type": "domain"
//       },
//       {
//         "grade": "D",
//         "lastSeen": 1652881666000,
//         "name": "cdn.targetA.com",
//         "total_vuls": 64,
//         "type": "domain"
//       },
//       {
//         "grade": "D",
//         "lastSeen": 1652881666000,
//         "name": "test.targetA.com",
//         "total_vuls": 11,
//         "type": "domain"
//       },
//       {
//         "grade": "D",
//         "lastSeen": 1652881666000,
//         "name": "Cloud A",
//         "total_vuls": 10,
//         "type": "cloud"
//       },
//       {
//         "grade": "D",
//         "lastSeen": 1652881666000,
//         "name": "Cloud B",
//         "total_vuls": 9,
//         "type": "cloud"
//       },
//       {
//         "grade": "D",
//         "lastSeen": 1652881666000,
//         "name": "53.21.58.14",
//         "total_vuls": 8,
//         "type": "ip"
//       }
//     ],
//     "cloud": {
//       "ips": 373,
//       "live": [10, 10, 5, 20, 40, 5],
//       "monitored": [10, 10, 40, 5, 30, 2],
//       "ports": 200,
//       "total": 4,
//       "total_live": 34,
//       "total_monitored": 300,
//       "vulns": 2
//     },
//     "domain": {
//       "ips": 6,
//       "live": [10, 20, 30, 15, 18, 5],
//       "monitored": [10, 20, 40, 5, 10, 2],
//       "ports": 157,
//       "total": 300,
//       "total_live": 60,
//       "total_monitored": 300,
//       "vulns": 8
//     },
//     "ip": {
//       "ips": 0,
//       "live": [10, 10, 5, 20, 25, 5],
//       "monitored": [10, 10, 40, 5, 30, 2],
//       "ports": 91,
//       "total": 200,
//       "total_live": 34,
//       "total_monitored": 300,
//       "vulns": 2
//     }
//   }



export interface AssetsArray {
    grade : string;
    lastSeen:number;
    name: string;
    total_vuls : number;
    type : string;
}



 interface DataObjects {
    ips: number;
    live: Array<number>;
    monitored: Array<number>;
    ports: number;
    total: number;
    total_live: number;
    total_monitored: number;
    vulns: number
  
  }
export interface AssetsServiceModel { 
    assets: Array<AssetsArray>;
    cloud : DataObjects;
    domain : DataObjects;
    ip : DataObjects;
    
}