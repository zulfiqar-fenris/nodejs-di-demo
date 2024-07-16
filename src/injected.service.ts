import { Service } from "typedi";

export interface InjectedService {
    get(): string;
}

@Service()
export class MyInjectedService implements InjectedService {
    get(): string {
        return "This is a message from MyInjectedService";
    }
}

@Service()
export class AnotherInjectedService implements InjectedService {
    get(): string {
        return "This is a message from AnotherInjectedService";
    }
}