import { Brand } from '../../__mocks__/pages/brandspage';
import { Box, Card, CardMedia, CardProps, Skeleton, Typography, styled, useTheme } from '@mui/material';
import { RightArrowIcon } from '../../Assets/Logo/Icons';
import React, { useState } from 'react';
import getBorderBottom from '../../utils/borderBottom';

interface BrandsCardProps extends CardProps {
  lastcard?: boolean;
  arrowhovered?: boolean;
};

const BrandsCard = styled(Card)<BrandsCardProps>(({ theme, lastcard, arrowhovered }) => ({
  ...theme.bodyProps,
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: `${theme.customSpaces.lg} ${theme.customSpaces.md}`,
  borderRadius: 0,
  overflow: 'unset',
  transition: 'border 0.3s ease-in-out',
  borderBottom: lastcard ? 'none' : getBorderBottom(theme, arrowhovered),

  '&:hover': {
    borderBottom: getBorderBottom(theme, true),
  },

  [theme.breakpoints.down('md')]: {
    padding: `${theme.customSpaces.md} ${theme.customSpaces.sm}`,
    borderBottom: getBorderBottom(theme, arrowhovered),
    marginBottom: theme.customSpaces.md,
    flexDirection: 'column',
  },

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    padding: `${theme.customPadding.sm} 0`,
    marginBottom: theme.customSpaces.lg,
  },

}));

interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  arrowhovered?: boolean;
}

const ArrowLink = styled('a')<ArrowLinkProps>(({ theme, arrowhovered }) => ({
  padding: theme.customSpaces.md,
  color: theme.customColors.rakthalal,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  position: 'relative',
  background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8044643882943803) 50%, rgba(255,255,255,0) 100%)`,
  backdropFilter: 'blur(2px)',
  borderRadius: '50%',
  pointerEvents: 'none',

  '& svg': {
    transition: 'transform 0.3s ease-in-out',
    margin: 0,
    transform: arrowhovered ? 'rotate(45deg)' : 'rotate(0deg)',
  },

  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    bottom: 0,
    transform: 'translateY(50%)'
  },
}));

const ArrowIcon = styled(RightArrowIcon)(({ theme }) => ({
  color: theme.customColors.rakthalal,
  width: '2.25em',
  marginLeft: theme.customSpaces.xs,
  pointerEvents: 'all',
}));

const ArrowIconSkeletonWrapper = styled(Box)(({ theme }) => ({
  animation: theme.animations.wiggly,
  height: 'max-content',
  width: 'max-content',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

interface BrandNameProps {
  arrowhovered?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const BrandName = styled(Typography)<BrandNameProps>(({ theme, arrowhovered }) => ({
  fontWeight: theme.customFontWeight.semiBold,
  fontSize: '1.125em',
  transition: 'color 0.3s ease-in-out',
  color: arrowhovered ? theme.customColors.rakthalal : theme.customColors.bhasma,
  display: 'inline-block',
  paddingBottom: theme.customPadding.sm,

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },

}));

const BrandDescription = styled(Typography)(({ theme }) => ({
  fontWeight: theme.customFontWeight.regular,
  fontSize: theme.customSizes.paragraphBody,
  color: theme.customColors.bhasma,
  display: 'block',
  cursor: 'default',
  textAlign: 'justify',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const BrandLogoWrapper = styled(Box)(({ theme }) => ({
  width: 'max-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.customColors.border}`,
}));

const BrandLogo = styled(CardMedia)(({ theme }) => ({
  minWidth: '10em',
  minHeight: '10em',
  objectFit: 'contain',
  margin: theme.customSpaces.sm,
}));

const BrandDescriptionWrapper = styled(Box)(({ theme }) => ({
  margin: theme.customSpaces.md,
  width: '100%',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  [theme.breakpoints.down('sm')]: {
    margin: `${theme.customSpaces.lg} 0`,
    alignItems: 'center',
  },
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

  const [isArrowHovered, setIsArrowHovered] = useState(false);

  if (!brandData) {
    return <>Sorry! No data available</>;
  }

  return (
    <BrandsCard
      elevation={0}
      key={index}
      lastcard={isLast}
      arrowhovered={isArrowHovered}
    >
      <BrandLogoWrapper>
        <BrandLogo
          image={brandData.image}
          title={brandData.name}
        />
      </BrandLogoWrapper>
      <BrandDescriptionWrapper>
        <BrandName
          as='a'
          arrowhovered={isArrowHovered}
          href={brandData.website}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => setIsArrowHovered(true)}
          onMouseLeave={() => setIsArrowHovered(false)}
        >
          {brandData.name}
        </BrandName>
        <BrandDescription>{brandData.description}</BrandDescription>
      </BrandDescriptionWrapper>
      {brandData?.website && (
        <ArrowLink
          href={brandData.website}
          target='_blank'
          rel='noopener noreferrer'
          arrowhovered={isArrowHovered}
        >
          <ArrowIcon
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
          />
        </ArrowLink>
      )}
    </BrandsCard>
  );
};

export default BrandCard;

export const BrandCardSkeleton = ({
  isLast
}: {
  isLast?: boolean;
}) => {

  const theme = useTheme();

  return (
    <BrandsCard
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.customColors.border}`,
        marginBottom: isLast ? `${theme.customSpaces.xl} !important` : 0,
      }}
    >
      <BrandLogo>
        <Skeleton variant={'rectangular'} height={'10em'} />
      </BrandLogo>
      <BrandDescriptionWrapper>
        <Skeleton
          height='1.5em'
          width={`calc(20% + ${Math.random() * 10}%)`}
        />
        <Skeleton
          height={`calc(6em + ${Math.random() * 3}em)`}
          width='100%'
        />
      </BrandDescriptionWrapper>
      <ArrowLink href={''}>
        <ArrowIconSkeletonWrapper>
          <ArrowIcon
            sx={{
              filter: theme.grayScales.g_100,
              animation: theme.animations.pulse,
            }}
          />
        </ArrowIconSkeletonWrapper>
      </ArrowLink>
    </BrandsCard>
  );
};