import { AssetsService } from "./services/assets-service/assetsService"
import { useEffect, useState } from "react"
import { Cards } from "./components/_index";
import { DataCards } from "./model/components/Card.model";
import { AssetsArray } from "./model/services/base-model";
import ListsItem from "./components/overal-components/Lists";
import { TypeAssetsEnum } from "./enum/service/type-assets";


const assetsService = new AssetsService();
function App() {

  const [cardData, setCardData] = useState<Array<DataCards>>()
  const [typeAssets, setTypeAssets] = useState<TypeAssetsEnum>(TypeAssetsEnum.all)
  const [resultofAssets, setResultOfAssets] = useState<Array<AssetsArray>>([])

  useEffect(() => {
    getDataAssets(TypeAssetsEnum.all)
  }, [])

  const getDataAssets = async (typeAssets: TypeAssetsEnum) => {
    try {
      const { data } = await assetsService.getAllDataAssets();

      // seprate card data with array data
      const resultofAssets = [...data.assets]
      const result = Object.keys(data).map(key => {
        return { key: key as TypeAssetsEnum, value: data[key] };
      });
      const afterFilterRevise: Array<DataCards> = result.filter(item => item.key !== TypeAssetsEnum.assets)
      setCardData(afterFilterRevise);

      // filter array data after that clicked card item 
      const deepCopyDataFromResultOfAssets = [...resultofAssets]
      const resultAfterFilter = deepCopyDataFromResultOfAssets.filter((item) => item.type === typeAssets)
      setResultOfAssets(typeAssets === 'all' ? resultofAssets : resultAfterFilter)


    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    
    if (typeAssets !== TypeAssetsEnum.all && TypeAssetsEnum.assets) {
      getDataAssets(typeAssets);
    }
  }, [typeAssets]);


  return (
    <>

      <div className="text-white flex justify-center items-center flex-row mt-2 p-2" >
        <div className="flex flex-col gap-2 p-1">
          {/* up section  */}
          <Cards cardData={cardData} setTypeAssets={setTypeAssets} />

          {/* down section   */}
          <ListsItem resultofAssets={resultofAssets} onClick={() => setTypeAssets(TypeAssetsEnum.all)} />
        </div>
      </div>
    </>
  )
}

export default App
