import React from "react";

type CarouselOrientationTypeParams = 'vertical' | 'horizontal';

interface CarouselResponsive {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

interface CarouselPageChange {
    page: number;
}

export interface ICarousel {
    className?: string,
    value?: any[];
    page?: number;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    itemTemplate?(item: any): React.ReactNode;
    circular?: boolean;
    autoplayInterval?: number;
    numVisible?: number;
    numScroll?: number;
    responsiveOptions?: CarouselResponsive[];
    orientation?: CarouselOrientationTypeParams;
    verticalViewPortHeight?: string;
    contentClassName?: string;
    containerClassName?: string;
    indicatorsContentClassName?: string;
    onPageChange?(e: CarouselPageChange): void;
    children?: React.ReactNode;
}