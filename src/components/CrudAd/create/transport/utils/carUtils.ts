export {}

export const years: number[] = []
const currentYear = new Date().getFullYear()

for (let i = currentYear; i >= 1900; i--) {
  years.push(i)
}

export const mileageType: string[] = ["km", "mi"]

export const registration: string[] = ["Moldova", "Transnistria", "Other"]

export const regions = {
  Municipalities: ["Chișinău", "Bălți", "Tighina", "Tiraspol", "Comrat"],
  Districts: [
    "Anenii Noi",
    "Basarabeasca",
    "Briceni",
    "Cahul",
    "Cantemir",
    "Călărași",
    "Căușeni",
    "Cimișlia",
    "Criuleni",
    "Dondușeni",
    "Drochia",
    "Dubăsari",
    "Edineț",
    "Fălești",
    "Florești",
    "Glodeni",
    "Hîncești",
    "Ialoveni",
    "Leova",
    "Nisporeni",
    "Ocnița",
    "Orhei",
    "Rezina",
    "Rîșcani",
    "Sîngerei",
    "Soroca",
    "Strășeni",
    "Șoldănești",
    "Ștefan Vodă",
    "Taraclia",
    "Telenești",
    "Ungheni",
  ],
}

export const fuelType: string[] = [
  "Petrol",
  "Diesel",
  "Gas / Gasoline (propan)",
  "Gas / Gasoline (methane)",
  "Hybrid",
  "Plug-in hybrid",
  "Electric car",
]

export const author: string[] = ["Private", "Dealer", "Official Dealer"]

export const currency: string[] = ["Euro", "USD", "Lei"]

export const condition: string[] = ["New", "Used"]

export const bodyType: string[] = [
  "Cabriolet",
  "Combi",
  "Coupe",
  "Crossover",
  "Hatchback",
  "Microvan",
  "Minivan",
  "Pickup",
  "Roadster",
  "SUV",
  "Sedan",
  "Universal",
  "Van",
]

export const doors: number[] = []

for (let i = 2; i <= 5; i++) {
  doors.push(i)
}

export const transmission: string[] = [
  "Mechanic",
  "Robot",
  "Variator",
  "Automat",
]

export const drive: string[] = ["Rear", "Front", "4x4"]

export const busBodyType: string[] = ["Bus", "Camper", "Microbus"]

export const busCategory: string[] = ["Cargo", "Passenger", "Semi-passenger"]

export const seats: number[] = []

for (let i = 1; i <= 9; i++) {
  seats.push(i)
}

export const tBodyType: string[] = [
  "Logging Truck",
  "Transporter",
  "Pickup Truck",
  "Tank Truck",
  "Platform",
  "Crane Truck",
  "Refrigerated Truck",
  "Dump Truck",
  "Tractor Truck",
  "Van",
  "Curtain-Side Truck",
  "Container Truck",
  "Other",
]

export const cabTruck: string[] = [
  "Double Cab",
  "Standard Cab",
  "Extended Cab",
  "Crew Cab",
  "Sleeper Cab",
  "Cab-Over/Flat-Nose Cab",
  "Conventional Cab",
]

export const truckDrive: string[] = [
  "4x2",
  "4x4",
  "6x2",
  "6x4",
  "6x6",
  "8x4",
  "8x6",
  "8x8",
]

export const truckTransmissionTypes: string[] = [
  "Manual Transmission",
  "Automatic Transmission",
  "Dual-Clutch Transmission",
  "Semi-Automatic Transmission",
  "Automated Manual Transmission",
]

export const truckLoadCapacity: string[] = ["t", "kg"]

export const truckTotalWeight: string[] = [
  "up to 1000",
  "3501 - 7500",
  "7501 - 16000",
  "over 16000",
]

