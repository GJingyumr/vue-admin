<template>
  <div class="loginform">
    <el-form
      ref="LoginForm"
      :model="loginForm"
      :rules="loginrules"
      label-width="90px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="loginForm.password" />
      </el-form-item>
      <el-form-item label="验证码" class="formItem" prop="code">
        <el-input class="handlecode" v-model.trim="loginForm.code" />
        <div class="imgs">
          <img @click="changeCode" :src="itemc" alt="" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="large"
          @click="handleLoginForm"
          class="submit"
          >提交</el-button
        >
        <el-button size="large">获取密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { validatePassword } from './rules'
const itemc = ref()
const store = useStore()
const router = useRouter()
// // 获取验证码图片并渲染
// const loginCodes = async() =>{
//   const handleco =  await codeApi.codes()
//   itemc.value = handleco.data.data.captchaImg
// }
// loginCodes()
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
const LoginForm = ref(null)
// 表单验证
const loginrules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '验证码不正确'
    }
  ]
})
// 点击图片
const changeCode = async () => {
  const handleco = await store.dispatch('user/code')
  itemc.value = handleco.data.data.captchaImg
  loginForm.token = handleco.data.data.token
}
changeCode()
// 登录
const handleLoginForm = async () => {
  // console.log(123)
  if (!LoginForm.value) return
  await LoginForm.value.validate(async (valid) => {
    if (valid) {
      const response = await store.dispatch('user/getLog', loginForm)
      console.log('response======>', response)
      router.push('/about')
    }
  })
}
</script>
<style scoped lang="scss">
.loginform {
  width: 500px;
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.el-form {
  margin-top: 100px;
}
.submit {
  margin-left: 100px;
}
.handlecode {
  width: 200px;
}
.imgs {
  width: 50%;
  height: 30px;
  img {
    width: 50%;
    height: 100%;
  }
}
.formItem {
  width: 100%;
  display: flex;
}
</style>
