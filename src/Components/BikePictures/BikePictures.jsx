import "./BikePictures.css";

export const BikePictures = ({ images, onSelectImage }) => {
  const bikeArray = Object.values(images[0]);
  return (
    <>
      {bikeArray.map((image, i) => {
        return (
          <div key={i} className={`grid${i + 1} wrapper`}>
            <img
              src={image}
              alt={`Bike ${i + 1}`}
              onClick={() => onSelectImage(image)}
            />
          </div>
        );
      })}
    </>
  );
};
