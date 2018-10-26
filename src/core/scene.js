import Layer from './layer'
import Sprite from './sprite'
import Resources from './resources'

class Scene {
  constructor(width, height, layers) {
    this.requestAnimFrame = (function(window){
      return window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(callback){
              window.setTimeout(callback, 1000 / 60)
          }
      })(window)
    this.width = width
    this.height = height

    this.layers = []
    for(let i=1; i<=layers; i++){
      const layer = new Layer(`Layer-${i}`, width, height)
      this.layers.push(layer)
    }
    this.now = Date.now()
    this.startGame = Date.now()
    this.lastTime = Date.now()
    this.gameTime = 0
    this.fps = 0
    this.info = document.getElementById('info')
    this._resourcesPatch = new Set()
    this.resources = new Resources()
  }
  _created() {
    this.created()
    this.layers.map(layer => document.body.appendChild(layer.canvas))
  }
  created() {

  }
  attached() {

  }
  addSpriteToLayer(layerNumber, options) {
    if(!Array.isArray(options)) options = [options]
    console.log('!!!!', options)
    const sprites = (options || []).map(opt => {
      if(opt && (!opt.resource && opt.url)) opt.resource = this.resources.geting(opt.url)
      console.log(opt)
      return new Sprite(opt)
    })
    this.layers[layerNumber].addSprites(sprites)
    return sprites
  }
  addResource(res) {
    if(Array.isArray(res)) {
      res.map(r => this._resourcesPatch.add(r))
    } else {
      this._resourcesPatch.add(res)
    }
  }
  get resourcesPatch() {
    let resources = []
    for(const path of this._resourcesPatch) {
      resources.push(path)
    }
    return resources
  }
  beforeLoadResource() {

  }
  loadResources() {
    this.beforeLoadResource()
    return this.resources.load(this.resourcesPatch)
  }
  init() {
  }
  start() {
    this._created()
    this.loadResources()
      .then(this.init.bind(this))
      .then(this.attached.bind(this))
      .then(this.run.bind(this))
  }
  run() {
    this.now = Date.now()
    this.dt = (this.now - this.lastTime) / 1000.0
    this.gameTime += this.dt
    this.fps = Math.round(1 / this.dt)

    this.collide()
    this.update()
    this.render()

    this.lastTime = this.now

    window.requestAnimationFrame(this.run.bind(this))
  }
  onLayerUpdate(layer) {

  }
  onLayerRender(layer) {

  }
  collide() {
    this.layers.map(l => {
      l.collide({scene: this})
      //generate collideEvents
    })
  }
  update() {
    this.layers.map(l => {
      l.update({scene: this})
      this.onLayerUpdate(l)
    })
  }
  render() {
    this.layers.map(l => {
      l.render()
      this.onLayerRender(l)
    })
    this.info.innerHTML = `Game Time: ${Math.round(this.gameTime, 2)}</br> fps: ${this.fps}`
  }
}

module.exports = Scene
