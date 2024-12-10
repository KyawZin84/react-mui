import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material"
import { useState } from "react"

export const MuiSwitch = () => {
    const [checked, setchecked] = useState(false)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
            setchecked(event.target.checked)
    }
    console.log({checked})

  return (
    <Box>
        <FormControlLabel label='Dark mode' control={<Switch checked={checked} 
        onChange={handleChange} size="small" color="success" />} />
    
        <FormGroup>
            <FormControlLabel label='Small Switch' control={<Switch checked={checked} 
            onChange={handleChange} size="small" color="secondary" />} />
            <FormControlLabel label='Medium Switch' control={<Switch checked={checked} 
            onChange={handleChange} size="medium" color="info" />} />
        </FormGroup>
    </Box>
  )
}
