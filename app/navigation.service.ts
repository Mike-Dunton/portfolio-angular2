import {NAVIGATIONLIST} from './mock-navigation-items';
import {Injectable} from 'angular2/core';

@Injectable()
export class NavigationService {
    getNavigationItems() {
        return Promise.resolve(NAVIGATIONLIST);
    }
}
