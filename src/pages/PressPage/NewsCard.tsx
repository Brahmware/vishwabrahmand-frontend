import { Card, styled } from "@mui/material"

const NewsCardWrapper = styled(Card)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: `${theme.customSpaces.lg} ${theme.customSpaces.md}`,
  borderRadius: 0,
}));

const NewsCard = () => {
  return (
    <NewsCardWrapper>
      <h1>NewsCard</h1>
    </NewsCardWrapper>
  )
}

export default NewsCard