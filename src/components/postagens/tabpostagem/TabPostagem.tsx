import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Conheça o projeto" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" className="background" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel className="background" value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo"></Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
            <Typography variant="h5" component="h5" align="center" className="paragrafo">CINEMA E ESCOLA</Typography>
            <br></br>
            <Typography variant="h5" component="h5" align="center" className="paragrafo">
              A importância de utilizar o
              cinema no entendimento de
              conceitos trabalhado na
              sociologia
            </Typography>
            <p> O cinema constitui-se em um dos variados modos de expressão cultural da
              sociedade industrial e tecnológica contemporânea. A relação entre
              cinema e educação, seja no contexto da educação escolar ou da
              educação informal, é parte da própria história do cinema. Desde os primórdios das produções cinematográficas, produtores e diretores de
              cinema o consideravam como
            </p>
            <p>
              <Typography align="center" className="paragrafo">
                Incluído pela Lei no
                13.006, 2014)
              </Typography>

              A importância disso fez com
              que o Ministério da Educação
              incluísse um item específico na
              Lei de Diretrizes e Bases da
              Educação Nacional que determina a exibição de filmes produzidos no Brasil por, pelo menos, 2 horas por mês.
            </p>
            <p>
              <Typography align="center" className="paragrafo">
                Objetivo geral
              </Typography>

              O Projeto tem como objetivo
              expandir conceitos comuns a
              sociologia de uma forma mais próxima dos alunos, pois conceito apresentado na
              prática tende a ser mais
              facilmente assimilado do que quando nos prendemos a
              teoria.
            </p>
            <p>
              <Typography align="center" className="paragrafo">
                Público alvo
              </Typography>

              O projeto foi pensado para
              alunos do ensino médio (14-18) e
              se baseará na BNCC e nos
              temas apresentados no ENEM
              para a criação dos temas e postagens.
            </p>
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;