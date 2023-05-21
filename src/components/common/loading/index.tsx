import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
  styled
} from '@mui/material';

const ProgressWrapper = styled(Box)({
  height: '10em',
  width: '10em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const ProgressWrapperBox = styled(Box)(({theme}) => ({
  height: '10em',
  width: '10em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.customSpaces.sm
}));

const LoadingComponent = ({ loaderType }: { loaderType?: 'circular' | 'box' }) => {

  if (loaderType === 'circular') return (
    <ProgressWrapper>
      <CircularProgress
        sx={{
          "& svg": {
            transform: 'scale(3)'
          }
        }}
      />
      <Typography sx={{ position: 'absolute' }}>Loading</Typography>
    </ProgressWrapper>
  );

  return (
    <ProgressWrapperBox>
      <div style={{ width: '100%' }}>
        <LinearProgress />
      </div>
      <Typography >Loading</Typography>
    </ProgressWrapperBox>
  );
}

LoadingComponent.defaultProps = {
  loaderType: 'box',
};

export default LoadingComponent;