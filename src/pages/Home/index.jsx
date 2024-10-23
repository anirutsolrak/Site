import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Container, Grid } from '@mui/material';

function Home() {
  return (
    <Container sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundImage: 'linear-gradient(to bottom, #a0d8ef 20%,#feffff 38%,#feffff 38%,#feffff 39%,#ddf1f9 55%)',
      minHeight: '100vh', 
      padding: '2rem' 
    }}>
      <Box sx={{ mb: 4 }}> 
        <Typography variant="h3" align="center">
          Página Inicial
        </Typography>
      </Box>

      {/* Card principal com texto à direita */}
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> 
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Bem-vindo à nossa loja!
                </Typography>
                <Typography variant="body1">
                  Aqui você encontra tudo que precisa para suas
                  tarefas do dia a dia, desde materiais de escritório
                  até produtos para costura.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
              component="img"
              height="140"
              image="/static/images/cards/imagem1.jpg" // Substitua pela sua imagem
              alt="Descrição da imagem"
            />
          </Card>
        </Grid>
      </Grid>

      {/* Card com imagem à esquerda e texto à direita */}
      <Grid container spacing={2} sx={{ alignItems: 'center', mt: 4 }}> 
        <Grid item xs={12} md={6}> 
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Tradição e inovação
              </Typography>
              <Typography variant="body1">
                Entendemos que cada folha de papel, cada botão costurado, 
                e cada carimbo estampado carrega consigo uma história única.
                Nosso compromisso garante que essas histórias sejam contadas
                com perfeição. Ao longo dos anos, crescemos e expandimos
                nossos serviços, sempre guiados pela paixão em atender
                com excelência e pelo desejo de oferecer tudo que nossos
                clientes precisam em um único lugar.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
              component="img"
              height="140"
              image="/static/images/cards/imagem2.jpg" // Substitua pela sua imagem
              alt="Descrição da imagem"
            />
          </Card>
        </Grid>
      </Grid>

      {/* Cards em linha */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}> 
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
              component="img"
              height="140"
              image="/static/images/cards/imagem3.jpg" // Substitua pela sua imagem
              alt="Descrição da imagem"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Nossos Serviços
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}> 
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
              component="img"
              height="140"
              image="/static/images/cards/imagem4.jpg" // Substitua pela sua imagem
              alt="Descrição da imagem"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Nossos Produtos
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}> 
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
              component="img"
              height="140"
              image="/static/images/cards/imagem5.jpg" // Substitua pela sua imagem
              alt="Descrição da imagem"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sobre Nós
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>
  );
}

export default Home;