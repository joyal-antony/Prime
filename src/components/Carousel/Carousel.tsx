import _ from "lodash";
import {ICarousel} from './CarouselProbs'

type CarouselOrientationType = 'vertical' | 'horizontal';

interface CarouselResponsiveOptions {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

interface CarouselPageChangeParams {
    page: number;
}

export interface CarouselProps {
  className?: string,
    value?: any[];
    page?: number;
    circular?: boolean;
    autoplayInterval?: number;
    numVisible?: number;
    numScroll?: number;
    verticalViewPortHeight?: string;
    contentClassName?: string;
    containerClassName?: string;
    indicatorsContentClassName?: string;
    
    header?: React.ReactNode;
    footer?: React.ReactNode;
    itemTemplate?(item: any): React.ReactNode;

    responsiveOptions?: CarouselResponsiveOptions[];
    orientation?: CarouselOrientationType;
    onPageChange?(e: CarouselPageChangeParams): void;
    
    children?: React.ReactNode;
}

const getCarouselclassName = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      className
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isEmpty(className) === true) {
      newCarouselProps.className = className;
    }
  
    return newCarouselProps;
  };
const getCarouselValue = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      value
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isArray(value) === true) {
      newCarouselProps.value = value;
    }
  
    return newCarouselProps;
  };

const getCarouselPage = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      page
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isNumber(page) === true) {
      newCarouselProps.page = page;
    }
  
    return newCarouselProps;
  };

const getCarouselCircular = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      circular
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isBoolean(circular) === true) {
      newCarouselProps.circular = circular;
    }
  
    return newCarouselProps;
  };
  
const getCarouselAutoplayInterval = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      autoplayInterval
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isNumber(autoplayInterval) === true) {
      newCarouselProps.autoplayInterval = autoplayInterval;
    }
  
    return newCarouselProps;
  };
  
const getCarouselNumVisible = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      numVisible
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isNumber(numVisible) === true) {
      newCarouselProps.numVisible = numVisible;
    }
  
    return newCarouselProps;
  };

  const getCarouselnumScroll = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      numScroll
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isNumber(numScroll) === true) {
      newCarouselProps.numScroll = numScroll;
    }
  
    return newCarouselProps;
  };

  const getCarouselVerticalViewPortHeight = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      verticalViewPortHeight
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isEmpty(verticalViewPortHeight) === false) {
      newCarouselProps.verticalViewPortHeight = verticalViewPortHeight;
    }
  
    return newCarouselProps;
  };

  const getCarouselContentClassName = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      contentClassName
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isEmpty(contentClassName) === false) {
      newCarouselProps.contentClassName = contentClassName;
    }
  
    return newCarouselProps;
  };


  const getCarouselContainerClassName = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      containerClassName
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isEmpty(containerClassName) === false) {
      newCarouselProps.containerClassName = containerClassName;
    }
  
    return newCarouselProps;
  };


  const getCarouselIndicatorsContentClassName = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      indicatorsContentClassName
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (_.isEmpty(indicatorsContentClassName) === false) {
      newCarouselProps.indicatorsContentClassName = indicatorsContentClassName;
    }
  
    return newCarouselProps;
  };

  const getCarouselresponsiveOptions = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      responsiveOptions
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (responsiveOptions) {
      newCarouselProps.responsiveOptions = responsiveOptions;
    }
  
    return newCarouselProps;
  };
  
  const getCarouselorientation = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      orientation
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (orientation) {
      newCarouselProps.orientation = orientation;
    }
  
    return newCarouselProps;
  };

  const getCarouselonPageChange = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      onPageChange
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (onPageChange) {
      newCarouselProps.onPageChange = onPageChange;
    }
  
    return newCarouselProps;
  };

  const getCarouselitemTemplate = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      itemTemplate
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (itemTemplate) {
      newCarouselProps.itemTemplate = itemTemplate;
    }
  
    return newCarouselProps;
  };
  
  const getCarouselheader = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      header
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (header) {
      newCarouselProps.header = header;
    }
  
    return newCarouselProps;
  };
  
  const getCarouselfooter = (props: ICarousel, carouselProps: CarouselProps) => {
    const {
      footer
    } = props;
  
    const newCarouselProps = carouselProps;
  
    if (footer) {
      newCarouselProps.footer = footer;
    }
  
    return newCarouselProps;
  };



export {
    getCarouselclassName,
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
    getCarouselitemTemplate,
    getCarouselfooter,getCarouselheader
}