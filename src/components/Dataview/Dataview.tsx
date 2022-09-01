import _ from "lodash";
import {IDataViewLayoutOptionsProps, IDataViewProps} from './DataViewProps'
import {
    PaginatorTemplate 
  } from 'primereact/paginator';

type DataViewLayoutType = 'list' | 'grid' | (string & {});

type DataViewPaginatorPositionType = 'top' | 'bottom' | 'both';

type DataViewSortOrderType = 1 | 0 | -1 | undefined | null;

type DataViewAppendToType = 'self' | HTMLElement | undefined | null;

interface DataViewPageParams {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

interface DataViewLayoutOptionsChangeParams {
  originalEvent: React.MouseEvent<HTMLButtonElement>;
  value: DataViewLayoutType;
}

export interface DataViewLayoutOptionsProps {
  id?: string;
  layout?: DataViewLayoutType;
  style?: object;
  className?: string;
  onChange(e: DataViewLayoutOptionsChangeParams): void;
  children?: React.ReactNode;
}



export interface DataViewProps {
    className?: string,
    header?: React.ReactNode;
    footer?: React.ReactNode;
    value?: any[];
    layout?: DataViewLayoutType;
    dataKey?: string;
    rows?: number;
    first?: number;
    totalRecords?: number;
    paginator?: boolean;
    paginatorPosition?: DataViewPaginatorPositionType;
    alwaysShowPaginator?: boolean;
    paginatorClassName?: string;
    paginatorTemplate?: PaginatorTemplate;
    paginatorLeft?: React.ReactNode;
    paginatorRight?: React.ReactNode;
    pageLinkSize?: number;
    paginatorDropdownAppendTo?: DataViewAppendToType;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    emptyMessage?: string;
    sortField?: string;
    sortOrder?: DataViewSortOrderType;
    lazy?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    gutter?: boolean;
    onPage?(e: DataViewPageParams): void;
    itemTemplate?(item: any, layout: DataViewLayoutType): React.ReactNode;
    children?: React.ReactNode;
}
const getDataViewLayoutonChange = (props: IDataViewLayoutOptionsProps, dataViewLayoutOptionsProps: DataViewLayoutOptionsProps) => {
    const {
      onChange
    } = props;
  
    const newdataViewLayoutOptionsProps = dataViewLayoutOptionsProps;
  
    if (onChange) {
      newdataViewLayoutOptionsProps.onChange = onChange;
    }
  
    return newdataViewLayoutOptionsProps;
  };
const getDataViewLayoutclassName = (props: IDataViewLayoutOptionsProps, dataViewLayoutOptionsProps: DataViewLayoutOptionsProps) => {
    const {
      className
    } = props;
  
    const newdataViewLayoutOptionsProps = dataViewLayoutOptionsProps;
  
    if (_.isEmpty(className) === true) {
      newdataViewLayoutOptionsProps.className = className;
    }
  
    return newdataViewLayoutOptionsProps;
  };
const getDataViewLayoutlayout = (props: IDataViewLayoutOptionsProps, dataViewLayoutOptionsProps: DataViewLayoutOptionsProps) => {
    const {
      layout
    } = props;
  
    const newdataViewLayoutOptionsProps = dataViewLayoutOptionsProps;
  
    if (layout) {
      newdataViewLayoutOptionsProps.layout = layout;
    }
  
    return newdataViewLayoutOptionsProps;
  };

const getDataViewclassName = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      className
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isEmpty(className) === true) {
      newDataViewProps.className = className;
    }
  
    return newDataViewProps;
  };
const getDataViewValue = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      value
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isArray(value) === true) {
      newDataViewProps.value = value;
    }
  
    return newDataViewProps;
  };

const getDataViewRows = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      rows
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isNumber(rows) === true) {
      newDataViewProps.rows = rows;
    }
  
    return newDataViewProps;
  };

const getDataViewDataKey = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      dataKey
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isEmpty(dataKey) === false) {
      newDataViewProps.dataKey = dataKey;
    }
  
    return newDataViewProps;
  };
  
const getDataViewFirst = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      first
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isNumber(first) === true) {
      newDataViewProps.first = first;
    }
  
    return newDataViewProps;
  };
  
