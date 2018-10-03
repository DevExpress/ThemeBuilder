import {
    trigger,
    group,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

export const routeAnimation =  trigger('routeAnimation', [
    transition('1 => 2, 2 => 3, * => 3', [
        query('.container', style({  opacity: 0, transform: 'translateY(20%)' }), { optional: true }),
        query('.title-link:not(.master)',  style({ 'font-size': '47px', color: '#404040', opacity: 0, transform: 'translateY(100%)' }),
        { optional: true }),
        query('.section.left', style({  opacity: 0, transform: 'translateX(70%)' }), { optional: true }),
        group([
            query(':enter .container', [
              style({  opacity: 0, transform: 'translateY(20%)' }),
              animate('.3s .2s ease-in', style({ opacity: 1, transform: 'translateY(0px)' }))
            ], { optional: true }),
            query(':enter .title-link:not(.master)',  [
                style({ opacity: 1, 'font-size': '47px', color: '#404040', transform: 'translateY(100%)'}),
                animate('.3s ease-in',
                  style({ opacity: 1, 'font-size': '30px', color: '#a7a8a9', transform: 'translateY(0px)' })),
            ], { optional: true })
        ]),
        group([
            query(':enter .section.left', [
                style({  opacity: 0, transform: 'translateX(70%)' }),
                animate('.6s .2s ease-in-out', style({ opacity: 1, transform: 'translateX(0px)' }))
            ], { optional: true }),
        ])
    ]),
    transition('3 => 2, 2 => 1', [
        query('.title',  style({ opacity: 0, 'font-size': '35px', color: '#a7a8a9', transform: 'translateY(0px)' }), { optional: true }),
        query('.container', style({  opacity: 0, transform: 'translateY(-20%)' }), { optional: true }),
        query('.title-link',  style({ opacity: 0, transform: 'translateY(-200%)' }), { optional: true }),
        query('.section.left', style({  opacity: 0 }), { optional: true }),
        query('.section.right', style({  opacity: 0 }), { optional: true }),
        group([
            query(':enter .title-link', [
                style({ opacity: 0, transform: 'translateY(-200%)' }),
                animate('.3s ease-in',
                  style({ opacity: 1, transform: 'translateY(0px)' })),
            ], { optional: true }),
            query(':enter .title', [
                style({ opacity: 1, 'font-size': '35px', color: '#a7a8a9', transform: 'translateY(0px)' }),
                animate('.3s  ease-in',
                  style({ opacity: 1, 'font-size': '47px', color: '#404040', transform: 'translateY(0px)' })),
            ], { optional: true }),
            query(':enter .container', [
              style({ opacity: 1, transform: 'translateY(-20%)' }),
              animate('.3s ease-in', style({ opacity: 1, transform: 'translateY(0px)' }))
            ], { optional: true })
        ])
    ])
]);
