import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";

interface PropsTypes {
  children: React.ReactNode;
}

const KeepSlider: React.FC<PropsTypes> = ({ children }) => {
  return (
    <Carousel options={{ loop: true }}>
      <CarouselSlides>{children}</CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  );
};

export default KeepSlider;
