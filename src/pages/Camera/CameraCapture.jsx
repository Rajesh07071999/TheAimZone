import React, { useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import "./CameraCapture.css";

const CameraCapture = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [device, setDevice] = useState(0); // Camera index

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "theaimzone_capture.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="camera-capture-container">
      <div className="camera-box glass-effect">
        {!image ? (
          <Camera
            ref={camera}
            aspectRatio={4 / 3}
            facingMode={device === 0 ? "environment" : "user"}
            numberOfCamerasCallback={(devices) =>
              console.log("Available cameras:", devices)
            }
          />
        ) : (
          <img src={image} alt="Captured" className="captured-image" />
        )}
      </div>

      <div className="controls">
        {!image ? (
          <>
            <button className="btn-camera" onClick={() => setImage(camera.current.takePhoto())}>
              📸 Capture
            </button>
            <button className="btn-camera" onClick={() => setDevice((prev) => (prev === 0 ? 1 : 0))}>
              🔄 Switch Camera
            </button>
          </>
        ) : (
          <>
            <button className="btn-camera" onClick={() => setImage(null)}>
              🔁 Retake
            </button>
            <button className="btn-camera" onClick={downloadImage}>
              💾 Download
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
