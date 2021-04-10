import { UserDto } from "src/module/users/dtos/getUser.dto";
export const GET_USER = 'GET USER';
export interface IGetUserService {
    get(id: string): Promise<UserDto>
}