const getDataViewTotalRecords = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      totalRecords
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isNumber(totalRecords) === true) {
      newDataViewProps.totalRecords = totalRecords;
    }
  
    return newDataViewProps;
  };

  const getDataViewPaginator = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      paginator
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isBoolean(paginator) === true) {
      newDataViewProps.paginator = paginator;
    }
  
    return newDataViewProps;
  };

  const getDataViewAlwaysShowPaginator = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      alwaysShowPaginator
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isBoolean(alwaysShowPaginator) === true) {
      newDataViewProps.alwaysShowPaginator = alwaysShowPaginator;
    }
  
    return newDataViewProps;
  };

  const getDataViewPaginatorClassName = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      paginatorClassName
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isEmpty(paginatorClassName) === false) {
      newDataViewProps.paginatorClassName = paginatorClassName;
    }
  
    return newDataViewProps;
  };


  const getDataViewPageLinkSize = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      pageLinkSize
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isNumber(pageLinkSize) === true) {
      newDataViewProps.pageLinkSize = pageLinkSize;
    }
  
    return newDataViewProps;
  };


  const getDataViewRowsPerPageOptions = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      rowsPerPageOptions
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isArray(rowsPerPageOptions) === true) {
      newDataViewProps.rowsPerPageOptions = rowsPerPageOptions;
    }
  
    return newDataViewProps;
  };

  const getDataViewcurrentPageReportTemplate = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      currentPageReportTemplate
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isEmpty(currentPageReportTemplate)===false) {
      newDataViewProps.currentPageReportTemplate = currentPageReportTemplate;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewemptyMessage = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      emptyMessage
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isEmpty(emptyMessage)===false) {
      newDataViewProps.emptyMessage = emptyMessage;
    }
  
    return newDataViewProps;
  };

  const getDataViewsortField = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      sortField
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isEmpty(sortField)===false) {
        newDataViewProps.sortField = sortField;
    }
  
    return newDataViewProps;
  };

  const getDataViewlazy = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      lazy
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isBoolean(lazy)===true) {
        newDataViewProps.lazy = lazy;
    }
  
    return newDataViewProps;
  };
  const getDataViewloading = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      loading
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isBoolean(loading)===true) {
        newDataViewProps.loading = loading;
    }
  
    return newDataViewProps;
  };
  const getDataViewloadingIcon = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      loadingIcon
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isEmpty(loadingIcon)===false) {
        newDataViewProps.loadingIcon = loadingIcon;
    }
  
    return newDataViewProps;
  };
  const getDataViewgutter = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      gutter
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (_.isBoolean(gutter)===true) {
        newDataViewProps.gutter = gutter;
    }
  
    return newDataViewProps;
  };

  const getDataViewitemTemplate = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      itemTemplate
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (itemTemplate) {
      newDataViewProps.itemTemplate = itemTemplate;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewheader = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      header
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (header) {
      newDataViewProps.header = header;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewfooter = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      footer
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (footer) {
      newDataViewProps.footer = footer;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewlayout = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      layout
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (layout) {
      newDataViewProps.layout = layout;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewpaginatorPosition = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      paginatorPosition
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (paginatorPosition) {
      newDataViewProps.paginatorPosition = paginatorPosition;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewpaginatorTemplate = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      paginatorTemplate
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (paginatorTemplate) {
      newDataViewProps.paginatorTemplate = paginatorTemplate;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewpaginatorLeft= (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      paginatorLeft
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (paginatorLeft) {
      newDataViewProps.paginatorLeft = paginatorLeft;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewpaginatorRight = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      paginatorRight
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (paginatorRight) {
      newDataViewProps.paginatorRight = paginatorRight;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewpaginatorDropdownAppendTo = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      paginatorDropdownAppendTo
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (paginatorDropdownAppendTo) {
      newDataViewProps.paginatorDropdownAppendTo = paginatorDropdownAppendTo;
    }
  
    return newDataViewProps;
  };
  
  const getDataViewsortOrder = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      sortOrder
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (sortOrder) {
      newDataViewProps.sortOrder = sortOrder;
    }
  
    return newDataViewProps;
  };
  const getDataViewonPage = (props: IDataViewProps, dataviewProps: DataViewProps) => {
    const {
      onPage
    } = props;
  
    const newDataViewProps = dataviewProps;
  
    if (onPage) {
      newDataViewProps.onPage = onPage;
    }
  
    return newDataViewProps;
  };
 

export {
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
    getDataViewLayoutlayout,
    getDataViewLayoutclassName,
    getDataViewLayoutonChange
}