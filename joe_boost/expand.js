$(document).ready(function () {
    $(".button").click(function () {
        if ($(this).hasClass("expand-effect")) {
            $(this).removeClass("expand-effect")
            $(this.nextElementSibling).addClass("hide")

        } else {
            $(".button").removeClass("expand-effect")
            $(this).addClass("expand-effect")
            $(".container").addClass("hide")
            $(this.nextElementSibling).removeClass("hide")
        }
    })
})

