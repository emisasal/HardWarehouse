const ProductsServices = require("./services/Products")

const { connect } = require("mongoose");

const connection = async () => {
    try {
      await connect("mongodb://127.0.0.1:27017/Hard-warehouse");
      console.log("Database is connected");
    } catch (error) {
      console.log(error);
    }
}


[{
    title: "Ryzen 5 5600x",
    category: "componente",
    stock: 10,
    price: 228,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg",
    tags: ["CPU", "ryzen", "AMD", "componente"]
},
{
    title: "Ryzen 7 5800x",
    category: "componente",
    stock: 10,
    price: 345,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.256p.jpg",
    tags: ["CPU", "ryzen", "AMD", "componente"]
},
{
    title: "Core i5-12600k",
    category: "componente",
    stock: 10,
    price: 279,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3f727799b9fc5e83f0e8953759946bd2.256p.jpg",
    tags: ["CPU", "core", "intel", "componente"]
},
{
    title: "Core i7-12700k",
    category: "componente",
    stock: 10,
    price: 380,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3f7037db801def4db8418df8e7498e6a.256p.jpg",
    tags: ["CPU", "core", "intel", "componente"]
},
{
    title: "Ryzen 9 5950x",
    category: "componente",
    stock: 10,
    price: 590,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/1d7073a2deda3bd22963a7e248bbe3e4.256p.jpg",
    tags: ["CPU", "ryzen", "AMD", "componente"]
},
{
    title: "Core i9-12900k",
    category: "componente",
    stock: 10,
    price: 228,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/b9d3c68bbf713cdd1211f3792040ce95.256p.jpg",
    tags: ["CPU", "core", "intel", "componente"]
},
{
    title: "Ryzen 7 3700x",
    category: "componente",
    stock: 10,
    price: 349,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.256p.jpg",
    tags: ["CPU", "ryzen", "AMD", "componente"]
},
{
    title: "Ryzen 5 3600x",
    category: "componente",
    stock: 10,
    price: 366,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg",
    tags: ["CPU", "ryzen", "AMD", "componente"]
},
{
    title: "Threadripper 3990x",
    category: "componente",
    stock: 10,
    price: 8365,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/7e2e7fecadc261c89c70cf3965a97a28.256p.jpg",
    tags: ["CPU", "threadripper", "AMD", "componente"]
},
{
    title: "Core i5-10400",
    category: "componente",
    stock: 10,
    price: 145,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/c18ee131d4d211b2ad40882e5b997371.256p.jpg",
    tags: ["CPU", "core", "intel", "componente"]
},
{
    title: "EVGA XC GAMING",
    category: "componente",
    stock: 10,
    price: 717,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg",
    tags: ["Video Card", "EVGA", "3060", "nvidia", "componente"]
},
{
    title: "EVGA FTW3 ULTRA GAMING",
    category: "componente",
    stock: 10,
    price: 960,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/41wNSzchLVS.jpg",
    tags: ["Video Card", "EVGA", "3070ti", "nvidia", "componente"]
},
{
    title: "Asus DUAL EVO OC",
    category: "componente",
    stock: 10,
    price: 484,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/51FcVHzQHZL.jpg",
    tags: ["Video Card", "asus", "2060", "nvidia", "componente"]
},
{
    title: "EVGA FTW3 ULTRA GAMING",
    category: "componente",
    stock: 10,
    price: 2355,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/2f11da299c23e66859a6955b07835ff6.256p.jpg",
    tags: ["Video Card", "EVGA", "3090", "nvidia", "componente"]
},
{
    title: "MSI GTX 1050 Ti 4GT OC",
    category: "componente",
    stock: 10,
    price: 215,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/1085f0f0294e6eb6340c70bf6324a9f8.256p.jpg",
    tags: ["Video Card", "MSI", "1050ti", "nvidia", "componente"]
},
{
    title: "EVGA FTW3 ULTRA GAMING LE iCX3",
    category: "componente",
    stock: 10,
    price: 1629,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/41CPjBchLUS.jpg",
    tags: ["Video Card", "EVGA", "3080TI", "nvidia", "componente"]
},
{
    title: "MSI GAMING X TRIO",
    category: "componente",
    stock: 10,
    price: 1260,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/41qWD59dkcS.jpg",
    tags: ["Video Card", "MSI", "6900XT", "AMD", "componente"]
},
{
    title: "Gigabyte AORUS MASTER",
    category: "componente",
    stock: 10,
    price: 1260,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/36b9edfff520818730e65f88b054a2df.256p.jpg",
    tags: ["Video Card", "Gigabyte", "6800XT", "AMD", "componente"]
},
{
    title: "MSI MECH 2X OC",
    category: "componente",
    stock: 10,
    price: 830,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/e8016f882d63f9ec9ee0bcb8a84c44a7.256p.jpg",
    tags: ["Video Card", "MSI", "6900XT", "AMD", "componente"]
},
{
    title: "TITAN RTX",
    category: "componente",
    stock: 10,
    price: 3979,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg",
    tags: ["Video Card", "NVIDIA", "TITAN", "nvidia", "componente"]

},
{
    title: "dell UP3216Q",
    category: "monitores",
    stock: 10,
    price: 4612,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/d033ac72d7a1b3440f64bd9d9892fa49.256p.jpg",
    tags: ["monitores", "dell"]
},
{
    title: "Samsung Odyssey G9 Neo S49AG952N",
    category: "monitores",
    stock: 10,
    price: 1990,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/c6fcac6db37eb233d14327846e128bd9.256p.jpg",
    tags: ["monitores", "asus"]
},
{
    title: "Asus ROG Swift PG259QN",
    category: "monitores",
    stock: 10,
    price: 485,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/ae364dfe79d4c077bc72a661b48293c3.256p.jpg",
    tags: ["monitores", "asus"]
},
{
    title: "Samsung Odyssey G7",
    category: "monitores",
    stock: 10,
    price: 490,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/c1cef36415ba8f85086b55459b9bf0aa.256p.jpg",
    tags: ["monitores", "samsung"]
},
{
    title: "asus ROG Strix XG27AQM",
    category: "monitores",
    stock: 10,
    price: 692,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/e8016f882d63f9ec9ee0bcb8a84c44a7.256p.jpg",
    tags: ["monitores", "asus"]
},
{
    title: "LG 27GN950-B",
    category: "monitores",
    stock: 10,
    price: 914,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/0f06943449a7f045280437ce6c0c1a0a.256p.jpg",
    tags: ["monitores", "LG"]
},
{
    title: "Alienware AW2521H",
    category: "monitores",
    stock: 10,
    price: 875,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/e8016f882d63f9ec9ee0bcb8a84c44a7.256p.jpg",
    tags: ["monitores", "alienware"]
},
{
    title: "Asus TUF Gaming VG34VQL1B",
    category: "monitores",
    stock: 10,
    price: 529,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/e8016f882d63f9ec9ee0bcb8a84c44a7.256p.jpg",
    tags: ["monitores", "asus"]
},
{
    title: "BenQ Zowie XL2546K",
    category: "monitores",
    stock: 10,
    price: 499,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/e8016f882d63f9ec9ee0bcb8a84c44a7.256p.jpg",
    tags: ["monitores", "zowie"]
},
{
    title: "Apple MacBook Pro",
    category: "notebooks",
    stock: 10,
    price: 1200,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_642960-MLA45795227648_052021-V.webp",
    tags: ["notebook", "apple"]
},
{
    title: "Asus ZenBook UX425EA",
    category: "notebooks",
    stock: 10,
    price: 1100,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_622883-MLA48011304859_102021-V.webp",
    tags: ["notebook", "asus"]
},
{
    title: "Asus Tuf Fx506",
    category: "notebooks",
    stock: 10,
    price: 1000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_889449-MLA47446389763_092021-V.webp",
    tags: ["notebook", "asus"]
},
{
    title: "Asus ZenBook Pro Duo UX482EG",
    category: "notebooks",
    stock: 10,
    price: 1500,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_732599-MLA48061930662_102021-V.webp",
    tags: ["notebook", "asus"]
},
{
    title: "Asus Tuf Dash",
    category: "notebooks",
    stock: 10,
    price: 1200,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_735470-MLA47968025589_102021-V.webp",
    tags: ["notebook", "asus"]
},
{
    title: "Lenovo V15",
    category: "notebooks",
    stock: 10,
    price: 1000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_618932-MLA47917765641_102021-V.webp",
    tags: ["notebook", "Lenovo"]
},
{
    title: "Asus ROG Zephyrus G14 GA401QM",
    category: "notebooks",
    stock: 10,
    price: 2000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_772570-MLA48632176266_122021-V.webp",
    tags: ["notebook", "asus"]
},
{
    title: "Razer Blade 15",
    category: "notebooks",
    stock: 10,
    price: 2000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_800020-MLA41282888054_032020-V.webp",
    tags: ["notebook", "razer"]
},
{
    title: "Asus Rog G14",
    category: "notebooks",
    stock: 10,
    price: 1200,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_642960-MLA45795227648_052021-V.webp",
    tags: ["notebook", "asus"]
},
{
    title: "Acer Nitro",
    category: "notebooks",
    stock: 10,
    price: 1200,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_NQ_NP_642960-MLA45795227648_052021-V.webp",
    tags: ["notebook", "acer"]
},
{
    title: "Memoria ram 16gb",
    category: "componentes",
    stock: 10,
    price: 5000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/20348ef9eb7ca86600eefb50c6a56597.256p.jpg",
    tags: ["Memoria ram", "Memoria ram 16gb", "Corsair"] 
},
{
    title: "Memoria ram 16gb",
    category: "componentes",
    stock: 10,
    price: 6000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/58ab1663c77627cbf3effd27df57aa92.256p.jpg",
    tags: ["Memoria ram", "Memoria ram 16gb", "Corsair", "ram"]
},
{
    title: "Memoria ram 32gb",
    category: "componentes",
    stock: 10,
    price: 10000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/87cd8e9d02ffb0997769f4a4d5969669.256p.jpg",
    tags: ["Memoria ram", "Memoria ram 32gb", "Corsair", "ram"]
},
{
    title: "Memoria ram 32gb",
    category: "componentes",
    stock: 10,
    price: 10000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg",
    tags: ["Memoria ram", "Memoria ram 32gb", "Corsair", "ram"]
},
{
    title: "Memoria ram 8gb",
    category: "componentes",
    stock: 10,
    price: 3979,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "	https://images-na.ssl-images-amazon.com/images/I/41z3E2A6LOL.jpg",
    tags: ["Memoria ram", "Memoria ram 8gb", "ram"]
},
{
    title: "PC armada amd",
    category: "PC",
    stock: 10,
    price: 86000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_Q_NP_764863-MLA49386350825_032022-AC.jpg",
    tags: ["pc", "PC", "Pc completa", "Pc armada", "Pc armada amd"] 
},
{
    title: "PC armada intel",
    category: "PC",
    stock: 10,
    price: 126000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://http2.mlstatic.com/D_Q_NP_764863-MLA49386350825_032022-AC.jpg",
    tags: ["pc", "PC", "Pc completa", "Pc armada", "Pc armada intel"] 
},
{
    title: "Pc gamer",
    category: "pc",
    stock: 10,
    price: 280000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-intel-i7-11700h5108gb480gb-ssd-0.jpg",
    tags: ["pc", "PC", "Pc armada", "Pc gamer"] 
},
{
    title: "Pc gamer amd",
    category: "pc",
    stock: 10,
    price: 210000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://www.fullh4rd.com.ar/img/productos/Pics_Pro…ryzen-5-5600xb55016gb240gb-ssd1tb1660-super-0.jpg",
    tags: ["pc", "PC", "Pc armada", "Pc gamer", "Pc gamer amd"] 
},
{
    title: "Disco ssd 120gb",
    category: "componentes",
    stock: 10,
    price: 4000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/ca0b46376f072d2483c385bad50c6310.256p.jpg",
    tags: ["disco", "Discos", "disco", "Disco ssd 120gb"]
},
{
    title: "Disco ssd 240gb",
    category: "componentes",
    stock: 10,
    price: 5000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/41UKoJx2tZL.jpg",
    tags: ["disco", "Discos", "discos", "Disco ssd 240gb"]
},
{
    title: "Disco ssd 480gb",
    category: "componentes",
    stock: 10,
    price: 7000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/31ITAX-GoIL.jpg",
    tags: ["disco", "Discos", "discos", "Disco ssd 480gb"]
},
].forEach(async (element) => await ProductsServices.newProduct(element));

connection()
