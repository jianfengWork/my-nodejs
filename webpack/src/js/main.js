import 'bootstrap/dist/css/bootstrap.css'
import '../css/main.css'
import '../css/main.less'
import '../css/main.scss'

var a = 1
const aa = 11
console.log(aa)

class Persion {
  constructor(name) {
    this.name = name
  }
  show() {
    console.log(this.name)
  }
}
const man = new Persion('summer')
man.show()
