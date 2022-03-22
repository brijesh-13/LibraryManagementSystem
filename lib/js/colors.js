const MAIN_COLOR = '#4267b2';
const SUB_COLOR = '#29487d';
const FONT_COLOR = 'white';
const BTN_COLOR = '#365899'
const TITLE_COLOR = BTN_COLOR;

const MCList = [
    $('.color-mc')
];
const SCList = [
    $('.color-sc')
];
const FontList = [
    $('span'),
    $('h1'),
    $('h2'),
    $('h3')
];
const BTNList = [
    $('.btn-shadow'),
];
const TitleList = [
    $('.color-title')
];

function paintMainColor(list){
    for(i=0; i < list.length; i++){
        list[i].css('background-color', MAIN_COLOR);
    }
}
function paintSubColor(list){
    for(i=0; i < list.length; i++){
        list[i].css('background-color', SUB_COLOR);
    }
}
function paintTitleColor(list){
    for(i=0; i < list.length; i++){
        list[i].css('color', TITLE_COLOR);
    }
}
function paintFontColor(list){
    for(i=0; i < list.length; i++){
        list[i].css('color', FONT_COLOR);
    }
}
function paintBtnColor(list){
    for(i=0; i < list.length; i++){
        list[i].css('background-color', BTN_COLOR);
        list[i].css('color', FONT_COLOR);
    }
}

function recolor(){
    paintMainColor(MCList);
    paintFontColor(FontList);
    paintBtnColor(BTNList);
    paintTitleColor(TitleList);
    paintSubColor(SCList);
    // console.log('recolor');
}
$(document).ready(function(){
    recolor();
});

// $(document).ready(function(){
//     console.log('test');
    
// });