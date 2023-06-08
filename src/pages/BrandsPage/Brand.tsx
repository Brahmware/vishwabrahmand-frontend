import React from 'react';
import { Brand } from '../../__mocks__/pages/brandspage';
import { Box, Card, CardMedia, Typography, styled, useTheme } from '@mui/material';
import { RightArrowIcon } from '../../Assets/Logo/Icons';

const BrandsCard = styled(Card)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: `${theme.customSpaces.lg} ${theme.customSpaces.md}`,
  borderRadius: 0,
}));

const ArrowLink = styled('a')(({ theme }) => ({
  padding: theme.customSpaces.md,
  color: theme.customColors.rakthalal,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    color: theme.customColors.bhasma,
  },
}));

const ArrowIcon = styled(RightArrowIcon)(({ theme }) => ({
  color: theme.customColors.rakthalal,
  width: '2.25em',
  marginLeft: theme.customSpaces.xs,
}));

const BrandName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.customFontWeight.semiBold,
  fontSize: '1.125em',
  color: theme.customColors.bhasma,
  paddingBottom: theme.customSpaces.md,
}));

const BrandDescription = styled(Typography)(({ theme }) => ({
  fontWeight: theme.customFontWeight.regular,
  fontSize: '0.75em',
  color: theme.customColors.bhasma,
}));

const BrandLogo = styled(CardMedia)(({ theme }) => ({
  minWidth: '10em',
  minHeight: '10em',
  objectFit: 'contain',
  margin: theme.customSpaces.sm,
}));

const BrandDescriptionWrapper = styled(Box)(({ theme }) => ({
  margin: theme.customSpaces.md,
  /* flexGrow: 1, */
  display: 'block'
}));

const BrandCard = ({
  brandData,
  index,
  isLast,
}: {
  brandData: Brand;
  index?: number;
  isLast?: boolean;
}) => {
  const theme = useTheme();

  // Check if brandData is valid
  if (!brandData) {
    return <></>;
  }

  return (
    <BrandsCard
      elevation={0}
      key={index}
      sx={{ borderBottom: isLast ? 'none' : `1px solid ${theme.customColors.border}` }}
    >
      <BrandLogo
        image={brandData.image}
        title={brandData.name} 
      />
      <BrandDescriptionWrapper>
        <BrandName>{brandData.name}</BrandName>
        <BrandDescription>{brandData.description}</BrandDescription>
      </BrandDescriptionWrapper>
      {brandData?.website && (
        <ArrowLink href={brandData.website}>
          <ArrowIcon />
        </ArrowLink>
      )}
    </BrandsCard>
  );
};

export default BrandCard;
