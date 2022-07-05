import { Elloading } from 'element-plus'

const loading = {
  loadingInstance: null,
  // 开启loading
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = Elloading.service({
        target: 'body',
        background: 'regb(0,0,0,0.4)'
      })
    }
  },
  // 关闭loading
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}

export default loading
