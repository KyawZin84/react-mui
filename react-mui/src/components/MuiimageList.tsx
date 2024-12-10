import {Stack,ImageList,ImageListItem, Box, ImageListItemBar} from '@mui/material'


export const MuiimageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList sx={{ width:500,height:450 }} cols={3} rowHeight={164}>
            {itemData.map(item=>(
                <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    <ImageListItemBar title={item.title} />
                </ImageListItem>
            ))}
        </ImageList>

        <ImageList variant='woven' sx={{ width:500,height:450 }} cols={3} gap={8}>
            {itemData2.map(item=>(
                <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))}
        </ImageList>

        <Box sx={{ width:500,height:450,overflowY:'scroll' }}>
        <ImageList variant='masonry' cols={3} gap={8}>
            {itemData2.map(item=>(
                <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=248&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))}
        </ImageList>
        </Box>
    </Stack>
  )
}

const itemData = [
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 1"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 2"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 3"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 4"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 5"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 5"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 5"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 5"
    },
    {
        img:'https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png',
        title:"Mui 5"
    },
]

const itemData2 = [
    {
        img:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        title:"Mui 1"
    },
    {
        img:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        title:"Mui 2"
    },
    {
        img:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        title:"Mui 3"
    },
    {
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        title:"Mui 4"
    },
    {
        img:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        title:"Mui 5"
    },
    {
        img:'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        title:"Mui 5"
    },
]