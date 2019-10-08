/*eslint no-invalid-this: ['Off']*/
import { Component, ViewChild } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
    widgetGroup = 'drawer';
    isExpanded = new Subject<boolean>();

    @ViewChild('drawer') drawer: DxDrawerComponent;

    drawerPanelContent = `<p>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus.</p>`;
    drawerContent = `
    <p>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus.
    Tristique magna sit amet purus gravida quis blandit.
    Auctor urna nunc id cursus metus aliquam eleifend mi in.
    Tellus orci ac auctor augue mauris augue neque gravida.
    Nullam vehicula ipsum a arcu.
    Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi.
    Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu.
    Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
    <p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p>`;

    toolbarItems: any[] = [{
        widget: 'dxButton',
        options: {
            icon: 'menu',
            stylingMode: 'text',
            onClick: (): void => {
                this.drawer.instance.toggle();
            }
        },
        location: 'before'
    }, {
        location: 'before',
        text: 'DRAWER'
    }];

}
