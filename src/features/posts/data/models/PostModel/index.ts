import { Post } from "../../../domain/entities/Post"

export type APIResult = {
    code: number;
    meta: any;
    data: PostModel[];
}

export class PostModel {
    constructor(public id: number, public user_id: number, public title: string, public body: string) {};

    toPost(): Post {
        return {
            id: this.id,
            userId: this.user_id,
            title: this.title,
            body: this.body
        };
    }
}