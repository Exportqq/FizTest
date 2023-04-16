<template style="overflow-x: hidden;">
    <div>
        <div class="backround">
            <div class="all_navigation">
                <ul class="list">
                    <li>
                        <button onclick="window.location.href='/theory'" class="btn_back"> Назад </button>
                    </li>
                    <li>
                        <p class="theory_txt">Квантовые постулаты Бора. Модель атома водорода по Бору</p>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <p class="theory">Выход из крайне затруднительного положения в теории атома был найден в 1913 г. датским физиком Нильсом Бором на пути дальнейшего развития квантовых представлений о процессах в природе.</p>
                    <p class="theory">Эйнштейн оценивал проделанную Бором работу «как высшую музыкальность в области мысли», всегда его поражавшую. Основываясь на разрозненных опытных фактах, Бор благодаря гениальной интуиции правильно предугадал путь развития теории атома.</p>
                    <p class="theory"><span style="font-weight: 700; color: #5861C7">Постулаты Бора.</span> Последовательной теории атома Бор, однако, не разработал. Он в виде постулатов сформулировал основные положения новой теории. Причем и законы классической физики не отвергались им безоговорочно. Новые постулаты, скорее, налагали лишь некоторые ограничения на рассматриваемые классической физикой движения.</p>
                    <p class="theory">Успех теории Бора был тем не менее поразительным, и всем ученым стало ясно, что Бор нашел правильный путь развития теории. Этот путь привел впоследствии к созданию стройной теории движения микрочастиц — квантовой механики.</p>
                    <p class="theory"><span style="font-weight: 700; color: #5861C7">Первый постулат</span> Бора гласит: существуют особые, станционарные состояния атома, находясь в которых атом не излучает энергию, при этом электроны в атоме движутся с укорением. Каждому стационарному состоянию соответствует определенная энергия Еn.</p>
                    <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-3'"/>
                    <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-5'"/>
                    <p class="theory">Согласно <span style="font-weight: 700; color: #5861C7">второму постулату</span> Бора излучение света происходит при переходе атома из стационарного состояния с большей энергией Ek в стационарное состояние с меньшей энергией Еn. Энергия излученного фотона равна разности энергий стационарных состояний</p>
                    <p class="theory">При поглощении света атом переходит из стационарного состояния с меньшей энергией в стационарное состояние с большей энергией.Второй постулат, также как и первый, противоречит электродинамике Максвелла, так как согласно этому постулату частота излучения света свидетельствует не об особенностях движения электрона, а лишь об изменении энергии атома. Свои постулаты Бор применил для построения теории простейшей атомной системы — атома водорода. Основная задача состояла в нахождении частот электромагнитных волн, излучаемых водородом. Эти частоты можно найти на основе второго постулата и правила определения стационарных значений энергии атома. Это правило (так называемое правило квантования) Бору опять-таки пришлось постулировать.`Модель атома водорода по Бору. Используя законы механики Ньютона и правило квантования, на основе которого определяются возможные стационарные состояния атома, Бор смог вычислить радиусы орбит электрона и энергии стационарных состояний атома. Минимальный радиус орбиты определяет размеры атома. На рисунке 12.4 значения энергий стационарных состояний (в электрон- вольтах1) отложены на вертикальной оси.</p>
                    <p class="theory"><span style="font-weight: 700; color: #5861C7">Поглощение света.</span> Поглощение света — процесс, обратный излучению. Атом, поглощая свет, переходит из низших энергетических состояний в высшие. При этом он поглощает излучение той же самой частоты, которую излучает, переходя из высших энергетических состояний в низшие.</p>
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