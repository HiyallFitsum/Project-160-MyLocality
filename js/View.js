AFRAME .registerComponent("view", {
    schema : {

    },
    init : function() {
        let propertiesContainer = this.el;
        this.createThumbnails();
    },
    createThumbnails : function () {
        const thumbNailsRef = [
            {
                id: "place_1",
                address: "7308 Ridgley Rd Silver Spring MD",
                price: "$200,000",
                url: "./assets/thumbnails/place_1.jpg"
            },
            {
                id: "place_2",
                address: "5529 Tavern Ave Baltimore MD",
                price: "$550,000",
                url: "./assets/thumbnails/place_2.jpg"
            },
            {
                id: "place_3",
                address: "1412 Dunner St Howard County MD",
                price: "$890,000",
                url: "./assets/thumbnails/place_3.jpg"
            },
        ];

        let previousXPosition = -50;

        for (var item in thumbNailsRef) {
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = {
                x: posX,
                y: posY,
                z: posZ,
            };
            previousXPosition = posX;

            const borderEl = this.createBorder(position, item);
            const imageEl = this.createImages(item);
            const infoEl = this.createInfo(position, item);

            borderEl.appendChild(imageEl);
            borderEl.appendChild(infoEl);
            this.el.appendChild(borderEl);
        }   
    },

    createBorder : function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", item.id)
        entityEl.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10,
            color: "red",
        })
        entityEl.setAttribute("position", position)

        return entityEl;
    },

    createImages : function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 9
        })
        entityEl.setAttribute("material", {src: item.url})
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
    },

    createInfo : function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 60,
            color: "#e65100",
            value: `${item.address}\n${item.price}`
        })
        const elPosition = position;
        elPosition.y =  -20;
        entityEl.setAttribute("position", elPosition);

        return entityEl;
    }

})
