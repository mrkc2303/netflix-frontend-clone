import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import tv from "./assets/tv.png";
import mobile from "./assets/mobile.jpeg";
import devicePileIn from "./assets/device-pile-in.png";
import children from "./assets/children.png";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const content = [
    {
      mainText: "Enjoy on your TV.",
      captionText:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more",
      reverse: "false",
      image: tv,
      video: "true",
      //videoLink: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
      videoLink: "",
      videoClass: "videoDivA",
    },
    {
      mainText: "Download your shows to watch offline.",
      captionText:
        "Save your favourites easily and always have something to watch.",
      reverse: "true",
      image: mobile,
      video: "false",
      videoLink: "",
      videoClass: "",
    },
    {
      mainText: "Watch everywhere.",
      captionText:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      reverse: "false",
      image: devicePileIn,
      video: "true",
      //videoLink: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
      videoLink: "",
      videoClass: "videoDivB",
    },
    {
      mainText: "Create profiles for children.",
      captionText:
        "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
      reverse: "true",
      image: children,
      video: "false",
      videoLink: "",
      videoClass: "",
    },
  ];

  return (
    <div className="App">
      <Hero />
      {content.map((data, key) => {
        return (
          <Card
            mainText={data.mainText}
            captionText={data.captionText}
            reverse={data.reverse}
            image={data.image}
            video={data.video}
            videoLink={data.videoLink}
            videoClass={data.video}
          />
        );
      })}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
