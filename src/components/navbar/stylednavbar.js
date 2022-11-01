import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';


export const Appbar = styled(AppBar)(({ theme }) => ({
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 50,
    margin: '0 10px',
    flexDirection: 'row',
    padding: '5px 10px',
    position: 'static',
    boxShadow: 'none',
    backgroundColor: '#0A1929',
    width: "inherit",
    color: 'white',

    [theme.breakpoints.down('sm')]: {
        padding: 0,
        margin: 0,

    }
}));

export const StyledContainer = styled(Container)(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        margin: 0
    }

}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }

}));

export const MinimizedBar = styled(Toolbar)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    }

}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
    marginRight: '10%',
    marginLeft: 40,
    fontFamily: 'Fira Sans',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#27AE60',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        marginRight: 0,
        marginLeft: 0
    }
}));
export const StyledContact = styled(Typography)(({ theme }) => ({
    marginRight: 7,
    fontSize: 20,
    // color: amber[800],
    color: '#ff8f00',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        marginRight: 0,
    }
}));

export const Appmenu = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',


    }
}));

export const Menulinks = styled(Typography)(({ theme, mcolor }) => ({
    color: mcolor ? mcolor : 'white',
    fontSize: 14,
    textDecoration: 'none',
    padding: '0 30px',
    textTransform: 'uppercase',
    '&:hover': {
        color: '#ff8f00'
    },
    [theme.breakpoints.down('sm')]: {
        color: mcolor ? mcolor : '#0A1929',
        fontSize: 16,
        padding: '15px 10px',
        textTransform: 'capitalize',



    }
}));

export const ModalBody = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '3%',
        bottom: '2%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: '85%',
        // borderRadius: 5,
        backgroundColor: 'transparent',
        boxShadow: 24,
        padding: 4,

    }
}));
export const ModalBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '5%',
        bottom: '2%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: 24,
        padding: 4,

    }
}));

export const CloseIcon = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: '-1%',
        top: 0,
        border: 0,
        display: 'inline-block'
    }
}));
