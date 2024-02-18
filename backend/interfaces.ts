import { AppTypes } from "./types";

export namespace AppInterfaces {
  export interface IProduct {
    isPrivate: boolean;
    isDiscussion: boolean;
    mainChannel?: BigInt;
    targetAudience: boolean;
    id: BigInt;
    lang: AppTypes.ProductLang;
    numberOfUsers: number;
    type: AppTypes.ProductType;
    contentType: AppTypes.ProductContentType;
    createdAt: Date;
  }
}
