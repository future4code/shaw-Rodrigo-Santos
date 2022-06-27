import { v4 } from "uuid"

export class GenerateId {
    public generateId(): string{
        return v4()
    }
}