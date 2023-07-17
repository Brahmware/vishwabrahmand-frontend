import { Box, BoxProps, styled } from "@mui/material"
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Section, { SectionTitle } from "../../../components/common/section";
import RecentArticles from "../RecentArticles";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

interface NoArticleFoundProps extends BoxProps {
  containerheight?: string | number;
}

const NoArticleFoundWrapper = styled(Box)<NoArticleFoundProps>(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: theme.customSpaces.xl,

  '& *': {
    lineHeight: '1.33 !important',
  },
}));

const NoArticleSection = styled(Section)(({ theme }) => ({
  paddingTop: theme.customSpaces.xl,
}));

const ReboundMessages = styled('span')(({ theme }) => ({
  paddingBottom: theme.customSpaces.sm,
}));

const ErrorMessage = styled('p')(({ theme }) => ({
  ...theme.textSelectionVarient.varient_rakthalal_on_white,
  color: theme.customColors.rakthalal,
  fontWeight: theme.customFontWeight.regular,
  margin: '0.25rem 0',
}));

const HookMessage = styled('p')(({ theme }) => ({
  fontWeight: theme.customFontWeight.medium,
  margin: '0.25rem 0',
}));

const RelatedLinksList = styled('ul')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  color: theme.customColors.rakthalal,
  textDecoration: "underline",
  textUnderlineOffset: "0.2rem",
  fontWeight: theme.customFontWeight.medium,
  marginLeft: `${theme.customSpaces.xs} !important`,

  '& li:not(:last-child)': {
    marginBottom: theme.customSpaces.sm,
  },

}));

const RelatedLink = styled(Link)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_rakthalal_on_white,
  color: theme.customColors.rakthalal,
  textTransform: 'none',
}));

const NoArticleFound = () => {

  const { t } = useTranslation();

  return (
    <Fragment>
      <Helmet>
        <title>{`Vishwa Brahmand | News Articles`}</title>
      </Helmet>
      <NoArticleFoundWrapper>
        <NoArticleSection>
          <SectionTitle>{t("__NEWS_ARTICLE_NOT_FOUND_TITLE")}</SectionTitle>
          <ReboundMessages>
            <ErrorMessage>
              <Trans
                i18nKey="__NEWS_ARTICLE_NOT_FOUND_REBOUND_MESSAGE_ERROR"
              />
            </ErrorMessage>
            <HookMessage>{t("__NEWS_ARTICLE_NOT_FOUND_REBOUND_MESSAGE_HOOK")}</HookMessage>
          </ReboundMessages>
          <RecentArticles noTitle />
        </NoArticleSection>
        <NoArticleSection>
          <SectionTitle>{t("__NEWS_ARTICLE_NOT_FOUND_REBOUND_LINKS_TITLE")}</SectionTitle>
          <RelatedLinksList>
            <li><RelatedLink to='/' replace>{t("__NEWS_ARTICLE_NOT_FOUND_REBOUND_LINK_HOME_TEXT")}</RelatedLink></li>
            <li><RelatedLink to='/company' replace>{t("__NEWS_ARTICLE_NOT_FOUND_REBOUND_LINK_COMPANY_TEXT")}</RelatedLink></li>
            <li><RelatedLink to='/brands' replace>{t("__NEWS_ARTICLE_NOT_FOUND_REBOUND_LINK_BRANDS_TEXT")}</RelatedLink></li>
            <li><RelatedLink to='/news' replace>{t("__NEWS_ARTICLE_NOT_FOUND_REBOUND_LINK_NEWS_TEXT")}</RelatedLink></li>
          </RelatedLinksList>
        </NoArticleSection>
      </NoArticleFoundWrapper>
    </Fragment>
  )
}

export default NoArticleFound