import moment from "moment";
import { Trip, TripType, User } from "./types";

export const user: User = {
  username: "User",
  email: "user@email.com",
  avatar: "https://avatars.githubusercontent.com/u/23648455?v=4",
};

const startDate = moment("12-05-2019");

export const trips: Trip[] = [
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
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jardin_du_Luxembourg_2010.jpg/240px-Jardin_du_Luxembourg_2010.jpg",
        description:
          "Luxembourg is a small European country, surrounded by Belgium, France and Germany.",
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
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bar-le-Duc_Place_Saint-Pierre.jpg/240px-Bar-le-Duc_Place_Saint-Pierre.jpg",
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
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/1240-Auxerre.jpg/269px-1240-Auxerre.jpg",
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
        image:
          "https://cdn.expatwoman.com/s3fs-public/styles/width_420/public/Belgium.jpg?itok=9VsGmV4D",
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
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/0f/2e/5b/71/streetcar-on-canal-street.jpg",
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
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/af/c6.jpg",
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
        image:
          "https://a.cdn-hotels.com/gdcs/production49/d785/da360e83-6abc-4783-957f-72d1d64d0751.jpg?impolicy=fcrop&w=800&h=533&q=medium",
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
        image:
          "https://cdn.pixabay.com/photo/2016/08/27/15/57/washington-d-1624419__340.jpg",
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
        image:
          "https://media-exp1.licdn.com/dms/image/C4E22AQFQSJtIJnlFFw/feedshare-shrink_800/0/1623805869290?e=1647475200&v=beta&t=risQ-uGTtBORzF13gn4ZIk2u9JyyAlJV4bnV4gIx9MY",
        description:
          "Buffalo is the second-largest city in the U.S. state of New York and the seat of Erie County.",
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
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/af/c6.jpg",
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
];
