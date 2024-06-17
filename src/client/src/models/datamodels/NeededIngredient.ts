import {Ingredient} from "./Ingredient.ts";
import {UnitType} from "./enums/UnitType.ts";

export type NeededIngredient = {
    id: string;
    ingredient: Ingredient;
    amount: number;
    unit: UnitType;
}