AFRAME.registerComponent("markerhandeler", {
    init: function () {
        this.el.addEventListener("markerFound", () => {
            console.log("Marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", () => {
            console.log("Marker was lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function () {
        var button_div = document.getElementById("button-div")
        button_div.style.display = "flex"

        var rating_button = document.getElementById("rating-button")
        var order_button = document.getElementById("order-button")

        rating_button.addEventListener("click", () => {
            swal({
                icon: "warning", title: "Rate Dish", text: "Work In Progress"
            })

        })

        order_button.addEventListener("click", () => {
            swal({
                icon: "./assets/4NZ6uLY - Imgur.jpg", title: "Thanks for ordering!", text: "Your order will be served soon at your table."
            })

        })
    },
    handleMarkerLost: function () {
        var button_div = document.getElementById("button-div")
        button_div.style.display = "none"
    }
})