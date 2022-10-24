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
  const [skin, setSkin] = useState("Pale");
  const [avatar, setAvatar] = useState("");
  
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleGender = (event: any, newGender: any) => {
    setGender(newGender);
  };
  const handleSkin = (event: any, newSkin: any) => {
    setSkin(newSkin);
  };

  useEffect(() => {
    setAvatar(generateMaleAvatar('Light'));
  }, []);

  const generateAv = () => {
    if (gender === "male") {
      setAvatar(generateMaleAvatar(skin));
    } else {
      setAvatar(generateFemaleAvatar(skin));
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
              <h3 className="grad">Select Gender</h3>
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
              <h3 className="grad">Skin</h3>
              <ToggleButtonGroup
                value={skin}
                exclusive
                onChange={handleSkin}
                aria-label="text alignment"
                sx={{ marginTop: "4px" }}
              >
                <ToggleButton   value="Tanned" aria-label="Tanned">
                  <Box bgcolor={'#e59849'} height="15px" width="15px"/>
                </ToggleButton>
                <ToggleButton   value="Yellow" aria-label="Yellow">
                  <Box bgcolor={'#eed065'} height="15px" width="15px"/>
                </ToggleButton>
                <ToggleButton   value="Pale" aria-label="Yellow">
                  <Box bgcolor={'#f5dbb5'} height="15px" width="15px"/>
                </ToggleButton>
                <ToggleButton   value="Light" aria-label="Light">
                  <Box bgcolor={'#deb88b'} height="15px" width="15px"/>
                </ToggleButton>
                <ToggleButton   value="Brown" aria-label="Brown">
                  <Box bgcolor={'#be895e'} height="15px" width="15px"/>
                </ToggleButton>
                <ToggleButton   value="DarkBrown" aria-label="DarkBrown">
                  <Box bgcolor={'#9b5d31'} height="15px" width="15px"/>
                </ToggleButton>
                <ToggleButton   value="Black" aria-label="Black">
                  <Box bgcolor={'#5a4538'} height="15px" width="15px"/>
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
          <p className="grad pulse">Image downloading coming very, very soon</p>
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
