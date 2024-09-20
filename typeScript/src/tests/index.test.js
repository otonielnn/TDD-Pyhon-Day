"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('Função de soma', () => {
    it('Somar dois números inteiros', () => {
        expect((0, __1.soma)(2, 2)).toBe(4);
    });
});
describe('Função de multiplicar', () => {
    it('Multiplicar dois números inteiros', () => {
        // Arrange
        const n1 = 5;
        const n2 = 3;
        // Act
        const resultado = (0, __1.multiplicar)(5, 3);
        const esperado = 15;
        // Assert
        expect((0, __1.multiplicar)(n1, n2)).toBe(esperado);
    });
});
