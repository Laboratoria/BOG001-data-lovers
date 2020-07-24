import functions from "../src/characters/dataCharacters";
import data from "../src/data/rickandmorty/rickandmorty";
import {
  removeDuplicates,
  filterByLetter,
  countCharactersByLocation,
} from "../src/data.js";

//test funciones Characters
const { filterData } = functions;
const { results } = data;
const { paginate } = functions;
const { detectCheck } = functions;
// const { sort } = functions;

const nodeList = [
  {
    checked: false,
    value: "Human",
  },
  {
    checked: true,
    value: "Robot",
  },
  {
    checked: true,
    value: "Animal",
  },
];

describe("filterData", () => {
  it("deberia retornar un array de objetos de los personajes que sean de especie Human y Vampire", () => {
    expect(filterData(results, ["Human", "Vampire"])).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          species: "Human",
        }),
        expect.objectContaining({
          species: "Vampire",
        }),
      ])
    );
  });
});

describe("paginate", () => {
  it("deberia retornar un array de 10 objetos", () => {
    expect(paginate(1, results)).toHaveLength(10);
  });
});

describe("detectCheck", () => {
  it("deberia retornar un array con el value de los elementos que tengan la propiedad checked = true", () => {
    expect(detectCheck(nodeList)).toEqual(["Robot", "Animal"]);
  });
});

// const a = 9;
// const b = 3;
// describe("sort", () => {
//   it("deberia retornar 1 para a > b", () => {
//     expect(sort(a, b)).toEqual(1);
//   });
// });



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
