import React from 'react';
import axios from 'axios';
import  {Opinion} from '../components/Opinion';
import { Container, Grid, Button, Box, Dialog, Fade, Backdrop, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddButton } from '../components/AddButton';
import Pagination from '@material-ui/lab/Pagination';

let fs = require('fs');   

const useStyles = makeStyles ({
    gridContainer: {
      maxWidth: "80%",
      paddingLeft: '30px',
    },
    innerGrid: {
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
    btn: {
        width: '80px',
        margin: '10px'
        
    }
  }); 

const ArticlesF = () => {
    const [ titre, setTitre ] = React.useState('');
    const [ contenu, setContenu ] = React.useState('');
    const [ image, setImage ] = React.useState('');
    const [ crud, setCrud ] = React.useState([]);
    const [ loading, setLoading ] = React.useState( false );
    const [currPage, setCurrPage] = React.useState(1);
    const [next, setNext] = React.useState(false);
    const [previous, setPrevious] = React.useState(false);
    const [totalPages, setTotalPages] = React.useState(1)
    const [ open, setOpen ] = React.useState(false);

    let classes = useStyles();
    
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    
    const limit = 3;

    const getPaginatedData = () => {
        axios.get(`http://localhost:8000/api/cruds/?page=${currPage}&limit=${limit}`)
        .then((res) => {
            if( res.data.prev === undefined ) {
                setPrevious( true)
            }
            else {
                setPrevious( false )
            }
            if( res.data.next === undefined ) {
                setNext( true) 
            }
            else {
                setNext( false )
            }
            setTotalPages(res.data.totalPages)
            setCrud([...res.data.current])
            setLoading( false )
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/cruds/${id}`)
             .then((res) => {
                 if( crud.length == 1 && currPage > 1 ) {
                     setCurrPage(prev => prev - 1 )
                 }
                setCrud([...res.data])
                setLoading( false )
             })
             .catch((error) => {
               console.log( error )
             })
        getPaginatedData()
        alert("Deleted Successfully")
      }
    


    // const handlePrevious = () => {
    //     setCurrPage(prev => prev - 1)
    // }

    // const handleNext = () => {
    //     setCurrPage(prev => prev + 1)
    // }

    const handleAdd = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.get('titre');
        formData.get('contenu');
        formData.append('image', image);
        if( !titre || !contenu ||  !image  ) {
        return( alert("fill in alll details"))
        }
        let config = {
        method: "post",
        url: "http://localhost:8000/api/cruds/add",
        headers: {
           "content-type": "application/json",
           "content-type": "multipart/form-data"
        },
        data: formData,
    };
        axios(config)
            .then((res) => {
                setCrud([...res.data.reverse()])
                setLoading( false )
            })
            .catch((error) => {
                console.log( error.response )
            })
        alert("New opinion Data Added")
        getPaginatedData()
        handleClose()
    }

    React.useEffect(() => {
        getPaginatedData()
    },[currPage, open])

    return (
        <div className="App">
          <Container>
            <div style={{ margin: 'auto'}}>
              <AddButton handleOpen={handleOpen} />
           </div>
           {/* <div style={{marginLeft: "-17px"}}>
                <Button className={classes.btn} color="primary" variant="contained" onClick = { () => handlePrevious() } disabled={previous === true}  >PREVIOUS</Button>
                <Button className={classes.btn} color="secondary" variant="contained" onClick = { () => handleNext()} disabled={next === true} >NEXT</Button>
           </div> */}
          
            <Dialog
                classes={{ paper: classes.paper}}
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                    >
                        <Fade in={open}>
                        <form className={classes.margin} onSubmit={handleAdd} method="post" encType="multipart/form-data" >
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
                                type="contenu"
                                onChange={(e) => setContenu(e.target.value)}
                                variant="outlined"
                                label="contenu"
                                />
                            </Box>
                           
                           
                        
                            <Box className={classes.margin}>
                                <TextField
                                color="secondary"
                                type="file"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                variant="outlined"
                                />
                            </Box>
                            <Box style={{display: "flex", justifyContent: "space-evenly", margin: 10}}>
                                <Button type = "submit" variant="contained" color="secondary">
                                    AJOUTER
                                </Button>
                                <Button onClick={handleClose} variant="contained" color="primary">
                                    FERMER
                                </Button>
                            </Box>
                        </form>
                        </Fade>
                </Dialog>
          </Container>
          <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}> 
            <Grid container spacing={2} className={classes.gridContainer} >
                {
                    crud.map((crud) => {
                    return (
                            <Grid item  xs={12}  sm={6} md={4} xl={3} className={classes.innerGrid} key = {crud.id}>
                                <Opinion getPaginatedData={getPaginatedData} crud={crud} handleDelete={handleDelete} />
                            </Grid>
                    )
                    })
                }
            </Grid>
            
          </div>
          <br />
          <br />
          <div style={{display: 'flex', justifyContent: 'center'}}>
               <Pagination count={totalPages} variant="outlined" shape="rounded" color="secondary" page={currPage} onChange={(e, p) => setCurrPage(p)} />
           </div>
      </div>
    )
}

export default ArticlesF;