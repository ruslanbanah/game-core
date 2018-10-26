class Resources {
  constructor() {
    this.resourceCache = {};
    this.loading = [];
    this.readyCallbacks = [];
  }
  load(urlOrArr) {
    if(urlOrArr instanceof Array) {
      return Promise.all(urlOrArr.map( url => this._load(url)))
    }
    return this._load(urlOrArr);
  }
  _load(url) {
    return new Promise((resolve, reject) => {
      if(this.geting(url)) resolve(this.geting(url))
      let img = new Image()
      img.onload = () => {
        this.resourceCache[url] = img
        resolve(img)
      }
      img.src = url
    })
  }
  geting(url) {
    return this.resourceCache[url]
  }
}
module.exports = Resources
