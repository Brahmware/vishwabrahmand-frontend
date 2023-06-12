import { Typography, styled } from "@mui/material";
import "./loader.css";

const Container = styled("div")(({ theme }) => ({
  transform: "scale(0.5)",
}));

const LoadingText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: 500,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: theme.animations.pulse,
}));


const SquareCircleLoader = () => (
  <Container className="container">
    <div className="baton-0"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-1"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-2"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-3"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-4"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-5"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-6"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-7"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-8"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-9"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-10"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-11"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-12"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-13"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-14"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-15"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-16"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-17"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-18"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-19"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-20"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-21"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-22"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-23"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-24"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-25"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-26"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-27"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-28"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-29"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-30"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-31"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-32"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-33"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-34"><div className="metronome"><div className="baton"></div></div></div>
    <div className="baton-35"><div className="metronome"><div className="baton"></div></div></div>
    <LoadingText variant="h6" className="noselect">
      Loading...
    </LoadingText>
  </Container>
)

export default SquareCircleLoader