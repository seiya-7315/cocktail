Vue.component('tab-love', {
    template:`
    <div>
        <div class="compo_img">
            <slot name="love_img"><img src="./img/love_img1.webp"></img></slot>
        </div>

        <div class="compo_info">
            <div class="info_title mb-5">
                <slot name="love_title"><h1>スクリュードライバー</h1></slot>
                <slot name="love_mean"><h1 class="words">「あなたに心を奪われた」</h1></slot>
            </div>

            <slot name="description"><p>ウォッカにオレンジジュースという飲みやすい組み合わせから「女殺し」の異名をもつ。
               また、油田の労働者がねじ回し（ドライバー）で混ぜて飲んでいたことからこの名前がついたと言われている。<span>相手のガードを緩めるには最適のカクテルですが、くれぐれも悪用はしないように。</span>
            </p></slot>
        </div>
    </div>`
})
Vue.component('tab-onenight', {
    template:`
    <div>
        <div class="compo_img">
            <slot name="oneNight_img"><img src="./img/onenight_img1.jpg"></slot>
        </div>

        <div class="compo_info">
            <div class="info_title mb-5">
                <slot name="oneNight_title"><h1>カンパリソーダ</h1></slot>
                <slot name="oneNight_mean"><h1 class="words">「ドライな関係」</h1></slot>
            </div>

            <p>一夜限りの「ドライな関係」というカクテル言葉をもつカンパリソーダ。
            カンパリのさっぱりとした飲み口はひと夏の思い出を思わせる。
            <span>使い所はくれぐれも慎重に。</span>
            </p>
        </div>
    </div>`
})

Vue.component('tab-friendship', {
    template:`
    <div>
        <div class="compo_img">
            <img src="./img/friendship_img1.jpeg">
        </div>

        <div class="compo_info">
            <div class="info_title mb-5">
                <slot name="friendship_title"><h1>カミカゼ</h1></slot>
                <slot name="friendship_mean"><h1 class="words">「あなたを救う」</h1></slot>
            </div>
            
            <p>
                「カミカゼ」は日本語だが、実はアメリカ人が考案したカクテル。
                日本軍の「神風特攻隊」から名付けられ、ウォッカとホワイトキュラソーのパンチの効いた飲み口が由来となっている。<span>「救う」とあるが、僕が大学生の時は何度もこいつに殺されました。。</span>
            </p>
        </div>
    </div>`
})

new Vue({
    el:'#cocktail',

    data:{
        currentTabs:'love',

        tabs:[
            {id:'love', text:'恋愛初期編'},
            {id:'onenight', text:'ワンナイト編'},
            {id:'friendship', text:'友人に贈りたい編'},
        ]
    },

    computed:{
        currentTabComponent: function(){
            return 'tab-' + this.currentTabs
        }
    }
})