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
  font-family: 'Ubuntu', sans-serif;
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
  width: 152px;
  height: 166px;
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

.AllNavigationOneCont {
  padding: 0px 0px 0px 20px;
}

.navigation_header {
  padding: 2px 0px 0px 20px;
}

.NavigationAllItemContOne {
  padding: 185px 0px 0px 76px;
}

.navigation_header_two {
  padding: 13px 0px 0px 35px;
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

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #FFFFFF;
  margin: 5px 0px 0px 18px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #A700FF;
  margin: 5px 0px 0px 18px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #FFFFFF;
  margin: 5px 0px 0px 50px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px; 
  color: #A700FF;
  margin: 5px 0px 0px 50px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 220px;
  height: 32px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 170px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 165px;
  height: 120px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 148px;
  height: 87px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 58px 0px 0px 58px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 119px;
  height: 23px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6px;
  line-height: 8px;
  text-align: center;
  color: #FFFFFF;
  margin: 11px 0px 0px 15px;
}

.rating_txt {
  width: 106px;
  height: 33px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6px;
  line-height: 8px;
  text-align: center;
  color: #FFFFFF;
  margin: 11px 0px 0px 0px;
}

.human_image_navigation {
  padding: 15px 0px 0px 9px;
  width: 34px;
  height: 40px;
}

.num_reiting {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 159px;
  height: 60px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 34px 20px 0px 0px;
}

.phone_img {
  width: 72px;
  height: 129px;
}

input {outline:none;}
}

/*****************************/

@media (min-width: 321px) and (max-width: 340px) {
  * {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 20px;
}

.navigation_header {
  padding: 2px 0px 0px 20px;
}

.NavigationAllItemContOne {
  padding: 185px 0px 0px 82px;
}

.navigation_header_two {
  padding: 13px 0px 0px 45px;
}

.backround {
  background-image: url(static/wallpaperflare340px.png);
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

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  color: #FFFFFF;
  margin: 5px 0px 0px 18px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px; 
  color: #A700FF;
  margin: 5px 0px 0px 18px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px; 
  color: #FFFFFF;
  margin: 5px 0px 0px 50px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px; 
  color: #A700FF;
  margin: 5px 0px 0px 50px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 220px;
  height: 32px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 170px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 190px;
  height: 130px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 148px;
  height: 97px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 58px 0px 0px 58px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 119px;
  height: 25px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6px;
  line-height: 8px;
  text-align: center;
  color: #FFFFFF;
  margin: 12px 0px 0px 15px;
}

.rating_txt {
  width: 106px;
  height: 34px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 6px;
  line-height: 8px;
  text-align: center;
  color: #FFFFFF;
  margin: 13px 0px 0px 0px;
}

.human_image_navigation {
  padding: 17px 0px 0px 9px;
  width: 34px;
  height: 42px;
}

.num_reiting {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 159px;
  height: 60px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 34px 20px 0px 0px;
}

.phone_img {
  width: 72px;
  height: 129px;
}

input {outline:none;}
}

/*****************************/

@media (min-width: 341px) and (max-width: 360px) {
  * {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 20px;
}

.navigation_header {
  padding: 2px 0px 0px 20px;
}

.NavigationAllItemContOne {
  padding: 187px 0px 0px 90px;
}

.navigation_header_two {
  padding: 13px 0px 0px 55px;
}

.backround {
  background-image: url(static/wallpaperflare360px.png);
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

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat' ,sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
  margin: 4px 0px 0px 18px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat' ,sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #A700FF;
  margin: 4px 0px 0px 18px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;  
  color: #FFFFFF;
  margin: 4px 0px 0px 50px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat' ,sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #A700FF;
  margin: 4px 0px 0px 50px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 255px;
  height: 32px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 170px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 210px;
  height: 140px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 165px;
  height: 106px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 76px 0px 0px 53px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 146px;
  height: 27px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  text-align: center;
  color: #FFFFFF;
  margin: 11px 0px 0px 10px;
}

.rating_txt {
  width: 123px;
  height: 39px;
  font-family: 'Outfit' ,sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  color: #FFFFFF;
  margin: 18px 0px 0px 0px;
}

.human_image_navigation {
  padding: 23px 0px 0px 7px;
  width: 35px;
  height: 51px;
}

.num_reiting {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 159px;
  height: 60px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 34px 20px 0px 0px;
}

.phone_img {
  width: 72px;
  height: 129px;
}

input {outline:none;}
}
/*****************************/

