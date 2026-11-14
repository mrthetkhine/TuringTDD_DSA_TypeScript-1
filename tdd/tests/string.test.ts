describe("String module",()=>{
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
        expect('Christoph').toMatch(/stop/);
    });
    test('array',()=>{
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'milk',
        ];
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');

    });
});