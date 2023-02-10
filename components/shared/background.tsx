const Background = () => {
  return (
    <>
      <div className="main">
        <div className="content" />
      </div>
      <style jsx>
        {`
          .main {
            width: 100vw;
            min-height: 100vh;
            position: fixed;
            display: flex;
            justify-content: center;
            padding: 120px 24px 160px 24px;
            pointer-events: none;
            z-index: -1;
          }

          .main:before {
            background: radial-gradient(
              circle,
              rgba(2, 0, 36, 0) 0,
              #fafafa 100%
            );
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
          }

          .main:after {
            content: "";
            background-image: url("/_static/grid.svg");
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            opacity: 0.4;
            filter: invert(1);
          }

          .content {
            height: fit-content;
            width: 100%;
            max-width: 640px;
            background-image: radial-gradient(
                at 27% 37%,
                hsla(215, 98%, 61%, 1) 0px,
                transparent 0%
              ),
              radial-gradient(
                at 97% 21%,
                hsla(125, 98%, 72%, 1) 0px,
                transparent 50%
              ),
              radial-gradient(
                at 52% 99%,
                hsla(354, 98%, 61%, 1) 0px,
                transparent 50%
              ),
              radial-gradient(
                at 10% 29%,
                hsla(256, 96%, 67%, 1) 0px,
                transparent 50%
              ),
              radial-gradient(
                at 97% 96%,
                hsla(38, 60%, 74%, 1) 0px,
                transparent 50%
              ),
              radial-gradient(
                at 33% 50%,
                hsla(222, 67%, 73%, 1) 0px,
                transparent 50%
              ),
              radial-gradient(
                at 79% 53%,
                hsla(343, 68%, 79%, 1) 0px,
                transparent 50%
              );
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            filter: blur(100px) saturate(150%);
            top: 80px;
            opacity: 0.15;
          }

          @media screen and (max-width: 640px) {
            .content {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Background;