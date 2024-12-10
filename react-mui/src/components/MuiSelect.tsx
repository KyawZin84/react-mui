import {Box,TextField,MenuItem} from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
    const [Country,setCountry] = useState('')
    const [Countries,setCountries] = useState<string[]>([])
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value as string)
    }

    const handleChanges = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value 
        setCountries(typeof value === "string" ? value.split(',') : value)
    }
    console.log({Countries})
  return (
    <>
    <Box width="250px">
        <TextField  label="Select country" select value={Country} 
        onChange={handleChange} fullWidth
        size='small' color='secondary' helperText='Please select Your Country'>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
        </TextField>
    </Box>

    <Box width="250px" marginTop={20}>
        <TextField  label="Select country" select value={Countries} 
        onChange={handleChanges} fullWidth SelectProps={{multiple:true}}>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
        </TextField>
    </Box>
</>
  )
}
