import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AddIcon from "../Components/AddIcon";
import Header from "../Components/Header";
import UploadPost from "../Components/UploadPost";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";
import { useParams } from "react-router-dom";

function PhotoList() {
  const [newImage, setNewImage] = useState("");
  const [file, setFile] = useState(null);

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({
    userId: -1,
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
  });
  const [didFetchPosts, setDidFetchPosts] = useState(false);

  const { id: userId } = useParams("id");

  useEffect(() => {
    if (!didFetchPosts) {
      fetchPosts();
    }
  }, [didFetchPosts]);

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
      .then((res) => {
        const { posts, ...user } = res.data;
        setPosts(posts);
        setUser(user);
        setDidFetchPosts(true);
      });
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(e.target.files[0]);
        setNewImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setOpen(true);
  };

  // set new image using fileReader

  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: 1,
        height: 1,
      }}
    >
      <Header />

      <Box
        sx={{
          height: 80,
          width: 500,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 6,
          paddingTop: 2,
        }}
      >
        <img
          src={user.photo}
          alt={user.firstName}
          style={{
            width: 80,
            height: 80,
            borderRadius: "100%",
            borderColor: "red",
          }}
        />
        <Box
          sx={{
            width: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: 20 }}>
            {user.firstName} {user.lastName}
          </p>
        </Box>
      </Box>
      <Box sx={{ height: 540, position: "relative" }}>
        <ImageList sx={{ width: 500, height: "100%" }} cols={3} rowHeight={164}>
          {posts.map((post) => (
            <ImageListItem key={post.id}>
              <img
                src={post.photo}
                alt={post.description.slice(0, 4)}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <label htmlFor="image-upload">
          <AddIcon />
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          style={{ display: "none", visibility: "none" }}
          onChange={imageHandler}
        />
      </Box>
      <UploadPost
        newImage={newImage}
        open={open}
        setOpen={setOpen}
        file={file}
      />
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

export default PhotoList;
