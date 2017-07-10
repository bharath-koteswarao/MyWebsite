/**
 * Created by koteswarao on 09-07-2017.
 */

function setUpCurrentTab(tab, anchor, tabPos) {
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

function setThisFragment(position) {
    switch (position) {
        case "left":
            $("#me-frag").css({display: "block"});
            $("#skills-frag").css({display: "none"});
            $("#blog-frag").css({display: "none"});
            break;
        case "center":
            $("#me-frag").css({display: "none"});
            $("#skills-frag").css({display: "block"});
            $("#blog-frag").css({display: "none"});
            break;
        default:
            $("#me-frag").css({display: "none"});
            $("#skills-frag").css({display: "none"});
            $("#blog-frag").css({display: "block"});
            break;
    }
}

function handleOnclicksForTabs() {
    $("#me-tab,#blog-tab,#my-skills-tab").click(function () {
        var tabElementsArray;
        switch ($(this).attr("id")) {
            case "me-tab": {
                setUpCurrentTab($(this), $("#me-a"));
                tabElementsArray = [$("#blog-tab"), $("#my-skills-tab"), $("#blog-a"), $("#skills-a")];
                resetOthers(tabElementsArray);
                setThisFragment("left");
                break;
            }
            case "blog-tab": {
                setUpCurrentTab($(this), $("#blog-a"));
                tabElementsArray = [$("#me-tab"), $("#my-skills-tab"), $("#me-a"), $("#skills-a")];
                resetOthers(tabElementsArray);
                setThisFragment("right");
                break;
            }
            default: {
                setUpCurrentTab($(this), $("#skills-a"));
                tabElementsArray = [$("#me-tab"), $("#blog-tab"), $("#me-a"), $("#blog-a")];
                resetOthers(tabElementsArray);
                setThisFragment("center");
                break;
            }
        }
    });

}

function setSkillsBar() {
    $('#skillbar-area2').skillbars({
        color: '#2e7d32',
        style: 3,
        showLevel: true,
        animate: true,
        speed: 1000
    });
}

$(document).ready(function () {
    setUpCurrentTab($("#me-tab"), $("#me-a"));
    setThisFragment("left");
    handleOnclicksForTabs();
    setSkillsBar();
});