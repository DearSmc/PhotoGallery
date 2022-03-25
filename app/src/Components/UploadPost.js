import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UploadIcon from "./UploadIcon";
import axios from "axios";

function UploadPost(props) {
  const [post, setPost] = useState();
  const { newImage, open, setOpen, file } = props;

  const handleClose = () => {
    // upload photo and description to server
    const formData = new FormData();
    formData.append("file", file);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/posts/photo/upload`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        const absoluteStorageDir = res.data.path.slice(5);
        const postImageDestination = res.data.destination
          ? `${process.env.REACT_APP_API_URL}/${absoluteStorageDir}`
          : null;

        const payload = {
          photo: postImageDestination ? postImageDestination : null,
          description: post,
        };

        axios
          .post(`${process.env.REACT_APP_API_URL}/posts`, payload, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            setOpen(false);
          })
          .catch((err) => {
            alert("Cannot create post");
          });
      })
      .catch((err) => {
        alert("Cannot upload post image");
      });
  };

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
            onChange={handleChange}
          />
        </Box>
        <UploadIcon handleClose={handleClose} />
      </Box>
    </Modal>
  );
}

export default UploadPost;
