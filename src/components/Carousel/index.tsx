import React from "react";
import { Carousel as UiKitCarousel } from "primereact/carousel";

import {ICarousel} from './CarouselProbs'
import {
    CarouselProps,
    getCarouselAutoplayInterval,
    getCarouselCircular,
    getCarouselContainerClassName,
    getCarouselContentClassName,
    getCarouselIndicatorsContentClassName,
    getCarouselNumVisible,
    getCarouselPage,
    getCarouselValue,
    getCarouselVerticalViewPortHeight,
    getCarouselnumScroll,
    getCarouselonPageChange,
    getCarouselorientation,
    getCarouselresponsiveOptions,
    getCarouselclassName,
    getCarouselfooter,
    getCarouselheader,
    getCarouselitemTemplate,
} from './Carousel'


const getCarouselProps=(props:ICarousel)=>{
    let carouselProps={} as CarouselProps;

    carouselProps=getCarouselclassName(props,carouselProps)
    carouselProps=getCarouselAutoplayInterval(props,carouselProps)
    carouselProps=getCarouselCircular(props,carouselProps)
    carouselProps=getCarouselContainerClassName(props,carouselProps)
    carouselProps=getCarouselContentClassName(props,carouselProps)
    carouselProps=getCarouselIndicatorsContentClassName(props,carouselProps)
    carouselProps=getCarouselNumVisible(props,carouselProps)
    carouselProps=getCarouselPage(props,carouselProps)
    carouselProps=getCarouselValue(props,carouselProps)
    carouselProps=getCarouselVerticalViewPortHeight(props,carouselProps)
    carouselProps=getCarouselnumScroll(props,carouselProps)
    carouselProps=getCarouselonPageChange(props,carouselProps)
    carouselProps=getCarouselorientation(props,carouselProps)
    carouselProps=getCarouselresponsiveOptions(props,carouselProps)
    carouselProps=getCarouselfooter(props,carouselProps)
    carouselProps=getCarouselheader(props,carouselProps)
    carouselProps=getCarouselitemTemplate(props,carouselProps)

    return carouselProps
}

const Carousel: React.FC<ICarousel>=(props:ICarousel)=>{
    const {children}=props
    
    const carouselProps:CarouselProps=getCarouselProps(props)

    return(
        <UiKitCarousel {...carouselProps} >
            {children}
        </UiKitCarousel>
    )
}
export {Carousel}
export * from './CarouselProbs'
