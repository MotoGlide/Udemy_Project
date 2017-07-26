import { Renewal } from '../shared/renewal.model'

//a short verson of how to build a class is shown in the renewal.model.ts
export class Renewals{
    public name: string;
    public description: string;
    public imagePath: string;
    public renewals: Renewal[];

    constructor(name: string, desc: string, imagePath: string, renewals: Renewal[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.renewals = renewals;
    }
}