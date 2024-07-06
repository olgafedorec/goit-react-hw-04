import { useEffect, useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImages } from '../../images-api';
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import css from './App.module.css';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function App(){
const [images, setImages] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [page, setPage] = useState(1);
const [search, setSearch] = useState("");
const [totalPages, setTotalPages] = useState(0);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const handleSearch = async (newSearch) => {
    setImages([]);
    setError(false); 
    setPage(1);
    setSearch(newSearch);
}

const handleLoadMore = () => {
   setPage(prevPage => prevPage + 1);
   setLoading(true);
}

const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
}

const closeModal = () => {
    setModalIsOpen(false); 
    setSelectedImage(null);
}

useEffect(() => {
    if(!search) return;
    async function getImages() {
        try {
            setLoading(true);
            setError(false);
            const data = await fetchImages(search, page);
            setImages(prevImages => [...prevImages, ...data.results]);
            setTotalPages(data.total_pages); 
        } catch (error) {
            toast.error('Oops! There was an error? please reload this page!')
            setError(true);
        } finally {
            setLoading(false); 
         } 
    }
    getImages();
}, [page, search])

return (
    <div className={css.container}>
        {error && <ErrorMessage/>}
        <SearchBar onSearch={handleSearch}/>
        {loading && <Loader/>} 
        {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick}/>}
        {images.length > 0 && !loading && page < totalPages &&(<LoadMoreBtn onClick={handleLoadMore}/>)}
        {modalIsOpen && selectedImage &&  <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
)
}
