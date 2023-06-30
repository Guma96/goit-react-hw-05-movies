import { NotFoundBlock, NotFoundText, NotFoundLink } from '../Pages.styled';

const NotFound = () => {
  return (
    <NotFoundBlock>
      <NotFoundText>Sorry, something wrong</NotFoundText>
      <NotFoundLink to="/">Back to main page</NotFoundLink>
    </NotFoundBlock>
  );
};
export default NotFound;
