class Layer{
  constructor(name, width, height) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.classList.add('layer')
    this.name = name
    this.canvas = canvas
    this.ctx = canvas.getContext('2d'),
    this.sprites = [],
    this.width = width
    this.height = height
    console.log(this)
  }
  addSprite(sprite) {
    this.sprites.push(sprite)
  }
  addSprites(array) {
    array.map(sprite => this.addSprite(sprite))
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  renderResource(res, x, y) {
    this.ctx.translate(x, y);
    this.ctx.drawImage(res, x, y);
    this.ctx.translate(-x, -y);
  }
  collide() {
    return this.sprites.reduce((sp1, sp2, index) => {
      //перевірти які спрайти маю потенційні області зіткнення
    })
  }
  render() {
    //render all sprites
    if(this.sprites && this.sprites.length) {
      this.clear()
      this.sprites.map(sprite => {
        sprite.render(this.ctx)
      })
    }
  }
  update({scene}) {
    //update all sprites and other things
    this.sprites.map(sprite => {
      sprite.update({scene})
    })
  }
}
module.exports = Layer
