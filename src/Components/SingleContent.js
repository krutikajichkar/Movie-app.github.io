import React from "react";
import { img_300, img_500, unavailable } from "./config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";
import ContentModal from "./ContentModal/ContentModal";

function SingleContent({ id, poster, date, media_type, vote_average, title }) {
  return (
    <>
      <ContentModal media_type={media_type} id={id}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </ContentModal>
    </>
  );
}

export default SingleContent;
