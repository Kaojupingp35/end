$(function () {

    // 下決定function，決定場景切換到哪張圖片還有對應的訊息
    function makeDecision(decision) {
        if (currentScene === 1) {
            currentScene = 2;
            scene = {
                message: "賴床嗎?",
                yesButtonMessage: "Yes",
                noButtonMessage: "No",
                yesButtonShow: true,
                noButtonShow: true
            };
        } else if (currentScene === 2) {
            if (decision === 1) {
                currentScene = 8;
                scene = {
                    message: "要接起來嗎?",
                    yesButtonMessage: "勉強接一下",
                    noButtonMessage: "算了吧",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 3;
                scene = {
                    message: "要無視這傢伙嗎?",
                    yesButtonMessage: "當然",
                    noButtonMessage: "算了 省得他背後捅我",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }

        } else if (currentScene === 3) {
            if (decision === 1) {
                currentScene = 4;
                scene = {
                    message: "GG惹",
                    yesButtonMessage: "勉強接一下",
                    noButtonMessage: "算了吧",
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 5;
                scene = {
                    message: "要不要先下班嗎?",
                    yesButtonMessage: "當然",
                    noButtonMessage: "No",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }

        }
        //決定完之後 重新繪製畫面
        render(scene);
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
        message: "按下乾啦來了解",
        yesButtonMessage: "乾啦",
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
    });
    // 當按下No的時候 使用決定參數2
    $noButton.click(function () {
        makeDecision(2);
    });

    render(scene);
});