import { Paper, Typography } from '@mui/material';

const BorderedPaper = (props) => {
  return (
    <Paper elevation={0}
      sx={{
        p: 2,
        border: '1px solid #ffffff',
        borderRadius: '10px',
        position: 'relative',
        backgroundColor: 'transparent',
        color: '#ffffff'
      }}
    >
      <Typography variant='h6' fontWeight='bold'>
        { props.title }
      </Typography>
      <Typography variant='caption' color='#aaaaaa'>
        { props.content }
      </Typography>
      { props.children }
    </Paper>
  )
};

export default BorderedPaper;