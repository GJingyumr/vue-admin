<template>
 <div >
  <el-menu
        active-text-color="#ffd04b"
        background-color="#304156"
        default-active="$router.path"
        text-color="#fff"
        unique-opened
        router
      >
        <el-menu-item index="/homepage">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title >
            <el-icon></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="/system/user">
            <el-icon></el-icon>
           <span>用户管理</span>
          </el-menu-item>
          <el-menu-item index="/system/role">
            <el-icon></el-icon>
            <span>角色管理</span>
          </el-menu-item>
          <el-menu-item index="/system/menu">
          <el-icon></el-icon>
            <span>菜单管理</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon></el-icon>
            <span>系统工具</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/tooll/dictionary">
              <el-icon></el-icon>
              <span>数字字典</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
 </div>
</template>
<script setup>
</script>
<style scoped lang='scss'>
</style>
