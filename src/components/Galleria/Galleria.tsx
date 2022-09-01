import _ from 'lodash'
import {IGalleriaProps} from './GalleriaProps'

import {CSSTransitionProps} from 'primereact/csstransition'


type GalleriaPositionType = 'top' | 'bottom' | 'left' | 'right';

interface GalleriaResponsiveOptions {
    breakpoint: string;
    numVisible: number;
}

interface GalleriaItemChangeParams {
    index: number;
}

export interface GalleriaProps  {
    value?: any[];
    activeIndex?: number;
    fullScreen?: boolean;
    item?(item: any): React.ReactNode;
    thumbnail?(item: any): React.ReactNode;
    indicator?(index: number): React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    numVisible?: number;
    responsiveOptions?: GalleriaResponsiveOptions[];
    showItemNavigators?: boolean;
    showThumbnailNavigators?: boolean;
    showItemNavigatorsOnHover?: boolean;
    changeItemOnIndicatorHover?: boolean;
    circular?: boolean;
    autoPlay?: boolean;
    transitionInterval?: number;
    caption?(item: any): React.ReactNode;
    showThumbnails?: boolean;
    thumbnailsPosition?: GalleriaPositionType;
    showIndicators?: boolean;
    showIndicatorsOnItem?: boolean;
    indicatorsPosition?: GalleriaPositionType;
    baseZIndex?: number;
    transitionOptions?: CSSTransitionProps;
    onItemChange?(e: GalleriaItemChangeParams): void;
    onShow?(): void;
    onHide?(): void;
    children?: React.ReactNode;
}

