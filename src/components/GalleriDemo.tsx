import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import '../index.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { PhotoService } from './service/PhotoServie';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

const GalleriaProgrammaticDemo = () => {

    const [images, setImages] = useState(null);

    const galleriaService = new PhotoService();

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item:any) => {
        return <img src={item.itemImageSrc}  alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item:any) => {
        return <img src={item.thumbnailImageSrc}  alt={item.alt} style={{ display: 'block' }} />
    }

    return (
        <div>
            <div className="card">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7}  style={{ maxWidth: '800px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    );
}
export default GalleriaProgrammaticDemo