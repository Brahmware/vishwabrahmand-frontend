import { Box, BoxProps, styled } from "@mui/material"
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Section, { SectionTitle } from "../../../components/common/section";
import { useContainerMinHeight } from "../../../utils/useContainerMinHeight";
import RecentArticles from "../RecentArticles";
import { Link } from "react-router-dom";

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
  gap: theme.customSpaces.sm,
  color: theme.customColors.rakthalal,
  textDecoration: "underline",
  textUnderlineOffset: "0.2rem",
  fontWeight: theme.customFontWeight.medium,
  marginLeft: `${theme.customSpaces.xs} !important`,
}));

const RelatedLink = styled(Link)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_rakthalal_on_white,
  color: theme.customColors.rakthalal,
  textTransform: 'none',
}));

const NoArticleFound = () => {
  return (
    <Fragment>
      <Helmet>
        <title>{`Vishwa Brahmand | News Articles`}</title>
      </Helmet>
      <NoArticleFoundWrapper>
        <NoArticleSection>
          <SectionTitle>Article not found!</SectionTitle>
          <ReboundMessages>
            <ErrorMessage>We are extremely sorry to let you know that the article you are looking for has gone <strong>missing.</strong></ErrorMessage>
            <HookMessage>However! based upon your interese these are some of the recent articles that might tickle your thoughts.</HookMessage>
          </ReboundMessages>
          <RecentArticles noTitle />
        </NoArticleSection>
        <NoArticleSection>
          <SectionTitle>Related Links</SectionTitle>
          <RelatedLinksList>
            <li><RelatedLink to='/' replace>Let's take a tour of our Brahmand</RelatedLink></li>
            <li><RelatedLink to='/company' replace>Know more about Vishwabrahmand</RelatedLink></li>
            <li><RelatedLink to='/brands' replace>Learn more about our visionary brands</RelatedLink></li>
            <li><RelatedLink to='/news' replace>Read exciting articles</RelatedLink></li>
          </RelatedLinksList>
        </NoArticleSection>
      </NoArticleFoundWrapper>
    </Fragment>
  )
}

export default NoArticleFound