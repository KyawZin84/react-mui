import { Button, Card, CardContent, CardMedia, Typography,
  Stack, TextField,IconButton,MenuItem } from '@mui/material';
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useState } from 'react';

const Productmodel = (props) => {
  const {close,product,buylist} = {...props}
  const [qua,setqua] = useState(1);
  let total = product.price*qua;
  const quaplus = ()=>{
    let q = qua
    setqua(q+=1)
  }

  const quaminus = ()=>{
    if(qua==1){
      setqua(1)
    }else{
      let q = qua
    setqua(q-=1)
    }
  }

  const buy = (product) => {
    let b={"name":product.title,"price":product.price,"total":total,"qty":qua};
    localStorage.setItem('pb',JSON.stringify(b));
    localStorage.setItem('bb',1);
    close();
  }
  return (
    <Card sx={style}>
      <CardMedia
        component="img" height="200"
        image={product.image} alt={product.name}
      />
      <CardContent>
        <Typography id="modal-modal-title" sx={{fontSize:20}}>
          {product.title}
        </Typography>

        <center>
        <Stack direction="row" spacing={2}>
              <MenuItem sx={{fontsize:20,pr:5}}>Price</MenuItem>
              <TextField value={product.price} variant="standard" sx={{width:100}}
              InputProps={{readOnly:true}} />
        </Stack>

        <Stack direction="row" spacing={2}>
            <MenuItem sx={{fontsize:20}}>Quantity</MenuItem>
            <TextField value={qua} variant="standard" sx={{width:100}}
            InputProps={{
              startAdornment:<IconButton onClick={quaminus}>
                <IndeterminateCheckBoxIcon/> </IconButton>,
              endAdornment:<IconButton position="end" onClick={quaplus}>
                <AddBoxIcon/></IconButton>
            }}/>
          </Stack>

        <Stack direction="row" spacing={2} mb={2}>
            <MenuItem sx={{fontsize:20,pr:5}}>Total</MenuItem>
            <TextField value={total} variant="standard" sx={{width:100}}
            InputProps={{readOnly:true}} />
          </Stack>

        <Button variant='contained' onClick={()=>{close()}}>Close</Button>
        <Button variant='contained' onClick={()=>{buy(product)}}>Buy</Button>
        </center>
      </CardContent>
  </Card>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width:400,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default Productmodel;
