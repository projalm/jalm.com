import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import { height } from "@mui/system";
import { Container } from "@mui/material";

const Profile = () => {
  return (
    <Container>
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
              fontSize: { xs: "15px", sm: "25px" },
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
                  .typeString("Hola, ¿que tal?\n")
                  // .deleteChars()
                  .typeString(
                    " Bienvenido a mi espacio en la web. Te presento un poco de mi y de mis conocimientos"
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
            height: { xs: 200, sm: 400, md: 600 },
            width: { xs: 200, sm: 300, md: 500 },
            opacity: 0.7,
          }}
          alt="Me"
          src="./assets/img/perfi4.png"
        />
      </Box>
    </Container>
  );
};

export default Profile;
