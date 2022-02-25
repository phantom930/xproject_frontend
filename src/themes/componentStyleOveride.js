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
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff'
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
          color: '#fff'
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#fff'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {

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
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff22',
          '&.MuiTableCell-root': {
            color: '#ffffff99'
          }
        }
      }
    }
  };
}

export default componentStyleOveride;