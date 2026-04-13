import React, { useEffect, useRef } from "react";

const RainAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    let rainDrops = [];
    let humans = [];

    let theta = 0;
    let phi = 0;

    const INIT_RAIN_DROP_COUNT = 1500;
    const RAIN_DROP_COUNT = 8;

    const COLOR = (hue, luminance) =>
      `hsl(${hue}, 20%, ${luminance}%)`;

    const getRandomValue = (min, max) =>
      min + (max - min) * Math.random();

    // ---------------- RAIN DROP ----------------
    class RainDrop {
      constructor(toInit) {
        this.scale = getRandomValue(0.2, 1);
        this.length = 20 * this.scale;

        this.vx = getRandomValue(-1.5, -1) * this.scale;
        this.vy = 3 * this.scale;
        this.ay = 0.01 * this.scale;

        this.theta = Math.atan2(this.vy, this.vx);

        this.offset = height * 0.04;

        this.x = getRandomValue(
          0,
          width - height * Math.cos(this.theta)
        );

        this.y =
          (toInit
            ? getRandomValue(0, height)
            : 0) - this.offset;

        this.radius = this.length * 0.02;
      }

      render(toFront) {
        const FRONT_THRESHOLD = 0.8;

        if (
          (toFront && this.scale < FRONT_THRESHOLD) ||
          (!toFront && this.scale >= FRONT_THRESHOLD)
        ) {
          return true;
        }

        context.save();
        context.strokeStyle = "rgba(255,255,255,0.5)";

        if (
          this.y >=
          height *
            (1 - (1 - this.scale) * 0.6) -
            this.offset
        ) {
          context.lineWidth = 3;
          context.globalAlpha =
            (1 - this.radius / this.length / 0.2) * 0.5;

          context.beginPath();
          context.arc(
            this.x,
            this.y,
            this.radius,
            Math.PI,
            Math.PI * 2
          );
          context.stroke();

          context.restore();

          this.radius *= 1.05;

          if (this.radius > this.length * 0.2) {
            return false;
          }
        } else {
          context.lineWidth = 1;

          context.beginPath();
          context.moveTo(this.x, this.y);
          context.lineTo(
            this.x + this.length * Math.cos(this.theta),
            this.y + this.length * Math.sin(this.theta)
          );
          context.stroke();

          context.restore();

          this.x += this.vx;
          this.y += this.vy;
          this.vy += this.ay;
        }

        return true;
      }
    }

    // ---------------- INIT ----------------
    for (let i = 0; i < INIT_RAIN_DROP_COUNT; i++) {
      rainDrops.push(new RainDrop(true));
    }

    // ---------------- ANIMATION ----------------
    const render = () => {
      context.fillStyle = `hsl(${180}, 40%, ${85 + 5 * Math.sin(theta)}%)`;

      context.fillRect(0, 0, width, height);

      rainDrops = rainDrops.filter((drop) =>
        drop.render(false)
      );

      humans.forEach((h) => h.render());

      rainDrops = rainDrops.filter((drop) =>
        drop.render(true)
      );

      for (let i = 0; i < RAIN_DROP_COUNT; i++) {
        rainDrops.push(new RainDrop(false));
      }

      theta += Math.PI / 1500;
      phi += Math.PI / 1000;

      requestAnimationFrame(render);
    };

    render();

    // Resize support
    const handleResize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default RainAnimation;