<template>
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
                <button onclick="window.location.href='/laws';" class="header_txt_two">Законы</button>
              </li>
              <li>
                <button onclick="window.location.href='/theory';" class="header_txt">Теория</button>
              </li>
              <li>
                <button class="header_txt">Лабораторные работы</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img class="nolab_img" src="bro.svg">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InspirePage'
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
  
  .logo {
    width: 116.5px;
    height: 77px;
  }

  .nolab_img {
    width: 1000px;
    height: 1110px;
    margin: 40px 0px 0px 460px;
  }

  .backround {
    height: 2941px;
    width: 1920px;
    background: #0D1117;
}
  
  /********************************************/
  
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 0px;
  }

  .backround {
    height: 1000px;
    width: 320px;
    background: #0D1117;
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 10px;
  }

  .backround {
    height: 1000px;
    width: 340px;
    background: #0D1117;
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 20px;
  }

  .backround {
    height: 1000px;
    width: 360px;
    background: #0D1117;
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 30px;
  }

  .backround {
    height: 1000px;
    width: 380px;
    background: #0D1117;
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 40px;
  }

  .backround {
    height: 1000px;
    width: 400px;
    background: #0D1117;
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 50px;
  }

  .backround {
    height: 1000px;
    width: 420px;
    background: #0D1117;
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 60px;
  }

  .backround {
    height: 1000px;
    width: 440px;
    background: #0D1117;
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

  .nolab_img {
    width: 320px;
    height: 385px;
    margin: 10px 0px 0px 70px;
  }

  .backround {
    height: 1000px;
    width: 460px;
    background: #0D1117;
}
}
</style>
  