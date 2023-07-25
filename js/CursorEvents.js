AFRAME.registerComponent("cursor-listener", {
    schema : {
        selectedItemId : {default: "", type: "string"}
    },
    init : function () {

    },
    update : function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
        this.handleMouseClicksEvents();
    },

    handleMouseEnterEvents : function () {
        this.el.addEventListener("mouseenter", function() {
            const id = this.el.getAttribute("id");
            const propertiesIds = ["place_1", "place_2", "place_3"];
            if(propertiesIds.includes(id)){
                this.el.setAttribute("material", {
                    color: "blue",
                })
            }
        })
    },
    handleMouseLeaveEvents : function () {
        this.el.addEventListener("mouseleave", function() {
            const id = this.el.getAttribute("id");
            const propertiesIds = ["place_1", "place_2", "place_3"];
            if(propertiesIds.includes(id)){
                this.el.setAttribute("material", {
                    color: "white",
                })
            }
        })
    },
    handleMouseClicksEvents : function () {
        this.el.addEventListener("click", function() {
            const propertiesContainer = document.querySelector("#properties-container");
            const id = this.el.getAttribute("id");
            const sky = document.querySelector("#view-container");

            propertiesContainer.setAttribute("visible", false);
            sky.setAttribute("material", {
                src: `./assets/360_images/${id}.jpg`
            })
        })
    }, 
})