/*eslint @typescript-eslint/no-magic-numbers: 'off'*/
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-scheduler',
    templateUrl: './scheduler.component.html',
    styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit, OnDestroy {
    widgetGroup = 'scheduler';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('scheduler') scheduler: DxSchedulerComponent;

    collapsedOptions = {
        views: ['day'],
        currentView: 'day',
        currentDate: new Date(2017, 4, 22),
        firstDayOfWeek: 1,
        startDayHour: 9,
        dataSource: [
            {
                text: 'Website Re-Design Plan',
                startDate: new Date(2017, 4, 22, 9, 30),
                endDate: new Date(2017, 4, 22, 11, 30)
            }
        ]
    };

    expandedOptions = {
        views: ['month', 'week', 'day'],
        currentDate: new Date(2017, 4, 25),
        indicatorTime: new Date(2017, 4, 24),
        currentView: 'week',
        startDayHour: 9,
        endDayHour: 13,
        firstDayOfWeek: 1,
        showCurrentTimeIndicator: true,
        dataSource: [
            {
                text: 'Website Re-Design Plan',
                startDate: new Date(2017, 4, 22, 9, 30),
                endDate: new Date(2017, 4, 22, 11, 30)
            }, {
                text: 'Book Flights to San Fran for Sales Trip',
                startDate: new Date(2017, 4, 22, 12, 0),
                endDate: new Date(2017, 4, 22, 13, 0),
                allDay: true
            }, {
                text: 'Install New Router in Dev Room',
                startDate: new Date(2017, 4, 22, 14, 30),
                endDate: new Date(2017, 4, 22, 15, 30)
            }, {
                text: 'Approve Personal Computer Upgrade Plan',
                startDate: new Date(2017, 4, 23, 10, 0),
                endDate: new Date(2017, 4, 23, 11, 0)
            }, {
                text: 'Final Budget Review',
                startDate: new Date(2017, 4, 23, 12, 0),
                endDate: new Date(2017, 4, 23, 13, 35)
            }, {
                text: 'New Brochures',
                startDate: new Date(2017, 4, 23, 14, 30),
                endDate: new Date(2017, 4, 23, 15, 45)
            }, {
                text: 'Install New Database',
                startDate: new Date(2017, 4, 24, 9, 45),
                endDate: new Date(2017, 4, 24, 11, 15)
            }, {
                text: 'Approve New Online Marketing Strategy',
                startDate: new Date(2017, 4, 24, 12, 0),
                endDate: new Date(2017, 4, 24, 14, 0)
            }, {
                text: 'Upgrade Personal Computers',
                startDate: new Date(2017, 4, 24, 15, 15),
                endDate: new Date(2017, 4, 24, 16, 30)
            }, {
                text: 'Customer Workshop',
                startDate: new Date(2017, 4, 25, 11, 0),
                endDate: new Date(2017, 4, 25, 12, 0),
                allDay: true
            }, {
                text: 'Prepare 2015 Marketing Plan',
                startDate: new Date(2017, 4, 25, 11, 0),
                endDate: new Date(2017, 4, 25, 13, 30)
            }, {
                text: 'Brochure Design Review',
                startDate: new Date(2017, 4, 25, 14, 0),
                endDate: new Date(2017, 4, 25, 15, 30)
            }, {
                text: 'Create Icons for Website',
                startDate: new Date(2017, 4, 26, 10, 0),
                endDate: new Date(2017, 4, 26, 11, 30)
            }, {
                text: 'Upgrade Server Hardware',
                startDate: new Date(2017, 4, 26, 14, 30),
                endDate: new Date(2017, 4, 26, 16, 0)
            }, {
                text: 'Submit New Website Design',
                startDate: new Date(2017, 4, 26, 16, 30),
                endDate: new Date(2017, 4, 26, 18, 0)
            }, {
                text: 'Launch New Website',
                startDate: new Date(2017, 4, 26, 12, 20),
                endDate: new Date(2017, 4, 26, 14, 0)
            }
        ]
    };

    ngOnInit(): void {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.scheduler.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
