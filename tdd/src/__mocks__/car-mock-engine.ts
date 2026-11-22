export const start = jest.fn().mockReturnValue(100);
const mockEngine = jest.fn().mockImplementation(() => {
    return {
        start: start
    };
});

export default mockEngine;