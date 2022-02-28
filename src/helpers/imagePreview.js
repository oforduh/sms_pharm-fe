import dummyImage from "../pages/Accounts/user.png";

// This function set an image preview and saves the image in a state
export const handleImg = ({ e, setImg, setHideIcon, setimageFile }) => {
  if (e.target.files[0]) {
    setImg({
      src: URL.createObjectURL(e.target.files[0]),
      alt: e.target.files[0].name,
    });
    setHideIcon(false);
    setimageFile(e.target.files[0]);
  }
};

// This functionality delete image preview
export const deleteImgPreview = ({ setImg, setHideIcon, user }) => {
  setImg({
    src: user.avatar ? user.avatar : dummyImage,
    alt: "Upload an Image",
  });
  setHideIcon(true);
};
