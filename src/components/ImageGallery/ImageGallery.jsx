import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onImageClick={() => onImageClick(image)} />
                </li>
            ))}
        </ul>
    );
}

