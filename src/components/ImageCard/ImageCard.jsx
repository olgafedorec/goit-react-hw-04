import css from './ImageCard.module.css';

export default function ImageCard({ image: { alt_description, width, urls: { small }}, onImageClick }) {
  return (
      <div onClick={() => onImageClick()}>
          <img 
              className={css.img}
              src={small} 
              alt={alt_description}
              width={width}
          />
      </div>
  );
}