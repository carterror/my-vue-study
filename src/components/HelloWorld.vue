<template>
  <div class="main-container">
    <div class="img">
      <div class="img-2"></div>
      <div class="box">
        <div class="box-2"><span class="text">Inicia Sesión</span></div>
        <div class="group">
          <div class="box-3">
            <div class="img-3"></div>
            <span class="text-2">Usuario</span>
          </div>
          <div class="section">
            <div class="pic"></div>
            <span class="text-3">Contraseña</span>
          </div>
        </div>
        <div class="section-2"><span class="text-4">Entrar</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
// import { AlmaLogo } from "./AlmaLogo";
// import { LockClosed } from "./LockClosed";
// import { Person } from "./Person";

export default {
  name: "Login",
  components: {
    // AlmaLogo,
    // LockClosed,
    // Person,
  },
};
</script>

<style>
.main-container {
  overflow: hidden;
}

.main-container,
.main-container * {
  box-sizing: border-box;
}

:root {
  --rpx: 100vw / 1920;
}

.main-container {
  position: relative;
  width: calc(1920 * var(--rpx));
  height: calc(1080 * var(--rpx));
  margin: 0 auto;
  background: #f7f7f7;
  overflow: hidden;
}
.img {
  position: absolute;
  top: calc(-121.254150390625 * var(--rpx));
  right: calc(-91 * var(--rpx));
  bottom: calc(-121.254150390625 * var(--rpx));
  left: calc(-91 * var(--rpx));
  background: url(../assets/images/d6cfcddc-4a93-4f89-ae44-4c91226b7603.png)
  no-repeat center;
  background-size: cover;
}
.img-2 {
  position: relative;
  width: calc(148.92857360839844 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(405.254150390625 * var(--rpx)) 0 0 calc(977 * var(--rpx));
  background: url(../assets/images/846802ee-91a4-4deb-8b31-8bda198590d9.png)
  no-repeat center;
  background-size: cover;
  z-index: 14;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: calc(26 * var(--rpx));
  position: relative;
  width: calc(446 * var(--rpx));
  margin: calc(56 * var(--rpx)) 0 0 calc(828 * var(--rpx));
  padding: calc(40 * var(--rpx)) calc(30 * var(--rpx)) calc(40 * var(--rpx))
  calc(30 * var(--rpx));
  background: linear-gradient(180deg, #ffffff, rgba(255, 255, 255, 0.5));
  opacity: 0.30000001192092896;
  z-index: 2;
  border-radius: calc(20 * var(--rpx));
  backdrop-filter: blur(calc(10 * var(--rpx)));
  box-shadow: 0 calc(1 * var(--rpx)) calc(1 * var(--rpx)) 0 #ffffff inset;
}
.box-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: calc(26 * var(--rpx));
  position: relative;
  width: calc(199 * var(--rpx));
  z-index: 3;
}
.text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  width: calc(199 * var(--rpx));
  height: calc(44 * var(--rpx));
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
  "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
  "Source Han Sans CN", sans-serif;
  color: #26273e;
  font-size: calc(32 * var(--rpx));
  font-weight: 700;
  line-height: calc(43.578125 * var(--rpx));
  text-align: center;
  white-space: nowrap;
  z-index: 4;
}
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: calc(20 * var(--rpx));
  position: relative;
  width: calc(386 * var(--rpx));
  padding: calc(10 * var(--rpx)) 0 calc(10 * var(--rpx)) 0;
  z-index: 5;
}
.box-3 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: calc(10 * var(--rpx));
  position: relative;
  width: calc(386 * var(--rpx));
  padding: calc(10 * var(--rpx)) calc(10 * var(--rpx)) calc(10 * var(--rpx))
  calc(10 * var(--rpx));
  border: calc(1 * var(--rpx)) solid #26273e;
  z-index: 6;
  border-radius: calc(10 * var(--rpx));
}
.img-3 {
  flex-shrink: 0;
  position: relative;
  width: calc(20 * var(--rpx));
  height: calc(20 * var(--rpx));
  background: url(../assets/images/528b00b7-5a57-4bb5-a905-766516148134.png)
  no-repeat center;
  background-size: cover;
  z-index: 7;
  overflow: hidden;
}
.text-2 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: calc(22 * var(--rpx));
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
  "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
  "Source Han Sans CN", sans-serif;
  color: #7a8faf;
  font-size: calc(16 * var(--rpx));
  font-weight: 500;
  line-height: calc(21.7890625 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 8;
}
.section {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: calc(10 * var(--rpx));
  position: relative;
  width: calc(386 * var(--rpx));
  padding: calc(10 * var(--rpx)) calc(10 * var(--rpx)) calc(10 * var(--rpx))
  calc(10 * var(--rpx));
  border: calc(1 * var(--rpx)) solid #26273e;
  z-index: 9;
  border-radius: calc(10 * var(--rpx));
}
.pic {
  flex-shrink: 0;
  position: relative;
  width: calc(20 * var(--rpx));
  height: calc(20 * var(--rpx));
  background: url(../assets/images/c3117b66-4b2e-41e8-85e1-2c0a5e23de31.png)
  no-repeat center;
  background-size: cover;
  z-index: 10;
  overflow: hidden;
}
.text-3 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: calc(22 * var(--rpx));
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
  "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
  "Source Han Sans CN", sans-serif;
  color: #7a8faf;
  font-size: calc(16 * var(--rpx));
  font-weight: 500;
  line-height: calc(21.7890625 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}
.section-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: calc(10 * var(--rpx));
  position: relative;
  width: calc(386 * var(--rpx));
  height: calc(40 * var(--rpx));
  padding: 0 calc(20 * var(--rpx)) 0 calc(20 * var(--rpx));
  background: linear-gradient(180deg, #57c1ef, #008cc9);
  z-index: 12;
  overflow: hidden;
  border-radius: calc(10 * var(--rpx));
  box-shadow: 0 calc(1 * var(--rpx)) calc(6 * var(--rpx)) 0 rgba(0, 0, 0, 0.2);
}
.text-4 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: calc(22 * var(--rpx));
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
  "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
  "Source Han Sans CN", sans-serif;
  color: #ffffff;
  font-size: calc(16 * var(--rpx));
  font-weight: 400;
  line-height: calc(21.7890625 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 13;
  text-shadow: 0 calc(1 * var(--rpx)) calc(6 * var(--rpx)) rgba(0, 0, 0, 0.2);
}


</style>
