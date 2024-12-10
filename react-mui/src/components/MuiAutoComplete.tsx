import { Autocomplete, Stack, TextField } from "@mui/material"
import { useState } from "react"

type Skill = {
    id:number
    label:string
}

export const MuiAutoComplete = () => {
    const [value, setvalue] = useState<string |null> (null)

    const [skill, setskill] = useState<Skill |null> (null)

    const skills = ['HTML','CSS','JavaScript','TypeScript','React']
    const SkillOptions = skills.map((skill,index)=>({
        id:index+1,
        label:skill
    }))
    
    console.log({skill})
    
    return (
    <Stack spacing={2} width="250px">
       <Autocomplete options={skills} 
       renderInput={(params)=><TextField {...params} label="Skills" />}
       value={value} onChange={(event:any,newValue:string |null)=> setvalue(newValue)}
       freeSolo />

        <Autocomplete options={SkillOptions} 
        renderInput={(params)=><TextField {...params} label="Skills" />}
        value={skill} onChange={(event:any,newValue:Skill |null)=> setskill(newValue)}
        />
    </Stack>
  )
}
