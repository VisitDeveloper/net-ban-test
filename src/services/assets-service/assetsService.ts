import { AssetsServiceModel } from '@/model/services/base-model';
import {
    BaseService
} from './../baseService'
import { AxiosResponse } from 'axios';


export class AssetsService extends BaseService {
    id = '72e7e252-2f2b-462c-8e60-30a8a0cac801';

    getAllDataAssets(): Promise<AxiosResponse<any,AssetsServiceModel>> {
        return this.axiosInstanceWithoutToken.get(`/${this.id}`);
    }

}