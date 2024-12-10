import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

export const Muibreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label='breadcrumbs'>
        <Link underline='hover' href="#">Home</Link>
        <Link underline='hover' href="#">CAtalog</Link>
        <Link underline='hover' href="#">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}
