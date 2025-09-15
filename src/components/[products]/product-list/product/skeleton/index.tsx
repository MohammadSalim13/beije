import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, IconButton, Skeleton } from '@mui/material';

export default function ProductSkeleton() {
  return (
    <Box className='rounded-2xl bg-white p-4'>
      <Box className='flex w-full items-center justify-between focus:outline-none'>
        <Skeleton variant='text' width={160} />
        <IconButton size='small'>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
