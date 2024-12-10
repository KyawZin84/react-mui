import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from "@mui/material"
export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
                component="img"
                height='140'
                image="https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png"
                alt="mui image"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    React
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, tempora! Corrupti ullam iusto commodi quis aliquid autem obcaecati dolore necessitatibus?</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
