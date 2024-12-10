import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
export const MuiRadioButton = () => {
    const [value, setvalue] = useState('');
    const HandleChange= (event:React.ChangeEvent<HTMLInputElement>) =>{
        setvalue(event.target.value)
    }
    console.log({value})
  return (
    <Box>
        <FormControl error>
            <FormLabel id="job-experience-group-label">
                Years of experience 
            </FormLabel>
            <RadioGroup name="job-experience-group" 
            aria-labelledby="job-experience-group-label" value={value} onChange={HandleChange} row>
                <FormControlLabel control={<Radio size="medium" color="secondary"/>} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10' />
            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Box>
  )
}
