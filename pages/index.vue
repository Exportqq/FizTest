<template>
  <div>
    <div class="backround">
      <div class="header">
        <div class="navigation_header">
          <ul class="list">
            <li>
              <img class="logo" src="logo.png">
            </li>
            <li>
              <button class="header_txt_two">Законы</button>
            </li>
            <li>
              <button class="header_txt">Теория</button>
            </li>
            <li>
              <button class="header_txt">Лабораторные работы</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="navigation_header_two">
        <div style="float: left;">
          <p class="header_txt_three">С нами Физика станет <span style="color: #A700FF;">доступнее, проще, понятнее</span></p>
        </div>
        <div style="float: left;">
          <img class="phone_img" src="phone.svg" >
        </div>
      </div>
    </div>
    <div class="ContainerNumOne">
      <ul class="list">
        <li>
          <div class="AllNavigationOneCont">
            <div class="navigation_vertical_line">
              <div div data-aos="flip-down" class="vertical_line"></div>
            </div>
            <img data-aos="zoom-in" class="square_img" src="square.svg">
          </div>
        </li>
        <li>
          <div>
            <ul class="list">
              <li>
                <p class="container_txt">Проверенный сайт. Только актульная информация</p>
              </li>
              <li class="NavigationAllItemContOne">
                <img class="macscreenimage" src="macimg.svg">
                <div class="glass_rectangle">
                  <p class="glass_rectangle_txt">Наш сайт уже был опробирован на учащихся колледжа <span style="color: #E95555;">КМПО РАНХиГС</span> и успешно справился со своей задачей. </p>
                  <ul class="lsit">
                    <li>
                      <img class="human_image_navigation" src="humans.svg">
                    </li>
                    <li>
                      <p class="rating_txt">По итогам опроса средний балл оценки сайта составил:<br><span class="num_reiting">4.8</span></p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      IphoneImage: "phone.png"
    }
  },
  mounted() {
    AOS.init({ });
  },
}
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
}

.backround {
  background-image: url(static/wallpaperflare.png);
  width: 1920px;
  height: 1080px;
}

.header {
  width: 1920px;
  height: 100px;
  background: rgba(100, 100, 100, 0.42);
}

.list li {
  float: left;
}

.navigation_header {
  padding: 12px 0px 0px 500px;
}

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin: 23px 0px 0px 50px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #A700FF;
  letter-spacing: 0.05em;
  margin: 23px 0px 0px 50px;
}

.header_txt_two {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin: 23px 0px 0px 229px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #A700FF;
  margin: 23px 0px 0px 229px;
  letter-spacing: 0.05em;
}

.vertical_line {
  width: 4px;
  height: 526px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 4px 15px;
}

.ContainerNumOne {
  width: 1920px;
  height: 2000px;
  background-color: #0D1117;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 251px;
}

.container_txt {
  width: 456px;
  height: 165px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 55px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 470px 0px 0px 25px;
}

.macscreenimage {
  position: absolute;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 586px;
  height: 375px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 59px;
  margin: 279px 0px 0px 265px;
  opacity: 0.90;
  border: 1px solid #FFFFFF;
}

.glass_rectangle_txt {
  width: 481px;
  height: 92px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  margin: 52px 0px 0px 52px;
}

.rating_txt {
  width: 381px;
  height: 127px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  margin: 52px 0px 0px 0px;
}

.human_image_navigation {
  padding: 66px 0px 0px 52px;
}

.num_reiting {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #FFE925;
}

.NavigationAllItemContOne {
  padding: 347px 0px 0px 52px;
}

.navigation_header_two {
  padding: 116px 0px 0px 320px;
}

.header_txt_three {
  width: 856px;
  height: 294px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 98px;
  color: #FFFFFF;
  margin: 200px 13px 0px 0px;
}

input {outline:none;}

.logo {
  width: 116.5px;
  height: 77px;
}

.square_img {
  height: 36px;
  width: 34px;
}

/********************************************/

@media (min-width: 300px) and (max-width: 320px) {
  * {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.backround {
  background-image: url(static/wallpaperflare320px.png);
  width: 100%;
  height: 180px;
}

.header {
  width: 100%;
  height: 25px;
  background: rgba(100, 100, 100, 0.42);
}

.logo {
  width: 35px;
  height: 21px;
}

.list li {
  float: left;
}

.navigation_header {
  padding: 2px 0px 0px 44px;
}

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 9px;
  margin: 3px 0px 0px 12px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 9px;
  margin: 3px 0px 0px 12px;
  letter-spacing: 0.05em;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 9px;
  margin: 0px 0px 0px 22px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 9px;
  margin: 3px 0px 0px 22px;
  letter-spacing: 0.05em;
}

.vertical_line {
  width: 1px;
  height: 137px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 39.5px;
}

.container_txt {
  position: absolute;
  width: 187px;
  height: 22px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 11px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 136px 0px 0px 4.5px;
}

.macscreenimage {
  position: absolute;
  width: 150px;
  height: 97px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 108px;
  height: 59px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 45px 0px 0px 57px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 90px;
  height: 15px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 4px;
  line-height: 5px;
  color: #FFFFFF;
  margin: 6px 0px 0px 9px;
}

.rating_txt {
  width: 75px;
  height: 23px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 4px;
  line-height: 5px;
  text-align: center;
  color: #FFFFFF;
  margin: 9px 0px 0px 0px;
}

.human_image_navigation {
  padding: 13px 0px 0px 9px;
  width: 24px;
  height: 28px;
}

.num_reiting {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  color: #FFE925;
}

.NavigationAllItemContOne {
  padding: 150px 0px 0px 72.5px;
}

.navigation_header_two {
  padding: 13px 0px 0px 45px;
}

.header_txt_three {
  width: 140px;
  height: 51px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  margin: 39px 18px 0px 0px;
}

.phone_img {
  width: 72px;
  height: 129px;
}

input {outline:none;}
}

</style>
