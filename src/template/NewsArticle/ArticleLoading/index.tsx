import { Box, BoxProps, styled } from "@mui/material"
import { useContainerMinHeight } from "../../../utils/useContainerMinHeight";

interface ArticleLoadingContainerProps extends BoxProps {
  containerheight?: string | number;
};

const ArticleLoadingContainer = styled(Box)<ArticleLoadingContainerProps>(({ theme, containerheight = '100%' }) => ({
  ...theme.bodyProps,
  width: '100%',
  minHeight: containerheight,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: theme.customSpaces.xl,

  '& *': {
    lineHeight: '1.33 !important',
  },
}));

const LoaderBox = styled(Box)(({ theme }) => ({
  height: '12em',
  width: '12em',
  borderRadius: '50%',
}));

const ClockDial = styled('circle')(({ theme }) => ({
  fill: theme.customColors.slogan,
  strokeLinecap: 'round',
  strokeMiterlimit: '10',
}));

const ClockHand = styled('line')(({ theme }) => ({
  fill: 'none',
  strokeWidth: '4',
  strokeLinecap: 'round',
  strokeMiterlimit: '10',
}));

const SecondsHand = styled(ClockHand)(({ theme }) => ({
  stroke: theme.customColors.bhasma,
}));

const MinutesHand = styled(ClockHand)(({ theme }) => ({
  stroke: theme.customColors.rakthalal,
}));

const ArticleLoading = () => {
  return (
    <ArticleLoadingContainer containerheight={useContainerMinHeight()}>
      <LoaderBox>
        <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
          <ClockDial cx="50" cy="50" r="48" />
          <text x="50" y="50" text-anchor="middle" dy="2em" font-size="0.75em" font-weight="bold" fill="white">Loading</text>
          <MinutesHand stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
            <animateTransform
              attributeName="transform"
              dur="15s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite" />
          </MinutesHand>
          <SecondsHand stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite" />
          </SecondsHand>
        </svg>
      </LoaderBox>
    </ArticleLoadingContainer>
  )
}

export default ArticleLoading