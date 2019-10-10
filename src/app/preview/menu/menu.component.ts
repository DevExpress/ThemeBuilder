import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxMenuComponent } from 'devextreme-angular';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
    widgetGroup = 'menu';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('menu') menu: DxMenuComponent;

    collapsedOptions = {
        showFirstSubmenuMode: 'onHover',
        animation: {
            show: false,
            hide: false
        },
        items: [
            {
                text: '.NET',
                items: [
                    {
                        text: 'Individual Platforms',
                        items: [
                            { text: 'WinForms' },
                            { text: 'ASP.NET' },
                            { text: 'MVC' },
                            { text: 'WPF' },
                            { text: 'Silverlight' },
                            { text: 'Windows 8 XAML' }
                        ],
                        selected: true,
                        selectable: true
                    },
                    {
                        text: 'Frameworks',
                        items: [{ text: 'eXpressApp Framework' }]
                    },
                    {
                        text: 'Code-Debug-Refactor',
                        items: [{ text: 'CodeRush for Visual Studio' }]
                    },
                    {
                        text: 'Mobile (HTML JS)',
                        items: [{ text: 'DevExtreme' }]
                    },
                    {
                        text: 'Cross-Platform',
                        items: [
                            { text: 'Reporting' },
                            { text: 'Document Generation' }
                        ]
                    },
                    {
                        text: 'Enterprise Tools',
                        items: [{ text: 'Report Server' },
                            { text: 'Analytics Dashboard' }]
                    }
                ]
            },
            {
                text: 'HTML JavaScript',
                items: [
                    {
                        text: 'Mobile',
                        items: [{ text: 'Phone JS' }]
                    },
                    {
                        text: 'HTML 5 JS Widgets',
                        items: [{ text: 'Chart JS' }]
                    }
                ]
            },
            {
                text: 'Testing Tools',
                items: [
                    {
                        text: 'Web Testing',
                        items: [{ text: 'TestCafe' }]
                    }
                ]
            },
            {
                text: 'Delphi & C++Builder',
                disabled: true
            }
        ]
    };

    expandedOptions = {
        showFirstSubmenuMode: 'onHover',
        animation: {
            show: false,
            hide: false
        },
        items: [
            {
                text: '.NET',
                items: [
                    {
                        text: 'Individual Platforms',
                        items: [
                            { text: 'WinForms' },
                            { text: 'ASP.NET' },
                            { text: 'MVC' },
                            { text: 'WPF' },
                            { text: 'Silverlight' },
                            { text: 'Windows 8 XAML' }
                        ],
                        selected: true,
                        selectable: true
                    },
                    {
                        text: 'Frameworks',
                        items: [{ text: 'eXpressApp Framework' }]
                    },
                    {
                        text: 'Code-Debug-Refactor',
                        items: [{ text: 'CodeRush for Visual Studio' }]
                    },
                    {
                        text: 'Mobile (HTML JS)',
                        items: [{ text: 'DevExtreme' }]
                    },
                    {
                        text: 'Cross-Platform',
                        items: [
                            { text: 'Reporting' },
                            { text: 'Document Generation' }
                        ]
                    },
                    {
                        text: 'Enterprise Tools',
                        items: [{ text: 'Report Server' },
                            { text: 'Analytics Dashboard' }]
                    }
                ]
            },
            {
                text: 'HTML JavaScript',
                items: [
                    {
                        text: 'Mobile',
                        items: [{ text: 'Phone JS' }]
                    },
                    {
                        text: 'HTML 5 JS Widgets',
                        items: [{ text: 'Chart JS' }]
                    }
                ]
            },
            {
                text: 'iOS 7',
                items: [
                    {
                        text: 'Native',
                        items: [{ text: 'DataExplorer' }]
                    }
                ]
            },
            {
                text: 'Testing Tools',
                items: [
                    {
                        text: 'Web Testing',
                        items: [{ text: 'TestCafe' }]
                    }
                ]
            },
            {
                text: 'Delphi & C++Builder',
                disabled: true
            }
        ]
    };

    ngOnInit(): void {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.menu.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
