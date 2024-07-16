import { Inject, Service } from "typedi";
import { InjectedService } from "./injected.service";

@Service()
export class PrimaryService {
    constructor(@Inject('injectedService') private injectedService: InjectedService) {}

    print() {
        console.log(this.injectedService.get());
    }
}