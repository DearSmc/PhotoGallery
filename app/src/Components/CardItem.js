import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardMedia from "@mui/material/CardMedia";
function CardItem(props) {
  const img = props.img;
  const profile = props.profile;
  const fname = props.fname;
  const lname = props.lname;
  const likeNumber = props.likeNumber;
  const post = props.post;
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia component='img' height='250' image={img} alt='Paella dish' />

      <Box sx={{ width: 500 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            <img
              src={profile}
              alt='BigCo Inc. logo'
              style={{
                width: 40,
                height: 40,
                borderRadius: "100%",
              }}
            />
            <p style={{ padding: 10 }}>
              {fname} {lname}
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 2,
            }}
          >
            <p style={{ padding: 10 }}>{likeNumber}</p>
            <FavoriteIcon />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant='body2'
          color='text.secondary'
          style={{ paddingLeft: 50, marginBottom: 20, marginRight: 15 }}
        >
          {post}
        </Typography>
      </Box>
    </Card>
  );
}

export default CardItem;
