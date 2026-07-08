import { UserType } from "./User"

export type RequestsType = {
    _id:string;
    fromUserId: UserType;
    toUserId:string;
    status:string;
    createdAt:string;
    updatedAt:string
}