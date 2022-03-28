import React, {useState, ChangeEvent} from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Login.css';
import UserLogin from '../../models/UserLogin';


function Login() {

    const[userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token:''
    })

    //utilizada para atualziar a model quando o usuário digitar os dados
    //[e.target.name] : e.target.value captura o valor digitado pelo usuário
    function updateModel(e: ChangeEvent <HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name] : e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent <HTMLFormElement>){
        //impede que o botão atualize a tela
        e.preventDefault();

        console.log('userLogin: ' + userLogin);
    }

    return (
        <Grid container direction = 'row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>
                            Entrar</Typography>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent <HTMLInputElement>) =>updateModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent <HTMLInputElement>) =>updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to ='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                                </Link>
                            </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant = 'subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to ='/cadastrousuario'>
                            <Typography variant = 'subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>

                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>

    );
}

export default Login;