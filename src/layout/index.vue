<template>
 <div class="app-container">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <div class="navbar-container">
        <Navbar class="navbarcon"></Navbar>
      </div>
      <AppMain class="appmain-container"></AppMain>
    </div>
 </div>
</template>

<script setup>
import Sidebar from "./Sidebar"
import AppMain from "./AppMain"
import Navbar from "./Navbar"
</script>
<style scoped lang='scss'>
.app-container{
  width: 100%;
  height: 100%;
  position: relative;
  .sidebar-container{
    width: 210px;
    height: 100%;
    background: #304156;
    position: fixed;
    left: 0;
    top: 0;
    overflow: auto;
  }
  .main-container{
    width: calc(100% - 210px);
    height: 100%;
    .navbarcon{
      width: 100%;
      height: 58px;
    }
    .navbar-container{
      width: calc(100% - 210px);;
      position: absolute;
      right: 0;
      top: 0;
    }
    .appmain-container{
      width: calc(100% - 210px);
      height: calc(100vh - 100px);
      position: fixed;
      right: 0;
      bottom: 0;
      overflow: auto;
    }
  }
}
::-webkit-scrollbar {
    display: none;
}
</style>
