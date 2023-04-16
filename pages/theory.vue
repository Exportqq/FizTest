<template>
    <div>
      <div class="backround">
        <div>      
            <div class="header">
                <div class="navigation_header">
                    <ul class="list">
                    <li>
                        <button onclick="window.location.href='/index'">
                            <img class="logo" src="/logo.png">
                        </button>
                    </li>
                    <li>
                        <button onclick="window.location.href='/laws';" class="header_txt_two">Законы</button>
                    </li>
                    <li>
                        <button style="color: #A700FF;" class="header_txt">Теория</button>
                    </li>
                    <li>
                        <button onclick="window.location.href='/laboratory';" class="header_txt">Лабораторные работы</button>
                    </li>
                    </ul>
                </div>
                </div>
                <div>
                    <p class="container_txt">Теоритический материал</p>
                    <div>
                      <AdsYandex class="show-on-mobile" :id="'R-A-2303256-1'"/>
                      <AdsYandex class="show-on-desktop" :id="'R-A-2303256-2'"/>
                    </div>
                    <div class="navigation_all_container">
                        <div class="searcher_rectangle">
                            <ul class="list">
                                <li>
                                    <p class="searcher_txt">Найди теорию !</p>
                                    <div class="search_lime_rectangle">
                                        <input class="search" type="search" v-model="search" placeholder="Название теории"/>
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
                            <li class="serch_li" v-for="item in serchHandler" :key="item.id">
                                <a v-bind:href="item.page">
                                    <div class="theory_rectangle">
                                        <button class="theory_txt">{{ item.TheoryName }}</button> <!--для центрирования-->
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
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
                TheoryName: "Применение и практическое значение закона Джоуля – Ленца",
                page: "/theory-1"
            },
            {
                number: 2,
                TheoryName: "Как устроена античастица, история открытия античастиц",
                page: "/theor-2"
            },
            {
                number: 3,
                TheoryName: "Из чего состоит тёмная материя, поиски Антона Баушева",
                page: "/theory-3"
            },
            ],
            search: "",
        }
    },
    computed: {
    serchHandler() {
      return this.data.filter(elem => {
        return elem.TheoryName.toLowerCase().includes(this.search.toLowerCase())
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

.backround {
    background: #0D1117;
    width: 1920px;
    height: 3000px;
}

.container_txt {
    width: 672px;
    height: 59px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: #FFFFFF;
    margin: 110px 0px 0px 624px;
}

.searcher_rectangle {
    width: 1300px;
    height: 322px;
    background: #5861C7;
    border-radius: 35px;
}

.searcher_txt {
    width: 486px;
    height: 74px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 74px;
    color: #FFFFFF;
    margin: 50px 0px 0px 252px;
}

.search_lime_rectangle {
    width: 878px;
    height: 107px;
    background: #FFFFFF;
    border-radius: 19px;
    margin: 40px 0px 0px 56px;
}

.search_logo_img {
    width: 240px;
    height: 222px;
    margin: 50px 0px 0px 70px;
}

.navigation_all_container {
    padding: 50px 0px 0px 310px;
}

.search {
    width: 788px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 74px;
    color: rgba(175, 175, 175, 0.99);
    margin: 14px 0px 0px 45px;
}

input {
    outline: none;
}

input::placeholder {
    color: rgba(175, 175, 175, 0.58);
}

.theory_rectangle {
    width: 630px;
    height: 375px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 2px solid #07FB95;
    border-radius: 35px;
    transition: 0.6s;
}

.theory_rectangle:hover {
    width: 630px;
    height: 375px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 2px solid #5861C7;
    border-radius: 35px;
}

.theory_txt {
    width: 514px;
    height: 233px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #FFFFFF;
    margin: 71px 0px 0px 58px;
}

.serch_li {
    margin: 0px 40px 40px 0px;
}

a {
    text-decoration: none;
}

button {
    border: none;
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

  .container_txt {
    width: 168px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 20px 0px 0px 76px;
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
    margin: 13px 0px 0px 62px;
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

  .theory_rectangle {
    width: 280px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 280px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 220px;
    height: 72px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 15px 0px 0px 30px;
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

  .container_txt {
    width: 168px;
    height: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    margin: 20px 0px 0px 86px;
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
    margin: 13px 0px 0px 72px;
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

  .theory_rectangle {
    width: 300px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 300px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 240px;
    height: 72px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 15px 0px 0px 30px;
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

  .container_txt {
    width: 196px;
    height: 17px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 20px 0px 0px 82px;
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
    margin: 13px 0px 0px 77px;
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

  .theory_rectangle {
    width: 320px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 320px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 260px;
    height: 72px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 15px 0px 0px 30px;
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

  .container_txt {
    width: 196px;
    height: 17px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 20px 0px 0px 92px;
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
    margin: 13px 0px 0px 78px;
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

  .theory_rectangle {
    width: 340px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 340px;
    height: 102px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 260px;
    height: 72px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 15px 0px 0px 40px;
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

  .container_txt {
    width: 210px;
    height: 18px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 20px 0px 0px 95px;
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
    margin: 13px 0px 0px 88px;
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

  .theory_rectangle {
    width: 360px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 360px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 310px;
    height: 55px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 15px 0px 0px 25px;
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

  .container_txt {
    width: 210px;
    height: 18px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 20px 0px 0px 105px;
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
    margin: 13px 0px 0px 92px;
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

  .theory_rectangle {
    width: 380px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 380px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 310px;
    height: 55px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 15px 0px 0px 35px;
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

  .container_txt {
    width: 224px;
    height: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin: 20px 0px 0px 108px;
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
    margin: 13px 0px 0px 98px;
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

  .theory_rectangle {
    width: 399px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 399px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 349px;
    height: 55px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    margin: 15px 0px 0px 25px;
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

  .container_txt {
    width: 238px;
    height: 21px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 20px 0px 0px 111px;
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
    margin: 13px 0px 0px 108px;
  }

  .search_lime_rectangle {
    width: 268px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 7px 0px 0px 35px;
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

  .theory_rectangle {
    width: 420px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #07FB95;
    border-radius: 11px;
    transition: 0.6s;
  }

  .theory_rectangle:hover {
    width: 420px;
    height: 85px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(40px);
    border: 1px solid #5861C7;
    border-radius: 11px;
  }

  .theory_txt {
    width: 349px;
    height: 55px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin: 15px 0px 0px 35px;
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
}
</style>
  