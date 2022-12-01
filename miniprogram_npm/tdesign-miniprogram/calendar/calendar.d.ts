/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
import { TdCalendarProps } from './type';
export interface CalendarProps extends TdCalendarProps {
}
export default class Calendar extends SuperComponent {
    externalClasses: string[];
    options: WechatMiniprogram.Component.ComponentOptions;
    properties: TdCalendarProps;
    data: {
        prefix: string;
        classPrefix: string;
        months: any[];
        scrollIntoView: string;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    lifetimes: {
        ready(): void;
    };
    observers: {
        value(v: any): void;
        visible(v: any): void;
    };
    methods: {
        initialValue(): void;
        scrollIntoView(): void;
        calcMonths(): void;
        handleClose(): void;
        handleSelect(e: any): void;
        onTplButtonTap(): void;
        toTime(val: any): any;
    };
}
