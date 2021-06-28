Pace.on('done', function(){
　$('body').fadeIn();
});


//変数定義
var navigationOpenFlag = false;
var navButtonFlag = true;
var focusFlag = false;
 
//ハンバーガーメニュー
    $(function(){
 
      $(document).on('click','.el_humburger',function(){
        if(navButtonFlag){
          spNavInOut.switch();
          //一時的にボタンを押せなくする
          setTimeout(function(){
            navButtonFlag = true;
          },200);
          navButtonFlag = false;
        }
      });
      $(document).on('click touchend', function(event) {
        if (!$(event.target).closest('.bl_header,.el_humburger').length && $('body').hasClass('js_humburgerOpen') && focusFlag) {
          focusFlag = false;
          //scrollBlocker(false);
          spNavInOut.switch();
        }
      });
    });
 
//ナビ開く処理
function spNavIn(){
  $('body').removeClass('js_humburgerClose');
  $('body').addClass('js_humburgerOpen');
  setTimeout(function(){
    focusFlag = true;
  },200);
  setTimeout(function(){
    navigationOpenFlag = true;
  },200);
}
 
//ナビ閉じる処理
function spNavOut(){
  $('body').removeClass('js_humburgerOpen');
  $('body').addClass('js_humburgerClose');
  setTimeout(function(){
    $(".uq_spNavi").removeClass("js_appear");
    focusFlag = false;
  },200);
  navigationOpenFlag = false;
}
 
//ナビ開閉コントロール
var spNavInOut = {
  switch:function(){
    if($('body.spNavFreez').length){
      return false;
    }
    if($('body').hasClass('js_humburgerOpen')){
     spNavOut();
    } else {
    spNavIn();
    }
}
};

$(function () {
    $('.animation').textillate({
    // minDisplayTime: 3000,       //テキストが置き換えられるまでの時間
    initialDelay: 200,         //遅延時間
      autoStart: true,            //アニメーション自動スタート
    //   フェードイン
    in: {
        effect: 'rollIn',         //アニメーション効果、エフェクトの種類
        delayScale: 3,          //遅延時間の指定
        delay: 100,                //文字ごとの遅延時間
        sync: false,              //『true』全ての文字に同時に適応される
        shuffle: true            //ランダム
        }
    });

})

$(function () {
    $('.animation1').textillate({
    //   loop: true,                 //ループ
      initialDelay: 1000,         //遅延時間
      autoStart: true,            //アニメーション自動スタート
    //   フェードイン
    in: {
        effect: 'flipInX',         //アニメーション効果、エフェクトの種類
        delayScale: 1.5,          //遅延時間の指定
        delay: 100,                //文字ごとの遅延時間
        sync: false,              //『true』全ての文字に同時に適応される
        shuffle: true           //ランダム
    }
    // //   フェードアウト
    //   out:{
    //     effect: 'fadeOut',  
    //     delayScale: 1.5,  
    //     delay: 50,  
    //     sync: false,  
    //     shuffle: false
    //   }
    });
})

$(function () {
    $('.animation2').textillate({
      initialDelay: 2000,         //遅延時間
      autoStart: true,            //アニメーション自動スタート
    //   フェードイン
    in: {
        effect: 'flipInX',         //アニメーション効果、エフェクトの種類
        delayScale: 1.5,          //遅延時間の指定
        delay: 100,                //文字ごとの遅延時間
        sync: false,              //『true』全ての文字に同時に適応される
        shuffle: true            //ランダム
        }
    });
})

$(function () {
    $('.nav-list a').textillate({
      initialDelay: 3000,         //遅延時間
      autoStart: true,            //アニメーション自動スタート
    //   フェードイン
    in: {
        effect: 'flash',         //アニメーション効果、エフェクトの種類
        delayScale: 1.5,          //遅延時間の指定
        delay: 100,                //文字ごとの遅延時間
        sync: false,              //『true』全ての文字に同時に適応される
        shuffle: true            //ランダム
        }
    });
})

ScrollReveal().reveal('.scl', { 
    duration: 3500, // アニメーションの完了にかかる時間
    viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
});
