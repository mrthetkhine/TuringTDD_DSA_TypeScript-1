export const mockStart = jest.fn().mockReturnValue(100);
const mockEngine = jest.fn().mockImplementation(() => {
    return {
        start: mockStart
    };
});

export default mockEngine;