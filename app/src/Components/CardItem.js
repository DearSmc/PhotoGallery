import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "@mui/material";

function CardItem(props) {
  const { author, post } = props;
  const { firstName, lastName, photo: authorPhoto, userId } = author;
  const { description, photo, slug } = post;
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia component="img" height="250" image={photo} alt={slug} />
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
              py: 2,
            }}
          >
            <img
              src={authorPhoto}
              alt="BigCo Inc. logo"
              style={{
                width: 40,
                height: 40,
                borderRadius: "100%",
              }}
            />
            <Link href={`profile/${userId}`} sx={{ p: "10px" }}>
              {firstName} {lastName}
            </Link>
          </Box>
          {/* <Box
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
          </Box> */}
        </Box>
      </Box>
      <Box>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ paddingLeft: 50, marginBottom: 20, marginRight: 15 }}
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
}

export default CardItem;
