import Scene from '../core/scene'

export default class RalliScene extends Scene {
  created() {
    //Add resources
    this.addResource([
      'assets/terrain.png',
      'assets/spritestrip.png',
      'assets/sprites.png',
    ])
  }
  attached() {
    //{resource, position, pos, size, speed, frames, dir, once}
    const sprites = [{
      url: 'assets/sprites.png',
      resource: null,
      position: [10,10],
      pos: [0, 0],
      size: [39, 39],
      speed: 16,
      frames: [0, 1],
      dir: null,
      once: null,
    },{
      url: 'assets/sprites.png',
      resource: null,
      position: [30,30],
      pos: [0, 78],
      size: [80, 39],
      speed: 16,
      frames: [0, 1, 2, 3, 2, 1],
      dir: null,
      once: null,
    }];

    [this.helicopter, this.alian] = this.addSpriteToLayer(1, sprites)

    this.helicopter.dx = 50
    this.helicopter.dy = 100
    this.helicopter.move = (sp) => {
      if(sp.position[0] > (this.layers[0].width - sp.size[0])) sp.dx = -sp.dx
      if(sp.position[0] < 1) sp.dx = -sp.dx
      if(sp.position[1] > this.layers[0].height- sp.size[1]) sp.dy = -sp.dy
      if(sp.position[1] < 1) sp.dy = -sp.dy
      sp.position[0] += this.dt * sp.dx
      sp.position[1] += this.dt * sp.dy
    }
    this.alian.dx = 100
    this.alian.dy = -100
    this.alian.move = (sp) => {
      if(sp.position[0] > (this.layers[0].width - sp.size[0])) sp.dx = -sp.dx
      if(sp.position[0] < 1) sp.dx = -sp.dx
      if(sp.position[1] > this.layers[0].height - sp.size[1]) sp.dy = -sp.dy
      if(sp.position[1] < 1) sp.dy = -sp.dy
      sp.position[0] += this.dt * sp.dx
      sp.position[1] += this.dt * sp.dy
    }
  }
  init() {
    const wall = this.resources.geting('assets/terrain.png')
    for(let i = 0; i<=20; i++) {
      for(let j=0; j<=20; j++) {
        if(Math.random() * 10 > 5){
          this.layers[0].renderResource(wall, i * 20, j * 20)
        }

      }
    }
  }
}
