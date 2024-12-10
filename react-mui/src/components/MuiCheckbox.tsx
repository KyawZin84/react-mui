import { Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup, FormHelperText } from "@mui/material"
import { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
    const [acceptInc, setacceptInc] = useState(false)
    const [skills, setskills] = useState<string[]>([])

    console.log({skills})
    const handlechange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setacceptInc(event.target.checked)
    }
    const handleSkillChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setskills([...skills,event.target.value])
        }else{
            setskills(skills.filter((skill)=> skill !== event.target.value))
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel label="I accept terms and conditions" 
            control={<Checkbox size="small" color="secondary" checked={acceptInc} onChange={handlechange} />}/>
        </Box>

        <Box>
           <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}
           checked={acceptInc} onChange={handlechange}/>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                <FormControlLabel label="HTML" 
                control={<Checkbox value="html" checked={skills.includes('html')} 
                onChange={handleSkillChange} />}/>

                <FormControlLabel label="CSS" 
                control={<Checkbox value="css" checked={skills.includes('css')} 
                onChange={handleSkillChange} />}/>
                      
                <FormControlLabel label="JavaScript" 
                control={<Checkbox value="javascript" checked={skills.includes('javascript')}
                 onChange={handleSkillChange} />}/>
                </FormGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}
