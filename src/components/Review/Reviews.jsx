import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReview } from 'api/fetchApi';
import { ReviewsError } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchReview(Number(movieId));
        setReviews(results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (reviews.length < 1) {
    return <ReviewsError>Sorry, we don't have any reviews!</ReviewsError>;
  }

  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <p>
            <b>Author:</b> {review.author}
          </p>
          <p>
            <b>Content:</b> {review.content}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Reviews;
