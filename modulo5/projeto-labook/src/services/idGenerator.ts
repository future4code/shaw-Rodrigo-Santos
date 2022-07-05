import {v4} from 'uuid';

export class IdGenerator{
    static generateId: any;
    public generate(): string{
        return v4()
    }
}