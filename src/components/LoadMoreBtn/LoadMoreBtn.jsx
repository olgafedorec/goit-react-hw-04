import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn ({ onClick }) {
    return (
        <div>
            <button className={css.btn} onClick={onClick}>
                Load More
            </button>
        </div>
    )
}