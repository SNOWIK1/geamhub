import { AppTypes } from "./types";

export namespace AppInterfaces {
  export interface IProduct {
    id: BigInt;
    name: string,
    isPrivate: number;
    isDiscussion: number;
    mainChannel: number | null;
    targetAudience: number;
    lang: string;
    numberOfUsers: number;
    type: AppTypes.ProductType;
    contentType: AppTypes.ProductContentType;
    createdAt: number;
  }

  export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    balance: number,
  }
}
