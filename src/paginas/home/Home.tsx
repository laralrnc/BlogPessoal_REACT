import React from 'react';
import { Grid, Paper, Box, Button, Typography } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' >Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="600px" height="600px" />
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Box display="flex">
                        <Box display="flex" justifyContent="center" alignItems="center" margin={10}>
                        <img src="https://i.imgur.com/UsJp8z9.png" alt="" width="100px" height="100px" />
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                        </Box>
                        <Box marginRight={1}>
                        </Box>
                        <img src="https://i.imgur.com/ykXB0YP.png" alt="" width="100px" height="100px" />
                        <Box marginRight={1}>
                        </Box>
                        <img src="https://i.imgur.com/ZuPBHI4.png" alt="" width="100px" height="100px" />
                        <Box marginRight={1}>
                        </Box>
                        <img src="https://i.imgur.com/fGhzGEa.png" alt="" width="100px" height="100px" />
                        <Box marginRight={1}>
                        </Box>
                        <img src="https://i.imgur.com/1CLGyev.png" alt="" width="100px" height="100px" />
                        <Box marginRight={1}>
                        </Box>
                        <img src="https://i.imgur.com/AGXCYkq.png" alt="" width="100px" height="100px" />
                        <Box marginRight={1}>
                        </Box>
                        <img src="https://i.imgur.com/R9jNh9e.png" alt="" width="100px" height="100px" />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
