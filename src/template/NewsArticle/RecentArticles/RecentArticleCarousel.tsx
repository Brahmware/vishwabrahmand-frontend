
import { styled } from '@mui/material';
import { Splide, SplideProps, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const StyledSplide = styled(Splide)(({ theme }) => ({
  '& .splide__arrow--prev, & .splide__arrow--next': {
    backgroundColor: theme.customColors.white,
    fontSize: '1.25rem',
    transform: 'translateY(-4rem)',
    opacity: 0.25,
    border: `1.5px solid ${theme.customColors.bhasma}`,
    transition: 'all 0.3s ease-in-out',

    '& path': {
      fill: theme.customColors.bhasma,
    },

    '&::before': {
      color: `${theme.customColors.white}dd`,
    },
  },
  
}));

const arrowPath = 'M15.71 3.854 13.685 5.951 28.153 19.923 13.858 34.074 15.91 36.146 32.315 19.904 15.71 3.854z';

const options: SplideProps["options"] = {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  lazyLoad: 'nearby',
  drag: 'free',
  snap: true,
  pagination: false,
  arrows: true,
  arrowPath,
  autoplay: true,
  pauseOnHover: true,
  interval: 5000,
  gap: '1rem',
  breakpoints: {
    900: {
      perPage: 2,
      arrows: false,
    },
    768: {
      perPage: 1,
      arrows: false,
    },
  },
}

const RecentArticleCarousel = ({ slides }: { slides: React.ReactNode[] }) => {

  const key = slides.length * Math.random() * 1000; // Generate a unique key based on the slides array length

  return (
    <StyledSplide key={key} options={options}>
      {slides.map((slide, index) => (
        <SplideSlide key={index}>{slide}</SplideSlide>
      ))}
    </StyledSplide>
  )
}

export default RecentArticleCarousel;