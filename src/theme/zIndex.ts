import { Theme } from '@mui/material';


const zIndex = (theme: Theme) => ({
  ...theme.zIndex,
  modalTitle: Number(theme.zIndex?.modal) + 2,
  backdropSpinner: Number(theme.zIndex?.tooltip) + 100
});

export default zIndex;
