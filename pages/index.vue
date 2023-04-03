<template>
  <div>
    <div class="backround">
      <div class="header">
        <div class="navigation_header">
          <ul class="list">
            <li>
              <img src="logo.png">
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
            <li class="searcher_naviagtion">
              <div class="searcher">

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="yandex_rtb_R-A-2282880-1">

    </div>
    <div class="ContainerNumOne">
      <ul class="list">
        <li>
          <div class="AllNavigationOneCont">
            <div class="navigation_vertical_line">
              <div div data-aos="flip-down" class="vertical_line"></div>
            </div>
            <img data-aos="zoom-in" src="square.png">
          </div>
        </li>
        <li>
          <div>
            <ul class="list">
              <li>
                <p class="container_txt">Проверенный сайт. Только актульная информация</p>
              </li>
              <li class="NavigationAllItemContOne">
                <img class="macscreenimage" src="macimg.png">
                <div class="glass_rectangle">
                  <p class="glass_rectangle_txt">Наш сайт уже был опробирован на учащихся колледжа <span style="color: #E95555;">КМПО РАНХиГС</span> и успешно справился со своей задачей. </p>
                  <ul class="lsit">
                    <li>
                      <img class="human_image_navigation" src="humans.png">
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
  head() {
    return {
      script: [
        {
          src: 'https://yandex.ru/ads/system/context.js'
        }
      ],
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    AOS.init({ });
    (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
          Ya.Context.AdvManager.render({
            blockId: "R-A-2282880-1",
            renderTo: "yandex_rtb_R-A-2282880-1",
            async: true
          });
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
      })(window, document, "yandexContextAsyncCallbacks");
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
  padding: 12px 0px 0px 268px;
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
  padding: 23px 0px 0px 50px;
}

.searcher_naviagtion {
  padding: 13px 0px 0px 229px;
}

.header_txt_two {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  padding: 23px 0px 0px 229px;
}

.searcher {
  width: 235px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 13px;
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
</style>
