import { useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Button from "../ui/Button";
import character from "/images/character.webp";
import rightImg from "/images/astro_painter.png";
import ImageSlider from "./ImageSlider";
import "./MainContent.css";

const MainContent = () => {
  // Refs for each section
  const buyMoonBoxRef = useRef(null);
  const exploreSectionRef = useRef(null);
  const artistsSectionRef = useRef(null);
  const imageSliderRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      console.log("Scrolling to:", sectionRef.current); // Log the actual DOM element
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // Delay scroll slightly to allow for DOM updates
    } else {
      console.log("Invalid ref:", sectionRef); // If ref is invalid, log it.
    }
  };

  // Smooth scrolling on page load
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main>
      {/* Buy MoonBox Section */}
      <section ref={buyMoonBoxRef} className="mt-[3rem] md:mt-[6rem]">
        <Container maxWidth="sm">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <header>
                <h2 className="section-title text-2xl text-amber-400 font-bold mb-3">
                  <span className="text-white">Buy MoonBoxes</span> and expand
                  your NFT collection
                </h2>
                <p className="text-amber-400">
                  Buying MoonBoxes is a unique way to acquire NFTs and build
                  your collection. It is built on the Binance Smart Chain,
                  MoonRiver, Polygon, Ethereum, and DogeChain. Only available on
                  <a href="#" className="text-white">
                    MoonBoxes.io
                  </a>
                </p>
              </header>
              <div className="flex items-center gap-8">
                <Button text="Buy a MoonBox" />
                <button
                  type="button"
                  className="mt-5"
                  onClick={() => scrollToSection(imageSliderRef)}
                >
                  <ArrowCircleDownIcon
                    className="text-yellow-500"
                    fontSize="large"
                  />
                </button>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={character} alt="Character" className="max-w-full" />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Image Slider Section */}
      <section ref={imageSliderRef} className="mt-[3rem] md:mt-[6rem]">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid size={12}>
              <ImageSlider />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Explore Section */}
      <section ref={exploreSectionRef} className="mt-[3rem] md:mt-[6rem]">
        <Container maxWidth="sm">
          <Grid container spacing={{ md: 5 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <header>
                <h2 className="section-title text-2xl text-amber-400 font-bold mb-3">
                  <span className="text-white">MoonBoxes.io</span> your base to
                  purchase NFTs
                </h2>
              </header>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              className="lg:border-t-2 border-amber-400 md:pt-4"
            >
              <p className="text-amber-400 mb-5">
                <a href="#" className="text-white">
                  Moonboxes.io
                </a>{" "}
                offers you a complete overview of upcoming, active, and recent
                NFT drops.
              </p>
              <p className="text-amber-400 mb-5">
                <a href="#" className="text-white">
                  Moonboxes.io
                </a>{" "}
                will be home to collectors and amazing NFT artists.
              </p>
              <Button
                text="Explore"
                onClick={() => scrollToSection(artistsSectionRef)}
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Artists Section */}
      <section ref={artistsSectionRef} className="mt-[3rem] md:mt-[6rem]">
        <Container maxWidth="sm">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <header>
                <h2 className="section-title text-2xl text-amber-400 font-bold mb-3">
                  <span className="text-white">Call for Artists!</span>{" "}
                  Applications are open for all artists & Creators
                </h2>
              </header>
              <Button text="Contact Us" variant="transparent" />
              <Button text="Application Form" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={rightImg} alt="Astro Painter" className="max-w-full" />
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
};

export default MainContent;
