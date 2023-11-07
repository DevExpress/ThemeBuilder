import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-treeview',
    templateUrl: './treeview.component.html',
    styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent {
    widgetGroup = 'treeview';
    isExpanded = new Subject<boolean>();

    treeViewItems: any[] = [
        {
            id: 1,
            text: '.NET',
            expanded: true,
            items: [
                {
                    id: 11,
                    text: 'Individual Platforms',
                    items: [
                        { id: 111, text: 'WinForms' },
                        { id: 112, text: 'ASP.NET' },
                        { id: 113, text: 'MVC' },
                        { id: 114, text: 'WPF' },
                        { id: 115, text: 'Silverlight' },
                        { id: 116, text: 'Windows 8 XAML' }
                    ]
                },
                {
                    id: 12,
                    text: 'Frameworks',
                    items: [
                        { id: 121, text: 'eXpressApp Framework' }
                    ]
                },
                {
                    id: 13,
                    text: 'Code-Debug-Refactor',
                    items: [
                        { id: 131, text: 'CodeRush for Visual Studio' }
                    ]
                },
                {
                    id: 14,
                    text: 'Mobile (HTML JS)',
                    items: [
                        { id: 141, text: 'DevExtreme' }
                    ]
                },
                {
                    id: 15,
                    text: 'Cross-Platform',
                    items: [
                        { id: 151, text: 'Reporting' },
                        { id: 152, text: 'Document Generation' }
                    ]
                },
                {
                    id: 16,
                    text: 'Enterprise Tools',
                    items: [
                        { id: 161, text: 'Report Server' },
                        { id: 162, text: 'Analytics Dashboard' }
                    ]
                }
            ]
        }
    ];
}
