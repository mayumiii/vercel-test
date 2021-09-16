import dynamic from "next/dynamic";

const CanvasElementView = dynamic(
  () => import("~/components/CanvasElementView"),
  {
    ssr: false
  }
);

const PageCanvas = () => <CanvasElementView />;

export default PageCanvas;
