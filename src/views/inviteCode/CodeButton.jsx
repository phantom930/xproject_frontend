import { Button, Typography } from '@mui/material'

const CodeButton = (props) => {
  return (
    <Button sx={{ width: '100%',  display: 'block', p: 1 }} {...props}>
      <Typography fontSize={20} fontWeight='bold' component='p'> { props.number } </Typography>
      <Typography fontSize={10} fontWeight='bold' color='#aaa' mt={ props.sub ? 1 : '23px'}> { props.sub } </Typography>
    </Button>
  )
}

export default CodeButton;