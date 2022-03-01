import { Paper, Stack, Box, Typography } from "@mui/material"

const DashboardStatics = (props) => {
  return (
    <Paper>
      <Stack alignItems='center' justifyContent='space-between' flexDirection='row'>
        <Box>
          <Typography variant="subtitle1" component='span'> { props.title } </Typography>      
          <Typography fontWeight='bold' fontSize='24px'> { props.content } </Typography>
        </Box>
        <Box>
          { props.symbolicComponent }
        </Box>
      </Stack>
    </Paper>
  )
}

export default DashboardStatics;