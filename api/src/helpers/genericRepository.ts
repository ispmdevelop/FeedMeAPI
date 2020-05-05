import { EntityManager, Repository, UpdateResult, DeleteResult } from "typeorm";

export class GenericRepositoryHelper<T> {
    constructor(private repository: Repository<T>) { }

    async findAll(relations?: boolean, populate?: string[]): Promise<T[]> {
        if (relations === null || !relations)
            return await this.repository.find();
        return await this.repository.find({ relations: populate })
    }

    async findById(id: number, relations?: boolean, populate?: string[]): Promise<T> {
        if (relations === null || !relations)
            return await this.repository.findOne(id);
        return await this.repository.findOne(id, { relations: populate });
    }

    async findByWhereOne(where: object, relations?: boolean, populate?: string[]): Promise<T> {
        if (relations === null || !relations)
            return await this.repository.findOne({ where: where });
        return await this.repository.findOne({ where: where, relations: populate });
    }

    async findByWhereMany(where: object, relations?: boolean, populate?: string[]): Promise<T[]> {
        if (relations === null || !relations)
            return await this.repository.find({ where: where });
        return await this.repository.find({ where: where, relations: populate });
    }

    create(body: any): T[] {
        return this.repository.create(body);
    }

    async save(body: any): Promise<T> {
        return await this.repository.save(body);
    }

    async update(id: number, body: any): Promise<number> {
        const response: UpdateResult = await this.repository.update(id, body);
        return response.affected;
    }

    async delete(id: number): Promise<number> {
        const response: DeleteResult = await this.repository.delete(id);
        return response.affected;
    }

}