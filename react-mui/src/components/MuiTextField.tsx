import {Stack,TextField,InputAdornment} from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const MuiTextField = () => {
  const [value,setvalue] = useState('')
  const [pw,setpw] = useState(false)
  return (
  <Stack spacing={4}>
    <Stack direction='row' spacing={2}>
        <TextField label='Name'  variant="outlined"/>{/* default */}
        <TextField label='Name' variant="filled" />
        <TextField label='Name' variant="standard" />
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField label='Small secondary'  variant="outlined" size="small" color="secondary"/>
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField label='Form Input' required value={value} onChange={e =>setvalue(e.target.value)}
        error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'} />
        <TextField label='Form Input' helperText="Do not share your password with anyone" />
        <TextField label='Password' type="password" disabled />
        <TextField label='Readonly' InputProps={{ readOnly:true }} />
    </Stack>

    <Stack direction='row' spacing={2}>
        <TextField label='Amount'
          InputProps={{
            startAdornment:<InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField label='Weight'
          InputProps={{
            endAdornment:<InputAdornment position="end">kg</InputAdornment>,
          }}
        />
    </Stack>

        <Stack spacing={2} direction="row">
            <TextField type={pw?"text":"password"} label="Password"
              InputProps={{endAdornment:<InputAdornment position="end" onClick={()=>{setpw(!pw)}}>
              {pw?<VisibilityOffIcon/>:<VisibilityIcon/>}</InputAdornment>}} />,
        </Stack>
  </Stack>
  ) 
}
