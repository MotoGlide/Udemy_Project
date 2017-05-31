import { Ingredient } from '../shared/ingredient.model'

//a short verson of how to build a class is shown in the ingredient.model.ts
export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}