const getGalleriavalue = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      value
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isArray(value) === true) {
        newGalleriaProps.value = value;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaActiveIndex = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      activeIndex
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isNumber(activeIndex) === true) {
        newGalleriaProps.activeIndex = activeIndex;
    }
  
    return newGalleriaProps;
  };

  const getGallerianumVisible = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      numVisible
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isNumber(numVisible) === true) {
        newGalleriaProps.numVisible = numVisible;
    }
  
    return newGalleriaProps;
  };

  const getGalleriashowItemNavigators = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      showItemNavigators
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(showItemNavigators) === true) {
        newGalleriaProps.showItemNavigators = showItemNavigators;
    }
  
    return newGalleriaProps;
  };

  const getGalleriashowThumbnailNavigators = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      showThumbnailNavigators
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(showThumbnailNavigators) === true) {
        newGalleriaProps.showThumbnailNavigators = showThumbnailNavigators;
    }
  
    return newGalleriaProps;
  };

  const getGalleriashowItemNavigatorsOnHover = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      showItemNavigatorsOnHover
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(showItemNavigatorsOnHover) === true) {
        newGalleriaProps.showItemNavigatorsOnHover = showItemNavigatorsOnHover;
    }
  
    return newGalleriaProps;
  };

  const getGalleriachangeItemOnIndicatorHover = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      changeItemOnIndicatorHover
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(changeItemOnIndicatorHover) === true) {
        newGalleriaProps.changeItemOnIndicatorHover = changeItemOnIndicatorHover;
    }
  
    return newGalleriaProps;
  };

  const getGalleriacircular = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      circular
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(circular) === true) {
        newGalleriaProps.circular = circular;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaautoPlay = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      autoPlay
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(autoPlay) === true) {
        newGalleriaProps.autoPlay = autoPlay;
    }
  
    return newGalleriaProps;
  };

  const getGalleriashowIndicators = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      showIndicators
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(showIndicators) === true) {
        newGalleriaProps.showIndicators = showIndicators;
    }
  
    return newGalleriaProps;
  };

  const getGalleriashowThumbnails = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      showThumbnails
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(showThumbnails) === true) {
        newGalleriaProps.showThumbnails = showThumbnails;
    }
  
    return newGalleriaProps;
  };

  const getGalleriashowIndicatorsOnItem = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      showIndicatorsOnItem
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isBoolean(showIndicatorsOnItem) === true) {
        newGalleriaProps.showIndicatorsOnItem = showIndicatorsOnItem;
    }
  
    return newGalleriaProps;
  };

  const getGalleriatransitionInterval = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      transitionInterval
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isNumber(transitionInterval) === true) {
        newGalleriaProps.transitionInterval = transitionInterval;
    }
  
    return newGalleriaProps;
  };
  const getGalleriafullScreen = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      fullScreen
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isNumber(fullScreen) === true) {
        newGalleriaProps.fullScreen = fullScreen;
    }
  
    return newGalleriaProps;
  };

  const getGalleriabaseZIndex = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      baseZIndex
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (_.isNumber(baseZIndex) === true) {
        newGalleriaProps.baseZIndex = baseZIndex;
    }
  
    return newGalleriaProps;
  };
  
  const getGalleriaresponsiveOptions = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      responsiveOptions
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (responsiveOptions) {
        newGalleriaProps.responsiveOptions = responsiveOptions;
    }
  
    return newGalleriaProps;
  };

  const getGalleriacaption = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      caption
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (caption) {
        newGalleriaProps.caption = caption;
    }
  
    return newGalleriaProps;
  };

  const getGalleriathumbnailsPosition = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      thumbnailsPosition
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (thumbnailsPosition) {
        newGalleriaProps.thumbnailsPosition = thumbnailsPosition;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaindicatorsPosition = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      indicatorsPosition
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (indicatorsPosition) {
        newGalleriaProps.indicatorsPosition = indicatorsPosition;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaitem = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      item
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (item) {
        newGalleriaProps.item = item;
    }
  
    return newGalleriaProps;
  };

  const getGalleriathumbnail = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      thumbnail
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (thumbnail) {
        newGalleriaProps.thumbnail = thumbnail;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaindicator = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      indicator
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (indicator) {
        newGalleriaProps.indicator = indicator;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaheader = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      header
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (header) {
        newGalleriaProps.header = header;
    }
  
    return newGalleriaProps;
  };

  const getGalleriafooter = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      footer
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (footer) {
        newGalleriaProps.footer = footer;
    }
  
    return newGalleriaProps;
  };

  const getGalleriatransitionOptions = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      transitionOptions
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (transitionOptions) {
        newGalleriaProps.transitionOptions = transitionOptions;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaonItemChange = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      onItemChange
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (onItemChange) {
        newGalleriaProps.onItemChange = onItemChange;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaonShow = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      onShow
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (onShow) {
        newGalleriaProps.onShow = onShow;
    }
  
    return newGalleriaProps;
  };

  const getGalleriaonHide = (props: IGalleriaProps, galleriaProps: GalleriaProps) => {
    const {
      onHide
    } = props;
  
    const newGalleriaProps = galleriaProps;
  
    if (onHide) {
        newGalleriaProps.onHide = onHide;
    }
  
    return newGalleriaProps;
  };

  export{
    getGalleriaActiveIndex,
    getGalleriaautoPlay,
    getGalleriabaseZIndex,
    getGalleriacaption,
    getGalleriachangeItemOnIndicatorHover,
    getGalleriacircular,
    getGalleriafooter,
    getGalleriaheader,
    getGalleriaindicator,
    getGalleriaindicatorsPosition,
    getGalleriaitem,
    getGallerianumVisible,
    getGalleriaonHide,
    getGalleriaonItemChange,
    getGalleriaonShow,
    getGalleriaresponsiveOptions,
    getGalleriashowIndicators,
    getGalleriashowIndicatorsOnItem,
    getGalleriashowItemNavigators,
    getGalleriashowItemNavigatorsOnHover,
    getGalleriashowThumbnailNavigators,
    getGalleriashowThumbnails,
    getGalleriathumbnail,
    getGalleriathumbnailsPosition,
    getGalleriatransitionInterval,
    getGalleriatransitionOptions,
    getGalleriavalue,
    getGalleriafullScreen
}