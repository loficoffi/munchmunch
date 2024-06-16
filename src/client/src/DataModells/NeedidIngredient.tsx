import {Ingredient} from "./Ingredient.tsx";
import {UnitType} from "./enums/UnitType.tsx";

export type NeedidIngredient = {
    id: string;
    ingredient: Ingredient;
    amount: number;
    unit: UnitType;
}