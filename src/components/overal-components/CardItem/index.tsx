import { ArrowLeftIcon, BugIcon, ConfilictIcon, GlobalIcon, UploadToCloud, WorldIcon } from '../../_index'
import { DataCards } from '../../../model/components/Card.model'
import BarChart from './Barchart';

interface CardItemProps {
    item: DataCards;
    onClick?: () => void;
    setTypeAssets?: React.Dispatch<React.SetStateAction<string>>
}


function CardItem(props: CardItemProps) {
    const { item, onClick = () => { } } = props
    return (
        <>
            <div onClick={onClick} className="flex flex-col gap-2 p-2 bg-cardItem w-4/12 rounded-md hover:duration-500 duration-500 shadow-content cursor-pointer">

                <div className="flex fle-row justify-between">
                    <div className={`flex flex-col rounded-lg w-14 ${item.key === 'domain' ? 'bg-bgDomains' : item.key === 'ip' ? 'bg-bgIpAddress' : 'bg-bgUploadToCloudItem'}`}>

                        {
                            item.key !== "cloud" ? <WorldIcon width={35} height={35} className="mx-auto my-1" /> : <UploadToCloud width={35} height={35} className="mx-auto my-1" />
                        }
                        <div className="bg-[#EEE9E9] text-black rounded-b-lg font-black text-center text-xs">
                            {item.value.total}
                        </div>
                    </div>

                    <div className="cursor-pointer">
                        <ArrowLeftIcon width={15} height={15} />
                    </div>
                </div>

                <h3 className={`font-bold text-[#EEE9E9] text-sm mt-4`}>

                    {
                        item.key === 'domain' ? 'Domains' : item.key === 'ip' ? 'IP Addresses' : 'Cloud Accounts'
                    }
                </h3>
                <div className="w-full h-[1px] bg-white" />

                <div className="flex flex-row gap-2">
                    <div className="flex flex-row gap-2 w-3/6">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">
                                Live
                            </span>
                            <span className="font-bold">
                                {item.value.total_live}
                            </span>
                        </div>
                        <div>
                            <BarChart />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-3/6">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">
                                Monitored
                            </span>
                            <span className="font-bold">
                                {item.value.total_monitored}
                            </span>
                        </div>
                        <div>
                            <BarChart />
                        </div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white" />

                <div className="flex flex-row justify-between gap-2 mt-3">
                    <div className="flex flex-row ">
                        <div className="rounded-lg p-2 bg-cardDataBG">
                            <GlobalIcon width={35} height={35} />
                        </div>
                        <div className="flex flex-col pl-2">
                            <span className="font-bold">
                                IPs
                            </span>
                            <span className="font-bold">
                                {item.value.ips}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row ">
                        <div className="rounded-lg p-2 bg-cardDataBG">
                            <ConfilictIcon width={35} height={35} />
                        </div>
                        <div className="flex flex-col pl-2">
                            <span className="font-bold">
                                Ports
                            </span>
                            <span className="font-bold">
                                {item.value.ports}
                            </span>
                        </div>
                    </div>


                    <div className="flex flex-row ">
                        <div className="rounded-lg p-2 bg-cardDataBG">
                            <BugIcon width={35} height={35} />
                        </div>
                        <div className="flex flex-col pl-2">
                            <span className="font-bold">
                                Vulns
                            </span>
                            <span className="font-bold">
                                {item.value.vulns}
                            </span>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
export default CardItem