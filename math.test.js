const{division, addition, puissance3, soustraction}=require('./math');

test('de la fonction division',()=>{
    expect(division(4,2)).toBe(2)
})


test('de la fonction addition',()=>{
    expect(addition(5,2)).toBe(7)
})

test('de la puissance 3' , ()=> {
    expect(puissance3(2)).toBe(8)
})

test('test de soustraction de 4-1' , ()=> {
    expect(soustraction(4, 1)).toBe(3)
})