import { Box, Card, CardMedia, Typography, styled } from "@mui/material";
import { NewsCard } from "../../__mocks__/pages/presspage";
import { Link } from "react-router-dom";

const NewsCardWrapper = styled(Card)(({ theme }) => ({
  ...theme.bodyProps,
  maxWidth: '22em',
  aspectRatio: '1.125/1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.customPadding.sm} 0`,
  borderRadius: 0,
  borderBottom: `1px solid ${theme.customColors.border}`,
  transition: 'border-bottom 0.3s ease-in-out',

  '&:hover': {
    borderBottom: `1px solid ${theme.customColors.rakthalal}`,

    '& .news-image': {
      filter: 'none',
    },
  },
}));

const NewsImageComponent = styled(CardMedia)<
  {
    component: string,
    alt: string,
  }
>(({
  theme
}) => ({
  ...theme.bodyProps,
  width: '100%',
  aspectRatio: '16/9',
  objectFit: 'cover',
  padding: 0,
  margin: 0,
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s ease-in-out',
}));

const NewsTextComponent = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.sm,
}));

const PublicationDate = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.customColors.rakthalal,
  margin: 0,
}));

const Headline = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.customColors.bhasma,
  margin: 0,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  width: 'max-content',
  height: 'max-content',
}));

const NewsCardComponent = ({
  cardData
}: {
  cardData?: NewsCard;
}) => {
  return (
    <StyledLink to={cardData?.newsLink || '/'}>
      <NewsCardWrapper elevation={0}>
        <NewsImageComponent
          className="news-image"
          component="img"
          image={cardData?.image}
          alt="News Image"
        />
        <NewsTextComponent>
          <PublicationDate as="h5">
            {cardData?.pubDate}
          </PublicationDate>
          <Headline as="h2">
            {cardData?.headline}
          </Headline>
        </NewsTextComponent>
      </NewsCardWrapper>
    </StyledLink>
  );
};

export default NewsCardComponent;
