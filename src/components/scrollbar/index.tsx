import { useTheme } from '@mui/material'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'

const ScrollBarWrapper = (
  {
    children
  }: {
    children: React.ReactNode
  } & React.ComponentProps<typeof Scrollbars>
) => {

  const theme = useTheme();
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Scrollbars
      id='scrollbar-component'
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      style={{ height }}
      thumbMinSize={80}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: 'transparent',
            right: 0,
            bottom: 0,
            top: 0,
            width: '0.5em',
            opacity: 0.9,
            zIndex: 999,
          }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: theme.customColors.rakthalal,
            borderRadius: 0,
            width: '0.5em',
            opacity: 1,
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  )
}

export default ScrollBarWrapper