import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
        <Typography variant="h5">h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>

        <Typography variant="subtitle1">Sub title 1</Typography>
        <Typography variant="subtitle2">Sub title 2</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero doloribus, placeat modi voluptatum minus necessitatibus laboriosam consequuntur quae optio expedita ut itaque dignissimos harum, eligendi hic ipsa quibusdam dolorem.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quaerat voluptas minima eius voluptatibus odio iure maiores! Quibusdam sunt aut corrupti nostrum, ut aliquid labore illum consequatur cum fugiat alias?</Typography>
    </div>
  )
}
