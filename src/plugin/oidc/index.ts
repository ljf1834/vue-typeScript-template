/**
 * @description: 处理单点登录的问题
 */
import oidcEvents from './oidcEvents'

export default class OidcService {
  // 到登陆页面
  oidcSignIn() {
    oidcEvents.signinRedirect().then(res => {
      console.info(111, res)
    }).catch(err => {
      console.error(222, err)
    })
  }

  // 登陆后回调
  oidcSigninRedirect() {
    let _this = this
    oidcEvents.signinRedirectCallback().then((res) => {
      localStorage.setItem('token', res.id_token)
      if (res.id_token) {
        window.location.href = '/'
      }
    }).catch((err) => {
      console.error(err)
      _this.oidcSignIn()
    })
  }

  // 退出登陆
  oidcSignOut() {
    oidcEvents.signoutRedirectCallback().then((resp) => {
      localStorage.clear()
      sessionStorage.clear()
      window.location.href = '/#/login?type=logout'
    }).catch((err) => {
      console.error(err)
    })
  }
}
