import { soma, multiplicar } from "..";

describe('Função de soma', () => {
    it('Somar dois números inteiros', () => {
        expect(soma(2, 2)).toBe(4);
    });
});

describe('Função de multiplicar', () => {
    it('Multiplicar dois números inteiros', () => {
        // Arrange
        const n1: number  = 5
        const n2: number = 3

        // Act
        const resultado = multiplicar(5, 3)
        const esperado = 15
        // Assert
        expect(multiplicar(n1, n2)).toBe(esperado);
    });
})