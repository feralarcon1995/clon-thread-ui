export interface User {
    id: number;
    name: string;
    username: string;
    avatar: string;
    description?:string;
}

export interface Thread {
    id: number;
    content: string;
    author: User;
    timestamp: string
    likes: number;
    comments: Comment[];
}

export interface Comment {
    id: number;
    text: string;
    author: User;
    timestamp: string;
}