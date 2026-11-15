import axios from 'axios';
import Users from "../src/User";
import Db from "../src/Db";
import UserDao from "../src/UserDao";
const users = [
    {
        id:1,
        name: 'Bob'
    }
];
jest.mock('../src/Db',() => ({
    __esModule: true,
    default: {
        getAllUser: jest.fn(() => users),

    },
}));


jest.mock('axios');


test('should fetch users', () => {
    const users = [
        {name: 'Bob'}
    ];
    const resp = {data: users};
    (axios as any).get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users));
});
test('should fetch DB', () => {

    let data = UserDao.getAllUser();
    //console.log('DB.getAllUsers()', Db.getAllUser());
    expect(data).toEqual(users);
});