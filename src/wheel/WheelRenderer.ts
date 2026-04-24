import { Segment } from "./segments";

export class WheelRenderer {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private segments: Segment[],
    private radius: number,
  ) {}

  draw(rotation: number, glowStrength: number = 22) {
    const { ctx } = this;
    const cx = ctx.canvas.width / 2;
    const cy = ctx.canvas.height / 2;

    const angle = (Math.PI * 2) / this.segments.length;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.save();
    ctx.translate(cx, cy);

    ctx.rotate(rotation);

    for (let i = 0; i < this.segments.length; i++) {
      const start = i * angle;
      const end = start + angle;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, this.radius, start, end);
      ctx.closePath();

      ctx.save();

      ctx.shadowColor = "rgba(255, 0, 60, 0.6)";
      ctx.shadowBlur = glowStrength;

      const isRed = i % 2 === 0;

      ctx.fillStyle = isRed ? "rgba(180, 0, 40, 1)" : "rgba(30, 30, 30, 1)";

      ctx.fill();

      ctx.shadowBlur = 0;

      ctx.strokeStyle = "rgba(255, 215, 0, 0.25)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();

      ctx.save();

      ctx.rotate(start + angle / 2);

      ctx.fillStyle = "#ffd700";
      ctx.font = "bold 18px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.shadowColor = "rgba(255, 215, 0, 0.8)";
      ctx.shadowBlur = 10;

      ctx.fillText(this.segments[i].value.toFixed(2), this.radius * 0.65, 0);

      ctx.restore();
    }

    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(cx, cy - this.radius - 10);
    ctx.lineTo(cx - 14, cy - this.radius + 22);
    ctx.lineTo(cx + 14, cy - this.radius + 22);
    ctx.closePath();

    ctx.fillStyle = "rgba(255, 0, 60, 1)";
    ctx.shadowColor = "rgba(255, 0, 60, 0.9)";
    ctx.shadowBlur = 20;
    ctx.fill();

    ctx.shadowBlur = 0;

    ctx.strokeStyle = "rgba(255, 215, 0, 0.6)";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}
