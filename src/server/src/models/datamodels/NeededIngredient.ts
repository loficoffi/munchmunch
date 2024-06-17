import {Ingredient} from "./Ingredient.js";
import {UnitType} from "./enums/UnitType.js";

export type NeededIngredient = {
    id: string;
    ingredient: Ingredient;
    amount: number;
    unit: UnitType;
}