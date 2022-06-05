import { Box, Link } from "@mui/material";
import { TMediaLink } from "../../types";

export interface IMediaLinks {
  mediaLinks: TMediaLink[];
}

export const MediaLinks = ({ mediaLinks }: IMediaLinks) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {mediaLinks.map((m, i) => (
        <Link
          key={i}
          underline="none"
          target="_blank"
          rel="noopener"
          href={`${m.link}`}
          sx={{ color: "magenta" }}
        >
          {m.icon}
        </Link>
      ))}
    </Box>
  );
};
