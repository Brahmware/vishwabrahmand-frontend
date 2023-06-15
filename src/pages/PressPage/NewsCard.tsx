import { Box, Card, CardMedia, Skeleton, Typography, styled } from "@mui/material";
import { NewsCard } from "../../__mocks__/pages/presspage";
import { Link } from "react-router-dom";

const NewsCardWrapper = styled(Card)(({ theme }) => ({
  ...theme.bodyProps,
  maxWidth: '22em',
  aspectRatio: '1.125/1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 0,
  borderRadius: 0,
  borderBottom: `1px solid ${theme.customColors.border}`,
  transition: 'border-bottom 0.3s ease-in-out',

  '&:hover': {
    borderBottom: `1px solid ${theme.customColors.rakthalal}`,

    '& .news-image': {
      filter: 'none',
    },
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    aspectRatio: '16/12',
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
  aspectRatio: '16/12',
  objectFit: 'cover',
  padding: 0,
  margin: 0,
  filter: 'grayscale(100%)',
  borderRadius: 0,
  overflow: 'hidden',
  transition: 'filter 0.3s ease-in-out',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100vw - 5em)',
  },
}));

const NewsTextComponent = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.sm,

  [theme.breakpoints.between('sm', 'md')]: {
    marginLeft: 0,

  },
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
  margin: `${theme.customPadding.xs} 0`,
  padding: 0,
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

const NewsCardSkeletonWrapper = styled(Box)(({ theme }) => ({
  textDecoration: 'none',
  width: 'max-content',
  height: 'max-content',
  margin: `${theme.customPadding.xs} 0`,
  padding: 0,
}));

export const NewsCardSkeleton = () => {
  return (
    <NewsCardSkeletonWrapper>
      <NewsCardWrapper elevation={0}>
        <NewsImageComponent
          className="news-image"
          component={""}
          alt={""}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </NewsImageComponent>
        <NewsTextComponent>
          <PublicationDate as="h5" sx={{ width: '100%' }}>
            <Skeleton
              variant="text"
              width={`calc(30% + ${Math.random() * 10}%)`}
            />
          </PublicationDate>
          <Headline
            as="h2"
            sx={{
              height: '2em',
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ opacity: 0, padding: 0 }}>{
              new Array(60).fill(0).map(() => ('*'))
            }</p>
            <Skeleton
              variant="text"
              width="100%"
              height="2em"
              sx={{ position: 'absolute' }}
            />
          </Headline>
        </NewsTextComponent>
      </NewsCardWrapper>
    </NewsCardSkeletonWrapper>
  );
}