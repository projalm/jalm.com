import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import { height } from "@mui/system";

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box sx={{ width: "700px", display: "flex", alignItems: "center" }}>
        <Typography
          variant="h5"
          flexWrap
          component="div"
          sx={{
            alignItems: "center",
            display: { xs: "flex", md: "flex" },
          }}
        >
          {/* <Typewriter
              flexWrap
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={5}
              delaySpeed={1000}
              onLoopDone={() => console.log("termino")}
              words={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi pariatur nemo ab aperiam sequi.",
              ]}
            ></Typewriter> */}
          <Typewriter
            options={{ delay: 20 }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Lorem ipsum dolor sit amet con estupido")
                .deleteChars(8)
                .typeString(
                  "genio elit. Quo eligendi pariatur nemo ab aperiam sequi."
                )

                .callFunction(() => {
                  console.log("String typed out!");
                })
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          height: 600,
          width: 500,
          opacity: 0.5,
        }}
        alt="Me"
        src="./assets/img/profil.png"
      />
    </Box>
  );
};

export default Profile;
