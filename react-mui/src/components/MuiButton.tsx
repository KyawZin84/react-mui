import { Button, Stack,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react';

export const MuiButton = () => {
    const [Formats,setFormats] = useState<string[]>([])
    const [Formats2,setFormats2] = useState<string|null>(null)

    console.log({Formats2})
    const HandleFormatChange = (_event:React.MouseEvent<HTMLElement>,updatedFormats:string[])=>{
        setFormats(updatedFormats);
    }
    const HandleFormatChange2 = (_event:React.MouseEvent<HTMLElement>,updatedFormats:string|null)=>{
        setFormats2(updatedFormats);
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='text' color='secondary'>Secondary</Button>
            <Button variant='text' color='error'>Error</Button>
            <Button variant='text' color='warning'>Warning</Button>
            <Button variant='text' color='info'>Info</Button>
            <Button variant='text' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='info'>Info</Button>
            <Button variant='outlined' color='success'>Success</Button>
        </Stack>

        <Stack display="block" spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button> 
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple
            onClick={()=>{alert("clicked")}}>Send</Button>
            <Button variant='contained'endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label='send' color='success' size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack direction='row' spacing={2}>
            <ButtonGroup variant='outlined'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row' spacing={2}>
            <ButtonGroup variant='contained' 
            orientation='vertical' size='small' color='secondary'
            aria-label='alignment button group'>
                <Button onClick={()=> alert('Left CLicked')}>Left</Button>
                <Button onClick={()=> alert('Center CLicked')}>Center</Button>
                <Button onClick={()=> alert('Right CLicked')}>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction="row">
            <ToggleButtonGroup aria-label='text formatting' value={Formats} onChange={HandleFormatChange}
            size="small" color="success" orientation='vertical'>
                <ToggleButton value="bold" aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value="italic" aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label='underlined'>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

        <Stack direction="row">
            <ToggleButtonGroup aria-label='text formatting' value={Formats2} onChange={HandleFormatChange2}
            size="small" color="success" orientation='vertical' exclusive>
                <ToggleButton value="bold" aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value="italic" aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label='underlined'>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}
