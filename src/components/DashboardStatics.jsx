import { Paper, Typography } from "@mui/material"

const DashboardStatics = (props) => {
  return (
    <Paper>
      <Typography variant="subtitle1" component='span'> { props.title } </Typography>      
      <Typography fontWeight='bold' fontSize='24px'> { props.content } </Typography>
    </Paper>
  )
}

export default DashboardStatics;