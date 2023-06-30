import React, { lazy, useState, useEffect } from 'react';
import { fetchCast } from '../../api/fetchApi';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { ActorsCard, ActorsList, ActorsName } from './Cast.styled.jsx';
import { Circles } from 'react-loader-spinner';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    const fetchActors = async () => {
      setLoading(true);
      try {
        const actorsData = await fetchCast(Number(movieId));
        setActors(actorsData);
      } catch (error) {
        Notify.failure(
          'Ooops, something broke. Try again please... ',
          error.messages
        );
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [movieId]);

  if (!actors) {
    return null;
  }

  let posterPath;
  const { cast } = actors;

  return (
    <ActorsList>
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {cast.map(actor => {
        if (actor.profile_path) {
          posterPath = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
        } else {
          posterPath = `https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg`;
        }
        return (
          <ActorsCard key={actor.id}>
            <img src={posterPath} width="200" height="300" alt={actor.name} />
            <ActorsName>{actor.name}</ActorsName>
          </ActorsCard>
        );
      })}
    </ActorsList>
  );
};
export default lazy(() =>
  import('./Cast').then(module => ({
    default: module.Cast,
  }))
);
