import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Social = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 5,
      }}
    >
      <Link href="https://github.com/projalm" target="_blank">
        <GitHubIcon sx={{ color: "white", fontSize: 50 }} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jose-leon-martinez/"
        target="_blank"
      >
        <LinkedInIcon
          sx={{ color: "white", fontSize: 50, marginLeft: 5, marginRight: 5 }}
        />
      </Link>
      <Link href="mailto:alejandroleon9412@gmail.com? Subject=Contacto">
        <EmailIcon sx={{ color: "white", fontSize: 50 }} />
      </Link>
    </Box>
  );
};

export default Social;