@media (min-width: 361px) and (max-width: 380px) {
  * {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 20px;
}

.navigation_header {
  padding: 7px 0px 0px 20px;
}

.NavigationAllItemContOne {
  padding: 190px 0px 0px 98px;
}

.navigation_header_two {
  padding: 10px 0px 0px 52px;
}

.backround {
  background-image: url(static/wallpaperflare380px.png);
  width: 100%;
  height: 200px;
}

.header {
  width: 100%;
  height: 35px;
  background: rgba(100, 100, 100, 0.42);
}

.logo {
  width: 35px;
  height: 21px;
}

.list li {
  float: left;
}

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #FFFFFF;
  margin: 4px 0px 0px 24px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #A700FF;
  margin: 4px 0px 0px 24px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #FFFFFF;
  margin: 4px 0px 0px 39px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #A700FF;
  margin: 4px 0px 0px 39px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 256px;
  height: 32px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 170px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 210px;
  height: 140px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 179px;
  height: 114px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 70px 0px 0px 51px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 158px;
  height: 36px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  color: #FFFFFF;
  margin: 12px 0px 0px 11px;
}

.rating_txt {
  width: 133px;
  height: 41px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  color: #FFFFFF;
  margin: 13px 0px 0px 0px;
}

.human_image_navigation {
  padding: 19px 0px 0px 9px;
  width: 39px;
  height: 49px;
}

.num_reiting {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 179px;
  height: 66px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 45px 20px 0px 0px;
}

.phone_img {
  width: 77px;
  height: 145px;
}

input {outline:none;}
}

/*****************************/

@media (min-width: 381px) and (max-width: 400px) {
* {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 20px;
}

.navigation_header {
  padding: 7px 0px 0px 20px;
}

.NavigationAllItemContOne {
  padding: 190px 0px 0px 98px;
}

.navigation_header_two {
  padding: 10px 0px 0px 62px;
}

.backround {
  background-image: url(static/wallpaperflare400px.png);
  width: 100%;
  height: 200px;
}

.header {
  width: 100%;
  height: 35px;
  background: rgba(100, 100, 100, 0.42);
}

.logo {
  width: 35px;
  height: 21px;
}

.list li {
  float: left;
}

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  margin: 3px 0px 0px 20px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #A700FF;
  margin: 3px 0px 0px 20px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  margin: 3px 0px 0px 47px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #A700FF;
  margin: 3px 0px 0px 47px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 256px;
  height: 32px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 170px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 225px;
  height: 141px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 188px;
  height: 114px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 70px 0px 0px 62px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 158px;
  height: 36px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  color: #FFFFFF;
  margin: 12px 0px 0px 15px;
}

.rating_txt {
  width: 133px;
  height: 41px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  color: #FFFFFF;
  margin: 13px 0px 0px 0px;
}

.human_image_navigation {
  padding: 19px 0px 0px 13px;
  width: 43px;
  height: 49px;
}

.num_reiting {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 179px;
  height: 66px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 45px 20px 0px 0px;
}

.phone_img {
  width: 77px;
  height: 145px;
}

input {outline:none;}
}

/*****************************/

@media (min-width: 401px) and (max-width: 420px) {
* {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 20px;
}

.navigation_header {
  padding: 7px 0px 0px 20px;
}

.NavigationAllItemContOne {
  padding: 190px 0px 0px 98px;
}

.navigation_header_two {
  padding: 10px 0px 0px 72px;
}

.backround {
  background-image: url(static/wallpaperflare420px.png);
  width: 100%;
  height: 200px;
}

.header {
  width: 100%;
  height: 35px;
  background: rgba(100, 100, 100, 0.42);
}

.logo {
  width: 35px;
  height: 21px;
}

.list li {
  float: left;
}

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  margin: 3px 0px 0px 20px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #A700FF;
  margin: 3px 0px 0px 20px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  margin: 3px 0px 0px 67px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #A700FF;
  margin: 3px 0px 0px 67px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 256px;
  height: 32px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 170px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 225px;
  height: 141px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 204px;
  height: 114px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 66px 0px 0px 66px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 178px;
  height: 36px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  color: #FFFFFF;
  margin: 12px 0px 0px 13px;
}

.rating_txt {
  width: 154px;
  height: 41px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  color: #FFFFFF;
  margin: 13px 0px 0px 0px;
}

