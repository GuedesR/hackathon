$(document).ready(function () {
    var accommodation_type_custom = [
        {
            description: "Tent",
            price: 20
        },
        {
            description: "Small Lodge",
            price: 49
        },
        {
            description: "Big Ass Lodge",
            price: 100
        }
    ];

    var destination = [
        {
            description: "Tanzania",
            price: 5000
        },
        {
            description: "Kenya",
            price: 4000
        }
    ]
    var safari_custom_name = "Hakuna Batata Safari";

    var food_type_custom = [
        {
            description: "Bugs",
            price: 0
        },
        {
            description: "All you can eat buffet",
            price: 300
        },
        {
            description: "Vegan",
            price: 0
        },
        {
            description: "Sushi",
            price: 250
        },
        {
            description: "Regional Food",
            price: 100
        }
    ];

    var flight_type_custom = [
        {
            description: "Amazing Low Cost, no space for legs",
            price: 60
        },
        {
            description: "First Class",
            price: 200
        },
        {
            description: "Choach",
            price: 120
        }
    ];
    var custom_kit = [
        {
            description: "Shovel",
            price: 25
        },
        {
            description: "Bug repellent",
            price: 10
        },
        {
            description: "Protein bar",
            price: 15
        },
        {
            description: "Bottle of water",
            price: 40
        },
        {
            description: "A Roll of toilet paper",
            price: 35
        },
        {
            description: "Free booze",
            price: 80
        },
        {
            description: "Pool",
            price: 70
        },
        {
            description: "Spa",
            price: 75
        },
        {
            description: "Laundry service",
            price: 60
        },
        {
            description: "WI_FI",
            price: 75
        },
        {
            description: "24h security",
            price: 85
        },
        {
            description: "Artisinal booby traps",
            price: 30
        },
        {
            description: "Over 9000 rolls of toilet paper",
            price: 50
        },
        {
            description: "Transfers",
            price: 60
        }

    ];
    var days_available = [
        {
            description: "5 days, 4 nights",
            price: 40
        },
        {
            description: "9 days, 8 nights",
            price: 80
        }
    ];



    var pack_custom = {
        destination: destination,
        name: safari_custom_name,
        days: days_available,
        accommodation: accommodation_type_custom,
        food: food_type_custom,
        flight: flight_type_custom,
        //itinerary: premium_itinerary_tanzania,
        kit: custom_kit,
        price: ""
    }

    var customPackage = {};
    var price;
    var item1_desc;
    var item1_price;


    $("#step2").on("click", function (event) {
        event.preventDefault();
        customPackage = {
            country: $("#menu-country").val(),
            flight: $("#menu-flight").val(),
            stay: $("#menu-stay").val(),
            food: $("#menu-food").val()
        }
        persist();
    })
    $("#step3").on("click", function (event) {
        event.preventDefault();
        populateTable(item1_desc, item1_price);
    })

    function persist() {
        destination.forEach(element => {
            if (element.description === customPackage.country) {
                price = element.price;
                console.log(element.price);
            }
            item1_desc = element.description;
            item1_price = element.price;
        })

        flight_type_custom.forEach(element => {
            if (element.description === customPackage.flight) {
                price += element.price;
                console.log("1st element" + element.price);
            }
        });
        days_available.forEach(element => {
            if (element.description === customPackage.stay) {
                price += element.price;
                console.log("elemenet" + element.price);
                console.log("total" + price);
            }
        })
        food_type_custom.forEach(element => {
            if (element.description === customPackage.food) {
                price += element.price;
                console.log(price);
            }
        })
        $(".itineraryChoice").html("<p><b>Total cost = € " + price + ",00</b></p>");

  


    }

    function populateTable(desc, price) {
        console.log(desc, price);
        $("#1stCol").html("t" + desc);
        $("#3stCol").html(price);
    }




});