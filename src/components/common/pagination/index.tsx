import { Fragment } from 'react';
import {
  Pagination as TablePagination,
  Select,
  MenuItem,
  Box,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: 'auto',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  
}));

const PaginationSelect = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  margin: `${theme.customSpaces.sm} 0`,
  flexGrow: 1,
  gap: theme.customSpaces.xs,

  '& .MuiInputBase-root': {
    height: '2.5em !important',

    '& svg': {
      marginTop: '-0.05em',
    },

    '& fieldset': {
      height: '2.5em !important',
      border: `1px solid ${theme.customColors.matmaila} !important`,
      transition: 'border-color 0.2s ease-in-out !important',
    },

    '&:hover fieldset': {
      border: `1px solid ${theme.customColors.bhasma} !important`,
    },

    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.customColors.bhasma} !important`,
    },
  }
}));

const pageOptions = [5, 10, 20];

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.customSpaces.lg,
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  display: 'inline-block',
  width: '4em',
  height: '2.5em',
}));

const Pagination = (
  {
    itemsData,
    itemsPerPage,
    page,
    handleChangeItemsPerPage,
    handleChangePage,
  }: {
    itemsData: any[],
    handleChangeItemsPerPage: any,
    itemsPerPage: number,
    page: number,
    handleChangePage: any,
  }
) => {

  const theme = useTheme();
  const { t } = useTranslation();

  if (
    itemsData.length > itemsPerPage ||
    itemsData.length > 5
  ) {
    return (
      <PaginationContainer>
        <PaginationSelect>
          <StyledTypography variant="body2">
            {t("__DISPLAY_PER_PAGE")}
          </StyledTypography>
          <StyledSelect
            value={itemsPerPage}
            onChange={handleChangeItemsPerPage}
            size='small'
            variant='outlined'
            placeholder='Select'
          >
            {
              pageOptions.map((value, index) => (
                <MenuItem key={index} value={value}>{value}</MenuItem>
              ))
            }
          </StyledSelect>
        </PaginationSelect>
        <TablePagination
          count={Math.ceil(itemsData.length / itemsPerPage)}
          page={page}
          variant='outlined'
          color='primary'
          onChange={handleChangePage}
          sx={{ my: theme.customSpaces.sm, flexWrap: 'nowrap' }}
        />
      </PaginationContainer>
    )
  }

  else return <Fragment />;
};

export default Pagination;