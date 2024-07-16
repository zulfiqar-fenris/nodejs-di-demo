import 'reflect-metadata';

import Container from 'typedi';
import { PrimaryService } from './primary.service';
import { AnotherInjectedService } from './injected.service';

Container.set('injectedService', Container.get(AnotherInjectedService));

const main = () => {
    const primaryService = Container.get(PrimaryService);

    primaryService.print()
}

main();