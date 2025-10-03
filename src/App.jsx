import "./App.css";
import { HighlightPicture } from "./Components/HighlightPicture/HighlightPicture";
import { BikePictures } from "./Components/BikePictures/BikePictures";
import { bikes } from "./data/data";
import { useState, useEffect } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(bikes[0].image1);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, []);
  return (
    <div className="container cover">
      <HighlightPicture
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <BikePictures images={bikes} onSelectImage={setSelectedImage} />
    </div>
  );
}

export default App;
