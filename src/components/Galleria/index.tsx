import React from "react";
import {Galleria as UIKitGalleri} from 'primereact/galleria'

import {IGalleriaProps} from './GalleriaProps'

import{ GalleriaProps,
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
} from './Galleria'

const getGalleriaProps=(props:IGalleriaProps)=>{
    let galleriaProps ={} as GalleriaProps

    galleriaProps=getGalleriaActiveIndex(props,galleriaProps)
    galleriaProps=getGalleriaautoPlay(props,galleriaProps)
    galleriaProps=getGalleriabaseZIndex(props,galleriaProps)
    galleriaProps=getGalleriacaption(props,galleriaProps)
    galleriaProps=getGalleriachangeItemOnIndicatorHover(props,galleriaProps)
    galleriaProps=getGalleriacircular(props,galleriaProps)
    galleriaProps=getGalleriafooter(props,galleriaProps)
    galleriaProps=getGalleriaheader(props,galleriaProps)
    galleriaProps=getGalleriaindicator(props,galleriaProps)
    galleriaProps=getGalleriaindicatorsPosition(props,galleriaProps)
    galleriaProps=getGalleriaitem(props,galleriaProps)
    galleriaProps=getGallerianumVisible(props,galleriaProps)
    galleriaProps=getGalleriaonHide(props,galleriaProps)
    galleriaProps=getGalleriaonItemChange(props,galleriaProps)
    galleriaProps=getGalleriaonShow(props,galleriaProps)
    galleriaProps=getGalleriaresponsiveOptions(props,galleriaProps)
    galleriaProps=getGalleriashowIndicators(props,galleriaProps)
    galleriaProps=getGalleriashowIndicatorsOnItem(props,galleriaProps)
    galleriaProps=getGalleriashowItemNavigators(props,galleriaProps)
    galleriaProps=getGalleriashowItemNavigatorsOnHover(props,galleriaProps)
    galleriaProps=getGalleriashowThumbnailNavigators(props,galleriaProps)
    galleriaProps=getGalleriashowThumbnails(props,galleriaProps)
    galleriaProps=getGalleriathumbnail(props,galleriaProps)
    galleriaProps=getGalleriathumbnailsPosition(props,galleriaProps)
    galleriaProps=getGalleriatransitionInterval(props,galleriaProps)
    galleriaProps=getGalleriatransitionOptions(props,galleriaProps)
    galleriaProps=getGalleriavalue(props,galleriaProps)
    galleriaProps=getGalleriafullScreen(props,galleriaProps)

    return galleriaProps
}

const Galleria: React.FC<IGalleriaProps>=(props:IGalleriaProps)=>{
    const {children} = props

    const dataviewProps:GalleriaProps=getGalleriaProps(props)

    return(
        <UIKitGalleri {...dataviewProps}>
            {children}
        </UIKitGalleri>
    )
}

export {Galleria}
export * from './GalleriaProps'