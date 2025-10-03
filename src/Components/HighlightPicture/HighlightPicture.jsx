import "./HighlightPicture.css";

export const HighlightPicture = ({ image, onClose }) => {
  return (
    <div
      className="highlight-container"
      style={{ opacity: image ? 1 : 0, zIndex: image ? 10 : -1 }}
      onClick={onClose}
    >
      <div className="highlight-wrapper">
        {image && (
          <img className="highlight" src={image} alt="Highlight Image"></img>
        )}
      </div>
    </div>
  );
};
