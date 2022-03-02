import { Button, Typography } from '@mui/material'

const CodeButton = (props) => {
  return (
    <Button sx={{ width: '100%',  display: 'block', p: 1 }} onClick={e => props.action}>
      <Typography fontSize={20} fontWeight='bold' component='p'> { props.number } </Typography>
      <Typography fontSize={10} fontWeight='bold' color='#aaa' mt={1}> { props.sub } </Typography>
    </Button>
  )
}

export default CodeButton;