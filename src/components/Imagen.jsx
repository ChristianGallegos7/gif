import React from 'react'

export const Imagen = ({ imagen }) => {
    const { largeImageURL, likes, tags, views, previewURL } = imagen;
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img src={previewURL} alt={tags} className='card-img-top' />
            </div>
            <div className="card-bod">
                <p className='card-text'>{likes} Me gusta</p>
                <p className='card-text'>{views} Views </p>

            </div>
            <div className="card-footer">
                <a href={largeImageURL} target='_blank' className='btn btn-danger btn-block'>Visita la imagen alta resolucion</a>
            </div>
        </div>
    )
}
