const componentStyleOveride = () => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff11',
          borderRadius: '10px',
          border: 'none',
          color: '#fff',
          padding: '20px'
        }
      }
    },

    // Button Style Overide
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-disabled': {
            color: '#ffffff44',
            borderColor: '#ffffff44'
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

    // Input Style Overide
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#fff',
          borderColor: '#fff'
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
          '&.MuiTableCell-root': {
            color: '#ffffff99'
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
    }
  };
}

export default componentStyleOveride;