import { IPerson } from './IPerson';

export interface IAgedPerson extends IPerson {
    getRetirementAge(): number;
    isRetiring(): boolean;
}