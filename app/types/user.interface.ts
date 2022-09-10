import { IBase } from "@/types/base.interface";
import { IVideo } from "@/types/video.interface";
import { ISubscription } from "@/types/subscription.interface";

export interface IUser extends IBase {
    email: string;
    name: string;
    isVerified?: boolean;
    subscribersCount?: number;
    description: string;
    avatarPath: string;
    videos?: IVideo[];
    subscriptions: ISubscription[];
}