import { AppTypes } from "./types";

export namespace AppInterfaces {
  export interface IProduct {
    id: BigInt;
    isPrivate: boolean;
    isDiscussion: boolean;
    mainChannel: BigInt | null;
    targetAudience: boolean;
    lang: AppTypes.ProductLang;
    numberOfUsers: number;
    type: AppTypes.ProductType;
    contentType: AppTypes.ProductContentType;
    createdAt: number;
  }

}
