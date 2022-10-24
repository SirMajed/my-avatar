import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import bg from "@/images/bg.png";
import { Face, Female, Male } from "@mui/icons-material";
import Section from "src/components/Section";
import { generateFemaleAvatar, generateMaleAvatar } from "src/avatarGenerator";
import Image from "next/image";
import { useEffect } from "react";
const Home = () => {
  const ref = useRef<null | HTMLDivElement | any>();
  const [gender, setGender] = useState("male");
  const [avatar, setAvatar] = useState("");
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleGender = (event: any, newGender: any) => {
    setGender(newGender);
  };

  useEffect(() => {
    setAvatar(generateMaleAvatar());
  }, []);

  const generateAv = () => {
    if (gender === "male") {
      setAvatar(generateMaleAvatar());
    } else {
      setAvatar(generateFemaleAvatar());
    }
  };
  return (
    <Box>
      <Section image={bg}>
        <Grid
          container
          direction="column"
          alignItems={"center"}
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <h1 className="grad">My Avatar</h1>
          <p
            style={{ marginBottom: "30px", marginTop: "10px" }}
            className="grad"
          >
            My Avatar - Developed by Majed by using the core react component for
            Avataaars Generator
          </p>
          <Button
            action={handleClick}
            onClick={handleClick}
            variant="contained"
            size="large"
            style={{ backgroundColor: "#240b36" }}
            startIcon={<Face />}
          >
            Get Started
          </Button>
        </Grid>
      </Section>

      <Section >
        <Grid
          
          display="flex"
          direction={"column"}
          justifyContent="space-between"
          alignItems={"center"}
          marginTop="20px"
          gap="10px"
          minHeight={"100vh"}
        >
          <Grid
           
            marginTop="10px"
            display="flex"
            direction={"column"}
            alignItems="center"
          >
            <h1 ref={ref} className="grad">Generate your avatar now!</h1>
            <p className="grad">
              Get started by selecting the gender first and then, voila! you
              will see your avatar and you can download it.
            </p>
            <Grid
              gap="10px"
              marginTop="20px"
              display="flex"
              direction="column"
              alignItems="center"
            >
              <h3 className="grad">Select Gender:</h3>
              <ToggleButtonGroup
                value={gender}
                exclusive
                onChange={handleGender}
                aria-label="text alignment"
                sx={{ marginTop: "10px" }}
              >
                <ToggleButton value="male" aria-label="male">
                  <Male />
                </ToggleButton>
                <ToggleButton value="female" aria-label="female">
                  <Female />
                </ToggleButton>
              </ToggleButtonGroup>
              <Button
                sx={{ marginY: "5px" }}
                action={handleClick}
                onClick={generateAv}
                variant="contained"
                size="large"
                style={{ backgroundColor: "#240b36" }}
                startIcon={<Face />}
              >
                Generate Avatar
              </Button>
            </Grid>
          </Grid>

          <Image src={avatar} height={350} width={350} />

          <footer>
            Designed by{" "}
            <a
              className="grad"
              href={"https://www.linkedin.com/in/alhasenmajed/"}
            >
              Majed Alhasin
            </a>{" "}
            👋
          </footer>
        </Grid>
      </Section>
    </Box>
  );
};

export default Home;
