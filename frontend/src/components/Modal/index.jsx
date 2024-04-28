import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexDirection:"column",
  justifyContent: 'center',
  alignItems: "center"

};

export default function ModalBlog(props) {
 

  return (
    <div>
      
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{color: "black"}}
      >
        <Box sx={style}>
          <Typography id="modal-modal-image" variant="h6" component="h2">
            <img src={props.img} alt="" style={{width:"250px", height:"150px"}}/>
           
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
