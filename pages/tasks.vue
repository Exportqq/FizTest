<template style="overflow-x: hidden;">
  <div>
    <div class="backround">
      <div class="header">
        <div class="navigation_header">
          <ul class="list">
            <li>
              <button onclick="window.location.href='/index'">
                  <img class="logo" src="/logo.png">
              </button>
            </li>
            <li>
              <button onclick="window.location.href='/laws'" class="header_txt_two">Законы</button>
            </li>
            <li>
              <button onclick="window.location.href='/theory'" class="header_txt">Теория</button>
            </li>
            <li>
              <button style="color: #A700FF" class="header_txt">Задания</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p class="container_txt">Задачи</p>
        <div class="naviagtion_ads">
          <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-7'"/>
          <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-8'"/>
        </div>
        <div class="navigation_all_container">
            <div class="searcher_rectangle">
                <ul class="list">
                    <li>
                        <p class="searcher_txt">Найди задачу !</p>
                        <div class="search_lime_rectangle">
                            <input class="search" type="search" v-model="search" placeholder="Название задачи"/>
                        </div>
                    </li>
                    <li>
                        <img src="/mgnfr.png" class="search_logo_img">
                    </li>
                </ul>
            </div>
          </div>
          <div class="navigation_all_container">
            <ul class="list">
                <li class="serch_li" v-for="item in serchHandler" :key="item.number">
                  <a v-bind:href="item.page">
                    <button class="task_btn">
                      <p class="task_name">{{ item.TaskName }}</p>
                      <p class="task_target"><span style="color: #FFF500;">Цель работы:</span> {{ item.TaskTarget }}</p>
                    </button>
                  </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          data: [
          {
              number: 1,
              TaskName: "Волновые и квантовые свойства света (вариант 3)",
              TaskTarget: "Проверка изученного материала",
              page: "/task-1"
          },
          {
              number: 2,
              TaskName: "Волновые и квантовые свойства света (вариант 4)",
              TaskTarget: "Проверка изученного материала",
              page: "/task-2"
          },
          {
              number: 3,
              TaskName: "Волновые и квантовые свойства света (вариант 13)",
              TaskTarget: "Проверка изученного материала",
              page: "/task-3"
          },
          ],
          search: "",
      }
  },
  computed: {
    serchHandler() {
      return this.data.filter(elem => {
        return elem.TaskName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: {
    AdsYandex: () => import('@/components/AdsYandex'),
  },
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  
  .header {
    width: 1920px;
    height: 100px;
    background: rgba(100, 100, 100, 0.42);
  }
  
  .list li {
    float: left;
  }

  .backround {
    background-color: #0D1117;
    width: 1920px;
    height: 2000px;
  }
  
  .navigation_header {
    padding: 12px 0px 0px 500px;
  }
  
  ul li {
    list-style: none;
  }
  
  .header_txt {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    margin: 23px 0px 0px 50px;
    transition: 0.5s;
  }
  
  .header_txt:hover {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #A700FF;
    margin: 23px 0px 0px 50px;
  }
  
  .header_txt_two {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    margin: 23px 0px 0px 229px;
    transition: 0.5s;
  }
  
  .header_txt_two:hover {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #A700FF;
    margin: 23px 0px 0px 229px;
  }
  
  .logo {
    width: 116.5px;
    height: 77px;
  }

  .searcher_rectangle {
    width: 1300px;
    height: 322px;
    background: #5861C7;
    border-radius: 35px;
  }

  .searcher_txt {
    width: 458px;
    height: 74px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 74px;
    color: #FFFFFF;
    margin: 50px 0px 0px 283px;
  }

  input {
    outline: none;
  }

  .search_lime_rectangle {
    width: 878px;
    height: 107px;
    background: #FFFFFF;
    border-radius: 19px;
    margin: 41px 0px 0px 56px;
  }

  .search {
    width: 788px;
    height: 74px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 74px;
    color:rgba(175, 175, 175, 0.58);
    margin: 15px 0px 0px 45px;
  }

  .search_logo_img {
    width: 240px;
    height: 222px;
    margin: 50px 0px 0px 70px;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  .navigation_all_container {
    padding: 50px 0px 0px 310px;
  }

  .container_txt {
    width: 251px;
    height: 78px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: #FFFFFF;
    margin: 110px 0px 0px 835px;
  }

  .navigation_ads {
    margin: 50px 0px 0px 0px;
  }

  .serch_li {
    margin: 0px 0px 35px 0px;
  }

  .task_btn {
    width: 1300px;
    height: 375px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 59px;
    border: 2px solid #5861C7;
  }

  .task_name {
    width: 1066px;
    height: 165px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #FFFFFF;
    margin: 45px 0px 0px 117px;
  }

  .task_target {
    width: 1066px;
    height: 98px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 49px;
    color: #FFFFFF;
    margin: 22px 0px 0px 117px;
  }


  /********************************************/

@media (min-width: 761px) {
  .show-on-mobile { display: none !important; }
}

@media (max-width: 760px) {
  .show-on-desktop { display: none !important; }
}

@media (min-width: 300px) and (max-width: 320px) {
* {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 2px 0px 0px 20px;
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

  .backround {
    background: #0D1117;
    width: 320px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 280px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 92px;
    height: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin: 13px 0px 0px 68px;
  }

  .search_lime_rectangle {
    width: 186px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0px 0px 15px;
  }

  .search_logo_img {
    width: 52px;
    height: 48px;
    margin: 17px 0px 0px 12px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 156px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 15px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 280px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  .laws_txt {
    width: 171px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 9px 0px 0px 10px;
  }
  
  .btn_laws_on {
    width: 84px;
    height: 15px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    color: #FFFFFF;
    margin: 9px 0px 0px 5px;
  }

  .container_txt {
    width: 134px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 93px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 280px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 254px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
    margin: 13px 0px 0px 13px;
  }

  .task_target {
    width: 254px;
    height: 24px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
    margin: 5px 0px 0px 13px;
  }
}
  /*****************************/
  
@media (min-width: 321px) and (max-width: 340px) {
    * {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 2px 0px 0px 20px;
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

  .backround {
    background: #0D1117;
    width: 340px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 300px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 92px;
    height: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin: 13px 0px 0px 78px;
  }

  .search_lime_rectangle {
    width: 186px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0px 0px 25px;
  }

  .search_logo_img {
    width: 52px;
    height: 48px;
    margin: 17px 0px 0px 12px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 156px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 15px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 300px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  .laws_txt {
    width: 191px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 9px 0px 0px 10px;
  }
  
  .btn_laws_on {
    width: 84px;
    height: 15px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat'k, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    color: #FFFFFF;
    margin: 9px 0px 0px 5px;
  }

  .container_txt {
    width: 134px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 103px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 300px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 274px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    margin: 13px 0px 0px 13px;
  }

  .task_target {
    width: 274px;
    height: 26px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #FFFFFF;
    margin: 3px 0px 0px 13px;
  }
}
  /*****************************/
  
  @media (min-width: 341px) and (max-width: 360px) {
    * {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 2px 0px 0px 20px;
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

  .backround {
    background: #0D1117;
    width: 360px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 320px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 99px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 13px 0px 0px 83px;
  }

  .search_lime_rectangle {
    width: 203px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 9px 0px 0px 25px;
  }

  .search_logo_img {
    width: 52px;
    height: 48px;
    margin: 17px 0px 0px 15px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 171px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 16px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 320px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  .laws_txt {
    width: 191px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 9px 0px 0px 20px;
  }
  
  .btn_laws_on {
    width: 84px;
    height: 15px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    color: #FFFFFF;
    margin: 9px 0px 0px 5px;
  }

  .container_txt {
    width: 155px;
    height: 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    text-align: center;
    margin: 20px 0px 0px 102px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 320px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 294px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    margin: 13px 0px 0px 13px;
  }

  .task_target {
    width: 294px;
    height: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #FFFFFF;
    margin: 3px 0px 0px 13px;
  }
}
  /*****************************/
  
  @media (min-width: 361px) and (max-width: 380px) {
    * {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 7px 0px 0px 20px;
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

  .backround {
    background: #0D1117;
    width: 380px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 340px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 107px;
    height: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 13px 0px 0px 85px;
  }

  .search_lime_rectangle {
    width: 213px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 8px 0px 0px 25px;
  }

  .search_logo_img {
    width: 61px;
    height: 53px;
    margin: 14px 0px 0px 16px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 183px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 15px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 340px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .laws_txt {
    width: 201px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 9px 0px 0px 25px;
  }
  
  .btn_laws_on {
    width: 84px;
    height: 15px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    color: #FFFFFF;
    margin: 9px 0px 0px 5px;
  }

  .container_txt {
    width: 155px;
    height: 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 112px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 340px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 314px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 11px 0px 0px 13px;
  }

  .task_target {
    width: 314px;
    height: 30px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 3px 0px 0px 13px;
  }
}
  /*****************************/
  
  @media (min-width: 381px) and (max-width: 400px) {
  * {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 7px 0px 0px 20px;
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

  .backround {
    background: #0D1117;
    width: 400px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 360px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 107px;
    height: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 13px 0px 0px 95px;
  }

  .search_lime_rectangle {
    width: 233px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 8px 0px 0px 25px;
  }

  .search_logo_img {
    width: 62px;
    height: 58px;
    margin: 12px 0px 0px 15px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 197px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 18px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 360px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .laws_txt {
    width: 201px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 9px 0px 0px 35px;
  }
  
  .btn_laws_on {
    width: 84px;
    height: 15px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    color: #FFFFFF;
    margin: 9px 0px 0px 5px;
  }

  .container_txt {
    width: 155px;
    height: 17px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 122px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 360px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 334px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 11px 0px 0px 13px;
  }

  .task_target {
    width: 334px;
    height: 30px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 3px 0px 0px 13px;
  }
}
  /*****************************/
  
 @media (min-width: 401px) and (max-width: 420px) {
  * {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 7px 0px 0px 20px;
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

  .backround {
    background: #0D1117;
    width: 420px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 380px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 114px;
    height: 17px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 13px 0px 0px 99px;
  }

  .search_lime_rectangle {
    width: 248px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 7px 0px 0px 25px;
  }

  .search_logo_img {
    width: 62px;
    height: 58px;
    margin: 12px 0px 0px 20px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 210px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 19px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 380px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .laws_txt {
    width: 225px;
    height: 16px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 8px 0px 0px 35px;
  }
  
  .btn_laws_on {
    width: 100px;
    height: 19px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #FFFFFF;
    margin: 7px 0px 0px 5px;
  }

  .container_txt {
    width: 155px;
    height: 17px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 133px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 380px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 354px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 11px 0px 0px 13px;
  }

  .task_target {
    width: 354px;
    height: 30px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 3px 0px 0px 13px;
  }
}
  /*****************************/
  
  @media (min-width: 421px) and (max-width: 440px) {
    * {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 10px 0px 0px 20px;
  }
  
  .header {
    width: 100%;
    height: 45px;
    background: rgba(100, 100, 100, 0.42);
  }
  
  .logo {
    width: 45px;
    height: 25px;
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
    margin: 5px 0px 0px 20px;
    transition: 0.5s;
  }
  
  .header_txt:hover {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 5px 0px 0px 20px;
    color: #A700FF;
  }
  
  .header_txt_two {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 5px 0px 0px 77px;
    transition: 0.5s;
  }
  
  .header_txt_two:hover {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #A700FF;
    margin: 5px 0px 0px 77px;
  }

  .backround {
    background: #0D1117;
    width: 440px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 400px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 122px;
    height: 18px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 13px 0px 0px 106px;
  }

  .search_lime_rectangle {
    width: 268px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 6px 0px 0px 25px;
  }

  .search_logo_img {
    width: 62px;
    height: 58px;
    margin: 12px 0px 0px 20px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 226px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 21px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 400px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .laws_txt {
    width: 225px;
    height: 16px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 8px 0px 0px 35px;
  }
  
  .btn_laws_on {
    width: 100px;
    height: 19px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #FFFFFF;
    margin: 7px 0px 0px 5px;
  }

  .container_txt {
    width: 167px;
    height: 18px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 138px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 400px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 354px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 10px 0px 0px 23px;
  }

  .task_target {
    width: 374px;
    height: 32px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 3px 0px 0px 13px;
  }
}
  /*****************************/
  
  @media (min-width: 441px) and (max-width: 460px) {
    * {
    margin: 0px;
    padding: 0px;
  }
  
  .navigation_header {
    padding: 10px 0px 0px 20px;
  }
  
  .header {
    width: 100%;
    height: 45px;
    background: rgba(100, 100, 100, 0.42);
  }
  
  .logo {
    width: 45px;
    height: 25px;
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
    margin: 5px 0px 0px 20px;
    transition: 0.5s;
  }
  
  .header_txt:hover {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 5px 0px 0px 20px;
    color: #A700FF;
  }
  
  .header_txt_two {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 5px 0px 0px 97px;
    transition: 0.5s;
  }
  
  .header_txt_two:hover {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #A700FF;
    margin: 5px 0px 0px 97px;
  }

  .backround {
    background: #0D1117;
    width: 460px;
    height: 3000px;
  }

  .searcher_rectangle {
    width: 420px;
    height: 81px;
    background: #5861C7;
    border-radius: 6px;
  }

  .searcher_txt {
    width: 122px;
    height: 18px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin: 13px 0px 0px 116px;
  }

  .search_lime_rectangle {
    width: 268px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 6px 0px 0px 35px;
  }

  .search_logo_img {
    width: 62px;
    height: 58px;
    margin: 12px 0px 0px 20px;
  }

  .navigation_all_container {
    padding: 12px 0px 0px 20px;
  }

  .search {
    width: 210px;
    height: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: rgba(175, 175, 175, 0.58);
    margin: 8px 0px 0px 21px;
  }

  input {
    outline: none;
  }

  input::placeholder {
    color: rgba(175, 175, 175, 0.58);
  }

  .serch_li {
    margin: 0px 0px 10px 0px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .laws_rectanbgle {
    width: 420px;
    height: 35px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 1px solid #323A99;
    backdrop-filter: blur(40px);
    border-radius: 5px;
  }

  .laws_txt {
    width: 249px;
    height: 16px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 8px 0px 0px 35px;
  }
  
  .btn_laws_on {
    width: 96px;
    height: 19px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #FFFFFF;
    margin: 7px 0px 0px 5px;
  }

  .container_txt {
    width: 167px;
    height: 18px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 147px;
  }

  .navigation_ads {
    margin: 12px 0px 0px 0px;
  }

  .task_btn {
    width: 420px;
    height: 98px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 5px;
    border: 1px solid #5861C7;
  }

  .task_name {
    width: 354px;
    height: 43px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 10px 0px 0px 33px;
  }

  .task_target {
    width: 372px;
    height: 32px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 3px 0px 0px 24px;
  }
}

</style>
