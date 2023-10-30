import UserService from '../../src/services/user-services.js';
import UserRepository from '../../src/repository/user-repository.js';
import CrudRepository from '../../src/repository/crud-repository';

jest.mock('../../src/repository/user-repository.js')

describe('user service signup', () => {

    test('should create a user and return it', async () => {
        const mockUser = {
            name: 'test',
            email: 'alok@google.com',
            password: '12345678'   
         };

         
         (UserRepository.prototype.create) = jest.fn().mockReturnValue({
            ...mockUser,
            _id: '1234',
            createdAt: Date.now(),
            updatedAt: Date.now()
        })

        //  const spy = jest.spyOn(UserRepository, 'create').mockImplementation((data)=>{
        //     return {
        //         ...data,
        //         _id: '1234',
        //         createdAt: Date.now(),
        //         updatedAt: Date.now()
        //     }
        //  });


         const userService = new UserService();

         const user = await userService.signUp(mockUser);

        
         expect(user.email).toBe(mockUser.email);
         expect(user.name).toBe(mockUser.name);

         


    })





        
})