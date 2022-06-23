import { GALLERY } from "../Constant";
import {
  GalleryContainer,
  PartnersContainer,
  PartnersSection,
  PartnersTitle,
} from "./Styles/HomeStyle";
import useMobile from "../Hooks/useMobile";

const HomeGallery = () => {
  const isMobile = useMobile();

  return (
    <PartnersSection>
      <PartnersTitle>Gallery</PartnersTitle>
      <GalleryContainer>
        {GALLERY.map((pic) => (
          <img
            src={pic.path}
            // alt={}
            style={{
              margin: "0 20px",
              height: isMobile ? "auto" : "200px",
              width: isMobile ? "400px" : "auto",
            }}
          />
        ))}
      </GalleryContainer>
    </PartnersSection>
  );
};

export default HomeGallery;
