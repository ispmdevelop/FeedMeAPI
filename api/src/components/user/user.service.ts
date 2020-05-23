import { UserDto } from "../../shared/dto/user.dto";
import { UserRepository } from "./user.repository";
import { UserEntity } from "../../persistance/entity/User";
import { getRepository } from "typeorm";
import * as bcrypt from "bcryptjs";
import * as global from "../../config/global.config";

export class UserService {
    userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository(getRepository(UserEntity));
    }

    public async getAllUsers(): Promise<Array<UserDto>> {
        return await this.userRepository.findAll(true, ["subscriptions"]);
    }

    public async getUserByEmail(email: String): Promise<UserDto> {
        return await this.userRepository.findByWhereOne({ email: email });
    }

    public async getUserById(id: number): Promise<UserDto> {
        return await this.userRepository.findById(id);
    }

    public async postUser(user: UserDto): Promise<UserDto> {
        user.password = bcrypt.hashSync(
            user.password,
            global.default.BCRYPT_SALT_ROUNDS
        );
        return await this.userRepository.save(user);
    }

    public async loginUser(user: UserDto): Promise<UserDto> {
        var userDB: UserDto = await this.getUserByEmail(user.email);
        if((userDB == null || !bcrypt.compareSync(user.password, userDB.password) )){
            return null;   
        }
        return userDB;
    }

    public async putUser(id: number, user: UserDto): Promise<number> {
        return await this.userRepository.update(id, user);
    }

    public deleteUser(id: number): Promise<number> {
        return this.userRepository.delete(id);
    }
}
