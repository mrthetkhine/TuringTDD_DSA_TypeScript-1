import axios from 'axios';
import loadUser from "../src/loadUser";

jest.mock('axios');

describe("test timeout",()=>{
    test('handles axios timeout error', async () => {
        // 1. Create a realistic Axios timeout error
        const timeoutError:any = new Error('timeout of 5000ms exceeded');
        timeoutError.code = 'ECONNABORTED';
        timeoutError.isAxiosError = true;

        // 2. Mock the rejection
        (axios as any).get.mockRejectedValueOnce(timeoutError);

        // 3. Assert your error handling
        await expect(loadUser()).rejects.toThrow('timeout of 5000ms exceeded');
    });
});