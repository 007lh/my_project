import React from 'react';
import './css/else.css'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={logintext:true};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeLoginText = this.changeLoginText.bind(this);
  }

  componentWillMount(){
    document.title= "小米 登陆页面";
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  changeLoginText() {
    this.setState(state => ({
      logintext: !state.logintext
    }))
  }
  render(){
    return(
      <div>
          <div className="wrap-login">
            <div className="wrap-in">
              <div className="head-logo">
                <div className="milogo"></div>
                <h4 className="head-txt">小米账号登录</h4>
              </div>
              <div className="login-area">
                  <form action="" method="post">
                    <div className="input-wrap">
                        <label style={{display:"block","fontWeight":"200"}}>
                            <div className="input-style">
                              <span style={{padding:"1rem 10px 1rem",color: "#9b9b9b",display:this.state.logintext? "block" : "none"}}>{this.state.logintext?`+86>` : ""}</span>
                              <input className="input-tel" name="phoneNumber" type="tel" placeholder={this.state.logintext? "手机号码" : "邮箱/小米"} onChange={this.handleInputChange}/>
                            </div>
                        </label>
                        <label style={{display:"block",fontWeight:"200"}}>
                            <div className="input-style">
                                <input className="input-tel" name="passWord" type="number" placeholder="短信验证码" onChange={this.handleInputChange}/>
                            </div>
                        </label>
                    </div>
                    <input className="bg-btn" type="submit" value="立即登录/注册"/>
                    <div className="other-type-login">
                        <a className="bg-btn btn-else-login" id="ChangeLoginType" onClick={()=>this.changeLoginText()}>{this.state.logintext? "用户名密码登录" : "手机短信登陆"}</a>
                        <div className="oth-type-tit">
                            <fieldset className="oth-boundary">
                              <legend className="oth-type-txt">其他方式登录</legend>
                            </fieldset>
                            <div className="other-links">
                                <a className="icon_type btn_qq"
                                   href="https://account.xiaomi.com/pass/sns/login/auth?appid=100284651&&callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go">
                                  <i className="btn_sns_icontype icon_default_qq"></i>
                                </a>
                                <a className="icon_type btn_weibo"
                                   href="https://account.xiaomi.com/pass/sns/login/auth?appid=2996826273&&callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go">
                                  <i className="btn_sns_icontype icon_default_weibo"></i>
                                </a>
                                <a className="icon_type btn_alipay"
                                   href="https://account.xiaomi.com/pass/sns/login/auth?appid=2088011127562160&&callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go">
                                  <i className="btn_sns_icontype icon_default_alipay"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                  </form>
              </div>
            </div>
          </div>
          <div className="n-footer">
            <ul className="lang-select-list">
              <li><a href="javascript:void(0)" data-lang="zh_CN" className="lang-select-li current">简体</a>|</li>
              <li><a href="?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket&amp;_locale=zh_TW" data-lang="zh_TW" className="lang-select-li">繁体</a>|</li>
              <li><a href="?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket&amp;_locale=en" data-lang="en" className="lang-select-li">English</a>|</li>
              <li><a href="https://static.account.xiaomi.com/html/faq/faqList.html" target="_blank">常见问题</a>|</li>
              <li><a id="msg-privacy" href="http://www.miui.com/res/doc/privacy/cn.html" target="_blank">隐私政策</a></li>
            </ul>
          </div>
      </div>
    );
  };
}

export default Login;
