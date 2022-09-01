import React from "react";
import {DataView as UIKitDataView,
    DataViewLayoutOptions as UIKitDataViewLayoutOptionsProps} from 'primereact/dataview'

import {IDataViewProps,IDataViewLayoutOptionsProps} from './DataViewProps'
import {   DataViewProps,
    DataViewLayoutOptionsProps,
    getDataViewclassName,
    getDataViewAlwaysShowPaginator,
    getDataViewValue,
    getDataViewDataKey,
    getDataViewitemTemplate,
    getDataViewfooter,
    getDataViewheader,
    getDataViewFirst,
    getDataViewPageLinkSize,
    getDataViewPaginator,
    getDataViewPaginatorClassName,
    getDataViewRows,
    getDataViewRowsPerPageOptions,
    getDataViewTotalRecords,
    getDataViewcurrentPageReportTemplate,
    getDataViewemptyMessage,
    getDataViewgutter,
    getDataViewlayout,
    getDataViewlazy,
    getDataViewloading,
    getDataViewloadingIcon,
    getDataViewonPage,
    getDataViewpaginatorDropdownAppendTo,
    getDataViewpaginatorLeft,
    getDataViewpaginatorPosition,
    getDataViewpaginatorRight,
    getDataViewpaginatorTemplate,
    getDataViewsortField,
    getDataViewsortOrder,
    getDataViewLayoutclassName,
    getDataViewLayoutlayout,
    getDataViewLayoutonChange} from './Dataview'

const getDataViewProps=(props:IDataViewProps)=>{
    let dataviewProps ={} as DataViewProps

    dataviewProps=getDataViewclassName(props,dataviewProps)
    dataviewProps=getDataViewAlwaysShowPaginator(props,dataviewProps)
    dataviewProps=getDataViewValue(props,dataviewProps)
    dataviewProps=getDataViewDataKey(props,dataviewProps)
    dataviewProps=getDataViewitemTemplate(props,dataviewProps)
    dataviewProps=getDataViewfooter(props,dataviewProps)
    dataviewProps=getDataViewheader(props,dataviewProps)
    dataviewProps=getDataViewFirst(props,dataviewProps)
    dataviewProps=getDataViewPageLinkSize(props,dataviewProps)
    dataviewProps=getDataViewPaginator(props,dataviewProps)
    dataviewProps=getDataViewPaginatorClassName(props,dataviewProps)
    dataviewProps=getDataViewRows(props,dataviewProps)
    dataviewProps=getDataViewRowsPerPageOptions(props,dataviewProps)
    dataviewProps=getDataViewTotalRecords(props,dataviewProps)
    dataviewProps=getDataViewcurrentPageReportTemplate(props,dataviewProps)
    dataviewProps=getDataViewemptyMessage(props,dataviewProps)
    dataviewProps=getDataViewgutter(props,dataviewProps)
    dataviewProps=getDataViewlayout(props,dataviewProps)
    dataviewProps=getDataViewlazy(props,dataviewProps)
    dataviewProps=getDataViewloading(props,dataviewProps)
    dataviewProps=getDataViewloadingIcon(props,dataviewProps)
    dataviewProps=getDataViewonPage(props,dataviewProps)
    dataviewProps=getDataViewpaginatorDropdownAppendTo(props,dataviewProps)
    dataviewProps=getDataViewpaginatorLeft(props,dataviewProps)
    dataviewProps=getDataViewpaginatorPosition(props,dataviewProps)
    dataviewProps=getDataViewpaginatorRight(props,dataviewProps)
    dataviewProps=getDataViewpaginatorTemplate(props,dataviewProps)
    dataviewProps=getDataViewsortField(props,dataviewProps)
    dataviewProps=getDataViewsortOrder(props,dataviewProps)

    return dataviewProps

}

const getdataViewLayoutOptionsProps=(props:IDataViewLayoutOptionsProps)=>{
    let dataViewLayoutOptionsProps ={} as DataViewLayoutOptionsProps

    dataViewLayoutOptionsProps=getDataViewLayoutclassName(props,dataViewLayoutOptionsProps)
    dataViewLayoutOptionsProps=getDataViewLayoutlayout(props,dataViewLayoutOptionsProps)
    dataViewLayoutOptionsProps=getDataViewLayoutonChange(props,dataViewLayoutOptionsProps)
  

    return dataViewLayoutOptionsProps

}

const DataView: React.FC<IDataViewProps>=(props:IDataViewProps)=>{
    const {children} = props

    const dataviewProps:DataViewProps=getDataViewProps(props)

    return(
        <UIKitDataView {...dataviewProps}>
            {children}
        </UIKitDataView>
    )
}

const DataViewLayoutOptions: React.FC<IDataViewLayoutOptionsProps>=(props:IDataViewLayoutOptionsProps)=>{
    const {children} = props

    const dataViewLayoutOptionsProps:DataViewLayoutOptionsProps=getdataViewLayoutOptionsProps(props)

    return(
        <UIKitDataViewLayoutOptionsProps {...dataViewLayoutOptionsProps}>
            {children}
        </UIKitDataViewLayoutOptionsProps>
    )
}

export {DataView,DataViewLayoutOptions}
export * from './DataViewProps'