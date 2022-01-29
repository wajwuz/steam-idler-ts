export interface BaseIdlingUser {
    id: number;
}

export interface IdlingUser extends BaseIdlingUser {
    steamLogin: string;
    uniqueId: string;
}