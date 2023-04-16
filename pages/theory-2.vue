<template style="overflow-x: hidden;">
    <div>
        <div class="backround">
            <div class="all_navigation">
                <ul class="list">
                    <li>
                        <button onclick="window.location.href='/theory'" class="btn_back"> Назад </button>
                    </li>
                    <li>
                        <p class="theory_txt">Внешний и внутренний фотоэффект</p>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <p class="theory"><span style="font-weight: 700; text-decoration: underline;">Внешний и внутренний фтоэффект.</span> Квантовая гипотеза Планка и изучение фотоэлектрического эффекта явилась основанием для создания квантовой теории света.</p>
                    <p class="theory"><span style="font-weight: 700; text-decoration: underline;">Фотоэлектрический эффект -</span> выравнивание электронов из атомов или молекул вещества под действием света(излучения) - впервые был обнаружен в 1887 г. Г.Герцом.</p>
                    <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-3'"/>
                    <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-5'"/>
                    <p class="theory">Правило было сформулировано в результате опытов двух ученых — англичанина Джеймса Прескотта Джоуля и российского физика Эмилия Христиановича Ленца. Поскольку ученые работали независимо друг от друга, новый закон назвали двойным именем.</p>
                    <p class="theory">Применение на практике закона Джоуля-Ленца заключается в том, что тепловым действием электрического тока можно управлять, подбирая проводники с нужным сопротивлением. К примеру, для электрических нагревательных приборов, которые должны выделять максимум тепла, выбирают проводники с высоким сопротивлением.</p>
                    <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-4'"/>
                    <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-6'"/>
                    <p class="theory">Низкое сопротивление, напротив, позволяет проводнику практически не нагреваться при прохождении тока. Поэтому на промышленных предприятиях с усиленными требованиями к пожаробезопасности для прокладки линий электропередач используется медный кабель. Удельное сопротивление меди сечением 1 мм2 равно 0,0175 Ом, в то время как у алюминия оно составляет 0,0271 Ом. Медь практически не нагревается, чем снижает риск возгораний.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

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

.btn_back {
    width: 280px;
    height: 60px;
    background: #5861C7;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 1920px;
    background: #0D1117;
}

.all_navigation {
    padding: 100px 0px 0px 250px;
}

ul li {
    float: left;
    list-style: none;
}

.list {
    height: 60px;
}

.theory_txt {
    width: 1120px;
    height: 60px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    margin: 0px 0px 0px 20px;
}

.theory {
    width: 1423px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #FFFFFF;
    margin: 35px 0px 35px 250px;
}

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

.btn_back {
    width: 93px;
    height: 20px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 320px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 74px;
}

.theory_txt {
    width: 280px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 280px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}

@media (min-width: 321px) and (max-width: 340px) {
* {
    margin: 0px;
    padding: 0px;
}

.btn_back {
    width: 93px;
    height: 20px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 340px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 74px;
}

.theory_txt {
    width: 300px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 300px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}

@media (min-width: 341px) and (max-width: 360px) {
* {
    margin: 0px;
    padding: 0px;
}

.btn_back {
    width: 93px;
    height: 20px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 360px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 74px;
}

.theory_txt {
    width: 320px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 320px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}

@media (min-width: 361px) and (max-width: 380px) {
* {
    margin: 0px;
    padding: 0px;
}

.btn_back {
    width: 93px;
    height: 20px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 380px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 74px;
}

.theory_txt {
    width: 340px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 340px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}

@media (min-width: 381px) and (max-width: 400px) {
* {
    margin: 0px;
    padding: 0px;
}

.btn_back {
    width: 100px;
    height: 25px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 400px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 79px;
}

.theory_txt {
    width: 360px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 360px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}

@media (min-width: 401px) and (max-width: 420px) {
* {
    margin: 0px;
    padding: 0px;
}

.btn_back {
    width: 100px;
    height: 25px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 420px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 79px;
}

.theory_txt {
    width: 380px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 380px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}

@media (min-width: 421px) and (max-width: 440px) {
* {
    margin: 0px;
    padding: 0px;
}

.btn_back {
    width: 112px;
    height: 30px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 440px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 86px;
}

.theory_txt {
    width: 400px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 400px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}

@media (min-width: 441px) and (max-width: 460px) {
* {
    margin: 0px;
    padding: 0px;
}

.btn_back {
    width: 112px;
    height: 30px;
    background: #5861C7;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
}

.backround {
    height: 2941px;
    width: 460px;
    background: #0D1117;
}

.all_navigation {
    padding: 20px 0px 0px 20px;
}

ul li {
    float: none;
    list-style: none;
}

.list {
    height: 86px;
}

.theory_txt {
    width: 420px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0px 0px 0px;
}

.theory {
    width: 420px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 10px 0px 10px 20px;
}   
}
</style>