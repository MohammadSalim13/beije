import { Add, Remove } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import { useCartContext } from '@/components/[products]/@helpers/hooks/use-cart-context';
import Props from '@/components/[products]/product-list/product/sub-product/type';

export default function SubProduct({ _id, name, price }: Props) {
  const { cart, addToCart, removeFromCart } = useCartContext();

  const count = cart.find((item) => item._id === _id)?.count || 0;

  const handleIncrement = () => {
    addToCart(_id);
  };
  const handleDecrement = () => {
    removeFromCart(_id);
  };
  return (
    <Box className='flex items-center justify-between'>
      <Typography>{name}</Typography>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #e0e0e0',
            borderRadius: '24px',
            padding: '4px',
            width: 'fit-content',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          <IconButton
            onClick={handleDecrement}
            size='small'
            sx={{
              width: 32,
              height: 32,
              color: '#666',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <Remove fontSize='small' />
          </IconButton>

          <Typography
            variant='body1'
            sx={{
              minWidth: 40,
              textAlign: 'center',
              fontWeight: 500,
              color: '#333',
              userSelect: 'none',
            }}
          >
            {count}
          </Typography>

          <IconButton
            onClick={handleIncrement}
            size='small'
            sx={{
              width: 32,
              height: 32,
              color: '#666',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <Add fontSize='small' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
