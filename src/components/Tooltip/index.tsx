import React from "react";
import {Tooltip as UIKitTooltip} from 'primereact/tooltip'

import { ITooltipProps } from "./TooltiProps";
import {
     getTooltipTarget,
    getTooltipcontent,
    getTooltipid, 
    TooltipProps,
    getTooltipposition,
    getTooltipdisabled,
    getTooltipclassName,
    getTooltipautoHide} from "./Tooltip";

const getTooltiProps =(props:ITooltipProps)=>{
    let tooltipProps ={} as TooltipProps

    tooltipProps=getTooltipTarget(props,tooltipProps)
    tooltipProps=getTooltipcontent(props,tooltipProps)
    tooltipProps=getTooltipid(props,tooltipProps)
    tooltipProps=getTooltipautoHide(props,tooltipProps)
    tooltipProps=getTooltipclassName(props,tooltipProps)
    tooltipProps=getTooltipdisabled(props,tooltipProps)
    tooltipProps=getTooltipposition(props,tooltipProps)
   
    return tooltipProps
}

const Tooltip: React.FC<ITooltipProps>=(props:ITooltipProps)=>{
    const {children} = props

    const dataviewProps:TooltipProps=getTooltiProps(props)

    return(
        <UIKitTooltip {...dataviewProps}>
            {children}
        </UIKitTooltip>
    )
}

export {Tooltip}
export * from './TooltiProps'