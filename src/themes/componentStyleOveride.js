import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

const componentStyleOveride = () => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#111111',
          borderRadius: '10px',
          border: 'none',
          color: '#fff',
          padding: '20px'
        }
      }
    },

    // Button Style Overide
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#222 !important'
          }
        }
      }
    },
  MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-disabled': {
            color: '#ffffff44',
            borderColor: '#ffffff44'
          },
          '&.MuiButton-text:hover': {
            backgroundColor: '#111'
          }
        },
        outlined: {
          borderColor: '#fff',
          '&:hover': {
            borderColor: '#ffffffaa'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-disabled': {
            color: '#ffffff44',
            borderColor: '#ffffff44'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000',
          color: '#fff',
          borderBottom: '1px solid #ffffff33',
          borderRadius: '0px',
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          borderWidth: '1px',
          borderColor: '#fff'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff11',
          borderLeft: '5px solid #ffffff11',
          minWidth: '80px',
          '&:hover': {
            borderLeft: '5px solid #0d6efd'
          },
          '&.Mui-selected': {
            borderLeft: '5px solid #0d6efd'
          }
        },
      }
    },

    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            padding: '0px !important',
            backgroundColor: '#222'
          }
        }
      }
    },

    // Input Style Overide
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#fff',
          borderColor: '#fff',
          '& svg': {
            color: '#fff'
          },
          '& fieldset': {            // - The <fieldset> inside the Input-root
            borderColor: '#aaa',   // - Set the Input border
          },
          '&:hover fieldset': {            // - The <fieldset> inside the Input-root
            borderColor: '#aaa !important',   // - Set the Input border
          },
        }
      }
    },

    // Navbar Style Overide
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000',
          color: '#fff',
          borderBottom: '1px solid #ffffff33',
          borderRadius: '0px',
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#fff'
        }
      }
    },

    // Table Style Overide
    MuiTable: {
      styleOverrides: {
        root: {

        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff22',
          '& .MuiTableCell-root': {
            color: '#ffffff99',
            textTransform: 'capitalize'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#fff', 
          borderColor: '#ffffff22'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#fff'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#fff'
        }
      }
    },
  }
}

export const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default componentStyleOveride;