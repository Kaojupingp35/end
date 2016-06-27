$(function () {

    // 下決定function，決定場景切換到哪張圖片還有對應的訊息
    function makeDecision(decision) {
        /*
        if (currentScene === 1) {
            currentScene = 2;
            scene = { 
                message: "是否要選平坦道路?",
                yesButtonMessage: "Yes",
                noButtonMessage: "No",
                yesButtonShow: true,
                noButtonShow: true
            };
        } 
        */
        if (currentScene === 1) {
            if (decision === 1) {
                currentScene = 2;
                scene = {
                    message: "要不要幫助受傷的小動物",
                    yesButtonMessage: "要幫助",
                    noButtonMessage: "不幫助",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 3;
                scene = {
                    message: "遇到兇猛野獸，要不要對付野獸？",
                    yesButtonMessage: "要好了",
                    noButtonMessage: "寶寶不要",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }

        } 
        else if (currentScene === 2) {
            if (decision === 1) {
                currentScene = 4;
                scene = {
                    message: "天黑了是否選擇折返",
                    yesButtonMessage: "我怕怕",
                    noButtonMessage: "繼續走",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 5;
                scene = {
                    message: "你該有助人的善心。繪本-花婆婆",
                    yesButtonMessage: "",
                    noButtonMessage: "",
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
            
        } 
        else if (currentScene === 3) {
            if (decision === 1) {
                currentScene = 6;
                scene = {
                    message: "你被野獸追到斷崖，是否跳下去!",
                    yesButtonMessage: "我有種",
                    noButtonMessage: "才不要",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 7;
                scene = {
                    message: "你缺乏面對恐懼的決心。繪本─美女與老虎",
                    yesButtonMessage: "",
                    noButtonMessage: "",
                    yesButtonShow: false,
                    noButtonShow: false
                    
                     }; 
            }
        }         
        else if (currentScene === 4) {
            if (decision === 1) {
                currentScene = 8;
                scene = {
                    message: "你缺乏探索的勇氣。繪本─吃六頓晚餐的貓",
                    yesButtonMessage: "",
                    noButtonMessage: "",
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 9;
                scene = {
                    message: "再前進也找不到寶藏",
                    yesButtonMessage: "",
                    noButtonMessage: "",
                    yesButtonShow: false,
                    noButtonShow: false
                  };
            }
        }
        else if (currentScene === 6) {
            if (decision === 1) {
                currentScene = 10;
                scene = {
                    message: "恭喜找到寶藏",
                    yesButtonMessage: "",
                    noButtonMessage: "",
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 11;
                scene = {
                    message: "你缺乏冒險的勇氣。繪本─野獸國",
                    yesButtonMessage: "",
                    noButtonMessage: "",
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        }
        
     
        
        //決定完之後 重新繪製畫面
           }

    // 繪製畫面的函數
    function render(scene) {
        $message.text(scene.message);
        $yesButton.text(scene.yesButtonMessage);
        $noButton.text(scene.noButtonMessage);
        // 場景決定要不要顯示yesButton
        if (scene.yesButtonShow)
            $yesButton.show();
        else
            $yesButton.hide();
        // 場景決定要不要顯示noButton
        if (scene.noButtonShow)
            $noButton.show();
        else
            $noButton.hide();

        $("#scene").attr("src", "images/" + currentScene + ".jpg");
    }

    var scene = {
        message: "",
        yesButtonMessage: "",
        noButtonMessage: "",
        yesButtonShow: true,
        noButtonShow: false
    };
    var currentScene = 1;

    var $message = $("#message");
    var $yesButton = $("#yesButton");
    var $noButton = $("#noButton");
    // 當按下Yes的時候 使用決定參數1
    $yesButton.click(function () {
        makeDecision(1);
        render(scene);
    });
    // 當按下No的時候 使用決定參數2
    $noButton.click(function () {
        makeDecision(2);
        render(scene);
    });
    
});