import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar className="MuiAppBar-colorPrimary " >
                <Toolbar variant="dense" className='tamanho MuiAppBar-colorPrimary teste' >
                    <Box className='cursor navbar'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex"  >
                        <Box mx={1} className='cursor navbar'>

                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor navbar'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor navbar'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor navbar'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to ='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor navbar'>
                                <Typography variant="h6" color="inherit" >
                                    Logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;