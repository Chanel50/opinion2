import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Dialog,
  Fade,
  Backdrop,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
    userCard: {
      width: '250px',
      height: '330px',
      borderRadius: '10px',
      boxShadow: '5px 5px 30px black',
      margin: '10px',
      background: '-webkit-linear-gradient(to left, #fca5a5, #fca5a5)', /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to left, #fca5a5, #fca5a5)'
    },
    userCardTop: {
      height: '52%',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center'
    },
    userCardBottom: {
      color: 'white',
      minHeight: '40%',
      overflow: 'auto',
      minWidth: '100%',
      maxWidth: '100%',
      padding: '0 10px 5px',
      overflowWrap: 'break-word'
    },
    titre: {
      color: 'white',
    },
    contenu: {
      color: 'white',
      fontSize: 15
    },
    avatar: {
      width: '120px',
      height: '120px',
      margin: '8px 0 0 0',
      borderRadius: '50%',
      border: '4px solid white',
      objectFit: 'cover'
    },
    box: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    margin: {
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    paper: {
      minWidth: '400px',
      minHeight: '400px'
    },
    paper1: {
      minWidth: '500px',
      minHeight: '100px',
      padding: '20px'
    },
    btn: {
      minWidth: '100px',
    }
  });
  
  

const Opinion = ({ crud, getPaginatedData, handleDelete }) => {
  const [titre, setTitre] = React.useState('');
  const [contenu, setContenu] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('_id', crud._id);
    formData.append('image', image);
    formData.append('titre', titre);
    formData.append('contenu', contenu);
  
    const config = {
      method: 'put',
      url: 'http://localhost:8000/api/cruds/edit',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };

    axios(config)
      .then((res) => {
        getPaginatedData();
      })
      .catch((error) => {
        console.log(error);
      });
    alert('Edited');
    handleClose();
  };

  React.useEffect(() => {
    if (crud) {
      setTitre(crud.titre || '');
      setContenu(crud.contenu || '');
      setImage(crud.image || null);
    }
  }, [crud]);

  const getImageName = (url) => {
    if (crud && crud.image) {
      const imgUrl = url.split('\\');
      return imgUrl[imgUrl.length - 1];
    }
    return null;
  };

  return (
    <div>
      {crud && (
        <Card className={classes.userCard}>
          <CardContent>
            <Box className={classes.userCardTop}>
            <Avatar
  alt="profileImg"
  src={crud.image ? `${window.location.origin}/uploads/${getImageName(crud.image)}` : ''}
  className={classes.avatar}
/>

            </Box>
            <Box className={classes.userCardBottom}>
              <Typography variant="h5" className={classes.titre}>
                {crud.titre || ''}
              </Typography>
              <Typography variant="h6" className={classes.contenu}>
                Contenu: {contenu}
              </Typography>
            </Box>
            <Box className={classes.box}>
              <Button
                className={classes.btn}
                color="secondary"
                variant="outlined"
                onClick={() => setOpenDeleteModal(true)}
              >
                Supprimer
              </Button>
              <Button
                className={classes.btn}
                color="primary"
                variant="outlined"
                onClick={handleOpen}
              >
                Modifier
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      <Dialog
        classes={{ paper: classes.paper1 }}
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Typography>Confirmer l'opération</Typography>
        <Button
          onClick={() => handleDelete(crud && crud._id ? crud._id : '')}
          variant="contained"
          color="secondary"
          style={{ margin: '10px' }}
        >
          CONFIRMER
        </Button>
        <Button
          onClick={() => setOpenDeleteModal(false)}
          variant="contained"
          color="primary"
          style={{ margin: '10px' }}
        >
          FERMER
        </Button>
      </Dialog>

      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleEdit} className={classes.margin}>
            <Box className={classes.margin}>
              <TextField
                name="titre"
                value={titre}
                color="secondary"
                type="text"
                onChange={(e) => setTitre(e.target.value)}
                variant="outlined"
                label="Titre"
              />
            </Box>
            <Box className={classes.margin}>
              <TextField
                color="primary"
                name="contenu"
                value={contenu}
                type="text"
                onChange={(e) => setContenu(e.target.value)}
                variant="outlined"
                label="Contenu"
              />
            </Box>
            <Box className={classes.margin}>
              <input
                color="secondary"
                type="file"
                name="image"
                required
                onChange={(e) => setImage(e.target.files[0])}
                className={classes.fileInput}
              />
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-evenly', margin: 10 }}>
              <Button type="submit" variant="contained" color="secondary">
                MODIFIER
              </Button>
              <Button onClick={handleClose} variant="contained" color="primary">
                FERMER
              </Button>
            </Box>
          </form>
        </Fade>
      </Dialog>
    </div>
  );
};

export { Opinion };


