import moment from "moment"
import { Trip, TripType, User } from "./types"

export const user: User = {
    username: "User",
    email: "user@email.com",
    avatar: "https://avatars.githubusercontent.com/u/23648455?v=4",
}

const startDate = moment("12-05-2019")

export const trips: Trip[] = [
    {
        id: "japan-trip",
        title: "Japan Trip",
        description:
            "The Japanese archipelago consists of more than 6,000 islands in the Pacific Ocean. The four largest islands are Honshu, Hokkaido, Kyushu, and Shikoku, and are divided into eight regions.",
        visitStartDate: startDate.toDate(),
        visitEndDate: startDate.clone().add(15, "days").toDate(),
        image: "",
        type: TripType.HOLIDAY,
        locations: [
            {
                id: "tokyo",
                title: "Tokyo",
                image: "https://www.japan-guide.com/g18/3009_01.jpg",
                description:
                    "Tokyo is the capital city of Japan and the most populous metropolitan area in the world. It is one of the most captivating cities in the world.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 35.689487,
                    longitude: 139.691711,
                },
            },
            {
                id: "yokohama",
                title: "Yokohama",
                image: "https://lp-cms-production.imgix.net/2019-06/fa6b8fcce2932f0b7b04d383035192ff-yokohama.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
                description:
                    "Located in the Tokyo urban area, Yokohama is actually Japan’s second most populated city. 20 minutes south of Tokyo Station by train, Yokohama’s bay and Chinatown.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 35.443707,
                    longitude: 139.638031,
                },
            },
            {
                id: "kobe",
                title: "Kobe",
                image: "data:image/jpeg;base64,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",
                description: "Enclosed by the sea on one side and a majestic mountain range on the other, Kobe is close to Osaka and Kyoto!",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 34.690083,
                    longitude: 135.195511,
                },
            },
            {
                id: "kyoto",
                title: "Kyoto",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3lvdG98ZW58MHx8MHx8&w=1000&q=80",
                description:
                    "Kyoto, considered by many as Japan’s most beautiful city, was the Japanese capital until the government was moved to Tokyo in 1868..",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 35.011635,
                    longitude: 135.768036,
                },
            },

            {
                id: "hiroshima",
                title: "Hiroshima",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Night_views_from_Mount_Kogane01.jpg/260px-Night_views_from_Mount_Kogane01.jpg",
                description:
                    "Hiroshima‘s deep historical roots are evident in its ancient gardens and castles, as well as the remains of the atomic bombing during the World War II.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 34.385204,
                    longitude: 132.455292,
                },
            },

            {
                id: "fukuoka",
                title: "Fukuoka",
                image: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2016/10/Fukuoka-690x460.jpg",
                description:
                    "The city of Fukuoka is one of the main tourist destinations in southern Japan, and it is listed among Japan’s ten most populous cities.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 33.590355,
                    longitude: 130.401718,
                },
            },
        ],
    },
    {
        id: "india-trip",
        title: "India Trip",
        description:
            "India is famous for its incredible culture, tasty cuisine, scenic beauty and heritage sites. We show you the most beautiful cities countrywide with stunning urban landscapes, and a thriving cultural scene.",
        visitStartDate: startDate.toDate(),
        visitEndDate: startDate.clone().add(17, "days").toDate(),
        image: "",
        type: TripType.HOLIDAY,
        locations: [
            {
                id: "bangalore",
                title: "Bangalore",
                image: "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg",
                description:
                    "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 12.9716,
                    longitude: 77.5946,
                },
            },
            {
                id: "chennai",
                title: "Chennai",
                image: "https://im.rediff.com/news/2014/aug/25chennai1.jpg",
                description:
                    "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 13.0827,
                    longitude: 80.2707,
                },
            },
            {
                id: "goa",
                title: "Goa",
                image: "https://www.tourmyindia.com/states/goa/image/beaches-goa.webp",
                description:
                    "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 15.2993,
                    longitude: 74.124,
                },
            },
            {
                id: "mumbai",
                title: "Mumbai",
                image: "https://images.memphistours.com/large/a18740a16cbfc72d97c819b72670a297.jpg",
                description:
                    "Located along the sea, Mumbai is the most cosmopolitan metropolis of India, and was once known as Bombay. It is also the biggest city in India, and, without doubt, the country’s financial center.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 19.075983,
                    longitude: 72.877655,
                },
            },
            {
                id: "kolkata",
                title: "Kolkata",
                image: "https://s3.india.com/travel/wp-content/uploads/2017/10/Kolkata-city1.jpg",
                description:
                    "A charming city for the unsuspecting traveler, Kolkata has long been known as the country’s cultural capital, and continues to be home to some of the best poets, film producers, writers and Nobel Prize winners. ",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 22.572645,
                    longitude: 88.363892,
                },
            },
            {
                id: "agra",
                title: "Agra",
                image: "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/05/taj-mahal-3212516_1920.jpg",
                description:
                    "Agra is home to what is arguably the most beautiful and revered building in the country, the Taj Mahal. This stunning marble mausoleum is part of the Seven Wonders of the World. ",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 27.17667,
                    longitude: 78.008072,
                },
            },
            {
                id: "delhi",
                title: "Delhi",
                image: "https://images.unsplash.com/photo-1581326693291-ce497c5cf84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGklMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                description:
                    "It is true that Delhi is the capital of India, home to the executive, judiciary and legislative branches of the Government. But Delhi is much more than that. It is a creative hub—a large metropolis with many arts and culture-related activities to offer.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 28.70406,
                    longitude: 77.102493,
                },
            },

            {
                id: "kashmir",
                title: "Kashmir",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg",
                description:
                    "Jammu and Kashmir is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan ",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 33.778175,
                    longitude: 76.576172,
                },
            },
        ],
    },
    {
        id: "europe-trip",
        title: "Europe Trip",
        description:
            "Europe is a continent, also recognised as part of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.",
        visitStartDate: startDate.toDate(),
        visitEndDate: startDate.clone().add(18, "days").toDate(),
        image: "",
        type: TripType.HOLIDAY,
        locations: [
            {
                id: "luxembourg",
                title: "Luxembourg",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jardin_du_Luxembourg_2010.jpg/240px-Jardin_du_Luxembourg_2010.jpg",
                description: "Luxembourg is a small European country, surrounded by Belgium, France and Germany.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 49.8154049,
                    longitude: 5.8531439,
                },
            },
            {
                id: "bar-le-due",
                title: "Bar-Le-Due",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bar-le-Duc_Place_Saint-Pierre.jpg/240px-Bar-le-Duc_Place_Saint-Pierre.jpg",
                description:
                    "Bar-le-Duc, formerly known as Bar, is a commune in the Meuse département, of which it is the capital. The department is in Grand Est in northeastern France.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(5, "days").toDate(),
                coordinates: {
                    latitude: 48.755474,
                    longitude: 5.1536765,
                },
            },
            {
                id: "auxerre",
                title: "Auxerre",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/1240-Auxerre.jpg/269px-1240-Auxerre.jpg",
                description:
                    "Auxerre is the capital of the Yonne department and the fourth-largest city in Burgundy. Auxerre's population today is about 35,000 the urban area comprises roughly 113,000 inhabitants.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 47.7939855,
                    longitude: 3.5120251,
                },
            },
            {
                id: "paris",
                title: "Paris",
                image: "https://oddviser.com/photo/place/400/518.jpg",
                description:
                    "Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(5, "days").toDate(),
                coordinates: {
                    latitude: 48.8589466,
                    longitude: 2.2769955,
                },
            },
            {
                id: "belgium",
                title: "Belgium",
                image: "https://cdn.expatwoman.com/s3fs-public/styles/width_420/public/Belgium.jpg?itok=9VsGmV4D",
                description:
                    "Belgium, a country in Western Europe, is known for medieval towns, Renaissance architecture and as headquarters of the European Union and NATO.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 50.4974227,
                    longitude: 3.3451578,
                },
            },
            {
                id: "orleans",
                title: "Orléans",
                image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/2e/5b/71/streetcar-on-canal-street.jpg",
                description:
                    "Orléans is a city on the banks of the Loire River in north-central France, and it’s the capital of the Centre-Val de Loire region. Joan of Arc famously saved the city from English siege in 1429, an event celebrated with an annual festival.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 47.8733959,
                    longitude: 1.8421747,
                },
            },
        ],
    },
    {
        id: "france-trip",
        title: "France Trip",
        description:
            "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. ",
        visitStartDate: startDate.toDate(),
        visitEndDate: startDate.clone().add(6, "days").toDate(),
        type: TripType.HOLIDAY,
        image: "",
        locations: [
            {
                id: "paris",
                title: "Paris",
                image: "https://oddviser.com/photo/place/400/518.jpg",
                description:
                    "Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(5, "days").toDate(),
                coordinates: {
                    latitude: 48.8589466,
                    longitude: 2.2769955,
                },
            },
            {
                id: "provence",
                title: "Provence",
                image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/af/c6.jpg",
                description:
                    "Provence, a region in southeastern France bordering Italy and the Mediterranean Sea, is known for its diverse landscapes, from the Southern Alps and Camargue plains to rolling vineyards, olive groves, pine forests and lavender fields.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 44.0509187,
                    longitude: 4.8535786,
                },
            },
            {
                id: "nice",
                title: "Nice",
                image: "https://www.ucityguides.com/images/top10/greece-beautiful.jpg",
                description:
                    "The County of Nice is a historical region of France located around the southeastern city of Nice and roughly equivalent to the modern arrondissement of Nice.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 43.703298,
                    longitude: 7.1827724,
                },
            },
        ],
    },
    {
        id: "us-trip",
        title: "US Trip",
        description:
            "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.",
        visitStartDate: startDate.toDate(),
        visitEndDate: startDate.clone().add(11, "days").toDate(),
        type: TripType.SCHOOL_TRIP,
        image: "",
        locations: [
            {
                id: "new-jersey",
                title: "New Jersey",
                image: "https://a.cdn-hotels.com/gdcs/production49/d785/da360e83-6abc-4783-957f-72d1d64d0751.jpg?impolicy=fcrop&w=800&h=533&q=medium",
                description:
                    "New Jersey is a northeastern U.S. state with some 130 miles of Atlantic coast. Jersey City, across the Hudson River from Lower Manhattan, is the site of Liberty State Park, where ferries embark for nearby Ellis Island, with its historic Immigration Museum, and the iconic Statue of Liberty.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(4, "days").toDate(),
                coordinates: {
                    latitude: 40.0697397,
                    longitude: -75.8453831,
                },
            },
            {
                id: "washington-dc",
                title: "Washington D.c.",
                image: "https://cdn.pixabay.com/photo/2016/08/27/15/57/washington-d-1624419__340.jpg",
                description:
                    "Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states of Maryland and Virginia.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(5, "days").toDate(),
                coordinates: {
                    latitude: 38.8938672,
                    longitude: -77.0846157,
                },
            },
            {
                id: "buffalo",
                title: "Buffalo",
                image: "https://media-exp1.licdn.com/dms/image/C4E22AQFQSJtIJnlFFw/feedshare-shrink_800/0/1623805869290?e=1647475200&v=beta&t=risQ-uGTtBORzF13gn4ZIk2u9JyyAlJV4bnV4gIx9MY",
                description: "Buffalo is the second-largest city in the U.S. state of New York and the seat of Erie County.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 42.8963434,
                    longitude: -78.9344819,
                },
            },
        ],
    },
    {
        id: "france-other-trip",
        title: "France Other Trip",
        description:
            "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. ",
        visitStartDate: startDate.toDate(),
        visitEndDate: startDate.clone().add(6, "days").toDate(),
        type: TripType.BUSINESS,
        image: "",
        locations: [
            {
                id: "paris",
                title: "Paris",
                image: "https://oddviser.com/photo/place/400/518.jpg",
                description:
                    "Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(5, "days").toDate(),
                coordinates: {
                    latitude: 48.8589466,
                    longitude: 2.2769955,
                },
            },
            {
                id: "provence",
                title: "Provence",
                image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/af/c6.jpg",
                description:
                    "Provence, a region in southeastern France bordering Italy and the Mediterranean Sea, is known for its diverse landscapes, from the Southern Alps and Camargue plains to rolling vineyards, olive groves, pine forests and lavender fields.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: 44.0509187,
                    longitude: 4.8535786,
                },
            },
            {
                id: "nice",
                title: "Nice",
                image: "https://www.ucityguides.com/images/top10/greece-beautiful.jpg",
                description:
                    "The County of Nice is a historical region of France located around the southeastern city of Nice and roughly equivalent to the modern arrondissement of Nice.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(2, "days").toDate(),
                coordinates: {
                    latitude: 43.703298,
                    longitude: 7.1827724,
                },
            },
        ],
    },
    {
        id: "australia-trip",
        title: "Australia Trip",
        description:
            "Australia is a land of dreams. From the sacred legends of the Aboriginal Dreamtime, when the great spirits conjured the coral reefs, rainforests, and red deserts, to armchair travelers who describe Australia as their dream destination,",
        visitStartDate: startDate.toDate(),
        visitEndDate: startDate.clone().add(15, "days").toDate(),
        image: "https://www.planetware.com/photos-large/AUS/australia-new-south-wales-sydney-opera-house.jpg",
        type: TripType.HOLIDAY,
        locations: [
            {
                id: "brisbane",
                title: "Brisbane",
                image: "https://www.touropia.com/gfx/b/2018/06/brisbane.jpg",
                description:
                    "The third largest city in Australia, Brisbane is the capital of the Sunshine State, and as such, it is blessed with a delightful climate throughout the year.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: -27.4705,
                    longitude: 153.026,
                },
            },
            {
                id: "sydney",
                title: "Sydney",
                image: "https://www.touropia.com/gfx/b/2018/06/sydney.jpg",
                description:
                    "The crown jewel of what Australia has to offer, Sydney´s iconic look makes it the prime destination to visit when heading Down Under",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: -33.8688,
                    longitude: 151.2093,
                },
            },
            {
                id: "melbourne",
                title: "Melbourne",
                image: "https://www.touropia.com/gfx/b/2018/06/melbourne.jpg",
                description:
                    "The second largest city in the country is a stylish, cosmopolitan place to visit, with a lot to see and do. One of the best cities to live in the world, Melbourne has a European appearance,.",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: -37.81366,
                    longitude: 144.9631,
                },
            },
            {
                id: "adelaide",
                title: "Adelaide",
                image: "https://www.touropia.com/gfx/b/2018/06/adelaide.jpg",
                description:
                    "Known as ´the city of churches´, residents of Adelaide argue that there are actually more pubs than church spires in the city! This attitude highlights the laidback and casual feel of the place,",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: -34.9285,
                    longitude: 138.6007,
                },
            },

            {
                id: "perth",
                title: "Perth",
                image: "https://www.touropia.com/gfx/b/2018/06/perth.jpg",
                description:
                    "The laidback, youthful capital of Western Australia is the perfect place to visit if you´re looking to sit back and relax for a bit",
                visitStartDate: startDate.toDate(),
                visitEndDate: startDate.add(3, "days").toDate(),
                coordinates: {
                    latitude: -31.9523,
                    longitude: 115.8613,
                },
            },
        ],
    },
]
