<template style="overflow-x: hidden;">
    <div>
        <div class="backround">
            <div class="all_navigation">
                <ul class="list">
                    <li>
                        <button onclick="window.location.href='/theory'" class="btn_back"> Назад </button>
                    </li>
                    <li>
                        <p class="theory_txt">Химическое действие света</p>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <p class="theory">Отдельные молекулы поглощают световую энергию порциями — квантами hv. В случае видимого и ультрафиолетового излучений эта энергия достаточна для расщепления многих молекул. В этом проявляется химическое действие света.</p>
                    <p class="theory">Любое превращение молекул есть химический процесс. Часто после расщепления молекул светом начинается целая цепочка химических превращений. Выцветание тканей на солнце и образование загара — это примеры химического действия света.</p>
                    <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-3'"/>
                    <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-5'"/>
                    <p class="theory">Важнейшие химические реакции под действием света происходят в зеленых листьях деревьев и траве, в иглах хвои, во многих микроорганизмах. В зеленом листе под действием Солнца осуществляются процессы, необходимые для жизни на Земле. Они дают нам не только пищу, но и кислород для дыхания.</p>
                    <p class="theory">Листья поглощают из воздуха углекислый газ и расщепляют его молекулы на составные части: углерод и кислород.</p>
                    <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-4'"/>
                    <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-6'"/>
                    <p class="theory">Происходит это, как установил русский биолог Климент Аркадьевич Тимирязев, в молекулах хлорофилла под действием красных лучей солнечного спектра. Пристраивая к углеродной цепочке атомы других элементов, извлекаемых корнями из земли, растения строят молекулы белков, жиров и углеводов.</p>
                    <p class="theory">Все это происходит за счет энергии солнечных лучей. Причем здесь особенно важна не только сама энергия, но и та форма, в которой она поступает. Фотосинтез (так называют этот процесс) может протекать только под действием света определенного спектрального состава.</p>
                    <AdsYandex :refresh="true" class="show-on-mobile" :id="'R-A-2303256-10'"/>
                    <AdsYandex :refresh="true" class="show-on-desktop" :id="'R-A-2303256-9'"/>
                    <p class="theory">Механизм фотосинтеза еще не выяснен до конца. Когда это произойдет, для человечества, возможно, наступит новая эра. Белки и другие сложные органические вещества можно будет получать на фабриках под голубым небосводом.</p>
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