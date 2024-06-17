import {Ingredient} from "./Ingredient.tsx";
import {UnitType} from "./enums/UnitType.tsx";

export type NeededIngredient = {
    id: string;
    ingredient: Ingredient;
    amount: number;
    unit: UnitType;
}