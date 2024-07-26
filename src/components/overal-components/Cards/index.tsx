
import { TypeAssetsEnum } from '@/enum/service/type-assets';
import { DataCards } from '../../../model/components/Card.model'
import CardItem from '../CardItem';

interface CardProps {
    cardData?: Array<DataCards>
    setTypeAssets?: React.Dispatch<React.SetStateAction<TypeAssetsEnum>>
}

function Cards(props: CardProps) {
    const { cardData, setTypeAssets } = props;

    return (
        <><div className="flex flex-row gap-6 w-full justify-center items-center ">

            {cardData?.length !== 0 ? cardData?.map((item: DataCards) => {

                return (
                    <>
                        <CardItem item={item} onClick={() => setTypeAssets!(item.key)} />
                    </>
                )
            }) : <>
                There is no data
            </>}


        </div>
        </>
    )
}
export default Cards
