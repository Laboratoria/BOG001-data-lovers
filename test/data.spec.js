import {
  removeDuplicates,
  filterByLetter,
  countCharactersByLocation,
} from "../src/data.js";
// import { filterData, sort } from "../src/characters/dataCharacters.js";
import data from "../src/data/rickandmorty/rickandmorty";

describe("se prueban funciones removeDuplicates, filterByLetter, countCharactersByLocation de Paola", () => {
  it("is a function", () => {
    expect(typeof removeDuplicates).toBe("function");
    expect(typeof filterByLetter).toBe("function");
    expect(typeof countCharactersByLocation).toBe("function");
  });

  it("debería retornar un array ordenado alfabeticamente donde el primer elemento sea el planeta Abadango y el último sea Zigerion's Base", () => {
    expect(removeDuplicates(data)[0]).toBe("Abadango");
    expect(removeDuplicates(data).pop()).toBe("Zigerion's Base");
  });

  it("debería retornar el primer elemento selecionado por la letra E donde ese elemento sea el planeta Earth (C-137)", () => {
    expect(filterByLetter(removeDuplicates(data), "E")[0]).toBe(
      "Earth (C-137)"
    );
  });

  it("debería retornar 7 elementos del array locations", () => {
    expect(countCharactersByLocation(removeDuplicates(data), data).length).toBe(
      7
    );
  });
});
