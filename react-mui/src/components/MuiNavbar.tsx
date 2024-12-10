import { AppBar,Button,IconButton,Menu,MenuItem,Stack,Toolbar, Typography } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const MuiNavbar = () => {
    const [anchorEl,setanthorEl] = useState<null|HTMLElement>(null)
    const open = Boolean(anchorEl)
    const HandleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
            setanthorEl(event.currentTarget)
    }
    const handleClose = ()=>{
        setanthorEl(null)
}
  return (
   <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                <CatchingPokemonIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow:1 }}>
                POKEMONAPP
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit" id="resources-button" onClick={HandleClick}
                aria-controls={open ? "resources-menu":undefined}
                aria-haspopup="true"
                aria-expanded={open?'true':undefined}
                endIcon={<KeyboardArrowDownIcon/>}>Resources</Button>
                <Button color="inherit">Login</Button>
            </Stack>
            <Menu id="resources-menu" anchorEl={anchorEl} open={open}
            MenuListProps={{"aria-labelledby":"resources-button"}}
            onClose={handleClose} anchorOrigin={{vertical:"bottom",horizontal:"right"}} 
            transformOrigin={{vertical:"top",horizontal:"right"}}>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
   </AppBar>
  )
}
