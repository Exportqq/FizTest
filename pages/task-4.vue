<template style="overflow-x: hidden;">
    <div>
        <div class="backround">
            <div class="all_navigation">
                <ul class="list_named">
                    <li>
                        <button onclick="window.location.href='/tasks'" class="btn_back"> Назад </button>
                    </li>
                    <li>
                        <p class="theory_txt">Задачи по квантовой физике</p>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <p class="theory">1. Определите задерживающую разность потенциалов для фотоэлектронов, вырываемых с поверхности калия (работа выхода А = 2эВ) при его освещении светом с частотой 9·10¹⁴ Гц.</p>
                </div>
                <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-3'"/>
                <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-5'"/>
                <div>
                    <p class="theory">2. Красная граница фотоэффекта для лития определяется длиной волны λ₀ = 540 нм. Максимальная скорость вылета электронов Vᵐᵃˣ = 10⁶ м/с. Определите частоту света, которым освещается катод.</p>
                </div>
                <div>
                    <p class="theory">3. Для полной задержки фотоэлектронов, выбитых излучением с длиной волны 210 нм из некоторого металла, требуется напряжение 2,7 В. Определите работу выхода электронов для этого вещества.</p>
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
    height: 100vh;
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

.list_special {
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

.theoryAnBack {
    width: 1423px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #FFFFFF;
    margin: 35px 0px 0px 250px;
    padding: 0px 0px 80px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #FFFFFF;
    margin: 0px 0px 0px 100px;
}

.navigation {
    padding: 0px 0px 0px 250px;
}

.list_named {
    height: 74px;
}

.list_special_two {
    height: 74px;
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
    height: 100vh;
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

.theoryAnBack {
    width: 280px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 74px;
}

.list_special_two {
    height: 100px;
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
    height: 100vh;
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

.theoryAnBack {
    width: 300px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 74px;
}

.list_special_two {
    height: 100px;
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
    height: 100vh;
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

.theoryAnBack {
    width: 320px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 74px;
}

.list_special_two {
    height: 100px;
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
    height: 100vh;
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

.theoryAnBack {
    width: 340px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 74px;
}

.list_special_two {
    height: 100px;
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
    height: 100vh;
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

.theoryAnBack {
    width: 360px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 85px;
}

.list_special_two {
    height: 100px;
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
    height: 100vh;
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

.theoryAnBack {
    width: 380px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 85px;
}

.list_special_two {
    height: 100px;
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
    height: 100vh;
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
    width: 390px;
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

.theoryAnBack {
    width: 400px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 85px;
}

.list_special_two {
    height: 100px;
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
    height: 100vh;
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

.theoryAnBack {
    width: 420px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 10px 0px 0px 20px;
    padding: 0px 0px 30px 0px;
}

.task_option {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}

.task_option_two {
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin: 0px 0px 0px 0px;
}

.navigation {
    padding: 0px 0px 0px 20px;
}

.list_special {
    height: auto;
}

.list {
    height: 52px;
}

.list_named {
    height: 85px;
}

.list_special_two {
    height: 100px;
}
}
</style>