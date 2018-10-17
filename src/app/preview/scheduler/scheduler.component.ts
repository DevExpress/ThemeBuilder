import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxSchedulerComponent } from 'devextreme-angular';

@Component({
    selector: 'app-scheduler',
    templateUrl: './scheduler.component.html',
    styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
    widgetGroup = 'scheduler';
    isExpanded = new Subject<boolean>();

    @ViewChild('scheduler') scheduler: DxSchedulerComponent;

    collapsedOptions = {
        'views': ['day'],
        'currentView': 'day',
        'currentDate': 1433106000000,
        'firstDayOfWeek': 1,
        'startDayHour': 2,
        'endDayHour': 11,
        'dataSource': [
            {
                'startDate': 1433113200000,
                'endDate': 1433115000000,
                'text': 'The first appointment'
            },
            {
                'startDate': 1433296800000,
                'endDate': 1433298600000,
                'text': 'The second appointment'
            }
        ]
    };

    expandedOptions = {
        'views': ['month', 'week', 'day'],
        'currentDate': 1433106000000,
        'currentView': 'week',
        'firstDayOfWeek': 1,
        'startDayHour': 2,
        'endDayHour': 11,
        'dataSource': [
            {
                'startDate': 1433113200000,
                'endDate': 1433115000000,
                'text': 'The first appointment'
            },
            {
                'startDate': 1433296800000,
                'endDate': 1433298600000,
                'text': 'The second appointment'
            }
        ]
    };

    ngOnInit() {
        this.isExpanded.subscribe((expanded) => {
            this.scheduler.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }
}
