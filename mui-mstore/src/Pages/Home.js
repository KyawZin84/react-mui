import { Button, Card, CardActions,CardContent,Modal,
 CardMedia, Stack, Typography, Grid, Rating,InputLabel,} from '@mui/material'
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
 import StarRateIcon from '@mui/icons-material/StarRate';
 import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useEffect, useState } from 'react'
import products from '../components/products';
import Productmodel from './productmodel';

export const Home = (props) => {
    const [open, setOpen] = useState(false);
    const [mproduct,setmproduct] = useState({})
    let bb = 0;
    let buylist = []
    useEffect(()=>{
        bb= localStorage.getItem('bb')
        if(bb==1){
            buylist.push(JSON.parse(localStorage.getItem('pb')))
        }
    },[])
  const handleOpen = (product) => {
    setOpen(true);
    setmproduct(product);
  }
  const handleClose = () => setOpen(false);
  console.log(buylist)
    // const [products,setproducts] = useState([])

    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products/",{
    //         method:"GET"
    //     })
    //     .then(res=>res.json())
    //     .then(r=>setproducts(r))
    //     .catch(err=>console.log(err))
    // },[])

    const ccolor =(cate)=>{
        if(cate=="men's clothing"){
            return "red"
    }if(cate=="women's clothing"){
        return "blue"
    }if(cate=="jewelery"){
        return "purple"
    }else{
        return "green"
    }
}

  return (
    <Stack sx={{paddingX:15,backgroundColor:"lightgray"}}>
        <Typography variant='h3' gutterBottom>Product</Typography>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Productmodel close={handleClose} product={mproduct} buylist={buylist} />
      </Modal>
        <Grid container spacing={3}>
            {products.map((p)=>{
                return(
                    <Grid item xs={4}>
                    <Card sx={{padding:5,position: 'relative'}}>
                    <InputLabel
                        variant="filled" sx={{ zIndex: 9, top: 0, right: 15, position: 'absolute',
                            textTransform: 'uppercase', padding:1,color:"white",
                            borderRadius:10,backgroundColor:ccolor(p.category)}}
                        >
                        {p.category}
                        </InputLabel>
                        <CardMedia component="img" height="200" alt="mui-image" image={p.image} />
                        <CardContent>
                            <Typography variant='h6'>{p.title}</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Rating value={p.rating.rate} precision={0.5} readOnly
                                    icon={<StarRateIcon/>} emptyIcon={<StarOutlineIcon/>} />
                                </Grid>
                                <Grid item xs={6}><AttachMoneyIcon/>{p.price}</Grid>
                            </Grid>
                        </CardContent>
                        <CardActions sx={{marginX:15}}>
                            <Button variant='contained' size="large"
                             color='secondary' endIcon={<ShoppingCartIcon/>}
                             onClick={()=>handleOpen(p)}>Buy</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                )
            })}
        </Grid>
    </Stack>
  )
}
