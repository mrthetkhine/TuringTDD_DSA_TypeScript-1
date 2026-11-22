import {isSunday} from "../src/untestable";


describe('untestable', () => {
    test('make dependency',()=>{
        let date = new Date(2026,10,22);
        expect(isSunday(date)).toBe(true);

        date = new Date(2026,10,23);
        expect(isSunday(date)).toBe(false);
    })
});