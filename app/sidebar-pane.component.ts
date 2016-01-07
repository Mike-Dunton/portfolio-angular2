import {Component, EventEmitter, Output} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {NavigationItem} from './navigation-item';
import {NavigationService} from './navigation.service';

@Component({
    selector: 'sidebar-pane',
    providers: [NavigationService],
    outputs: ['update'],
    template: `
        <div>
            <ul class="sidebarNavigation">
                <li *ngFor="#item of navigationList"
                    [class.selected]="item === selectedNavigationItem"
                    (click)="onSelect(item)">
                    {{item.display}}
                </li>
            </ul>
        </div>
      `,
      styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .sidebarNavigation {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .sidebarNavigation li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .sidebarNavigation li.selected:hover {
      color: white;
    }
    .sidebarNavigation li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .sidebarNavigation a {
        text-decoration: none;
    }
  `],
})

export class SidebarPaneComponent implements OnInit{
    update:EventEmitter<NavigationItem> = new EventEmitter();
    public navigationList: NavigationItem[];
    public selectedNavigationItem: NavigationItem;
    constructor(private _navigationService: NavigationService) { }
    ngOnInit() {
        this.getNavigationItems();
    }
    onSelect(navigationItem: NavigationItem){
        this.selectedNavigationItem = navigationItem;
        console.log("Setting the updated navigation");
        this.update.next(navigationItem);
    }
    getNavigationItems() {
        this._navigationService.getNavigationItems()
            .then(navigationList => this.navigationList = navigationList);
    }
}