export const motorcycleTypes: string[] = [
  "Cruiser",
  "Sportbike",
  "Touring",
  "Dual-Sport/Adventure",
  "Standard/Naked",
  "Scooter",
  "Off-Road/Dirt Bike",
  "Supermoto",
  "Café Racer",
  "Chopper",
  "Bobber",
  "Sport Touring",
  "Trike",
  "Electric Motorcycle",
  "Vintage/Classic",
  "Mini/Motorized Bicycle",
  "Moped",
  "Pocket Bike",
  "Enduro",
  "Trials",
  "Naked",
]

export const motorcycleTransmission: string[] = ["Automat", "Mechanic"]

export const agricultureBrands: string[] = [
  "AMAZONE",
  "ANT",
  "Aerobs",
  "AgroMaster",
  "Agrohouse",
  "Agromax",
  "Alpler",
  "Antonio Carraro",
  "Armatrac",
  "Aydin",
  "BEL-DOZER",
  "Belarus",
  "Boton",
  "Branson",
  "Buhler",
  "CLAAS",
  "Case IH",
  "Catmann",
  "Celmak",
  "Challenger",
  "Compass",
  "Crystal",
  "Deutz-Fahr",
  "Dongfeng",
  "FARESIN",
  "FENDT",
  "FOTON-LOVOL",
  "Farmlead",
  "Gregoire Besson",
  "Hars",
  "Hurlimann",
  "Iseki",
  "JCB",
  "Jinma",
  "John Deere",
  "KRONE",
  "Kioti",
  "Kubota",
  "Landini",
  "Mascar",
  "Maschio Gaspardo",
  "Massey Ferguson",
  "McCORMICK",
  "Mertsan",
  "Metkarsan",
  "Minsk Electro",
  "Motrac",
  "New Holland",
  "Novasa",
  "Perkins",
  "Rostselmash",
  "SICMA",
  "SOLA",
  "Same",
  "Shifeng",
  "Solis",
  "Steyr",
  "TYM",
  "Taihong",
  "Tavol",
  "Terrion",
  "Tinaz",
  "Toscano",
  "Tumosan",
  "Ursus",
  "Vaderstad",
  "Valtra",
  "Versatile",
  "YTO",
  "Yanmar",
  "Zetor",
  "Zoomlion",
  "Zubr",
  "ВГТЗ",
  "ВТЗ",
  "Велес Агро",
  "Гомсельмаш",
  "ДСТ-УРАЛ",
  "КТЗ",
  "Кировец",
  "ЛТЗ",
  "МТЗ",
  "РУСИЧ",
  "Слобожанец",
  "ХТЗ",
  "ЧТЗ-Уралтрак",
]

export const equipmentCategories: string[] = [
  "Tractors",
  "Combine Harvesters",
  "Tillers",
  "Cultivators",
  "Trailers",
  "Tankers",
  "Seeders",
  "Plows, Harrows",
  "Baler-Wrappers",
  "Sprayers",
  "Headers",
  "Spare Parts",
  "Tires and Wheels",
  "Other",
]

export const trailerTypes: string[] = [
  "Car Carrier",
  "Cargo Truck",
  "Flatbed Truck",
  "Tent Truck",
  "Utility Vehicle",
  "Motorhome",
  "Grain Truck",
  "Refrigerated Truck",
  "Container Truck",
  "Boat Trailer",
  "Platform Truck",
  "Trolley",
  "Refrigerated Van",
  "Dump Truck",
  "Livestock Carrier",
  "Specialized Vehicle",
  "Removable Body",
  "Commercial Trailer",
  "Tractor Truck",
  "Van",
  "Tanker",
  "Chassis",
  "Other",
]

export const trailerCondition: string[] = [
  "For Parts",
  "Non-Working",
  "For Restoration",
  "Working",
]

export const contructionTypes: string[] = [
  "Motor graders",
  "Bulldozers",
  "Winches",
  "Loaders",
  "Dump trucks",
  "Excavators",
  "Drilling equipment",
  "Concrete equipment",
  "Cranes and towers",
  "Lifting equipment",
  "Rollers",
  "Scaffolding, trolleys, ladders",
  "Formwork systems",
  "Other",
]

export const contructionCondition: string[] = ["New", "Used"]
