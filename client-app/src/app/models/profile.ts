import { User } from "./user";

export interface Profile {
    userName: string;
    dispalyName: string;
    image?: string;
    bio?: string;
}


export class Profile implements Profile {
    constructor(user:User){
        this.userName = user.username;
        this.dispalyName = user.displayName;
        this.image = user.image;
    }
}