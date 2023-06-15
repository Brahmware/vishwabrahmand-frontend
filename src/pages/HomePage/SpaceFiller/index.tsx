import Box from "@mui/material/Box";

const SpaceFiller = () => {
  return (
    <>
      <Box
        sx={{
          gridColumn: '1 / 13',
          gridRow: '10 / 113',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          zIndex: 2
        }} />
      <Box
        sx={{
          gridColumn: '1 / 5',
          gridRow: '1 / 13',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          zIndex: 2
        }} />
      <Box
        sx={{
          gridColumn: '9 / 13',
          gridRow: '1 / 13',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          zIndex: 2
        }} />
    </>
  )
}

export default SpaceFiller