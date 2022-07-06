<template>
  <div class="tags-view-container">
    <div></div>
    <div><h4>VueAdmin后台管理系统</h4></div>
    <div class="navbar-top-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          test
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <p>视频讲解</p>
      <p>网站</p>
    </div>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.tags-view-container {
  height: 60px;
  background: #17b3a3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-top-right {
  display: flex;
  color: #606f86;
  p {
    margin: 0 15px;
  }
}
.el-dropdown-link {
  margin-top: 5px;
}
</style>
