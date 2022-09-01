import React from "react";
import {
    PaginatorTemplate as PaginatorTemplateOptions,
  } from 'primereact/paginator';

type DataViewLayoutType = 'list' | 'grid' | (string & {});

type DataViewPaginatorPositionType = 'top' | 'bottom' | 'both';

type DataViewSortOrderType = 1 | 0 | -1 | undefined | null;

type DataViewAppendToType = 'self' | HTMLElement | undefined | null;

interface DataViewPage {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

interface DataViewLayoutOptionsChangeParams {
    originalEvent: React.MouseEvent<HTMLButtonElement>;
    value: DataViewLayoutType;
}

export interface IDataViewLayoutOptionsProps {
    id?: string;
    layout?: DataViewLayoutType;
    style?: object;
    className?: string;
    onChange(e: DataViewLayoutOptionsChangeParams): void;
    children?: React.ReactNode;
}



export interface IDataViewProps {
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
    paginatorTemplate?: PaginatorTemplateOptions;
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
    onPage?(e: DataViewPage): void;
    itemTemplate?(item: any, layout: DataViewLayoutType): React.ReactNode;
    children?: React.ReactNode;
}