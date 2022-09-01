import _ from 'lodash'
import {ITooltipProps,ITooltipOptions} from './TooltiProps'


type TooltipTargetType = string | string[] | HTMLElement;


export interface TooltipProps extends TooltipOptions {
    id?: string;
    target?: TooltipTargetType;
    content?: string;
    children?: React.ReactNode;
}


type TooltipPositionType = 'top' | 'bottom' | 'left' | 'right';

type TooltipEventType = 'hover' | 'focus';

type TooltipAppendToType = 'self' | HTMLElement | undefined | null;

interface TooltipEventParams {
    originalEvent: React.SyntheticEvent;
    target: HTMLElement;
}

export  interface TooltipOptions {
    className?: string;
    style?: object;
    appendTo?: TooltipAppendToType;
    position?: TooltipPositionType;
    my?: string;
    at?: string;
    event?: TooltipEventType;
    showEvent?: string;
    hideEvent?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    mouseTrack?: boolean;
    mouseTrackTop?: number;
    mouseTrackLeft?: number;
    showDelay?: number;
    updateDelay?: number;
    hideDelay?: number;
    autoHide?: boolean;
    disabled?: boolean;
    showOnDisabled?: boolean;
    onBeforeShow?(e: TooltipEventParams): void;
    onBeforeHide?(e: TooltipEventParams): void;
    onShow?(e: TooltipEventParams): void;
    onHide?(e: TooltipEventParams): void;
}


const getTooltipTarget = (props: ITooltipProps, tooltipProps: TooltipProps) => {
    const {
      target
    } = props;
  
    const newtooltipProps = tooltipProps;
  
    if (target) {
      newtooltipProps.target = target;
    }
  
    return newtooltipProps;
  };
const getTooltipid = (props: ITooltipProps, tooltipProps: TooltipProps) => {
    const {
      id
    } = props;
  
    const newtooltipProps = tooltipProps;
  
    if (_.isEmpty(id) === false) {
        newtooltipProps.id = id;
    }
  
    return newtooltipProps;
  };

const getTooltipcontent = (props: ITooltipProps, tooltipProps: TooltipProps) => {
    const {
      content
    } = props;
  
    const newtooltipProps = tooltipProps;
  
    if (_.isEmpty(content) === false) {
        newtooltipProps.content = content;
    }
  
    return newtooltipProps;
  };


export{
    getTooltipTarget,
    getTooltipcontent,
    getTooltipid
}