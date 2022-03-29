import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import { height } from "@mui/system";

const Profile = () => {
  return (
    <Box
      id="Init"
      sx={{
        width: 1,
        height: 734,
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box sx={{ width: "700px", display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            flexWrap
            component="div"
            sx={{
              mr: 2,
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
          mt={5}
          sx={{
            height: 600,
            width: 500,
            opacity: 0.5,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="Me"
          src="./assets/img/profil.png"
        />
      </Box>
    </Box>
  );
};

export default Profile;
