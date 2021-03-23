export default function Sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(1024, p5.windowHeight / 2)
    p5.noStroke()
  }

  let count = 0
  p5.draw = () => {
    p5.noFill()

    if (count < 300) {
      p5.beginShape()
      p5.stroke(236, 194, 89, 100)
      for (let x = 0; x < p5.width; x += 1) {
        p5.curveVertex(
          x,
          p5.map(p5.noise(x * 0.007, p5.frameCount * 0.007), 0, 1, 0, p5.height)
        )
      }
      p5.endShape()
      count++
    }
  }
}
