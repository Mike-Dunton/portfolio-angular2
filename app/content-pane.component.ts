import {Component} from 'angular2/core';
import {NavigationItem} from './navigation-item';

@Component({
    inputs: ['content'],
    selector: 'content-pane',
    template: `
        <div *ngIf="content">
            <div>
                {{content.content}}
            </div>
        </div>
      `
})

export class ContentPaneComponent {
    public content: NavigationItem;
}
