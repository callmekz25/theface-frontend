import BaseSlider from './base-slider';

export function HeroSection() {
  return (
    <div className="w-full">
      <BaseSlider
        slidesPerView={1}
        space={0}
        autoplay
        pagination
        defaultPositionButton
      >
        <picture>
          <source
            width="1920"
            height="768"
            media="(min-width:576px)"
            srcSet="https://image.hsv-tech.io/1920x0/tfs/common/5de0a8a3-097d-4106-8ce2-40cb6fb2229e.webp"
          />
          <source
            media="(max-width:575px)"
            height="648"
            width="768"
            srcSet="https://image.hsv-tech.io/768x0/tfs/common/074e0d35-fc91-4db7-9278-653231752ffd.webp"
          />
          <source srcSet="https://image.hsv-tech.io/1920x0/tfs/common/5de0a8a3-097d-4106-8ce2-40cb6fb2229e.webp" />
          <img
            src="https://image.hsv-tech.io/1920x0/tfs/common/5de0a8a3-097d-4106-8ce2-40cb6fb2229e.webp"
            alt="hero banner"
            className="w-full"
          />
        </picture>
        <picture>
          <source
            width="1920"
            height="768"
            media="(min-width:576px)"
            srcSet="https://image.hsv-tech.io/1920x0/tfs/common/3d1586c2-ddf1-43e8-b24c-9dc9914692b9.webp"
          ></source>
          <source
            media="(max-width:575px)"
            height="648"
            width="768"
            srcSet="https://image.hsv-tech.io/768x0/tfs/common/db4ab7e4-0dd3-4789-93d6-cdff39d188f5.webp"
          ></source>
          <source srcSet="https://image.hsv-tech.io/1920x0/tfs/common/3d1586c2-ddf1-43e8-b24c-9dc9914692b9.webp"></source>
          <img
            width="1920"
            height="768"
            loading="eager"
            src="https://image.hsv-tech.io/1920x0/tfs/common/3d1586c2-ddf1-43e8-b24c-9dc9914692b9.webp"
            alt="The face shop"
          ></img>
        </picture>
        <picture>
          <source
            width="1920"
            height="768"
            media="(min-width:576px)"
            srcSet="https://image.hsv-tech.io/1920x0/tfs/common/ebef9004-039b-40cc-8984-9a261b7a70a6.webp"
          ></source>
          <source
            media="(max-width:575px)"
            height="648"
            width="768"
            srcSet="https://image.hsv-tech.io/768x0/tfs/common/3b2a6745-702d-4bd7-b10a-58da4999b5f3.webp"
          ></source>
          <source srcSet="https://image.hsv-tech.io/1920x0/tfs/common/ebef9004-039b-40cc-8984-9a261b7a70a6.webp"></source>
          <img
            width="1920"
            height="768"
            loading="eager"
            src="https://image.hsv-tech.io/1920x0/tfs/common/ebef9004-039b-40cc-8984-9a261b7a70a6.webp"
            alt="The face shop"
          ></img>
        </picture>
      </BaseSlider>
    </div>
  );
}