.human_image_navigation {
  padding: 19px 0px 0px 10px;
  width: 40px;
  height: 49px;
}

.num_reiting {
  font-family: 'Outfit' ,sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 179px;
  height: 66px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 45px 20px 0px 0px;
}

.phone_img {
  width: 77px;
  height: 145px;
}

input {outline:none;}
}

/*****************************/

@media (min-width: 421px) and (max-width: 440px) {
    * {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 57px;
}

.navigation_header {
  padding: 10px 0px 0px 78px;
}

.NavigationAllItemContOne {
  padding: 190px 0px 0px 97px;
}

.navigation_header_two {
  padding: 15px 0px 0px 94px;
}

.backround {
  background-image: url(static/wallpaperflare440px.png);
  width: 100%;
  height: 220px;
}

.header {
  width: 100%;
  height: 45px;
  background: rgba(100, 100, 100, 0.42);
}

.logo {
  width: 45px;
  height: 21px;
}

.list li {
  float: left;
}

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 15px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 15px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 30px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 30px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 269px;
  height: 31px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 172px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 192px;
  height: 117px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 177px;
  height: 93px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 54px 0px 0px 40px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 142px;
  height: 29px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  margin: 9px 0px 0px 18px;
}

.rating_txt {
  width: 120px;
  height: 36px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  margin: 10px 0px 0px 0px;
}

.human_image_navigation {
  padding: 13px 0px 0px 14px;
  width: 44px;
  height: 43px;
}

.num_reiting {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 160px;
  height: 60px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 46px 15px 0px 0px;
}

.phone_img {
  width: 77px;
  height: 145px;
}

input {outline:none;}
}

/*****************************/

@media (min-width: 441px) and (max-width: 460px) {
    * {
  margin: 0px;
  padding: 0px;
}

.square_img {
  height: 12px;
  width: 12px;
}

.AllNavigationOneCont {
  padding: 0px 0px 0px 67px;
}

.navigation_header {
  padding: 10px 0px 0px 88px;
}

.NavigationAllItemContOne {
  padding: 190px 0px 0px 97px;
}

.navigation_header_two {
  padding: 15px 0px 0px 104px;
}

.backround {
  background-image: url(static/wallpaperflare460px.png);
  width: 100%;
  height: 220px;
}

.header {
  width: 100%;
  height: 45px;
  background: rgba(100, 100, 100, 0.42);
}

.logo {
  width: 45px;
  height: 21px;
}

.list li {
  float: left;
}

ul li {
  list-style: none;
}

.header_txt {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 15px;
  transition: 0.5s;
}

.header_txt:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 15px;
}

.header_txt_two {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 30px;
  transition: 0.5s;
}

.header_txt_two:hover {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  margin: 7px 0px 0px 30px;
}

.vertical_line {
  width: 1px;
  height: 176px;
  background: radial-gradient(100.46% 100.46% at 50% -0.46%, #29003C 0%, #A700FF 77.08%, rgba(167, 0, 255, 0) 100%);
  margin: 0px 0px 2px 5.5px;
}

.ContainerNumOne {
  width: 100%;
  height: 1000px;
  background-color: #0D1117;
}

.container_txt {
  position: absolute;
  width: 269px;
  height: 31px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background: linear-gradient(95.16deg, #AB46CF 0.45%, #5DCF7F 71.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 172px 0px 0px 5px;
}

.macscreenimage {
  position: absolute;
  width: 192px;
  height: 117px;
}

.glass_rectangle {
  box-sizing: border-box;
  position: absolute;
  width: 177px;
  height: 93px;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(40px);
  border-radius: 6px;
  margin: 54px 0px 0px 40px;
  opacity: 0.90;
  border: 0px;
}

.glass_rectangle_txt {
  width: 142px;
  height: 29px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  margin: 9px 0px 0px 18px;
}

.rating_txt {
  width: 120px;
  height: 36px;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  margin: 10px 0px 0px 0px;
}

.human_image_navigation {
  padding: 13px 0px 0px 14px;
  width: 44px;
  height: 43px;
}

.num_reiting {
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #FFE925;
}

.header_txt_three {
  width: 160px;
  height: 60px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 46px 15px 0px 0px;
}

.phone_img {
  width: 77px;
  height: 145px;
}

input {outline:none;}
}
</style>
