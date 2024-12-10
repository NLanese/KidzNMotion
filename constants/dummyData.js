
const clients = [
    {
        id: "1",
        title: "Neuro, OB, Cardio, Gastic, Pediatrics",
        level1: false,
        level2: true,
        firstName: "ANNIE",
        lastName: "HARTH",
        name: "ANNIE HARTH",
        location: "Queens, NY",
        email: "therapist1@email.com",
        backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
        backgroundColor: "#9BA0FC",
        thumbnail: { uri: "https://via.placeholder.com/270x270" },
        image: { uri: "https://via.placeholder.com/690x360" },
        icon: { uri: "https://via.placeholder.com/600x600" },
        preview_240x240: {
            uri: "https://via.placeholder.com/240x240",
        },
        preview_330x330: {
            uri: "https://via.placeholder.com/330x330",
        },
        preview_480x288: {
            uri: "https://via.placeholder.com/480x288",
        },
        preview_1005x495: {
            uri: "https://via.placeholder.com/1005x495",
        },
    },
    {
        id: "2",
        title: "OB-GYN",
        firstName: "JASON",
        lastName: "BEAVIS",
        name: "JASON BEAVIS",
        level1: true,
        level2: false,
        email: "therapist2@email.com",
        location: "Jersey City, NJ",
        backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
        backgroundColor: "#9BA0FC",
        thumbnail: { uri: "https://via.placeholder.com/270x270" },
        image: { uri: "https://via.placeholder.com/690x360" },
        icon: { uri: "https://via.placeholder.com/600x600" },
        preview_240x240: {
            uri: "https://via.placeholder.com/240x240",
        },
        preview_330x330: {
            uri: "https://via.placeholder.com/330x330",
        },
        preview_480x288: {
            uri: "https://via.placeholder.com/480x288",
        },
        preview_1005x495: {
            uri: "https://via.placeholder.com/1005x495",
        },
    },
    {
        id: "3",
        title: "Physical Therapist",
        firstName: "JON",
        lastName: "SNOW",
        name: "JON SNOW",
        location: "Bronx, NY",
        email: "therapist3@email.com",
        level1: true,
        level2: true,
        backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
        backgroundColor: "#9BA0FC",
        thumbnail: { uri: "https://via.placeholder.com/270x270" },
        image: { uri: "https://via.placeholder.com/690x360" },
        icon: { uri: "https://via.placeholder.com/600x600" },
        preview_240x240: {
            uri: "https://via.placeholder.com/240x240",
        },
        preview_330x330: {
            uri: "https://via.placeholder.com/330x330",
        },
        preview_480x288: {
            uri: "https://via.placeholder.com/480x288",
        },
        preview_1005x495: {
            uri: "https://via.placeholder.com/1005x495",
        },
    },
    // {
    //     id: "4",
    //     title: "Pediatric ENT",
    //     firstName: "LIPIN",
    //     lastName: "JECTION",
    //     location: "Brooklyn, NYC",
    //     backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
    //     backgroundColor: "#9BA0FC",
    //     thumbnail: { uri: "https://via.placeholder.com/270x270" },
    //     image: { uri: "https://via.placeholder.com/690x360" },
    //     icon: { uri: "https://via.placeholder.com/600x600" },
    //     preview_240x240: {
    //         uri: "https://via.placeholder.com/240x240",
    //     },
    //     preview_330x330: {
    //         uri: "https://via.placeholder.com/330x330",
    //     },
    //     preview_480x288: {
    //         uri: "https://via.placeholder.com/480x288",
    //     },
    //     preview_1005x495: {
    //         uri: "https://via.placeholder.com/1005x495",
    //     },
    // }
];
const therapists = [
    {
        id: "1",
        title: "Pediactric Therapist",
        firstName: "GEORGE",
        lastName: "LUCAS",
        location: "Queens, NY",
        email: "therapist1@email.com",
        backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
        backgroundColor: "#9BA0FC",
        thumbnail: { uri: "https://via.placeholder.com/270x270" },
        image: { uri: "https://via.placeholder.com/690x360" },
        icon: { uri: "https://via.placeholder.com/600x600" },
        preview_240x240: {
            uri: "https://via.placeholder.com/240x240",
        },
        preview_330x330: {
            uri: "https://via.placeholder.com/330x330",
        },
        preview_480x288: {
            uri: "https://via.placeholder.com/480x288",
        },
        preview_1005x495: {
            uri: "https://via.placeholder.com/1005x495",
        },
    },
    {
        id: "2",
        title: "Child Whisperer",
        firstName: "Blake",
        lastName: "Condor",
        email: "therapist2@email.com",
        location: "Jersey City, NJ",
        backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
        backgroundColor: "#9BA0FC",
        thumbnail: { uri: "https://via.placeholder.com/270x270" },
        image: { uri: "https://via.placeholder.com/690x360" },
        icon: { uri: "https://via.placeholder.com/600x600" },
        preview_240x240: {
            uri: "https://via.placeholder.com/240x240",
        },
        preview_330x330: {
            uri: "https://via.placeholder.com/330x330",
        },
        preview_480x288: {
            uri: "https://via.placeholder.com/480x288",
        },
        preview_1005x495: {
            uri: "https://via.placeholder.com/1005x495",
        },
    },
    {
        id: "3",
        title: "Physical Therapist",
        firstName: "LEBRON",
        lastName: "JAMES",
        location: "Bronx, NY",
        email: "therapist3@email.com",
        backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
        backgroundColor: "#9BA0FC",
        thumbnail: { uri: "https://via.placeholder.com/270x270" },
        image: { uri: "https://via.placeholder.com/690x360" },
        icon: { uri: "https://via.placeholder.com/600x600" },
        preview_240x240: {
            uri: "https://via.placeholder.com/240x240",
        },
        preview_330x330: {
            uri: "https://via.placeholder.com/330x330",
        },
        preview_480x288: {
            uri: "https://via.placeholder.com/480x288",
        },
        preview_1005x495: {
            uri: "https://via.placeholder.com/1005x495",
        },
    },
    // {
    //     id: "4",
    //     title: "Pediatric ENT",
    //     firstName: "LIPIN",
    //     lastName: "JECTION",
    //     location: "Brooklyn, NYC",
    //     backgroundIcon: { uri: "https://via.placeholder.com/210x210" },
    //     backgroundColor: "#9BA0FC",
    //     thumbnail: { uri: "https://via.placeholder.com/270x270" },
    //     image: { uri: "https://via.placeholder.com/690x360" },
    //     icon: { uri: "https://via.placeholder.com/600x600" },
    //     preview_240x240: {
    //         uri: "https://via.placeholder.com/240x240",
    //     },
    //     preview_330x330: {
    //         uri: "https://via.placeholder.com/330x330",
    //     },
    //     preview_480x288: {
    //         uri: "https://via.placeholder.com/480x288",
    //     },
    //     preview_1005x495: {
    //         uri: "https://via.placeholder.com/1005x495",
    //     },
    // }
];

