import React, { useContext, useEffect, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AuthContext } from '../router/AuthProvider';
import axios from 'axios';

const Gallery = () => {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        const allGalleryData = async () => {
            const { data } = await axios.get('galleryData.json');
            setGallery(data);
        }
        allGalleryData();
    }, []);
    console.log(gallery)
    //galleryData.json 
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div>
                <h1 className='text-5xl text-center font-semibold my-5'>Foods Collectoin</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {gallery.map((item) => (
                    <div
                        key={item.id}
                        className="relative group border p-3 rounded-md"
                        onClick={() => setOpen(true)}
                    >
                        <img src={item.imageSrc} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-white text-2xl font-bold">User Name: {user?.displayName}</h3>
                            <h3 className='text-white text-xl font-bold mt-2'>Food Name: {item.name}</h3>
                            <p className="text-white text-base text-center px-4">{item.description}</p>
                        </div>
                    </div>
                ))}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={gallery.map((item) => ({ src: item.imageSrc }))}
                />
            </div>
        </div>
    );
};

export default Gallery;