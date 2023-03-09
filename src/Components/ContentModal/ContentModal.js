import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Carousel from "../Carousel/Carousel";
import {
 
  img_500,
  unavailableLandscape,
 unavailable,
} from "../config";
import "./ContentModal.css";
import axios from "axios";

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     padding:'30px'
// };

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [videos, setVideos] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
    // console.log(data);
  };

  const fetchVideos = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideos(data.results[0]?.key);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
     // eslint-disable-next-line
    fetchVideos();
     // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="media" style={{ cursor: "pointer" }} onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        className="modal"
        slotprops={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {content && (
            <Box className="ContentWrapper">
              <div className="contentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="contentModal__about">
                  <span className="contentModal__title">
                    {content.title || content.name} (
                    {(
                      content.release_date ||
                      content.first_air_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (<i className="tagline">{content.tagline}</i>)}
                  <span className="contentModal__description">
                    {content.overview}
                  </span>
                  <div><Carousel id={id} media_type={media_type} /></div>
                  <Button variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${videos}`}> Watch the Trailer  </Button>
                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}
