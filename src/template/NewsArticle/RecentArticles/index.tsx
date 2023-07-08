import { useEffect, useState, useMemo, Fragment } from 'react';
import Section, { SectionTitle } from '../../../components/common/section';
import { styled } from '@mui/material';
import NewsCardComponent, { NewsCardSkeleton } from '../../../pages/NewsPage/NewsCard';
import { NewsCard, newsPageData } from '../../../__mocks__/pages/newspage';
import RecentArticleCarousel, { RecentArticleCarouselSkeleton } from './RecentArticleCarousel';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Head from './Head';


const RecentArticlesSection = styled(Section)(({ theme }) => ({
  ...theme.bodyProps,
  paddingTop: 0,
  marginTop: theme.customSpaces.xl,
}));

const RecentArticles = () => {

  const { t } = useTranslation();

  const [newsData, setNewsData] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articleId: currentArticleId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { newsReleases } = await newsPageData.getNewsReleases();
        const otherReleases = newsReleases.filter((release) => release.id !== currentArticleId);

        setNewsData(otherReleases);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentArticleId]);

  const slides = useMemo(
    () =>
      newsData.map((newsCard, index) => (
        <Fragment key={index}>
          <Head key={index} link={newsCard.id} />
          <NewsCardComponent cardData={newsCard} />
        </Fragment>
      )),
    [newsData]
  );

  const skeletonSlides = useMemo(
    () =>
      [...Array(3)].map((_, index) => (
        <Fragment key={index}>
          <NewsCardSkeleton />
        </Fragment>
      )),
    []
  );

  return (
    <RecentArticlesSection>
      <SectionTitle>{t("__NEWS_ARTICLE_SHARE_RECENT_RELEASES")}</SectionTitle>
      {isLoading && newsData.length === 0 ? (
        <RecentArticleCarouselSkeleton slides={skeletonSlides} />
      ) : (
        <RecentArticleCarousel slides={slides} />
      )}
    </RecentArticlesSection>
  );
};

export default RecentArticles;
