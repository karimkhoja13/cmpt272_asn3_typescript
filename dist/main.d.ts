interface IPig {
    name: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
    category: string;
    displayInfo(): string;
}
declare class Pig implements IPig {
    name: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
    category: string;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, category: string);
    displayInfo(): string;
    getUnique(): any;
}
declare class GreyPig extends Pig {
    swimmingAbility: number;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, category: string, swimmingAbility: number);
    getUnique(): any;
}
declare class ChestnutPig extends Pig {
    language: string;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, category: string, language: string);
    getUnique(): any;
}
declare class WhitePig extends Pig {
    runningAbility: number;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, category: string, runningAbility: number);
    getUnique(): any;
}
declare class BlackPig extends Pig {
    strengthAbility: number;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, category: string, strengthAbility: number);
    getUnique(): any;
}
declare function displayPig(pig: IPig): string;
declare let addButton: HTMLButtonElement;
declare let pigTable: HTMLTableElement;
declare let moreInfoTable: HTMLTableElement;
declare let pigDetailsSection: HTMLTableElement;
declare let addForm: HTMLDivElement;
declare let categorySelect: HTMLSelectElement;
declare let nameInput: HTMLInputElement;
declare let breedInput: HTMLInputElement;
declare let heightInput: HTMLInputElement;
declare let weightInput: HTMLInputElement;
declare let personalityInput: HTMLInputElement;
declare let uniqueAttribute: HTMLDivElement;
declare let submitButton: HTMLButtonElement;
declare let cancelButton: HTMLButtonElement;
declare let errorMsg: HTMLElement | null;
declare let pigs: any[];
declare function populateTable(): void;
declare function populateUniqueAttribute(): void;
//# sourceMappingURL=main.d.ts.map