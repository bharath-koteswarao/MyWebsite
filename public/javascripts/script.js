/**
 * Created by koteswarao on 09-07-2017.
 */

function setTabBackground(tab, anchor, tabPos) {
    tab.css({
        backgroundColor: "#2e7d32"
    });
    anchor.css({
        color: "#ffffff"
    });
    if (tabPos === "left") {
        tab.css({
            borderTopLeftRadius: "7px"
        });
    } else if (tabPos === "right") {
        tab.css({
            borderTopRightRadius: "7px"
        });
    }
}

function resetOthers(tabElementsArray) {
    for (var i = 0; i < 2; i++) {
        tabElementsArray[i].css({
            backgroundColor: "#ffffff"
        });
    }
    for (var i = 2; i < 4; i++) {
        tabElementsArray[i].css({
            color: "#2e7d32"
        });
    }
}

$(document).ready(function () {
    $("#me-tab,#blog-tab,#my-skills-tab").click(function () {
        var tabElementsArray;
        switch ($(this).attr("id")) {
            case "me-tab": {
                setTabBackground($(this), $("#me-a"));
                tabElementsArray = [$("#blog-tab"), $("#my-skills-tab"), $("#blog-a"), $("#skills-a")];
                resetOthers(tabElementsArray);
                break;
            }
            case "blog-tab": {
                setTabBackground($(this), $("#blog-a"));
                tabElementsArray = [$("#me-tab"), $("#my-skills-tab"), $("#me-a"), $("#skills-a")];
                resetOthers(tabElementsArray);
                break;
            }
            default: {
                setTabBackground($(this), $("#skills-a"));
                tabElementsArray = [$("#me-tab"), $("#blog-tab"), $("#me-a"), $("#blog-a")];
                resetOthers(tabElementsArray);
                break;
            }
        }
    })
});