import Box from "@mui/material/Box";
import HeaderHome from "../Components/HeaderHome";
import CardItem from "../Components/CardItem";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";
function CardList() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [didFetchPosts, setDidFetchPosts] = useState(false);
  useEffect(() => {
    if (!didFetchPosts) {
      fetchPosts();
    }
  }, [didFetchPosts]);

  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`).then((res) => {
      setPosts(res.data);
      setDidFetchPosts(true);
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: 1,
        height: 1,
        marginBottom: 5,
      }}
    >
      <HeaderHome userId={user.userId} />
      <Box style={{ height: 200, marginTop: 60 }}>
        {posts
          ? posts.map((p) => {
              if (p.author === null) return null;
              const { author, ...post } = p;
              return <CardItem author={author} post={post} />;
            })
          : null}
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    profile:
      "https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg",
    fname: "Thanakorn",
    lname: "Chancherngpanich",
    likeNumber: 1200,
    post: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis, nisl eu rutrum congue, tortor libero pharetra odio, sed fermentum leo tellus eu dolor. Donec dui est, aliquet ac aliquet ut, posuere et erat. Integer velit metus, ultrices vitae mauris sit amet, mattis interdum nunc. Fusce et metus id urna mattis facilisis ac vitae urna. Suspendisse volutpat nunc at nunc tincidunt, non porttitor felis pulvinar.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    profile:
      "https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg",
    fname: "Thanakorn",
    lname: "Chancherngpanich",
    likeNumber: 300,
    post: " wetfwfwfwefw efwfwwefw fewfe eeeeeeee eeeeeeeee eeeee eeeeeeeeeeee eeeeeeeeeeeee eeeeeeeee eeeeeeeeeeeee eeeeeeeeee eweqweqweq",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    profile:
      "https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg",
    fname: "Thanakorn",
    lname: "Chancherngpanich",
    likeNumber: 500,
    post: " wetfwfwfwefw efwfwwefw fewfe eeeeeeee eeeeeeeee eeeee eeeeeeeeeeee eeeeeeeeeeeee eeeeeeeee eeeeeeeeeeeee eeeeeeeeee eweqweqweq",
  },
];

export default CardList;