const videos = [
            {id:1, level: 1, name: "video 1"},
            {id:2, level: 2, name: "video 2"},
            {id:3, level: 1, name: "video 3"},
            {id:4, level: 2, name: "video 4"},
            {id:5, level: 2, name: "video 5"},
            {id:6, level: 2, name: "video 6"},
            {id:7, level: 1, name: "video 7"},
            {id:8, level: 1, name: "video 8"},
        ]

const assignments = [
    {id:1, title: "Lower Body", client: {id:1, name: "BOB JOHNSON"}, startDate: "2022-07-20", endDate: "2022-07-30",videos: [{name: "video 1"}, {name: "video 2"}, {name: "video 3"}]},
    {id:2, title: "Upper Body", client: {id:2, name: "WILL WILLIAMS"}, startDate: "2022-07-23", endDate: "2022-07-29",videos: [{name: "video 4"}, {name: "video 5"}, {name: "video 6"}]},
    {id:3, title: "Lower Body", client: {id:3, name: "JON SNOW"}, startDate: "2022-07-25", endDate: "2022-07-28",videos: [{name: "video 1"}]},
    {id:4, title: "Agility", client: {id:1, name: "MARK TSAI"}, startDate: "2022-07-27", endDate: "2022-07-30",videos: [{name: "video 2"}, {name: "video 3"}]},
    {id:5, title: "Strength", client: {id:2, name: "FRANCIS HABBERDAFFER"}, startDate: "2022-07-28", endDate: "2022-07-30",videos: [{name: "video 3"}]},
    
]

export { clients, therapists, videos, assignments };
