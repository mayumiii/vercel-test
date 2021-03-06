import { useRef } from "react";
import { css } from "@emotion/react";
import { percent } from "~/lib/cssUtil";
import useCanvasAgent from "~/lib/useCanvasAgent";
import CanvasElementPlayer from "~/local/CanvasElementPlayer";

const canvasStyle = css({
  position: "fixed",
  top: percent(0),
  left: percent(0),
  width: percent(100),
  height: percent(100),
  canvas: {
    position: "absolute",
    top: percent(0),
    left: percent(0),
    width: percent(100),
    height: percent(100)
  }
});

const CanvasElementView = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useCanvasAgent({
    initializer: () => new CanvasElementPlayer(),
    wrapperRef
  });
  return <div css={canvasStyle} ref={wrapperRef} />;
};

export default CanvasElementView;
