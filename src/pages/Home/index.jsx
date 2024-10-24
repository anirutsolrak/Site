import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid2 } from '@mui/material';
import seção1 from '../../assets/seção1.jpg';
import seção2 from '../../assets/seção2.jpg';

function Home() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundImage:
          'linear-gradient(to bottom, #a0d8ef 20%,#feffff 38%,#feffff 38%,#feffff 39%,#ddf1f9 55%)',
        minHeight: '100vh',
        minWidth: '100vw',
        padding: '2rem',
        marginTop: { xs: 20, md: 30 },
        overflow: 'hidden',
      }}
    >
      {/* Card principal com texto à direita */}
      <Grid2
        container
        spacing={6}
        sx={{ alignItems: 'center', mt: 4, justifyContent: 'center' }}
      >
        <Grid2  xs={12} md={6}>
          <Box>
            <Card
              sx={{
                height: '45vh',
                maxWidth: '45vw',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
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
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Card
            sx={{
              height: '45vh',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              image={seção1}
              alt="Descrição da imagem"
            />
          </Card>
        </Grid2>
      </Grid2>

      {/* Card com imagem à esquerda e texto à direita */}
      <Grid2
        container
        spacing={6}
        sx={{ alignItems: 'center', mt: 4, justifyContent: 'center' }}
      >
        <Grid2  xs={12} md={6}>
          <Card
            sx={{
              height: '45vh',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              image={seção2}
              alt="Descrição da imagem"
            />
          </Card>
        </Grid2>
        <Grid2  xs={12} md={6}>
          <Card
            sx={{
              height: '45vh',
              maxWidth: '45vw',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
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
        </Grid2>
      </Grid2>

      {/* Cards em linha */}
      <Grid2
        container
        spacing={6}
        sx={{ mt: 4, justifyContent: 'center' }}
      >
        <Grid2  xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: 'cover' }}
              image={seção1}
              alt="Descrição da imagem"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Nossos Serviços
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2  xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: 'cover' }}
              image={seção1}
              alt="Descrição da imagem"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Nossos Produtos
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2  xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: 'cover' }}
              image={seção1}
              alt="Descrição da imagem"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Sobre Nós
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={6}
        sx={{ mt: 4, justifyContent: 'center' }}
      >
        <Grid2  xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: 'cover' }}
              image={seção1}
              alt="Descrição da imagem"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Nossos Serviços
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2  xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: 'cover' }}
              image={seção1}
              alt="Descrição da imagem"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Nossos Produtos
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2  xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: 'cover' }}
              image={seção1}
              alt="Descrição da imagem"
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Sobre Nós
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Home;