
class Sprite {
  constructor({resource, position, pos, size, speed, frames, dir, once}) {
    this.position = position
    this.pos = pos
    this.size = size
    this.resource = resource || null
    this.speed = typeof speed === 'number' ? speed : 0
    this.frames = frames
    this._index = 0
    this.url = (resource&&resource.src) || null
    this.dir = dir || 'horizontal'
    this.once = once
  }
  update({scene}) {
    this._index += this.speed * scene.dt;
    this._move()
  }
  _move() {
    if(this.move && typeof this.move === 'function') {
      this.move(this)
    }
  }
  render(ctx) {
    var frame;

    if(this.speed > 0) {
        var max = this.frames.length;
        var idx = Math.floor(this._index);
        frame = this.frames[idx % max];

        if(this.once && idx >= max) {
            this.done = true;
            return;
        }
    }
    else {
        frame = 0;
    }


    var x = this.pos[0];
    var y = this.pos[1];

    if(this.dir == 'vertical') {
        y += frame * this.size[1];
    }
    else {
        x += frame * this.size[0];
    }
    ctx.save();
    ctx.translate(this.position[0], this.position[1]);
    ctx.drawImage(this.resource,
                  x, y,
                  this.size[0], this.size[1],
                  0, 0,
                  this.size[0], this.size[1]);
    ctx.translate(-this.position[0], -this.position[1]);
    ctx.restore()
}
}
module.exports = Sprite
