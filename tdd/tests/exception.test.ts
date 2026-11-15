import {afterAll, beforeAll, expect} from "@jest/globals";

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}
let cities:string[] = [];
function initializeCityDatabase()
{
    console.log('initialize City Database');
    cities = ['Vienna','San Juan'];
}
function clearCityDatabase()
{
    console.log('clear City Database');
    cities=[];
}
function isCity(cityName:string)
{
    return cities.includes(cityName);
}
describe('test exception', () => {
    /*beforeEach(() => {
        initializeCityDatabase();
    });*/
    beforeAll(() => {
        initializeCityDatabase();
    });
    /*afterEach(() => {
        clearCityDatabase();
    });*/
    afterAll(() => {
        clearCityDatabase();
    })
    test('city database has Vienna', () => {
        console.log('city database has Vienna');
        expect(isCity('Vienna')).toBeTruthy();
    });

    test('city database has San Juan', () => {
        expect(isCity('San Juan')).toBeTruthy();
    });
    test('test exception', () => {
        expect(()=>{compileAndroidCode()}).toThrow();
        expect(() => compileAndroidCode()).toThrow(Error);
        expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    })
})