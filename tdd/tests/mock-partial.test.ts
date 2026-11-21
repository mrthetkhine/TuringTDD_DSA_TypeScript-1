import api,{getAuthUser} from "../src/api";

const mockUser = {
    username: 'superadmin',
    roles: ['admin'],
}
jest.mock('../src/api', () => {
    const originalModule = jest.requireActual('../src/api');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        //default: jest.fn(() => mockUser),
        getAuthUser: ()=>mockUser,
    };
});
test('mock partial',()=>{
    console.log('getAuthUser ',getAuthUser);

    let data = api();
    expect(data).toBe(100);

    const user = getAuthUser();
    expect(user).toEqual(mockUser);


});