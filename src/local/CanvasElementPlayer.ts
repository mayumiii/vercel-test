import { CanvasPlayer } from "~/lib/useCanvasAgent";
import * as PIXI from 'pixi.js';

const RECT_SIZE = 100;

export default class CanvasElementPlayer implements CanvasPlayer {
  public readonly canvas: HTMLCanvasElement;

  private app: PIXI.Application;

  private graphics: PIXI.Graphics;

  private angle = 0;

  public constructor() {
    const app = new PIXI.Application({
      backgroundColor: 0xcccccc,
      // resolution: window.devicePixelRatio || 1,
      // autoDensity: true,
      antialias: true,
    });
    var graphics = new PIXI.Graphics();
    this.canvas = app.view;
    this.app = app;
    this.graphics = graphics;
  }

  private render() {
    const { app, canvas, graphics } = this;
    if (!app || !canvas) {
      return;
    }

    graphics.beginFill(0xde3249);
    graphics.drawRect(0, 0, 100, 100);
    graphics.endFill();

    const container = new PIXI.Container();
    container.addChild(graphics);
    container.width = RECT_SIZE;
    container.height = RECT_SIZE;
    container.x = canvas.width / 2;
    container.y = canvas.height / 2;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    console.log(container.width, canvas.width, canvas.offsetWidth);

    //ステージに追加する
    app.stage.addChild(container);
  }

  public update(delta: number) {
    this.angle += delta * 0.1;
    this.render();
  }

  public resize() {
    const { canvas } = this;
    // const resolution = window.devicePixelRatio;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  public dispose() {
    /* do nothing */
  }
}
