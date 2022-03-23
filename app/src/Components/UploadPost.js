import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UploadIcon from "./UploadIcon";

function UploadPost(props) {
  const handleClose = () => setOpen(false);
  const newImage = props.newImage;
  const open = props.open;
  const setOpen = props.setOpen;
  const [post, setPost] = useState();
  const handleChange = (e) => {
    setPost(e.target.value);
  };

  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 600,
          bgcolor: "background.paper",
          // border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={newImage} style={{ width: 600, height: 350 }} />
        <Box
          sx={{
            padding: 6,
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Write a caption"
            multiline
            defaultValue=""
            rows={4}
            sx={{ width: 600 }}
            value={post}
            handleChange={handleChange}
          />
        </Box>
        <UploadIcon handleClose={handleClose} />
      </Box>
    </Modal>
  );
}

export default UploadPost;
