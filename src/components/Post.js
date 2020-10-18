import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flexFlow: 1,
  },
}));
const Post = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.titleContainer}>
        <Typography variant="h3" className={classes.title}>
          {" "}
          This is the post title
        </Typography>
        <Box>
          <IconButton>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="secondary" />
          </IconButton>
        </Box>
      </Box>

      <Typography variant="body1">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat
        lacus ut eros aliquet, ut tempus felis iaculis. Nulla porta leo metus,
        et mollis nisl convallis a. Mauris pellentesque, orci in sagittis
        vulputate, ante augue ullamcorper leo, ut dignissim metus erat sed quam.
        Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Cras hendrerit mollis
        tristique. Vivamus et ex a libero lobortis aliquet ut vitae lorem. Donec
        dictum scelerisque nisi, hendrerit volutpat ante auctor a. Nunc turpis
        tortor, porttitor at dapibus eu, placerat suscipit eros. Vestibulum
        vitae interdum sapien. Aliquam erat volutpat. Proin feugiat pulvinar
        tempus. Integer scelerisque dignissim ipsum, eget vestibulum nisl
        posuere et. In non massa sit amet dui varius consectetur eu scelerisque
        lectus. Etiam vel commodo sapien. Cras ac diam dui. Morbi vitae lacus
        nec risus ultricies mattis. Fusce non risus non ipsum placerat ornare id
        quis purus. Morbi accumsan hendrerit neque, eget molestie sapien ornare
        vel. Suspendisse metus ligula, sagittis vel consequat vel, tincidunt ac
        lorem. Proin mattis ipsum quis risus tempus semper. Suspendisse
        hendrerit leo elementum diam bibendum varius. Quisque in feugiat erat,
        et bibendum magna. Nulla id mattis velit, ac commodo sem. Ut volutpat,
        purus et sagittis tincidunt, turpis tellus scelerisque nibh, et
        porttitor nisl nisl eu odio. Nulla tristique feugiat tristique. Aenean
        et erat est. Morbi egestas fringilla cursus. Phasellus pulvinar, mi nec
        malesuada vestibulum, enim felis fermentum nunc, at condimentum est erat
        sit amet odio. Donec vitae vestibulum quam. Etiam dictum tempus ligula
        sit amet ultricies. Fusce tincidunt ac massa id laoreet. Proin
        condimentum ipsum ligula, a rhoncus sem pharetra eget. Suspendisse eget
        interdum elit. Maecenas commodo massa quis tortor ultrices, eget
        ullamcorper enim vehicula. Vivamus fringilla, metus eu rhoncus
        tincidunt, ligula neque mollis enim, sit amet volutpat ante tortor a
        arcu. Sed id sem tortor. In hac habitasse platea dictumst. Phasellus ac
        arcu et arcu rutrum blandit eu et neque. Donec tincidunt nec nulla eget
        ultrices. Sed tincidunt nulla quis nulla aliquet, et cursus justo
        mollis. In hac habitasse platea dictumst. Donec mauris lacus,
        ullamcorper nec posuere id, lacinia sit amet urna. Maecenas feugiat
        imperdiet tempor. Cras finibus mi vel euismod cursus. Mauris eu rhoncus
        arcu, vel facilisis quam. Donec viverra, orci non rutrum efficitur, erat
        justo bibendum metus, vel tincidunt arcu mi ut nulla. Nullam in commodo
        massa, ut tincidunt elit. Donec sed ante eu nulla facilisis venenatis.
        Phasellus ullamcorper nisl ante. Nulla eros nibh,
      </Typography>
    </Container>
  );
};

export default Post;
