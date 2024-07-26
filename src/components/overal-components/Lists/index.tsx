import { HexagoneIcon } from '@/components/_index'
import { AssetsArray } from '@/model/services/base-model'
import HeaderList from './HeaderList';
import { formatTimestamp } from '@/tools/js-date-convert';


interface ListsItemProps {
    resultofAssets: Array<AssetsArray>;
}

function ListsItem(props: ListsItemProps) {
    const { resultofAssets = [],  } = props;

    return (
        <>

            <div className="flex flex-col gap-6  ">

                <div className="bg-cardItem rounded-md p-2 mb-4 ">
                    <div className="flex flex-row gap-2 justify-between items-center">
                        <h3 className="text-xl">
                            Assets
                        </h3>

                        
                    </div>

                    <div className="mt-16 flex flex-col gap-1">
                        {/* Header */}
                        <HeaderList />

                        {/* Body */}
                        {resultofAssets.map((item: AssetsArray , i :number) => {
                            return (
                                <>
                                    <div key={i} className="flex flex-row items-center bg-tableItem rounded-md p-1">
                                        <div className="w-1/12 relative">
                                            <HexagoneIcon />
                                            <span className="absolute top-1 left-3 m-auto text-black font-bold ">
                                                {item.grade}
                                            </span>
                                        </div>
                                        <div className="w-2/12">
                                            {item.name}
                                        </div>
                                        <div className="w-6/12  text-center">
                                            {item.total_vuls}
                                        </div>
                                        <div className="w-3/12  text-center">
                                            {formatTimestamp(item.lastSeen)}
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>
            </div>

        </>
    )
}
export default ListsItem