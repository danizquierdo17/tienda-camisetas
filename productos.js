// Productos cargados desde manifest.csv y catalogo.csv
// precio_lista: Precio original del catálogo
// precio_venta: Precio calculado con fórmula (actualmente: precio_lista × 1.447)
// Margen: 44.70% (ejemplo: 17.90€ → 25.90€)
// Para cambiar la fórmula, edita la función calcular_precio_venta() en combinar_datos.py
const productosData = [
  {
    "id": "29902",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/29902.jpg",
    "nombre": "Bayern Munchen 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29883",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/29883.jpg",
    "nombre": "Bayern Munchen 26-27 1a Equipacion Thai Camisetas Manga Larga",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "29882",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/29882.jpg",
    "nombre": "Bayern Munchen 26-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29881",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/29881.jpg",
    "nombre": "Bayern Munchen 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29876",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/29876.jpg",
    "nombre": "Bayern Munchen 26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29452",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/29452.jpg",
    "nombre": "Bayern Munchen 25-26 2a Jugador Version Thai Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29156",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/29156.jpg",
    "nombre": "Bayern Munchen 25-26 Rosa Portero Thai Camiseta",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "29155",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bayern Munchen 25-26 Portero Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28769",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/28769.jpg",
    "nombre": "Bayern Munchen 25-26 3a Equipacion Thai Mujer Camiseta",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28768",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/28768.jpg",
    "nombre": "Bayern Munchen 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28767",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bayern Munchen 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28216",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/28216.jpg",
    "nombre": "Bayern Munchen 25-26 Negro Pre Match Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27865",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/27865.jpg",
    "nombre": "Bayern Munchen 25-26 2a Jugador Version Thai Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27864",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/bundesliga-bayern-munchen/27864.jpg",
    "nombre": "Bayern Munchen 25-26 1a Jugador Version Thai Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27691",
    "equipo": "bundesliga-bayern-munchen",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bayern Munchen 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29932",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/29932.jpg",
    "nombre": "Dortmund 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29923",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/29923.jpg",
    "nombre": "Dortmund 26-27 1a Equpacion Thai Mujer Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29907",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/29907.jpg",
    "nombre": "Dortmund 26-27 1a Equpacion Thai Camisetas Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29446",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/29446.jpg",
    "nombre": "Dortmund 26-27 1a Equpacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29430",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/29430.jpg",
    "nombre": "Dortmund 25-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29157",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/29157.jpg",
    "nombre": "Dortmund 25-26 Copa Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28663",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/28663.jpg",
    "nombre": "Dortmund 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28662",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/28662.jpg",
    "nombre": "Dortmund 25-26 1a Equpacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28268",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/28268.jpg",
    "nombre": "Dortmund 25-26 KidSuper Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27373",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/27373.jpg",
    "nombre": "Dortmund 25-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27185",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/27185.jpg",
    "nombre": "Dortmund 25-26 1a Equpacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27161",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/27161.jpg",
    "nombre": "Dortmund 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27106",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/27106.jpg",
    "nombre": "Dortmund 25-26 Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27089",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/27089.jpg",
    "nombre": "Dortmund 25-26 Portero Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27066",
    "equipo": "bundesliga-dortmund",
    "imagen": "futbolmodaes_img/bundesliga-dortmund/27066.jpg",
    "nombre": "Dortmund 25-26 Especial Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29296",
    "equipo": "bundesliga-frankfurt",
    "imagen": "futbolmodaes_img/bundesliga-frankfurt/29296.jpg",
    "nombre": "Frankfurt 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29297",
    "equipo": "bundesliga-frankfurt",
    "imagen": "futbolmodaes_img/bundesliga-frankfurt/29297.jpg",
    "nombre": "Frankfurt 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21873",
    "equipo": "bundesliga-frankfurt",
    "imagen": "futbolmodaes_img/bundesliga-frankfurt/21873.jpg",
    "nombre": "Frankfurt 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "20394",
    "equipo": "bundesliga-hamburgo",
    "imagen": "futbolmodaes_img/bundesliga-hamburgo/20394.jpg",
    "nombre": "Hamburgo 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28394",
    "equipo": "bundesliga-heidenheim",
    "imagen": "futbolmodaes_img/bundesliga-heidenheim/28394.jpg",
    "nombre": "Heidenheim 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28391",
    "equipo": "bundesliga-heidenheim",
    "imagen": "futbolmodaes_img/bundesliga-heidenheim/28391.jpg",
    "nombre": "Heidenheim 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25100",
    "equipo": "bundesliga-leverkusen",
    "imagen": "futbolmodaes_img/bundesliga-leverkusen/25100.jpg",
    "nombre": "Bayer 04 Leverkusen 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18491",
    "equipo": "bundesliga-leverkusen",
    "imagen": "futbolmodaes_img/bundesliga-leverkusen/18491.jpg",
    "nombre": "Bayer Leverkusen 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27507",
    "equipo": "bundesliga-nurnberg",
    "imagen": "futbolmodaes_img/bundesliga-nurnberg/27507.jpg",
    "nombre": "NÃ¼rnberg 25-26 1a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29985",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29985.jpg",
    "nombre": "RB Leipzig 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29638",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29638.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28119",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/28119.png",
    "nombre": "RB Leipzig 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27504",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "RB Leipzig 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27503",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "RB Leipzig 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "21517",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/21517.jpg",
    "nombre": "RB Leipzig 25-26 Pre Match Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29984",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29984.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta XAVER 24",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29982",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29982.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta SEIWALD 13",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29983",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29983.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta YAN DIOMANDE 49",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29981",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta S.SANI 18",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29977",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29977.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta NUSA 7",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29978",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29978.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta RAUM 22",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29979",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29979.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta ROMULO 40",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29980",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29980.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta OUEDRAOGO 20",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29976",
    "equipo": "bundesliga-rb-leipzig",
    "imagen": "futbolmodaes_img/bundesliga-rb-leipzig/29976.jpg",
    "nombre": "RB Leipzig 26-27 1a Equipacion Thai Camiseta ORBAN 4",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29294",
    "equipo": "bundesliga-schalke-04",
    "imagen": "futbolmodaes_img/bundesliga-schalke-04/29294.jpg",
    "nombre": "Schalke 04 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12473",
    "equipo": "bundesliga-schalke-04",
    "imagen": "futbolmodaes_img/bundesliga-schalke-04/12473.jpg",
    "nombre": "Schalke 04 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "9735",
    "equipo": "bundesliga-schalke-04",
    "imagen": "futbolmodaes_img/bundesliga-schalke-04/9735.jpg",
    "nombre": "Schalke 04 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29295",
    "equipo": "bundesliga-st-pauli",
    "imagen": "futbolmodaes_img/bundesliga-st-pauli/29295.jpg",
    "nombre": "St. Pauli 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21204",
    "equipo": "bundesliga-st-pauli",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "St. Pauli 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "21203",
    "equipo": "bundesliga-st-pauli",
    "imagen": "futbolmodaes_img/bundesliga-st-pauli/21203.jpg",
    "nombre": "St. Pauli 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "19839",
    "equipo": "bundesliga-vfl-wolfsburg",
    "imagen": "futbolmodaes_img/bundesliga-vfl-wolfsburg/19839.png",
    "nombre": "VfL Wolfsburg 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "19840",
    "equipo": "bundesliga-vfl-wolfsburg",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "VfL Wolfsburg 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "27041",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27041.jpg",
    "nombre": "Real Madrid 24-25 Chandal y Pants B994",
    "precio_lista": 42.9,
    "precio_venta": 62.08
  },
  {
    "id": "27036",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27036.jpg",
    "nombre": "Cruzeiro 24-25 Chandal y Pants B992",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27037",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27037.jpg",
    "nombre": "Juventus 24-25 Chandal y Pants F613",
    "precio_lista": 45.5,
    "precio_venta": 65.84
  },
  {
    "id": "27038",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27038.jpg",
    "nombre": "Juventus 24-25 Chandal y Pants B987",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27039",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27039.jpg",
    "nombre": "Espana24-25 Chandal y Pants F618",
    "precio_lista": 45.5,
    "precio_venta": 65.84
  },
  {
    "id": "27035",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27035.jpg",
    "nombre": "Dortmund 24-25 Chandal y Pants B997",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27033",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27033.jpg",
    "nombre": "Cruzeiro 24-25 Chandal y Pants B990",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27034",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27034.jpg",
    "nombre": "Chelsea 24-25 Chandal y Pants B998",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27032",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27032.jpg",
    "nombre": "Corinthians 24-25 Chandal y Pants B996",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27030",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27030.jpg",
    "nombre": "Brasil Internacional 24-25 Chandal y Pants B995",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27031",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27031.jpg",
    "nombre": "Brasil Internacional 24-25 Chandal y Pants B999",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27028",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27028.jpg",
    "nombre": "Arsenal 24-25 Chandal y Pants B993",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "27029",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27029.jpg",
    "nombre": "Bayern Munchen 24-25 Chandal y Pants F616",
    "precio_lista": 45.5,
    "precio_venta": 65.84
  },
  {
    "id": "27027",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/27027.jpg",
    "nombre": "Arsenal 24-25 Chandal y Pants B988",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "26907",
    "equipo": "chandales-202425-chandal",
    "imagen": "futbolmodaes_img/chandales-202425-chandal/26907.jpg",
    "nombre": "Real Madrid 24-25 Hoodie Chandal y Pants F611",
    "precio_lista": 45.9,
    "precio_venta": 66.42
  },
  {
    "id": "27025",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27025.jpg",
    "nombre": "Real Madrid 24-25 Chaqueta A848",
    "precio_lista": 31.0,
    "precio_venta": 44.86
  },
  {
    "id": "27023",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27023.jpg",
    "nombre": "Manchester United 24-25 Chaqueta A845",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "27020",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27020.jpg",
    "nombre": "Cruzeiro 24-25 Chaqueta A851",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "27021",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27021.jpg",
    "nombre": "Flamengo 24-25 Chaqueta A847",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "27022",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27022.jpg",
    "nombre": "Brasil Internacional 24-25 Chaqueta A849",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "27019",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27019.jpg",
    "nombre": "Cruzeiro 24-25 Chaqueta A850",
    "precio_lista": 31.0,
    "precio_venta": 44.86
  },
  {
    "id": "27018",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27018.jpg",
    "nombre": "Arsenal 24-25 Chaqueta A846",
    "precio_lista": 31.0,
    "precio_venta": 44.86
  },
  {
    "id": "27016",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27016.jpg",
    "nombre": "Real Madrid 24-25 Chaqueta y Pants A857-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "27017",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27017.jpg",
    "nombre": "Manchester United 24-25 Chaqueta y Pants A852-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "27013",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27013.jpg",
    "nombre": "Flamenco 24-25 Chaqueta y Pants A856-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "27014",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27014.jpg",
    "nombre": "Bayern Munchen 24-25 Chaqueta y Pants A853-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "27015",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27015.jpg",
    "nombre": "Juventus 24-25 Chaqueta y Pants A854-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "27012",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27012.jpg",
    "nombre": "Arsenal 24-25 Chaqueta y Pants A855-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "27011",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27011.jpg",
    "nombre": "Real Madrid 24-25 Chaqueta y Pants A860-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "27010",
    "equipo": "chandales-202425-chaqueta",
    "imagen": "futbolmodaes_img/chandales-202425-chaqueta/27010.jpg",
    "nombre": "Manchester United 24-25 Chaqueta y Pants A865-Tela Tejida",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "29806",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29806.jpg",
    "nombre": "Bar.celona 25-26 Chandal y Pants B25156",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29651",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid Chandal y Pants B25152",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29650",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid Chandal y Pants B25151",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29648",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29648.jpg",
    "nombre": "Marseille 25-26 Chandal y Pants B25153",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29649",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29649.jpg",
    "nombre": "PSG Chandal y Pants B25150",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29568",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29568.jpg",
    "nombre": "PSG Chandal y Pants B25122",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29569",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester City Chandal y Pants B25154",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29567",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29567.jpg",
    "nombre": "Dortmund Chandal y Pants B25149",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29565",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29565.jpg",
    "nombre": "Manchester City 25-26 Chandal B25139",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29566",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29566.jpg",
    "nombre": "Manchester City 25-26 Chandal B25137",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29563",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29563.jpg",
    "nombre": "Marseilles 25-26 Chandal B25126",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29564",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29564.jpg",
    "nombre": "PSG Chandal y Pants B25121",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29559",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29559.jpg",
    "nombre": "Manchester City 25-26 Chandal B25133",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29560",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29560.jpg",
    "nombre": "Liverpool 25-26 Chandal B25141",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29561",
    "equipo": "chandales-2526-chandal",
    "imagen": "futbolmodaes_img/chandales-2526-chandal/29561.jpg",
    "nombre": "Liverpool 25-26 Chandal B25138",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "29684",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29684.jpg",
    "nombre": "Marseilles 25-26 Chaqueta A25123",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "29682",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29682.jpg",
    "nombre": "Manchester United 25-26 Hoodie Chaqueta F642",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29683",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29683.jpg",
    "nombre": "Liverpool 25-26 Hoodie Chaqueta F641",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29681",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29681.jpg",
    "nombre": "Juventus 25-26 Hoodie Chaqueta F640",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29678",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29678.jpg",
    "nombre": "Ajax 25-26 Hoodie Chaqueta F639",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29679",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29679.jpg",
    "nombre": "Arsenal 25-26 Hoodie Chaqueta F638",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29680",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29680.jpg",
    "nombre": "Arsenal 25-26 Hoodie Chaqueta F637",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29658",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 25-26 Hoodie Chaqueta F636",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29657",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29657.jpg",
    "nombre": "Marseille 25-26 Chaqueta A25121",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "29656",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester City 25-26 Chaqueta A25122",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "29655",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29655.jpg",
    "nombre": "Flamengo 25-26 Hoodie Chaqueta F634",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29544",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 25-26 Hoodie Chaqueta F635",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29543",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29543.jpg",
    "nombre": "Real Madrid 25-26 Hoodie Chaqueta F627",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29542",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29542.jpg",
    "nombre": "Real Madrid 25-26 Hoodie Chaqueta F626",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "29540",
    "equipo": "chandales-2526-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2526-chaqueta/29540.jpg",
    "nombre": "PSG 25-26 Hoodie Chaqueta F628",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "30345",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30345.jpg",
    "nombre": "Real Madrid 26-27 Chandal y Pants B26045",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30344",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30344.jpg",
    "nombre": "Real Madrid 26-27 Chandal y Pants B26047",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30342",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30342.jpg",
    "nombre": "Real Madrid 26-27 Chandal y Pants B26044",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30343",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30343.jpg",
    "nombre": "Real Madrid 26-27 Chandal y Pants B26039",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30338",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30338.jpg",
    "nombre": "Real Madrid 26-27 Chandal y Pants B26025",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30339",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30339.jpg",
    "nombre": "Real Madrid 26-27 Chandal y Pants B26028",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30341",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30341.jpg",
    "nombre": "PSG 26-27 Chandal y Pants B26033",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30335",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30335.jpg",
    "nombre": "PSG 26-27 Chandal y Pants B26032",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30336",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30336.jpg",
    "nombre": "Manchester City 26-27 Chandal y Pants B26038",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30337",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30337.jpg",
    "nombre": "PSG 26-27 Chandal y Pants B26029",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30334",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30334.jpg",
    "nombre": "Inter Miami 26-27 Chandal y Pants B26027",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30331",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30331.jpg",
    "nombre": "Inter Miami 26-27 Chandal y Pants B26026",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30332",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30332.jpg",
    "nombre": "Holanda 26-27 Chandal y Pants B26043",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30333",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30333.jpg",
    "nombre": "Holanda 26-27 Chandal y Pants B26042",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30328",
    "equipo": "chandales-2627-chandal",
    "imagen": "futbolmodaes_img/chandales-2627-chandal/30328.jpg",
    "nombre": "Brasil 26-27 Chandal y Pants B26035",
    "precio_lista": 42.5,
    "precio_venta": 61.5
  },
  {
    "id": "30363",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30363.jpg",
    "nombre": "Real Madrid 26-27 Chaqueta A26044",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30365",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30365.jpg",
    "nombre": "Brasil 26-27 Chaqueta A26043",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30366",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30366.jpg",
    "nombre": "Real Madrid 26-27 Chaqueta A26029",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30361",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30361.jpg",
    "nombre": "Inter Miami 26-27 Chaqueta A26023",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30362",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30362.jpg",
    "nombre": "PSG 26-27 Chaqueta A26033",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30360",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30360.jpg",
    "nombre": "Manchester United 26-27 Chaqueta A26045",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30359",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30359.jpg",
    "nombre": "Manchester City 26-27 Chaqueta A26042",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30358",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30358.jpg",
    "nombre": "Inter Miami 26-27 Chaqueta A26028",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30356",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30356.jpg",
    "nombre": "Flamengo 26-27 Chaqueta A26026",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30357",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30357.jpg",
    "nombre": "Espana 26-27 Chaqueta A26041",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30355",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30355.jpg",
    "nombre": "Flamengo 26-27 Chaqueta A26024",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30354",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30354.jpg",
    "nombre": "Colombia 26-27 Chaqueta A26032",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30352",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30352.jpg",
    "nombre": "Argentina 25-26 Hoodie Chaqueta F643",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "30350",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30350.jpg",
    "nombre": "Brasil International 26-27 Chaqueta A26034",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "30351",
    "equipo": "chandales-2627-chaqueta",
    "imagen": "futbolmodaes_img/chandales-2627-chaqueta/30351.jpg",
    "nombre": "Arsenal 26-27 Chaqueta A26022",
    "precio_lista": 30.5,
    "precio_venta": 44.13
  },
  {
    "id": "29355",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29355.jpg",
    "nombre": "Real Madrid 25-26 Invierno Abrigos G279",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29352",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29352.jpg",
    "nombre": "Manchester United 25-26 Invierno Abrigos G287",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29353",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29353.jpg",
    "nombre": "Manchester United 25-26 Invierno Abrigos G277",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29354",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29354.jpg",
    "nombre": "PSG 25-26 Invierno Abrigos G284",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29350",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29350.jpg",
    "nombre": "Inter Milan 25-26 Invierno Abrigos G286",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29351",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29351.jpg",
    "nombre": "Hotspur 25-26 Invierno Abrigos G285",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29349",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29349.jpg",
    "nombre": "Bar celona 25-26 Invierno Abrigos G288",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29348",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29348.jpg",
    "nombre": "Bar celona 25-26 Invierno Abrigos G276",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "29347",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/29347.jpg",
    "nombre": "Arsenal 25-26 Invierno Abrigos G281",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "26642",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/26642.jpg",
    "nombre": "2025 Invierno Abrigos G229",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "26643",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/26643.jpg",
    "nombre": "2025 Invierno Abrigos G230",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "26801",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/26801.jpg",
    "nombre": "AC Milan 24-25 Invierno Abrigos G258",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "26802",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/26802.jpg",
    "nombre": "Manchester City 24-25 Invierno Abrigos G241",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "26803",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/26803.jpg",
    "nombre": "Manchester City 24-25 Invierno Abrigos G243",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "26804",
    "equipo": "chandales-abrigos-de-futbol",
    "imagen": "futbolmodaes_img/chandales-abrigos-de-futbol/26804.jpg",
    "nombre": "Manchester City 24-25 Invierno Abrigos G242",
    "precio_lista": 62.0,
    "precio_venta": 89.71
  },
  {
    "id": "24570",
    "equipo": "chandales-ad-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F493",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "18720",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/18720.jpg",
    "nombre": "AC Milan 25-26 Windbreaker de Futbol G279",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "18418",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 2026 Windbreaker de Futbol K26008",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "18419",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/18419.jpg",
    "nombre": "Real Madrid 25-26 Windbreaker de Futbol G282",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "18417",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/18417.jpg",
    "nombre": "Manchester United 25-26 Windbreaker de Futbol G270",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "18413",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/18413.jpg",
    "nombre": "Liverpool 2025-26 Windbreaker de Futbol G285",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "18411",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/18411.jpg",
    "nombre": "Bayern Munchen 25-26 Windbreaker de Futbol G284",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16965",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16965.jpg",
    "nombre": "Barcelona 25-26 Cortavientos G266",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16966",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16966.jpg",
    "nombre": "Barcelona 2025-26 Winterbreaker G265",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16964",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16964.jpg",
    "nombre": "Espana 2026-27 Cortavientos de Futbol Rojo",
    "precio_lista": 48.0,
    "precio_venta": 69.46
  },
  {
    "id": "16961",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16961.jpg",
    "nombre": "Bayern Munchen 2025-26 Winterbreaker G284",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16962",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16962.jpg",
    "nombre": "Argentina 26-27 Cortavientos K26010",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16870",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 25-26 Cortavientos de Futbol K26004",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16869",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16869.jpg",
    "nombre": "Arsenal 25-26 Windbreaker de Futbol G283",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16860",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16860.jpg",
    "nombre": "Juventus 25-26 Windbreaker G268",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "16812",
    "equipo": "chandales-cortavientos",
    "imagen": "futbolmodaes_img/chandales-cortavientos/16812.jpg",
    "nombre": "PSG 2026 Windbreaker K26007",
    "precio_lista": 43.0,
    "precio_venta": 62.22
  },
  {
    "id": "30317",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30317.jpg",
    "nombre": "PSG 26-27 Entrenamiento Camiseta y Shorts J26026",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30318",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30318.jpg",
    "nombre": "PSG 26-27 Entrenamiento Camiseta y Shorts J26025",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30319",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30319.jpg",
    "nombre": "Real Madrid 26-27 Entrenamiento Camiseta y Shorts J26019",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30320",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30320.jpg",
    "nombre": "Real Madrid 26-27 Entrenamiento Camiseta y Shorts J26032",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30316",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30316.jpg",
    "nombre": "Holanda 26-27 Entrenamiento Camiseta y Shorts J26031",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30313",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30313.jpg",
    "nombre": "Inter Miami 26-27 Entrenamiento Camiseta y Shorts J26020",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30314",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30314.jpg",
    "nombre": "PSG 26-27 Entrenamiento Camiseta y Shorts J26024",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30315",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30315.jpg",
    "nombre": "Inter Miami 26-27 Entrenamiento Camiseta y Shorts J26021",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30312",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30312.jpg",
    "nombre": "Holanda 26-27 Entrenamiento Camiseta y Shorts J26029",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30309",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30309.jpg",
    "nombre": "Espana 26-27 Entrenamiento Camiseta y Shorts J26016",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30310",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30310.jpg",
    "nombre": "Espana 26-27 Entrenamiento Camiseta y Shorts J26017",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30311",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30311.jpg",
    "nombre": "Flamengo 26-27 Entrenamiento Camiseta y Shorts J26022",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30306",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30306.jpg",
    "nombre": "Brasil 26-27 Entrenamiento Camiseta y Shorts J26028",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30307",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30307.jpg",
    "nombre": "Brasil 26-27 Entrenamiento Camiseta y Shorts J26027",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30308",
    "equipo": "chandales-entrenamiento-uniforme",
    "imagen": "futbolmodaes_img/chandales-entrenamiento-uniforme/30308.jpg",
    "nombre": "Arsenal 26-27 Entrenamiento Camiseta y Shorts J26023",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "19094",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker 2021 Abrigos Amarillo",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19042",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 2021 Negro Abrigos H0061",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19039",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Suns 2021 Negro Abrigos H0056",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19040",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portland Trail Blazers 2021 Negro Abrigos H0057",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19041",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 2021 Rojo Abrigos H0051",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19035",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Miami Heat 2021 Rojo Abrigo H0049",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19036",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "New York Knicks 2021 Azul Abrigos H0071",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19037",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Indiana Pacers 2021 Abrigos H0053",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19038",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Clippers 2021 Negro Abrigos H0065",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19031",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Jazz 2021 Negro Abrigos H0063",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19032",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers 2021 Negro Abrigos H0064",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19033",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "New York Knicks 2021 Negro Abrigos H0069",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19034",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Indiana Pacers 2021 Negro Abrigos H0059",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19025",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Cleveland Cavaliers 2021 Negro Abrigos H0070",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "19026",
    "equipo": "chandales-nba-abrigos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 2021 Abrigos H0062",
    "precio_lista": 55.0,
    "precio_venta": 79.59
  },
  {
    "id": "24318",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portland Trail Blazers 23-24 Hoodie Chaqueta Con Pants H108",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20956",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Oklahoma City Thunder 2022 Hoodie Chaqueta H0104 Con Pantalone",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20954",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portland Trail Blazers 2022 Hoodie Chaqueta H0088 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20955",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic 2022 Hoodie Chaqueta H0101 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20953",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "New York Knicks 2022 Hoodie Chaqueta H0093 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20952",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "New Orleans Pelicans 2022 Hoodie Chaqueta H0100 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20951",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Clippers 2022 Hoodie Chaqueta H0092 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20950",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Miami Heat 2022 Hoodie Chaqueta H0087 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20949",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Cleveland Cavaliers 2022 Hoodie Chaqueta H0090 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20948",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Dallas Mavericks 2022 Hoodie Chaqueta H0091 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20944",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Indiana Pacers 2022 Hoodie Chaqueta H0095 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20945",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Detroit Pistons 2022 Hoodie Chaqueta H0095 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20942",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "JAZZ 2022 Hoodie Chaqueta H0098 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20943",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets 2022 Hoodie Chaqueta H0102 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "20928",
    "equipo": "chandales-nba-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers 2022 Hoodie Chaqueta H0089 Con Pants",
    "precio_lista": 60.0,
    "precio_venta": 86.82
  },
  {
    "id": "30391",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30391.jpg",
    "nombre": "Real Madrid 26-27 Ninos Chandal E26055",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30390",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30390.jpg",
    "nombre": "Real Madrid 26-27 Ninos Chandal E26036",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30389",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30389.jpg",
    "nombre": "PSG 26-27 Ninos Chandal E26045",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30388",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30388.jpg",
    "nombre": "Real Madrid 26-27 Ninos Chandal E26031",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30386",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30386.jpg",
    "nombre": "PSG 26-27 Ninos Chandal E26039",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30387",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30387.jpg",
    "nombre": "PSG 26-27 Ninos Chandal E26044",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30383",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30383.jpg",
    "nombre": "Inter Miami 26-27 Ninos Chandal E26032",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30384",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30384.jpg",
    "nombre": "Manchester City 26-27 Ninos Chandal E26054",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30385",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30385.jpg",
    "nombre": "Inter Miami 26-27 Ninos Chandal E26034",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30380",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30380.jpg",
    "nombre": "Brasil 26-27 Ninos Chandal E26046",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30381",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30381.jpg",
    "nombre": "Brasil 26-27 Ninos Chandal E26048",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30382",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30382.jpg",
    "nombre": "Espana 26-27 Ninos Chandal E26049",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30377",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30377.jpg",
    "nombre": "Argentina 26-27 Ninos Chandal E26053",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30378",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30378.jpg",
    "nombre": "Arsenal 26-27 Ninos Chandal E26041",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30379",
    "equipo": "chandales-ninos-chandal",
    "imagen": "futbolmodaes_img/chandales-ninos-chandal/30379.jpg",
    "nombre": "Arsenal 26-27 Ninos Chandal E26040",
    "precio_lista": 38.5,
    "precio_venta": 55.71
  },
  {
    "id": "30375",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30375.jpg",
    "nombre": "Real Madrid 26-27 Ninos Chaqueta y Pants E26043",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30374",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30374.jpg",
    "nombre": "Real Madrid 26-27 Ninos Chaqueta y Pants E26035",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30373",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30373.jpg",
    "nombre": "Real Madrid 26-27 Ninos Chaqueta y Pants E26026",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30371",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30371.jpg",
    "nombre": "Espana 26-27 Ninos Chaqueta y Pants E26047",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30372",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30372.jpg",
    "nombre": "Inter Miami 26-27 Ninos Chaqueta y Pants E26028",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30368",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30368.jpg",
    "nombre": "Arsenal 26-27 Ninos Chaqueta E26030",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30369",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30369.jpg",
    "nombre": "Arsenal 26-27 Ninos Chaqueta E26027",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30370",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30370.jpg",
    "nombre": "Brasil 26-27 Ninos Chaqueta E26042",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "30367",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/30367.jpg",
    "nombre": "Argentina 26-27 Ninos Chaqueta y Pants E26037",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "29872",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/29872.jpg",
    "nombre": "Espana 26-27 Blanco Ninos Chaqueta y Pants",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "29805",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Marseilles 25-26 Ninos Chaqueta E25240",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "29790",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Espana 26-27 Ninos Chaqueta y Pants E26022",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "29703",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/chandales-ninos-chaqueta/29703.jpg",
    "nombre": "Italia 25-26 Ninos Chaqueta y Pants E26019",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "29671",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Marseille 2025-26 Ninos Chaqueta y Pants E25233",
    "precio_lista": 44.5,
    "precio_venta": 64.39
  },
  {
    "id": "29670",
    "equipo": "chandales-ninos-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester City 25-26 Ninos Chaqueta E25238",
    "precio_lista": 43.5,
    "precio_venta": 62.94
  },
  {
    "id": "24316",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F491",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24317",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F492",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24314",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F490",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24315",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F489",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24312",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F487",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24313",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F488",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24309",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F486",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24310",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F485",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "24311",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F459",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "23527",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F484",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "23526",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F482",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "23524",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F483",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "23525",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F481",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "23522",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F473",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "23523",
    "equipo": "chandales-nlke-chaqueta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "23-24 Hoodie Chaqueta Con Pants F478",
    "precio_lista": 54.0,
    "precio_venta": 78.14
  },
  {
    "id": "30283",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30283.jpg",
    "nombre": "Real Madrid 26-27 Polo y Shorts C2607",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30284",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30284.jpg",
    "nombre": "Flamengo 26-27 Polo y Shorts C2605",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30285",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30285.jpg",
    "nombre": "Inter Miami- 26-27 Polo y Shorts C2608",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30282",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30282.jpg",
    "nombre": "Espana 26-27 Polo y Shorts C2609",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30281",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30281.jpg",
    "nombre": "Flamengo 26-27 Polo y Shorts C2604",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30280",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30280.jpg",
    "nombre": "Cruzeiro 26-27 Polo y Shorts C2606",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30279",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30279.jpg",
    "nombre": "Cruzeiro 26-27 Polo y Shorts C2603",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30278",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/30278.jpg",
    "nombre": "Argentina 26-27 Polo y Shorts C2602",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29513",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/29513.jpg",
    "nombre": "Bar,celona 25-26 Polo C2571",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29397",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/29397.jpg",
    "nombre": "Bar celona 24-25 Polo C2571",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29358",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/29358.jpg",
    "nombre": "PSG 25-26 Polo C2569",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29361",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/29361.jpg",
    "nombre": "Arsenal 25-26 Polo C2570",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29227",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/chandales-polo-de-futbol/29227.jpg",
    "nombre": "Arsenal 25-26 Polo C2566",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29225",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Ajax 25-26 Polo C2565",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29226",
    "equipo": "chandales-polo-de-futbol",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Juventus 25-26 Polo C2564",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27245",
    "equipo": "chandales-tshirt",
    "imagen": "futbolmodaes_img/chandales-tshirt/27245.jpg",
    "nombre": "Adi das 25-26 T-Shirt Rojo",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27246",
    "equipo": "chandales-tshirt",
    "imagen": "futbolmodaes_img/chandales-tshirt/27246.jpg",
    "nombre": "Adi das 25-26 T-Shirt Blanco",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27247",
    "equipo": "chandales-tshirt",
    "imagen": "futbolmodaes_img/chandales-tshirt/27247.jpg",
    "nombre": "Adi das 25-26 T-Shirt Negro",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27248",
    "equipo": "chandales-tshirt",
    "imagen": "futbolmodaes_img/chandales-tshirt/27248.jpg",
    "nombre": "Adi das 25-26 T-Shirt Rosa",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27244",
    "equipo": "chandales-tshirt",
    "imagen": "futbolmodaes_img/chandales-tshirt/27244.jpg",
    "nombre": "Adi das 25-26 T-Shirt Naranja",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "21044",
    "equipo": "chandales-tshirt",
    "imagen": "futbolmodaes_img/chandales-tshirt/21044.jpg",
    "nombre": "Adi das 25-26 T-Shirt Azul",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30303",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30303.jpg",
    "nombre": "PSG 2026-27 Vest D26027",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30300",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30300.jpg",
    "nombre": "Real Madrid 2026-27 Vest D26019",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30299",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30299.jpg",
    "nombre": "Inter Miami 2026-27 Vest D26020",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30296",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30296.jpg",
    "nombre": "Inter Miami 2026-27 Vest D26021",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30297",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30297.jpg",
    "nombre": "Holanda 2026-27 Vest D26032",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30298",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30298.jpg",
    "nombre": "Flamengo 2026-27 Vest D26024",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30295",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30295.jpg",
    "nombre": "Colombia 2026-27 Vest D26023",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30292",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30292.jpg",
    "nombre": "Colombia 2026-27 Vest D26022",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30293",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30293.jpg",
    "nombre": "Espana 2026-27 Vest D26017",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30294",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30294.jpg",
    "nombre": "Espana 2026-27 Vest D26016",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30288",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30288.jpg",
    "nombre": "Brasil 2026-27 Vest D26030",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30289",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30289.jpg",
    "nombre": "Bar,celona 2026-27 Vest D26035",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30290",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30290.jpg",
    "nombre": "Arsenal 2026-27 Vest D26025",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30291",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30291.jpg",
    "nombre": "Brasil 2026-27 Vest D26029",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30287",
    "equipo": "chandales-vest-de-futbol",
    "imagen": "futbolmodaes_img/chandales-vest-de-futbol/30287.jpg",
    "nombre": "Brasil 2026-27 Vest D26028",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "19942",
    "equipo": "la-liga-alaves",
    "imagen": "futbolmodaes_img/la-liga-alaves/19942.jpg",
    "nombre": "Alaves 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18920",
    "equipo": "la-liga-alaves",
    "imagen": "futbolmodaes_img/la-liga-alaves/18920.jpg",
    "nombre": "Alaves 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18919",
    "equipo": "la-liga-alaves",
    "imagen": "futbolmodaes_img/la-liga-alaves/18919.jpg",
    "nombre": "Alaves 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21741",
    "equipo": "la-liga-albacete",
    "imagen": "futbolmodaes_img/la-liga-albacete/21741.jpg",
    "nombre": "Albacete 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "11425",
    "equipo": "la-liga-albacete",
    "imagen": "futbolmodaes_img/la-liga-albacete/11425.jpg",
    "nombre": "Albacete 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22044",
    "equipo": "la-liga-almeria",
    "imagen": "futbolmodaes_img/la-liga-almeria/22044.jpg",
    "nombre": "Almeria 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22043",
    "equipo": "la-liga-almeria",
    "imagen": "futbolmodaes_img/la-liga-almeria/22043.jpg",
    "nombre": "Almeria 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "20735",
    "equipo": "la-liga-almeria",
    "imagen": "futbolmodaes_img/la-liga-almeria/20735.jpg",
    "nombre": "Almeria 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "30203",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/30203.jpg",
    "nombre": "Atletico Madrid 26-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30182",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/30182.jpg",
    "nombre": "Atletico Madrid 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29874",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/29874.jpg",
    "nombre": "Atletico Madrid 99-00 1a RetroThai Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "29437",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/29437.jpg",
    "nombre": "Atletico Madrid 94-95 1a Retro Thai Camiseta",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "29207",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/29207.jpg",
    "nombre": "Atletico Madrid 25-26 3a Equipacion Jugadora Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29154",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atletico Madrid 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29016",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/29016.jpg",
    "nombre": "Atletico Madrid 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27902",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/27902.jpg",
    "nombre": "Atletico Madrid 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27634",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/27634.jpg",
    "nombre": "Atletico Madrid 25-26 2a Equipacion Jugadora Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27612",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/27612.jpg",
    "nombre": "Atletico Madrid 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27502",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/27502.jpg",
    "nombre": "Atletico Madrid 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "26969",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/26969.jpg",
    "nombre": "Atletico Madrid 25-26 1a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "26968",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/26968.jpg",
    "nombre": "Atletico Madrid 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "25390",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/25390.jpg",
    "nombre": "Atletico Madrid 94-95 1a Equipacion Manga Larga Camisetas",
    "precio_lista": 29.0,
    "precio_venta": 41.96
  },
  {
    "id": "25508",
    "equipo": "la-liga-atletico-madrid",
    "imagen": "futbolmodaes_img/la-liga-atletico-madrid/25508.jpg",
    "nombre": "Atletico Madrid 24-25 3a Equipacion Thai Camiseta",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30016",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/30016.jpg",
    "nombre": "Bar celona 26-27 1a Equipacion Jugador Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29880",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/29880.jpg",
    "nombre": "Bar celona 26-27 1a Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29151",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bar celona 25-26 Love Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29146",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/29146.jpg",
    "nombre": "Bar,celona 25-26 1a Equipacion Bebe Ninos Camisetas",
    "precio_lista": 12.0,
    "precio_venta": 17.36
  },
  {
    "id": "29077",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bar,celona 25-26 4a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28827",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28827.jpg",
    "nombre": "Bar celona 25-26 Pre Match Thai Camisetas 5",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28823",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28823.jpg",
    "nombre": "Bar celona 25-26 3a Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28735",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bar,celona 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28674",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28674.jpg",
    "nombre": "Bar celona 25-26 3a Equipacion Jugador Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28673",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28673.jpg",
    "nombre": "Bar celona 25-26 3a Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28584",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28584.jpg",
    "nombre": "Bar celona 25-26 2a Thai Mujer Camisetas",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "28440",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28440.jpg",
    "nombre": "Bar,celona 25-26 Camp Nou XTRAVIS SCOTT 2 Ninos Camiseta y Shorts",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "28294",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28294.jpg",
    "nombre": "Bar,celona 25-26 Pre Match Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "28214",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28214.jpg",
    "nombre": "Bar,celona 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28176",
    "equipo": "la-liga-barcelona",
    "imagen": "futbolmodaes_img/la-liga-barcelona/28176.jpg",
    "nombre": "Bar celona 25-26 1a Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30228",
    "equipo": "la-liga-bilbao",
    "imagen": "futbolmodaes_img/la-liga-bilbao/30228.jpg",
    "nombre": "Athletic Bilbao 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28278",
    "equipo": "la-liga-bilbao",
    "imagen": "futbolmodaes_img/la-liga-bilbao/28278.jpg",
    "nombre": "Athletic Bilbao 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28273",
    "equipo": "la-liga-bilbao",
    "imagen": "futbolmodaes_img/la-liga-bilbao/28273.jpg",
    "nombre": "Athletic Bilbao 25-26 4a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27901",
    "equipo": "la-liga-bilbao",
    "imagen": "futbolmodaes_img/la-liga-bilbao/27901.jpg",
    "nombre": "Athletic Bilbao 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27900",
    "equipo": "la-liga-bilbao",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Athletic Bilbao 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27461",
    "equipo": "la-liga-bilbao",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Athletic Bilbao 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27460",
    "equipo": "la-liga-bilbao",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Athletic Bilbao 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22732",
    "equipo": "la-liga-burgos",
    "imagen": "futbolmodaes_img/la-liga-burgos/22732.jpg",
    "nombre": "Burgos 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22573",
    "equipo": "la-liga-burgos",
    "imagen": "futbolmodaes_img/la-liga-burgos/22573.jpg",
    "nombre": "Burgos 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22572",
    "equipo": "la-liga-burgos",
    "imagen": "futbolmodaes_img/la-liga-burgos/22572.jpg",
    "nombre": "Burgos 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "23548",
    "equipo": "la-liga-cadiz",
    "imagen": "futbolmodaes_img/la-liga-cadiz/23548.jpg",
    "nombre": "Cadiz 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22359",
    "equipo": "la-liga-cadiz",
    "imagen": "futbolmodaes_img/la-liga-cadiz/22359.jpg",
    "nombre": "Cadiz 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "14503",
    "equipo": "la-liga-cadiz",
    "imagen": "futbolmodaes_img/la-liga-cadiz/14503.jpg",
    "nombre": "Cadiz 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "24431",
    "equipo": "la-liga-cd-leganes",
    "imagen": "futbolmodaes_img/la-liga-cd-leganes/24431.jpg",
    "nombre": "CD Leganes 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18353",
    "equipo": "la-liga-cd-leganes",
    "imagen": "futbolmodaes_img/la-liga-cd-leganes/18353.jpg",
    "nombre": "CD Leganes 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14386",
    "equipo": "la-liga-cd-leganes",
    "imagen": "futbolmodaes_img/la-liga-cd-leganes/14386.jpg",
    "nombre": "CD Leganes 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29905",
    "equipo": "la-liga-celta-de-vigo",
    "imagen": "futbolmodaes_img/la-liga-celta-de-vigo/29905.jpg",
    "nombre": "Celta de Vigo 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28437",
    "equipo": "la-liga-celta-de-vigo",
    "imagen": "futbolmodaes_img/la-liga-celta-de-vigo/28437.jpg",
    "nombre": "Celta de Vigo 25-26 Especial Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26280",
    "equipo": "la-liga-celta-de-vigo",
    "imagen": "futbolmodaes_img/la-liga-celta-de-vigo/26280.jpg",
    "nombre": "Celta de Vigo 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22501",
    "equipo": "la-liga-celta-de-vigo",
    "imagen": "futbolmodaes_img/la-liga-celta-de-vigo/22501.jpg",
    "nombre": "Celta de Vigo 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13849",
    "equipo": "la-liga-celta-de-vigo",
    "imagen": "futbolmodaes_img/la-liga-celta-de-vigo/13849.jpg",
    "nombre": "Celta de Vigo 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18355",
    "equipo": "la-liga-getafe",
    "imagen": "futbolmodaes_img/la-liga-getafe/18355.jpg",
    "nombre": "Getafe 2025-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18354",
    "equipo": "la-liga-getafe",
    "imagen": "futbolmodaes_img/la-liga-getafe/18354.jpg",
    "nombre": "Getafe 1a Equipacion Thai Camiseta 2025-26",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28271",
    "equipo": "la-liga-girona",
    "imagen": "futbolmodaes_img/la-liga-girona/28271.jpg",
    "nombre": "GIRONA 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "19813",
    "equipo": "la-liga-girona",
    "imagen": "futbolmodaes_img/la-liga-girona/19813.jpg",
    "nombre": "GIRONA 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "12321",
    "equipo": "la-liga-granada-cf",
    "imagen": "futbolmodaes_img/la-liga-granada-cf/12321.jpg",
    "nombre": "Granada CF 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "12322",
    "equipo": "la-liga-granada-cf",
    "imagen": "futbolmodaes_img/la-liga-granada-cf/12322.jpg",
    "nombre": "Granada CF 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "12320",
    "equipo": "la-liga-granada-cf",
    "imagen": "futbolmodaes_img/la-liga-granada-cf/12320.jpg",
    "nombre": "Granada CF 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27365",
    "equipo": "la-liga-hercules",
    "imagen": "futbolmodaes_img/la-liga-hercules/27365.jpg",
    "nombre": "Hercules 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27364",
    "equipo": "la-liga-hercules",
    "imagen": "futbolmodaes_img/la-liga-hercules/27364.jpg",
    "nombre": "Hercules 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "24432",
    "equipo": "la-liga-la-coruna",
    "imagen": "futbolmodaes_img/la-liga-la-coruna/24432.jpg",
    "nombre": "Deportivo La Coruna 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22591",
    "equipo": "la-liga-la-coruna",
    "imagen": "futbolmodaes_img/la-liga-la-coruna/22591.jpg",
    "nombre": "Deportivo La Coruna 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "12470",
    "equipo": "la-liga-la-coruna",
    "imagen": "futbolmodaes_img/la-liga-la-coruna/12470.jpg",
    "nombre": "Deportivo La Coruna 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "24478",
    "equipo": "la-liga-las-palmas",
    "imagen": "futbolmodaes_img/la-liga-las-palmas/24478.jpg",
    "nombre": "Las Palmas 2025-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22049",
    "equipo": "la-liga-las-palmas",
    "imagen": "futbolmodaes_img/la-liga-las-palmas/22049.jpg",
    "nombre": "Las Palmas 2025-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22048",
    "equipo": "la-liga-las-palmas",
    "imagen": "futbolmodaes_img/la-liga-las-palmas/22048.jpg",
    "nombre": "Las Palmas 2025-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29325",
    "equipo": "la-liga-levante",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Levante 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29324",
    "equipo": "la-liga-levante",
    "imagen": "futbolmodaes_img/la-liga-levante/29324.jpg",
    "nombre": "Levante 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29318",
    "equipo": "la-liga-levante",
    "imagen": "futbolmodaes_img/la-liga-levante/29318.jpg",
    "nombre": "Levante 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "30249",
    "equipo": "la-liga-malaga",
    "imagen": "futbolmodaes_img/la-liga-malaga/30249.jpg",
    "nombre": "Malaga 26-27 1a Equipacon Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21927",
    "equipo": "la-liga-malaga",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Malaga 25-26 1a Equipacon Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "16832",
    "equipo": "la-liga-malaga",
    "imagen": "futbolmodaes_img/la-liga-malaga/16832.jpg",
    "nombre": "Malaga 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18492",
    "equipo": "la-liga-osasuna",
    "imagen": "futbolmodaes_img/la-liga-osasuna/18492.jpg",
    "nombre": "Osasuna 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "9520",
    "equipo": "la-liga-osasuna",
    "imagen": "futbolmodaes_img/la-liga-osasuna/9520.jpg",
    "nombre": "Osasuna 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "20686",
    "equipo": "la-liga-rayo-vallecano",
    "imagen": "futbolmodaes_img/la-liga-rayo-vallecano/20686.jpg",
    "nombre": "Rayo Vallecano 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "20687",
    "equipo": "la-liga-rayo-vallecano",
    "imagen": "futbolmodaes_img/la-liga-rayo-vallecano/20687.jpg",
    "nombre": "Rayo Vallecano 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "20685",
    "equipo": "la-liga-rayo-vallecano",
    "imagen": "futbolmodaes_img/la-liga-rayo-vallecano/20685.jpg",
    "nombre": "Rayo Vallecano 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29435",
    "equipo": "la-liga-rcd-espanyol",
    "imagen": "futbolmodaes_img/la-liga-rcd-espanyol/29435.jpg",
    "nombre": "RCD Espanyol 125 Aniversario Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29378",
    "equipo": "la-liga-rcd-espanyol",
    "imagen": "futbolmodaes_img/la-liga-rcd-espanyol/29378.jpg",
    "nombre": "RCD Espanyol 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29309",
    "equipo": "la-liga-rcd-espanyol",
    "imagen": "futbolmodaes_img/la-liga-rcd-espanyol/29309.jpg",
    "nombre": "RCd Espanyol 2025-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "16828",
    "equipo": "la-liga-rcd-espanyol",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Espanyol 1998 1a Equipacion Retro Thai Camiseta",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "14385",
    "equipo": "la-liga-rcd-espanyol",
    "imagen": "futbolmodaes_img/la-liga-rcd-espanyol/14385.jpg",
    "nombre": "RCD Espanyol 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28287",
    "equipo": "la-liga-rcd-mallorca",
    "imagen": "futbolmodaes_img/la-liga-rcd-mallorca/28287.jpg",
    "nombre": "RCD MALLORCA 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28286",
    "equipo": "la-liga-rcd-mallorca",
    "imagen": "futbolmodaes_img/la-liga-rcd-mallorca/28286.jpg",
    "nombre": "RCD MALLORCA 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28285",
    "equipo": "la-liga-rcd-mallorca",
    "imagen": "futbolmodaes_img/la-liga-rcd-mallorca/28285.jpg",
    "nombre": "RCD MALLORCA 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29405",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/29405.jpg",
    "nombre": "Real Betis 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "28665",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/28665.jpg",
    "nombre": "Real Betis 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28291",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/28291.jpg",
    "nombre": "Real Betis 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "28290",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/28290.jpg",
    "nombre": "Real Betis 25-26 Final Champion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "28274",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/28274.jpg",
    "nombre": "Real Betis 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28272",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/28272.jpg",
    "nombre": "Real Betis 25-26 Portero Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "28110",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/28110.jpg",
    "nombre": "Real Betis 25-26 Especial Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27431",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Betis 25-26 Final Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27251",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/27251.jpg",
    "nombre": "Real Betis 25-26 Especial Thai Camisetas JOAQUIN 17",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "27250",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/27250.jpg",
    "nombre": "Real Betis 25-26 Especial Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27191",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/27191.jpg",
    "nombre": "Real Betis 25-26 Especial Ninos Camiseta y Shorts",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "27117",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Betis 25-26 Especial Ropa de entrenamientos-Verde",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27116",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/27116.jpg",
    "nombre": "Real Betis 25-26 Especial Thai Camisetas-Rosa",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27115",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/27115.jpg",
    "nombre": "Real Betis 25-26 Especial Thai Camisetas Azul",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27114",
    "equipo": "la-liga-real-betis",
    "imagen": "futbolmodaes_img/la-liga-real-betis/27114.jpg",
    "nombre": "Real Betis 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30421",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30421.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "30392",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30392.jpg",
    "nombre": "Real Madrid 26-27 3a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "30277",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30277.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "30254",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30254.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Portero Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "30253",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30253.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30248",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30248.jpg",
    "nombre": "Real Madrid 2011-2012 Portero Retro Thai Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "29815",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/29815.png",
    "nombre": "Real Madrid 25-26 Camiseta Cuello Blanca",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29453",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/29453.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29449",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/29449.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29448",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/29448.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29431",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/29431.jpg",
    "nombre": "Real Madrid 2026 Marvel Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "28795",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/28795.jpg",
    "nombre": "Real Madrid 1998-2000 3a Retro Thai Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "28615",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/28615.jpg",
    "nombre": "Real Madrid 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28614",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/28614.jpg",
    "nombre": "Real Madrid 25-26 3a Equipacion Portero Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28442",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/28442.jpg",
    "nombre": "Real Madrid 25-26 Rosa Pre Match Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "28530",
    "equipo": "la-liga-real-sociedad",
    "imagen": "futbolmodaes_img/la-liga-real-sociedad/28530.jpg",
    "nombre": "Real Sociedad 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "28529",
    "equipo": "la-liga-real-sociedad",
    "imagen": "futbolmodaes_img/la-liga-real-sociedad/28529.png",
    "nombre": "Real Sociedad 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "21697",
    "equipo": "la-liga-real-sociedad",
    "imagen": "futbolmodaes_img/la-liga-real-sociedad/21697.jpg",
    "nombre": "Real Sociedad 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18057",
    "equipo": "la-liga-real-sociedad",
    "imagen": "futbolmodaes_img/la-liga-real-sociedad/18057.jpg",
    "nombre": "Real Sociedad 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29326",
    "equipo": "la-liga-real-valladolid",
    "imagen": "futbolmodaes_img/la-liga-real-valladolid/29326.jpg",
    "nombre": "Real Valladolid 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29327",
    "equipo": "la-liga-real-valladolid",
    "imagen": "futbolmodaes_img/la-liga-real-valladolid/29327.jpg",
    "nombre": "Real Valladolid 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29322",
    "equipo": "la-liga-real-valladolid",
    "imagen": "futbolmodaes_img/la-liga-real-valladolid/29322.jpg",
    "nombre": "Real Valladolid 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "24465",
    "equipo": "la-liga-real-valladolid",
    "imagen": "futbolmodaes_img/la-liga-real-valladolid/24465.jpg",
    "nombre": "Real Valladolid 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "24427",
    "equipo": "la-liga-real-valladolid",
    "imagen": "futbolmodaes_img/la-liga-real-valladolid/24427.jpg",
    "nombre": "Real Valladolid 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "23951",
    "equipo": "la-liga-real-valladolid",
    "imagen": "futbolmodaes_img/la-liga-real-valladolid/23951.jpg",
    "nombre": "Real Valladolid 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29313",
    "equipo": "la-liga-real-zaragoza",
    "imagen": "futbolmodaes_img/la-liga-real-zaragoza/29313.jpg",
    "nombre": "Real Zaragoza 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29312",
    "equipo": "la-liga-real-zaragoza",
    "imagen": "futbolmodaes_img/la-liga-real-zaragoza/29312.jpg",
    "nombre": "Real Zaragoza 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29311",
    "equipo": "la-liga-real-zaragoza",
    "imagen": "futbolmodaes_img/la-liga-real-zaragoza/29311.jpg",
    "nombre": "Real Zaragoza 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28451",
    "equipo": "la-liga-real-zaragoza",
    "imagen": "futbolmodaes_img/la-liga-real-zaragoza/28451.jpg",
    "nombre": "Real Zaragoza 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "24433",
    "equipo": "la-liga-real-zaragoza",
    "imagen": "futbolmodaes_img/la-liga-real-zaragoza/24433.jpg",
    "nombre": "Real Zaragoza 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21479",
    "equipo": "la-liga-real-zaragoza",
    "imagen": "futbolmodaes_img/la-liga-real-zaragoza/21479.jpg",
    "nombre": "Real Zaragoza 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25571",
    "equipo": "la-liga-sevilla",
    "imagen": "futbolmodaes_img/la-liga-sevilla/25571.jpg",
    "nombre": "Sevilla 92-93 Retro Thai Camiseta de Futbol",
    "precio_lista": 28.0,
    "precio_venta": 40.52
  },
  {
    "id": "21509",
    "equipo": "la-liga-sevilla",
    "imagen": "futbolmodaes_img/la-liga-sevilla/21509.jpg",
    "nombre": "Sevilla 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21508",
    "equipo": "la-liga-sevilla",
    "imagen": "futbolmodaes_img/la-liga-sevilla/21508.jpg",
    "nombre": "Sevilla 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21507",
    "equipo": "la-liga-sevilla",
    "imagen": "futbolmodaes_img/la-liga-sevilla/21507.jpg",
    "nombre": "Sevilla 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29208",
    "equipo": "la-liga-sporting-de-gijon",
    "imagen": "futbolmodaes_img/la-liga-sporting-de-gijon/29208.jpg",
    "nombre": "Sporting de Gijon 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "25854",
    "equipo": "la-liga-sporting-de-gijon",
    "imagen": "futbolmodaes_img/la-liga-sporting-de-gijon/25854.jpg",
    "nombre": "Sporting de Gijon 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "11426",
    "equipo": "la-liga-sporting-de-gijon",
    "imagen": "futbolmodaes_img/la-liga-sporting-de-gijon/11426.jpg",
    "nombre": "Sporting de Gijon 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29308",
    "equipo": "la-liga-tenerife",
    "imagen": "futbolmodaes_img/la-liga-tenerife/29308.jpg",
    "nombre": "Tenerife 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "29307",
    "equipo": "la-liga-tenerife",
    "imagen": "futbolmodaes_img/la-liga-tenerife/29307.jpg",
    "nombre": "Tenerife 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "29306",
    "equipo": "la-liga-tenerife",
    "imagen": "futbolmodaes_img/la-liga-tenerife/29306.jpg",
    "nombre": "Tenerife 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "28386",
    "equipo": "la-liga-valencia",
    "imagen": "futbolmodaes_img/la-liga-valencia/28386.jpg",
    "nombre": "Valencia 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28219",
    "equipo": "la-liga-valencia",
    "imagen": "futbolmodaes_img/la-liga-valencia/28219.jpg",
    "nombre": "Valencia 2025-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "28218",
    "equipo": "la-liga-valencia",
    "imagen": "futbolmodaes_img/la-liga-valencia/28218.jpg",
    "nombre": "Valencia 2025-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "28217",
    "equipo": "la-liga-valencia",
    "imagen": "futbolmodaes_img/la-liga-valencia/28217.jpg",
    "nombre": "Valencia 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "25482",
    "equipo": "la-liga-valencia",
    "imagen": "futbolmodaes_img/la-liga-valencia/25482.png",
    "nombre": "Valencia 2025-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "23747",
    "equipo": "la-liga-valencia",
    "imagen": "futbolmodaes_img/la-liga-valencia/23747.jpg",
    "nombre": "Valencia 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28275",
    "equipo": "la-liga-victoria",
    "imagen": "futbolmodaes_img/la-liga-victoria/28275.jpg",
    "nombre": "Victoria 25-26 2a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "23574",
    "equipo": "la-liga-villarreal",
    "imagen": "futbolmodaes_img/la-liga-villarreal/23574.jpg",
    "nombre": "Villarreal 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "23572",
    "equipo": "la-liga-villarreal",
    "imagen": "futbolmodaes_img/la-liga-villarreal/23572.jpg",
    "nombre": "Villarreal 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "16247",
    "equipo": "ligue-1-as-monaco",
    "imagen": "futbolmodaes_img/ligue-1-as-monaco/16247.jpg",
    "nombre": "AS Monaco 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "16246",
    "equipo": "ligue-1-as-monaco",
    "imagen": "futbolmodaes_img/ligue-1-as-monaco/16246.jpg",
    "nombre": "AS Monaco 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12025",
    "equipo": "ligue-1-as-monaco",
    "imagen": "futbolmodaes_img/ligue-1-as-monaco/12025.jpg",
    "nombre": "AS Monaco 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29298",
    "equipo": "ligue-1-olympique-lyonnais",
    "imagen": "futbolmodaes_img/ligue-1-olympique-lyonnais/29298.jpg",
    "nombre": "Olympique Lyonnais 25-26 2a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28111",
    "equipo": "ligue-1-olympique-lyonnais",
    "imagen": "futbolmodaes_img/ligue-1-olympique-lyonnais/28111.jpg",
    "nombre": "Olympique Lyon 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "23248",
    "equipo": "ligue-1-olympique-lyonnais",
    "imagen": "futbolmodaes_img/ligue-1-olympique-lyonnais/23248.jpg",
    "nombre": "Olympique Lyonnais 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "19401",
    "equipo": "ligue-1-olympique-lyonnais",
    "imagen": "futbolmodaes_img/ligue-1-olympique-lyonnais/19401.jpg",
    "nombre": "Olympique Lyon 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28794",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28794.jpg",
    "nombre": "Olympique Marseille 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28279",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28279.jpg",
    "nombre": "Olympique Marseille 25-26 2a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28072",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28072.jpg",
    "nombre": "Olympique Marseille 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "28071",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28071.jpg",
    "nombre": "Olympique Marseille 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "25950",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/25950.jpg",
    "nombre": "Olympique Marseille 25-26 1a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "19402",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/19402.jpg",
    "nombre": "Olympique Marseille 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13862",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/13862.jpg",
    "nombre": "Olympique Marseille 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28070",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28070.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta VAZ 34",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28067",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28067.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta ROWE 17",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28068",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28068.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta NADIR 26",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28069",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28069.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta RONGIER 21",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28063",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28063.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta MURILLO 62",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28064",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28064.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta RAMOS 4",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28065",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28065.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta MOUMBAGNA 14",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28066",
    "equipo": "ligue-1-olympique-marseille",
    "imagen": "futbolmodaes_img/ligue-1-olympique-marseille/28066.jpg",
    "nombre": "Olympique Marseille 25-26 2a Thai Camiseta SELLAMI 45",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "30094",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/30094.jpg",
    "nombre": "Paris Saint-Germain 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30093",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/30093.jpg",
    "nombre": "PSG 26-27 1a Equipacion Thai Camisetas Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "30092",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/30092.jpg",
    "nombre": "PSG 26-27 1a Equipacion Thai Mujer Camiseta De Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "30091",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/30091.jpg",
    "nombre": "PSG 26-27 1a Equipacion Thai Camisetas De Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30049",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Paris Saint-Germain 25-26 Night Edition Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30048",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/30048.jpg",
    "nombre": "PSG 25-26 Night Edition Thai Camiseta De Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29429",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/29429.jpg",
    "nombre": "Paris Saint-Germain 25-26 4a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29408",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/29408.jpg",
    "nombre": "PSG 25-26 4a Equipacion Thai Mujer Camiseta De Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29153",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "PSG 25-26 Especial Thai Camiseta De Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28983",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/28983.jpg",
    "nombre": "PSG 25-26 1a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28982",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/28982.jpg",
    "nombre": "PSG 25-26 3a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28822",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/28822.jpg",
    "nombre": "Paris Saint-Germain 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28797",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/28797.jpg",
    "nombre": "PSG 25-26 3a Equipacion Thai Mujer Camiseta De Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28796",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/28796.jpg",
    "nombre": "PSG 25-26 3a Equipacion Thai Camisetas De Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28266",
    "equipo": "ligue-1-paris-saint-germain",
    "imagen": "futbolmodaes_img/ligue-1-paris-saint-germain/28266.jpg",
    "nombre": "Paris Saint-Germain 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "23809",
    "equipo": "ligue-1-rennais",
    "imagen": "futbolmodaes_img/ligue-1-rennais/23809.jpg",
    "nombre": "Rennais 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27867",
    "equipo": "ligue-1-strasbourg",
    "imagen": "futbolmodaes_img/ligue-1-strasbourg/27867.jpg",
    "nombre": "Strasbourg 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "29725",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/29725.jpg",
    "nombre": "Alemania 26-27 Negro Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29715",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/29715.jpg",
    "nombre": "Alemania 26-27 Negro Pre Match Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29303",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/29303.jpg",
    "nombre": "Alemania 2026-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "28527",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/28527.jpg",
    "nombre": "Alemania 2026-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "27070",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/27070.jpg",
    "nombre": "Alemania 26-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "25419",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/25419.jpg",
    "nombre": "Alemania 26-27 2a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "25462",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/25462.jpg",
    "nombre": "Alemania 26-27 1a Jugador Version Manga Larga Camiseta",
    "precio_lista": 25.9,
    "precio_venta": 37.48
  },
  {
    "id": "23102",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/23102.jpg",
    "nombre": "Alemania 2026-27 2a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "22295",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/22295.jpg",
    "nombre": "Alemania 2024-25 Euro Copa 2a Equipacion Thai Camiseta",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "22293",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/22293.jpg",
    "nombre": "Alemania 2026-27 1a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "16897",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/16897.jpg",
    "nombre": "Alemania 2026-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "22766",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/22766.jpg",
    "nombre": "Alemania 26-27 Mundial 2a Equipacion Thai Camiseta WIRTZ 17",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "22767",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/22767.jpg",
    "nombre": "Alemania 26-27 Mundial 2a Equipacion Thai Camiseta STILLER 16",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "22761",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/22761.jpg",
    "nombre": "Alemania 26-27 Mundial 2a Equipacion Thai Camiseta GNABRY 20",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "22762",
    "equipo": "nacional-alemania",
    "imagen": "futbolmodaes_img/nacional-alemania/22762.jpg",
    "nombre": "Alemania 26-27 Mundial 2a Equipacion Thai Camiseta MUSIALA 10",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29458",
    "equipo": "nacional-argelia",
    "imagen": "futbolmodaes_img/nacional-argelia/29458.jpg",
    "nombre": "Argelia 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "29442",
    "equipo": "nacional-argelia",
    "imagen": "futbolmodaes_img/nacional-argelia/29442.jpg",
    "nombre": "Argelia 26-27 Pre Match Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29441",
    "equipo": "nacional-argelia",
    "imagen": "futbolmodaes_img/nacional-argelia/29441.jpg",
    "nombre": "Argelia 26-27 Pre Match Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "16997",
    "equipo": "nacional-argelia",
    "imagen": "futbolmodaes_img/nacional-argelia/16997.jpg",
    "nombre": "Argelia 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "16995",
    "equipo": "nacional-argelia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Argelia 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29852",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/29852.jpg",
    "nombre": "Argentina 26-27 1a Equipacion Thai Camisetas Manga Larga",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "29851",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/29851.jpg",
    "nombre": "Argentina 2026-27 2a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "29807",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/29807.jpg",
    "nombre": "Argentina 26-27 2a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "29459",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/29459.jpg",
    "nombre": "Argentina 2026-27 2a Thai Camisetas Manga Larga",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "29328",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/29328.jpg",
    "nombre": "Argentina 26-27 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "28524",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/28524.jpg",
    "nombre": "Argentina 2026-27 2a Thai Camisetas con Champion",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "24912",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Argentina 2026-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "25098",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/25098.jpg",
    "nombre": "Argentina 2026-27 1a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "25457",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/25457.png",
    "nombre": "Argentina 26-27 2a Equipacion Champion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "26741",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Argentina 26-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "24871",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/24871.jpg",
    "nombre": "Argentina 2026-27 1a Thai Camisetas con Champion",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "23665",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Argentina 26-27 Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "23116",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/23116.jpg",
    "nombre": "Argentina 26-27 1a Equipacion Jugador Version Camisetas Manga Larga",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "22792",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/22792.jpg",
    "nombre": "Argentina 2026-27 Mundia 2a Thai Camisetas DIMARIA 11",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "22795",
    "equipo": "nacional-argentina",
    "imagen": "futbolmodaes_img/nacional-argentina/22795.jpg",
    "nombre": "Argentina 2026-27 Mundia 2a Thai Camisetas ROMERO 13",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "30117",
    "equipo": "nacional-articulos-de-copa-mundo",
    "imagen": "futbolmodaes_img/nacional-articulos-de-copa-mundo/30117.jpg",
    "nombre": "2026-27 Peluche de la Copa del Mundo USA",
    "precio_lista": 8.0,
    "precio_venta": 11.58
  },
  {
    "id": "30118",
    "equipo": "nacional-articulos-de-copa-mundo",
    "imagen": "futbolmodaes_img/nacional-articulos-de-copa-mundo/30118.jpg",
    "nombre": "Peluche de la Copa del Mundo Mexico",
    "precio_lista": 8.0,
    "precio_venta": 11.58
  },
  {
    "id": "30116",
    "equipo": "nacional-articulos-de-copa-mundo",
    "imagen": "futbolmodaes_img/nacional-articulos-de-copa-mundo/30116.jpg",
    "nombre": "Peluche de la Copa del Mundo Canada",
    "precio_lista": 8.0,
    "precio_venta": 11.58
  },
  {
    "id": "19615",
    "equipo": "nacional-australia",
    "imagen": "futbolmodaes_img/nacional-australia/19615.jpg",
    "nombre": "Australia 2026-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29826",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29826.jpg",
    "nombre": "Belgica 26-27 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "25421",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/25421.jpg",
    "nombre": "Belgica 2026-27 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "25422",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/25422.jpg",
    "nombre": "Belgica 2026-27 1a Equipacion Jugador Version Manga Larga Camisetas",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "22558",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/22558.jpg",
    "nombre": "Belgica 2026-27 Mundial 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "19598",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Belgica 2026-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "16993",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/16993.jpg",
    "nombre": "Belgica 26-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "16894",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/16894.jpg",
    "nombre": "Belgica 2026-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "12445",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/12445.jpg",
    "nombre": "Belgica 2026-27 Mundial 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29850",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29850.jpg",
    "nombre": "Belgica 2026-27 1a Mundial Equipacion Thai Camisetas LUKAKU 10",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29849",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29849.jpg",
    "nombre": "Belgica 2026-27 1a Mundial Equipacion Thai Camisetas DE BRUYNE 7",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29848",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29848.jpg",
    "nombre": "Belgica 2026-27 Mundial 2a Equipacion Thai Camisetas WITSEL 6",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29846",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29846.jpg",
    "nombre": "Belgica 2026-27 Mundial 2a Equipacion Thai Camisetas VANHOUTTE 18",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29847",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29847.jpg",
    "nombre": "Belgica 2026-27 Mundial 2a Equipacion Thai Camisetas VANAKEN 20",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29840",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29840.jpg",
    "nombre": "Belgica 2026-27 Mundial 2a Equipacion Thai Camisetas SAELEMAEKERS 22",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29841",
    "equipo": "nacional-belgica",
    "imagen": "futbolmodaes_img/nacional-belgica/29841.jpg",
    "nombre": "Belgica 2026-27 Mundial 2a Equipacion Thai Camisetas LUKEBAKIO 14",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29868",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/29868.jpg",
    "nombre": "Brasil 26-27 Conmemorativa Edition Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28525",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/28525.jpg",
    "nombre": "Brasil 2026-27 Portero Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27652",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/27652.jpg",
    "nombre": "Brasil 26-27 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27647",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/27647.jpg",
    "nombre": "Brasil 2026-27 2a Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27525",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/27525.jpg",
    "nombre": "Brasil 2025-26 Especial Thai Camiseta-Star",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27095",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/27095.jpg",
    "nombre": "Brasil 2025-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27072",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/27072.jpg",
    "nombre": "Brasil 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "26960",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/26960.jpg",
    "nombre": "Brasil 26-27 1a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "26828",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/26828.jpg",
    "nombre": "Brasil 2025 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "24781",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/24781.jpg",
    "nombre": "Brasil 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "22562",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brasil 26-27 Camiseta Colaboracion con Hollywood",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "17240",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/17240.jpg",
    "nombre": "Brasil 2026-27 2a Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "14794",
    "equipo": "nacional-brasil",
    "imagen": "futbolmodaes_img/nacional-brasil/14794.jpg",
    "nombre": "Brasil 2026-27 1a Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "20880",
    "equipo": "nacional-camerun",
    "imagen": "futbolmodaes_img/nacional-camerun/20880.jpg",
    "nombre": "Cameroon 26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "20881",
    "equipo": "nacional-camerun",
    "imagen": "futbolmodaes_img/nacional-camerun/20881.jpg",
    "nombre": "Cameroon 26-27 3a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "20879",
    "equipo": "nacional-camerun",
    "imagen": "futbolmodaes_img/nacional-camerun/20879.jpg",
    "nombre": "Cameroon 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "17025",
    "equipo": "nacional-chile",
    "imagen": "futbolmodaes_img/nacional-chile/17025.jpg",
    "nombre": "Chile 24-25 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "17024",
    "equipo": "nacional-chile",
    "imagen": "futbolmodaes_img/nacional-chile/17024.jpg",
    "nombre": "Chile 24-25 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "16893",
    "equipo": "nacional-chile",
    "imagen": "futbolmodaes_img/nacional-chile/16893.jpg",
    "nombre": "Chile 2026-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "29855",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/29855.jpg",
    "nombre": "Colombia 26-27 2a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29808",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/29808.jpg",
    "nombre": "Colombia 26-27 2a Equipacion Jugador Version Manga Larga Camisetas",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "29712",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/29712.jpg",
    "nombre": "Colombia 26-27 2a Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29440",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/29440.jpg",
    "nombre": "Colombia 26-27 1a Equipacion Jugador Version Manga Larga Camisetas",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "29329",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/29329.jpg",
    "nombre": "Colombia 26-27 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "26624",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/26624.jpg",
    "nombre": "Colombia 26-27 1a Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "23103",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/23103.jpg",
    "nombre": "Colombia 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21872",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Colombia 26-27 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "15271",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/15271.jpg",
    "nombre": "Colombia 26-27 2a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "12810",
    "equipo": "nacional-colombia",
    "imagen": "futbolmodaes_img/nacional-colombia/12810.jpg",
    "nombre": "Colombia 26-27 1a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "19528",
    "equipo": "nacional-croacia",
    "imagen": "futbolmodaes_img/nacional-croacia/19528.jpg",
    "nombre": "Croacia 26-27 Mundial 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12604",
    "equipo": "nacional-croacia",
    "imagen": "futbolmodaes_img/nacional-croacia/12604.jpg",
    "nombre": "Croacia 26-27 Mundial 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25114",
    "equipo": "nacional-dinamarca",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Dinamarca 2024-25 Eurocopa 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "25115",
    "equipo": "nacional-dinamarca",
    "imagen": "futbolmodaes_img/nacional-dinamarca/25115.jpg",
    "nombre": "Dinamarca 2024-25 Eurocopa 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "19617",
    "equipo": "nacional-ecuador",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Ecuador 2024-25 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "16908",
    "equipo": "nacional-ecuador",
    "imagen": "futbolmodaes_img/nacional-ecuador/16908.jpg",
    "nombre": "Ecuador 2024-25 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22393",
    "equipo": "nacional-escocia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Escocia 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "19619",
    "equipo": "nacional-escocia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Escocia 2026-27 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "30022",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/30022.jpg",
    "nombre": "Espana 2026-27 2a Equipacion Thai Camisetas con Publicidad",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29861",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29861.jpg",
    "nombre": "Espana 26-27 1a Equipacion Jugador Version Camiseta Manga Larga",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "29810",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29810.jpg",
    "nombre": "Espana 2026-27 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29770",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29770.jpg",
    "nombre": "Espana 2026-27 2a Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29767",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29767.jpg",
    "nombre": "Espana 1994 Retro 2a Thai Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "29706",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29706.jpg",
    "nombre": "Espana 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29635",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29635.jpg",
    "nombre": "Espana 2026-27 Mundial 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29377",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29377.jpg",
    "nombre": "Espana 2026-27 Mundial 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29300",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/29300.jpg",
    "nombre": "Espana 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28863",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/28863.jpg",
    "nombre": "Espana 2026-27 1a Babe Camiseta",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27519",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/27519.jpg",
    "nombre": "Espana 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25086",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/25086.jpg",
    "nombre": "Espana 26-27 2a Equipacion Manga Larga Thai Camiseta",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "25561",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/25561.jpg",
    "nombre": "Espana 1996 Retro 1a Thai Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "26796",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/26796.jpg",
    "nombre": "Espana 2026-27 1a Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "24876",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/24876.jpg",
    "nombre": "Espana 1998-99 Retro 1a Thai Camisetas",
    "precio_lista": 23.0,
    "precio_venta": 33.28
  },
  {
    "id": "29869",
    "equipo": "nacional-estados-unidos",
    "imagen": "futbolmodaes_img/nacional-estados-unidos/29869.jpg",
    "nombre": "Estados Unidos 26-27 Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29771",
    "equipo": "nacional-estados-unidos",
    "imagen": "futbolmodaes_img/nacional-estados-unidos/29771.jpg",
    "nombre": "USA 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "27684",
    "equipo": "nacional-estados-unidos",
    "imagen": "futbolmodaes_img/nacional-estados-unidos/27684.jpg",
    "nombre": "Estados Unidos 26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25512",
    "equipo": "nacional-estados-unidos",
    "imagen": "futbolmodaes_img/nacional-estados-unidos/25512.jpg",
    "nombre": "Estados Unidos 26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13109",
    "equipo": "nacional-estados-unidos",
    "imagen": "futbolmodaes_img/nacional-estados-unidos/13109.jpg",
    "nombre": "Estados Unidos 26-27 Portero Thai Camisetas-Negro",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13108",
    "equipo": "nacional-estados-unidos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Estados Unidos 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "29819",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/29819.jpg",
    "nombre": "Francia 2026-27 2a Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29818",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/29818.jpg",
    "nombre": "Francia 2026-27 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29817",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/29817.jpg",
    "nombre": "Francia 2026-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27369",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/27369.jpg",
    "nombre": "Francia 26-27 Mundial Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "24910",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/24910.jpg",
    "nombre": "Francia 2026-27 1a Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "25510",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/25510.jpg",
    "nombre": "Francia 26-27 2a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "24877",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/24877.jpg",
    "nombre": "Francia 1998 Retro 1a Equipacion Thai Camisetas",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "22507",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/22507.jpg",
    "nombre": "Francia 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "22505",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/22505.jpg",
    "nombre": "Francia 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "20981",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Francia 26-27 Camiseta Colaboracion con Hollywood",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22821",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/22821.jpg",
    "nombre": "Francia 2026-27 Mundial 2a Equipacion Thai Camisetas OLISE 11",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "22823",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/22823.jpg",
    "nombre": "Francia 2026-27 Mundial 2a Equipacion Thai Camisetas MBAPPE 10",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "22814",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/22814.jpg",
    "nombre": "Francia 2026-27 Mundial 2a Equipacion Thai Camisetas DEMBELE 7",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "22815",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/22815.jpg",
    "nombre": "Francia 2026-27 Mundial 2a Equipacion Thai Camisetas RABIOT 14",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "22817",
    "equipo": "nacional-francia",
    "imagen": "futbolmodaes_img/nacional-francia/22817.jpg",
    "nombre": "Francia 2026-27 Mundial 2a Equipacion Thai Camisetas UPAMECANO 4",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "26645",
    "equipo": "nacional-gales",
    "imagen": "futbolmodaes_img/nacional-gales/26645.jpg",
    "nombre": "Gales 2026-27 1a Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "19621",
    "equipo": "nacional-gales",
    "imagen": "futbolmodaes_img/nacional-gales/19621.jpg",
    "nombre": "Gales 2026-27 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "16910",
    "equipo": "nacional-gales",
    "imagen": "futbolmodaes_img/nacional-gales/16910.jpg",
    "nombre": "Gales 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29867",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/29867.jpg",
    "nombre": "Ghana 26-27 Polo Thai Camiseta Blanco",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29866",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/29866.jpg",
    "nombre": "Ghana 26-27 Polo Thai Camiseta Amarillo",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29714",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/29714.jpg",
    "nombre": "Ghana 26-27 Po Thai Camiseta Amarillo",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29713",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/29713.jpg",
    "nombre": "Ghana 26-27 Po Thai Camiseta Blanco",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29707",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/29707.jpg",
    "nombre": "Ghana 26-27 Negro Pre Match Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29434",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/29434.jpg",
    "nombre": "Ghana 26-27 Amarillo Pre Match Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26738",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/26738.jpg",
    "nombre": "Ghana 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26739",
    "equipo": "nacional-ghana",
    "imagen": "futbolmodaes_img/nacional-ghana/26739.jpg",
    "nombre": "Ghana 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22587",
    "equipo": "nacional-grecia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Grecia 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28390",
    "equipo": "nacional-guatemala",
    "imagen": "futbolmodaes_img/nacional-guatemala/28390.jpg",
    "nombre": "Guatemala-25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "13103",
    "equipo": "nacional-guatemala",
    "imagen": "futbolmodaes_img/nacional-guatemala/13103.jpg",
    "nombre": "Guatemala-26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "13102",
    "equipo": "nacional-guatemala",
    "imagen": "futbolmodaes_img/nacional-guatemala/13102.jpg",
    "nombre": "Guatemala-26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22427",
    "equipo": "nacional-holanda",
    "imagen": "futbolmodaes_img/nacional-holanda/22427.jpg",
    "nombre": "Holanda 2a Equipacion Thai Mujer Camiseta 2026-27",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "22426",
    "equipo": "nacional-holanda",
    "imagen": "futbolmodaes_img/nacional-holanda/22426.jpg",
    "nombre": "Holanda 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "22425",
    "equipo": "nacional-holanda",
    "imagen": "futbolmodaes_img/nacional-holanda/22425.jpg",
    "nombre": "Holanda 26-27 1a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "22424",
    "equipo": "nacional-holanda",
    "imagen": "futbolmodaes_img/nacional-holanda/22424.jpg",
    "nombre": "Holanda 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "19601",
    "equipo": "nacional-holanda",
    "imagen": "futbolmodaes_img/nacional-holanda/19601.jpg",
    "nombre": "Holanda 2026-27 Mundial 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "14788",
    "equipo": "nacional-holanda",
    "imagen": "futbolmodaes_img/nacional-holanda/14788.jpg",
    "nombre": "Holanda 1a Equipacion Thai Mujer Camiseta 2026-27",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29878",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29878.jpg",
    "nombre": "Inglaterra 2026-27 Co-Branded Thai Camisetas de PALACE 7",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "29825",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29825.jpg",
    "nombre": "Inglaterra 2026-27 Portero Thai Camisetas PICKFORD 1",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29824",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29824.jpg",
    "nombre": "Inglaterra 2026-27 Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29823",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29823.jpg",
    "nombre": "Inglaterra 26-27 2a Equipacion Thai Camiseta SAKA 7",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29821",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29821.jpg",
    "nombre": "Inglaterra 26-27 2a Equipacion Thai Camiseta RICE 4",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29822",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29822.jpg",
    "nombre": "Inglaterra 26-27 1a Equipacion Thai Camiseta SAKA 7",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29820",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29820.jpg",
    "nombre": "Inglaterra 26-27 1a Equipacion Thai Camiseta RICE 4",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29711",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/29711.jpg",
    "nombre": "Inglaterra 2026-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27640",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/27640.jpg",
    "nombre": "Inglaterra 2026-27 Copa Mundial 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25102",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/25102.jpg",
    "nombre": "Inglaterra 26-27 Mundial 2a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "25103",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/25103.jpg",
    "nombre": "Inglaterra 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25104",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/25104.jpg",
    "nombre": "Inglaterra 26-27 2a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "25513",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/25513.jpg",
    "nombre": "Inglaterra 26-27 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "19530",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/19530.jpg",
    "nombre": "Inglaterra 2026-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "17261",
    "equipo": "nacional-inglaterra",
    "imagen": "futbolmodaes_img/nacional-inglaterra/17261.jpg",
    "nombre": "Inglaterra 26-27 1a Equipacion Thai Camiseta KANE 9",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "19535",
    "equipo": "nacional-ireland",
    "imagen": "futbolmodaes_img/nacional-ireland/19535.jpg",
    "nombre": "Irlanda 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "16912",
    "equipo": "nacional-ireland",
    "imagen": "futbolmodaes_img/nacional-ireland/16912.jpg",
    "nombre": "Irlanda 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29323",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/29323.jpg",
    "nombre": "Italia 2026-27 2a Jugador Version Camisetas De Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29302",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/29302.jpg",
    "nombre": "Italia 26-27 2a Equipacion Thai Camisetas De Futbol",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "29301",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/29301.jpg",
    "nombre": "Italia 26-27 1a Equipacion Thai Camisetas De Futbol",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "24954",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/24954.jpg",
    "nombre": "Italia 2026-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "24790",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/24790.jpg",
    "nombre": "Italia 2026-27 1a Jugador Version Manga Larga Camisetas De Futbol",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "24789",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/24789.jpg",
    "nombre": "Italia 2026-27 1a Jugador Version Camisetas De Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "19536",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/19536.jpg",
    "nombre": "Italia 2026-27 1a Thai Mujer Camisetas De Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "22392",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/22392.jpg",
    "nombre": "Italia 2026-27 Mundial 2a Equipacion Thai Camisetas TONALI 8",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "18214",
    "equipo": "nacional-italia",
    "imagen": "futbolmodaes_img/nacional-italia/18214.jpg",
    "nombre": "Italia 2026-27 Mundial 1a Equipacion Thai Camisetas TONALI 8",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29863",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Japon 2026-27 2a Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29856",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29856.jpg",
    "nombre": "Japon 2026-27 2a Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29814",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29814.jpg",
    "nombre": "Japon 2026-27 2a Equipacion Thai Camisetas MITOMA 7",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29813",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29813.jpg",
    "nombre": "Japon 2026-27 1a Equipacion Thai Camisetas MITOMA 7",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "29812",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29812.jpg",
    "nombre": "Japon 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29811",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29811.jpg",
    "nombre": "Japon 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29457",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29457.jpg",
    "nombre": "Japon 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29454",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29454.jpg",
    "nombre": "Japon 2026-27 Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29374",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/29374.jpg",
    "nombre": "Japon 2025-26 1a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "27085",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/27085.jpg",
    "nombre": "Japon 2025-26 Una Pieza Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27086",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/27086.jpg",
    "nombre": "Japon 2025-26 Saiyajin Thai Camisetas-2",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27081",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/27081.jpg",
    "nombre": "Japon 2025-26 NeZhaThai Camisetas-2",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27082",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/27082.jpg",
    "nombre": "Japon 2025-26 NeZhaThai Camisetas-3",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27083",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/27083.jpg",
    "nombre": "Japon 2025-26 NeZhaThai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27084",
    "equipo": "nacional-japon",
    "imagen": "futbolmodaes_img/nacional-japon/27084.jpg",
    "nombre": "Japon 2025-26 Saiyajin Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12733",
    "equipo": "nacional-marruecos",
    "imagen": "futbolmodaes_img/nacional-marruecos/12733.jpg",
    "nombre": "Marruecos 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12732",
    "equipo": "nacional-marruecos",
    "imagen": "futbolmodaes_img/nacional-marruecos/12732.jpg",
    "nombre": "Marruecos 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29439",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/29439.jpg",
    "nombre": "Mexico 26-27 2a Equipacion Jugador Version Manga Larga Camisetas",
    "precio_lista": 25.9,
    "precio_venta": 37.48
  },
  {
    "id": "29330",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/29330.jpg",
    "nombre": "Mexico 26-27 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29304",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/29304.jpg",
    "nombre": "Mexico 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "27528",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/27528.jpg",
    "nombre": "Mexico 2026-27 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27184",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/27184.jpg",
    "nombre": "Mexico 26-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "21450",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/21450.jpg",
    "nombre": "Mexico 26-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "19603",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/19603.jpg",
    "nombre": "Mexico 26-27 Mundial Portero Ninos Camiseta y Shorts",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "14803",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Mexico 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "12613",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/12613.jpg",
    "nombre": "Mexico 26-27 1a Equipacion Jugador Version Manga Larga Camisetas",
    "precio_lista": 25.9,
    "precio_venta": 37.48
  },
  {
    "id": "10219",
    "equipo": "nacional-mexico",
    "imagen": "futbolmodaes_img/nacional-mexico/10219.jpg",
    "nombre": "Mexico 26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27523",
    "equipo": "nacional-nigeria",
    "imagen": "futbolmodaes_img/nacional-nigeria/27523.jpg",
    "nombre": "Nigeria 2026-27 Copa Mundial 1a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "27522",
    "equipo": "nacional-nigeria",
    "imagen": "futbolmodaes_img/nacional-nigeria/27522.jpg",
    "nombre": "Nigeria 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "19602",
    "equipo": "nacional-nigeria",
    "imagen": "futbolmodaes_img/nacional-nigeria/19602.jpg",
    "nombre": "Nigeria 26-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "17022",
    "equipo": "nacional-nigeria",
    "imagen": "futbolmodaes_img/nacional-nigeria/17022.jpg",
    "nombre": "Nigeria 2026-27 Copa Mundial 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "19597",
    "equipo": "nacional-noruega",
    "imagen": "futbolmodaes_img/nacional-noruega/19597.jpg",
    "nombre": "Noruega 26-27 Mundial 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "19596",
    "equipo": "nacional-noruega",
    "imagen": "futbolmodaes_img/nacional-noruega/19596.jpg",
    "nombre": "Noruega 2026-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13116",
    "equipo": "nacional-nueva-zelanda",
    "imagen": "futbolmodaes_img/nacional-nueva-zelanda/13116.jpg",
    "nombre": "Nueva Zelanda 2026-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29904",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/29904.jpg",
    "nombre": "Paraguay 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29903",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/29903.jpg",
    "nombre": "Paraguay 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29875",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/29875.jpg",
    "nombre": "Korea 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29873",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/29873.jpg",
    "nombre": "Costa de Marfil 26-27 Mundial 2a Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29862",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/29862.jpg",
    "nombre": "Egipto 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29854",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/29854.jpg",
    "nombre": "Jamaica 26-27 1a Equipacion Thai Camisetas MARLEY 10",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "25516",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/25516.jpg",
    "nombre": "Costa de Marfil 26-27 Mundial 1a Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25517",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/25517.jpg",
    "nombre": "Canada 26-27 Mundial 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "23090",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/23090.jpg",
    "nombre": "Egipto 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "23021",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/23021.jpg",
    "nombre": "Canada 26-27 Mundial 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "23018",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/23018.jpg",
    "nombre": "Austria 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22853",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Jamaica 26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22852",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/22852.jpg",
    "nombre": "Jamaica 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22394",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/22394.jpg",
    "nombre": "Chequia 2027 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22390",
    "equipo": "nacional-otro-nacional-camiseta",
    "imagen": "futbolmodaes_img/nacional-otro-nacional-camiseta/22390.jpg",
    "nombre": "Austria 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25166",
    "equipo": "nacional-peru",
    "imagen": "futbolmodaes_img/nacional-peru/25166.jpg",
    "nombre": "Peru 24-25 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12769",
    "equipo": "nacional-peru",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Peru 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13120",
    "equipo": "nacional-polonia",
    "imagen": "futbolmodaes_img/nacional-polonia/13120.jpg",
    "nombre": "Poland 2024-25 Eurocopa 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13119",
    "equipo": "nacional-polonia",
    "imagen": "futbolmodaes_img/nacional-polonia/13119.jpg",
    "nombre": "Poland 2024-25 Eurocopa 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29859",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/29859.jpg",
    "nombre": "Portugal 2026-27 Portero Thai Camisetas-Verde",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29860",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/29860.jpg",
    "nombre": "Portugal 2026-27 Portero Thai Camisetas-Rosa",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29858",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/29858.jpg",
    "nombre": "Portugal 26-27 Pantera Negra Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29857",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/29857.jpg",
    "nombre": "Portugal 26-27 2a Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "29769",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/29769.jpg",
    "nombre": "Portugal 2026-27 1a Equipacion Manga Larga Thai Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29438",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/29438.jpg",
    "nombre": "Portugal 2026-27 2a Equipacion Jugador Version Manga Larga Camiseta",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "29406",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/29406.png",
    "nombre": "Portugal 2026-27 2a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "27054",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/27054.jpg",
    "nombre": "Portugal 2026-27 Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "24952",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/24952.png",
    "nombre": "Portugal 2026-27 2a Equipacion Thai Camiseta",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "25037",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/25037.jpg",
    "nombre": "Portugal 2026-27 1a Equipacion Jugador Version Manga Larga Camiseta",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "25105",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/25105.jpg",
    "nombre": "Portugal 2026-27 Portero Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "24806",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/24806.jpg",
    "nombre": "Portugal 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "24780",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/24780.jpg",
    "nombre": "Portugal 26-27 Co-Branded Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22734",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portugal 2026-27 Pre Match Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22568",
    "equipo": "nacional-portugal",
    "imagen": "futbolmodaes_img/nacional-portugal/22568.jpg",
    "nombre": "Portugal 2026-27 Copa Mundial Portero Camiseta y Shorts",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27368",
    "equipo": "nacional-romania",
    "imagen": "futbolmodaes_img/nacional-romania/27368.jpg",
    "nombre": "Rumania 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27367",
    "equipo": "nacional-romania",
    "imagen": "futbolmodaes_img/nacional-romania/27367.jpg",
    "nombre": "Rumania 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27166",
    "equipo": "nacional-romania",
    "imagen": "futbolmodaes_img/nacional-romania/27166.jpg",
    "nombre": "Rumania 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28388",
    "equipo": "nacional-salvador",
    "imagen": "futbolmodaes_img/nacional-salvador/28388.jpg",
    "nombre": "Salvador 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28389",
    "equipo": "nacional-salvador",
    "imagen": "futbolmodaes_img/nacional-salvador/28389.jpg",
    "nombre": "Salvador 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28387",
    "equipo": "nacional-salvador",
    "imagen": "futbolmodaes_img/nacional-salvador/28387.jpg",
    "nombre": "Salvador 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29865",
    "equipo": "nacional-senegal",
    "imagen": "futbolmodaes_img/nacional-senegal/29865.jpg",
    "nombre": "Senegal 26-27 2a Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29864",
    "equipo": "nacional-senegal",
    "imagen": "futbolmodaes_img/nacional-senegal/29864.jpg",
    "nombre": "Senegal 26-27 1a Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29321",
    "equipo": "nacional-senegal",
    "imagen": "futbolmodaes_img/nacional-senegal/29321.jpg",
    "nombre": "Senegal 2026-27 2a Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "19540",
    "equipo": "nacional-senegal",
    "imagen": "futbolmodaes_img/nacional-senegal/19540.jpg",
    "nombre": "Senegal 2026-27 1a Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29871",
    "equipo": "nacional-sudafrica",
    "imagen": "futbolmodaes_img/nacional-sudafrica/29871.jpg",
    "nombre": "Sudafrica 26-27 Mundial 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29870",
    "equipo": "nacional-sudafrica",
    "imagen": "futbolmodaes_img/nacional-sudafrica/29870.jpg",
    "nombre": "Sudafrica 26-27 Mundial 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22300",
    "equipo": "nacional-suecia",
    "imagen": "futbolmodaes_img/nacional-suecia/22300.jpg",
    "nombre": "Suecia 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12547",
    "equipo": "nacional-suecia",
    "imagen": "futbolmodaes_img/nacional-suecia/12547.jpg",
    "nombre": "Suecia 26-27 1a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "12545",
    "equipo": "nacional-suecia",
    "imagen": "futbolmodaes_img/nacional-suecia/12545.jpg",
    "nombre": "Suecia 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12696",
    "equipo": "nacional-suecia",
    "imagen": "futbolmodaes_img/nacional-suecia/12696.jpg",
    "nombre": "Suecia 2026-27 Mundial 1a Equipacion Thai Camiseta ISAK 9",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29444",
    "equipo": "nacional-suiza",
    "imagen": "futbolmodaes_img/nacional-suiza/29444.jpg",
    "nombre": "Suiza 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27154",
    "equipo": "nacional-suiza",
    "imagen": "futbolmodaes_img/nacional-suiza/27154.jpg",
    "nombre": "Suiza 2026-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "19539",
    "equipo": "nacional-suiza",
    "imagen": "futbolmodaes_img/nacional-suiza/19539.jpg",
    "nombre": "Suiza 2026-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "16994",
    "equipo": "nacional-suiza",
    "imagen": "futbolmodaes_img/nacional-suiza/16994.jpg",
    "nombre": "Suiza 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29320",
    "equipo": "nacional-tunez",
    "imagen": "futbolmodaes_img/nacional-tunez/29320.jpg",
    "nombre": "Tunez 2026-27 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "23123",
    "equipo": "nacional-tunez",
    "imagen": "futbolmodaes_img/nacional-tunez/23123.jpg",
    "nombre": "Tunez 26-27 3a Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "19593",
    "equipo": "nacional-tunez",
    "imagen": "futbolmodaes_img/nacional-tunez/19593.jpg",
    "nombre": "Tunez 2026-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "19592",
    "equipo": "nacional-tunez",
    "imagen": "futbolmodaes_img/nacional-tunez/19592.jpg",
    "nombre": "Tunez 2026-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "19532",
    "equipo": "nacional-tunez",
    "imagen": "futbolmodaes_img/nacional-tunez/19532.jpg",
    "nombre": "Tunez 26-27 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "16898",
    "equipo": "nacional-tunez",
    "imagen": "futbolmodaes_img/nacional-tunez/16898.jpg",
    "nombre": "Tunez 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "16896",
    "equipo": "nacional-ucrania",
    "imagen": "futbolmodaes_img/nacional-ucrania/16896.jpg",
    "nombre": "Ucrania 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "7735",
    "equipo": "nacional-ucrania",
    "imagen": "futbolmodaes_img/nacional-ucrania/7735.jpg",
    "nombre": "Ukraine 2026-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27521",
    "equipo": "nacional-uruguay",
    "imagen": "futbolmodaes_img/nacional-uruguay/27521.jpg",
    "nombre": "Uruguay 2025-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27520",
    "equipo": "nacional-uruguay",
    "imagen": "futbolmodaes_img/nacional-uruguay/27520.jpg",
    "nombre": "Uruguay 2025-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25706",
    "equipo": "nacional-uruguay",
    "imagen": "futbolmodaes_img/nacional-uruguay/25706.jpg",
    "nombre": "Uruguaya 2026-27 Pre Match Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12616",
    "equipo": "nacional-uruguay",
    "imagen": "futbolmodaes_img/nacional-uruguay/12616.jpg",
    "nombre": "Uruguaya 2026-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12615",
    "equipo": "nacional-uruguay",
    "imagen": "futbolmodaes_img/nacional-uruguay/12615.jpg",
    "nombre": "Uruguaya 2026-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22687",
    "equipo": "nacional-venezia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Venezia 24-25 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "14717",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "George 13 All Stars Negro NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14716",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "George 13 All Stars Blanco NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14715",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14715.jpg",
    "nombre": "Nikola Jokic 15 All Stars Negro NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14714",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14714.jpg",
    "nombre": "Walker 15 All Stars Negro NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14713",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14713.jpg",
    "nombre": "Walker 15 All Stars Blanco NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14712",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14712.jpg",
    "nombre": "Kawhi Leonard 2 All Stars Negro NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14711",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14711.jpg",
    "nombre": "EMBIID 21 All Stars Blanco NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14710",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "ALL Stars Swingman NBA Camisetas Bird 33",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14709",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14709.jpg",
    "nombre": "Dwyane Wade 3 All Stars Blanco Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14708",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14708.jpg",
    "nombre": "Dirk Nowitzki 41 Negro All Star NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14707",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14707.jpg",
    "nombre": "Dirk Nowitzki 41 Blanco All Star NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14706",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14706.jpg",
    "nombre": "Russell 1 Negro All Star NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14705",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14705.jpg",
    "nombre": "Damian Lillard 0 All Stars Negro Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14704",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14704.jpg",
    "nombre": "Ben-Simmons 25 All Stars Negro NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "14703",
    "equipo": "nba-all-star",
    "imagen": "futbolmodaes_img/nba-all-star/14703.jpg",
    "nombre": "Ben-Simmons 25 All Stars Blanco NBA Camiseta 2019",
    "precio_lista": 25.5,
    "precio_venta": 36.9
  },
  {
    "id": "7119",
    "equipo": "nba-atlanta-hawks",
    "imagen": "futbolmodaes_img/nba-atlanta-hawks/7119.jpg",
    "nombre": "Atlanta Hawks 2023 Rojo Swingman NBA Camiseta YOUNG 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7118",
    "equipo": "nba-atlanta-hawks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "NFL Camiseta de HILL10",
    "precio_lista": 31.0,
    "precio_venta": 44.86
  },
  {
    "id": "7116",
    "equipo": "nba-atlanta-hawks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta Hawks 2023 Ciudad Swingman NBA Camiseta YOUNG 16",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7115",
    "equipo": "nba-atlanta-hawks",
    "imagen": "futbolmodaes_img/nba-atlanta-hawks/7115.jpg",
    "nombre": "Atlanta Hawks Swingman NBA Camisetas YOUNG 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7113",
    "equipo": "nba-atlanta-hawks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta Hawks 2023 Swingman NBA Camiseta YOUNG 16",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4063",
    "equipo": "nba-atlanta-hawks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta Hawks 2023 Negro Swingman NBA Camiseta YOUNG 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27182",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtics Swingman NBA TAMTUM 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27181",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/nba-boston-celtics/27181.jpg",
    "nombre": "Boston Celtics Blanco Swingman NBA Camisetas RUSSELL 6",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27178",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/nba-boston-celtics/27178.jpg",
    "nombre": "Boston Celtics Siwngman NBA Camisetas RUSSELL 6",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27179",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/nba-boston-celtics/27179.jpg",
    "nombre": "Boston Celtics Camisetas BIRD 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27180",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/nba-boston-celtics/27180.jpg",
    "nombre": "Boston Celtics Siwngman NBA Camisetas GARNETT 5",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "24576",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtic Retro Swingman NBA Camisetas de BIRD 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "21319",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtic Retro NBA Camisetas de BIRD 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16169",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtic NCAA NBA Camiseta BIRD 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16170",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtic NBA Verde Camiseta Walker 8",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16168",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtic NBA camiseta Walker 8",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14629",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtics 2022 Blanco NBA Camisetas TATUM 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14630",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/nba-boston-celtics/14630.jpg",
    "nombre": "Boston Celtics Retro Blanco Camisetas PIERCE 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14631",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtics 75 Aniversario Negro NBA Camisetas TATUM 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14632",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtics Camisetas Walker 8",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14628",
    "equipo": "nba-boston-celtics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boston Celtics 1985-86 Retro Verde Camisetas BIRD 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "20901",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets Camiseta 75 Aniversario Edicion de La ciudad de Harden 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "19208",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/nba-brooklyn-nets/19208.jpg",
    "nombre": "Brooklyn Nets NBA Camiseta Harden 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16927",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/nba-brooklyn-nets/16927.jpg",
    "nombre": "Brooklyn Nets Nba Camiseta IRVING 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16925",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/nba-brooklyn-nets/16925.jpg",
    "nombre": "Brooklyn Nets Nba Camiseta Durant 7",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16770",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets Azul Camiseta ERVING 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16769",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets Blanco Camiseta ERVING 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16660",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets Version Dorada NBA Camiseta IRVING 11 2020",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16175",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/nba-brooklyn-nets/16175.jpg",
    "nombre": "Brooklyn Nets NBA Camiseta Harden 13 Blanco",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16173",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets Negro Nba Camiseta IRVING 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16172",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets 2021 Degradado Swingman Camiseta Harden 13",
    "precio_lista": 26.0,
    "precio_venta": 37.62
  },
  {
    "id": "16171",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets Blanco Nba Camiseta Kevin Durant 7",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12304",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/nba-brooklyn-nets/12304.jpg",
    "nombre": "Nets Swingman NBA Camiseta de PETROVIC 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2224",
    "equipo": "nba-brooklyn-nets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brooklyn Nets Blanco Nba Camiseta Kyrie Irving 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "25025",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/nba-bucks/25025.jpg",
    "nombre": "Bucks 2024 Ciudad NBA Camiseta ANTETOKOUNMPO 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "25027",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/nba-bucks/25027.jpg",
    "nombre": "Bucks Swingman 96-97 Retro NBA Camiseta ALLEN 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "20923",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bucks 75 Aniversario NBA Camiseta ANTETOKOUNMPO 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16982",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bucks 75 Aniversario Blanco NBA Camiseta ANTETOKOUNMPO 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16929",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bucks 2020 Negro NBA Camiseta ANTETOKOUNMPO 34 Bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16930",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bucks 2020 Swingman NBA Camiseta ANTETOKOUNMPO 34 Bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14634",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/nba-bucks/14634.jpg",
    "nombre": "Bucks NBA Camiseta ANTETOKOUNMPO 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12425",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bucks Swingman NBA Camiseta ANTETOKOUNMPO 34 Bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12274",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bucks Blanco Swingman NBA Camiseta ANTETOKOUNMPO 34 Bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12272",
    "equipo": "nba-bucks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bucks Negro Swingman NBA Camiseta ANTETOKOUNMPO 34 Bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16799",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 Blanco NBA Camiseta MOURNING 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16793",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 Blanco NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16794",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 Blanco NBA Camiseta BOGUES 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16796",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 Verde NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16797",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 Azul NBA Camiseta MOURNING 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16798",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 VERDE NBA Camiseta JOHNSON 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16791",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16792",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets Retro NBA Camiseta JOHNSON 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14496",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 2022 NBA Camiseta BALL 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12587",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets NBA Camiseta Icon Edition WALKER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6820",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 NBA Camiseta BOGUES 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6819",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets AZUL 1992-93 NBA Camiseta BOGUES 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6818",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 NBA Camiseta MOURNING 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6817",
    "equipo": "nba-charlotte-hornets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Charlotte Hornets 1992-93 Azul NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "25031",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls 1997-98 Retro Camisetas de Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "25032",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls 1998 Retro Rojo Camisetas de Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "20924",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls Blanco Swingman NBA Camisetas de DEROZAN 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "20904",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls Blanco Shorts",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "20903",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls Rojo Shorts",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "19209",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls Stars Edition NBA Camisetas Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "19204",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls 2022 City Edition Camisetas de Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14814",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls Swingman NBA Camisetas Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14633",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/nba-chicago-bulls/14633.jpg",
    "nombre": "Chicago Bulls Rojo-Negro NBA Camiseta Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9943",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls Retro Finals Champion NBA Camiseta JORDAN 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9942",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls NBA Camiseta Jordan 23 Verde",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9748",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/nba-chicago-bulls/9748.jpg",
    "nombre": "Chicago Bulls Rojo Swingman NBA Camiseta PIPPEN 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9747",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/nba-chicago-bulls/9747.jpg",
    "nombre": "Chicago Bulls 96 All Star Swingman NBA Camiseta JORDAN 23",
    "precio_lista": 26.0,
    "precio_venta": 37.62
  },
  {
    "id": "9746",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls 1997-98 Swingman NBA Camiseta Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9715",
    "equipo": "nba-chicago-bulls",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Chicago Bulls 2024 Ciudad NBA Camiseta Jordan 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12863",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/nba-cleveland-cavaliers/12863.jpg",
    "nombre": "Cleveland Cavalier Negro NBA Camiseta James 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12285",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Cleveland Cavaliers 2017-18 Rojo NBA Camiseta Bordado THOMAS 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12282",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Cleveland Cavalier Blanco NBA Camiseta Bordado 2017-18 THOMAS 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12281",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/nba-cleveland-cavaliers/12281.jpg",
    "nombre": "Cleveland Cavaliers NBA Camiseta James 23 Bordado Rojo",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9716",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Cleveland Cavaliers Blanco NBA Camiseta James 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7625",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/nba-cleveland-cavaliers/7625.jpg",
    "nombre": "Cleveland Cavaliers NBA Camiseta JAMES 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7615",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/nba-cleveland-cavaliers/7615.jpg",
    "nombre": "Cleveland Cavaliers Azul NBA Camiseta JAMES 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7614",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Cleveland Cavaliers NBA Camiseta JAMES 23 Rojo",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7610",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/nba-cleveland-cavaliers/7610.jpg",
    "nombre": "Cleveland Cavaliers 08-09 Swingman NBA Camiseta JAMES 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5351",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/nba-cleveland-cavaliers/5351.jpg",
    "nombre": "Cleveland Cavaliers LOVE 0# rojo revoluciÃ³n 30 swingman NBA Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4638",
    "equipo": "nba-cleveland-cavaliers",
    "imagen": "futbolmodaes_img/nba-cleveland-cavaliers/4638.jpg",
    "nombre": "Cleveland Cavaliers NBA Camisetas MITCHELL 45",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27175",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/nba-dallas-mavericks/27175.jpg",
    "nombre": "Dallas Mavericks NBA Camisetas Doncic 77-3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27173",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/nba-dallas-mavericks/27173.jpg",
    "nombre": "Dallas Mavericks NBA Camisetas Doncic 77-2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27174",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/nba-dallas-mavericks/27174.jpg",
    "nombre": "Dallas Mavericks NBA Camisetas Doncic 77-4",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16983",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Dallas Mavericks 2023-24 Camisetas IRVING 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5474",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/nba-dallas-mavericks/5474.jpg",
    "nombre": "Dallas Mavericks 2023-24 Camisetas IRVING 2 Azul",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5473",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/nba-dallas-mavericks/5473.jpg",
    "nombre": "Dallas Mavericks Azul NBA Camisetas NOWITZKI 41",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5468",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Dallas Mavericks 2023-24 Camisetas IRVING 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5467",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/nba-dallas-mavericks/5467.jpg",
    "nombre": "Dallas Mavericks NBA Camisetas IRVING 11",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5466",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Dallas Mavericks Verde Camisetas Dirk Nowitzki 41",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5465",
    "equipo": "nba-dallas-mavericks",
    "imagen": "futbolmodaes_img/nba-dallas-mavericks/5465.jpg",
    "nombre": "Dallas Mavericks NBA Camisetas Doncic 77",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27176",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets NBA Camiseta MUTOMBO 55-Azul",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16931",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets NBA Camiseta MUTOMBO 55",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14685",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets Blanco Camiseta JOKIC 15 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14686",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets Swingman NBA Camiseta IVERSON 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12292",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets Swingman NBA Camiseta English 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6778",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/nba-denver-nuggets/6778.jpg",
    "nombre": "Denver Nuggets retro swingman NBA camisetas MUTOMBO 55#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4072",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/nba-denver-nuggets/4072.jpg",
    "nombre": "Denver Nuggets NBA Camiseta ANTHONY 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3260",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/nba-denver-nuggets/3260.png",
    "nombre": "Denver Nuggets Swingman NBA Camiseta IVERSON 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3009",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets Swingman NBA Camiseta IVERSON 3-2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3008",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets Swingman nba camisetas de English 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2603",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets Swingman NBA Camiseta IVERSON 3-3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2366",
    "equipo": "nba-denver-nuggets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Denver Nuggets NBA Camisetas JOKIC 15 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "13816",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Detroit Pistons Azul Swingman NBA Camiseta Hill 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12585",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Detroit Pistons Swingman NBA Camiseta Hill 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4080",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Detroit Pistons 33 Grant Hill Soul Swingman Camiseta Naranja",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4077",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/nba-detroit-pistons/4077.jpg",
    "nombre": "Detroit Pistons Swingman Naranja Camiseta HILL 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4076",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/nba-detroit-pistons/4076.jpg",
    "nombre": "Detroit Pistons Swingman camiseta Hill 33 Blanco",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4075",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/nba-detroit-pistons/4075.jpg",
    "nombre": "Detroit Pistons 10 Dennis Rodman Swingman Camiseta 1998-99",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4074",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Detroit Pistons Swingman Camiseta CUNNINGHAM 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4041",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/nba-detroit-pistons/4041.jpg",
    "nombre": "Detroit Pistons NBA Camisetas blanco THOMAS #11 mejor tela de malla",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3387",
    "equipo": "nba-detroit-pistons",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Detroit Pistons Swingman NBA Camisetas HILL 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27172",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/nba-golden-state-warriors/27172.jpg",
    "nombre": "Golden State Warriors City Edition NBA Camiseta CURRY-30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "20925",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/nba-golden-state-warriors/20925.jpg",
    "nombre": "Golden State Warriors Swingman NBA Camiseta CURRY 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12294",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Golden State Warriors Blanco NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "10863",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Golden State Warriors Amarillo NBA Camisetas Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9757",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Golden State Warriors Swingman NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9756",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Golden State Warriors 75 Aniversario NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9752",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Golden State Warriors NBA Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9732",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/nba-golden-state-warriors/9732.jpg",
    "nombre": "Golden State Warriors 2024 City Edition Camiseta de Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9721",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Golden State Warriors 2009-10 Classic Camiseta CURRY-30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5927",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Golden State Warriors Azul NBA camisetas revoluciÃ³n 30 calidad de CURRY 30#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5924",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/nba-golden-state-warriors/5924.png",
    "nombre": "Golden State Warriors Blanco NBA Camisetas Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5921",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/nba-golden-state-warriors/5921.jpg",
    "nombre": "golden state warriors Azul Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3264",
    "equipo": "nba-golden-state-warriors",
    "imagen": "futbolmodaes_img/nba-golden-state-warriors/3264.jpg",
    "nombre": "golden state warriors Camiseta Curry 30",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12429",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Houston Rockets Swingman Negro NBA camiseta PAUL 3 Bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12301",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Houston Rockets Rojo NBA Camiseta Harden 13 2017-18",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12300",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Houston Rockets Rojo NBA Camiseta Harden 13 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6816",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Houston Rockets Swingman NBA Camisetas OLAJUWON 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4062",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Houston Rockets Harden 13 Swingman Rojo Camiseta 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4058",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Huston Rockets 2019-20 Rojo Swingman NBA Camiseta WESTBROOK 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4057",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Huston Rockets 2019 Blanco Swingman NBA Westebrook 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4054",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Huston Rockets Version dorada NBA Camiseta Harden 13 2020",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4052",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Huston Rockets Rojo NBA Camiseta WESTBROOK 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4051",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Huston Rockets Negro NBA Camiseta WESTBROOK 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2200",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Houston Rockets 2019 Ciudad NBA Camisetas PAUL 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2199",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/nba-houston-rockets/2199.jpg",
    "nombre": "Houston Rockets 2019 Ciudad NBA Camisetas HARDEN 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2198",
    "equipo": "nba-houston-rockets",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Houston Rockets swingman NBA Camisetas DREXLER #22 Blanco",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7129",
    "equipo": "nba-indiana-pacers",
    "imagen": "futbolmodaes_img/nba-indiana-pacers/7129.jpg",
    "nombre": "Indiana Pacers Swingman NBA Camisetas MILLER 31",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6989",
    "equipo": "nba-indiana-pacers",
    "imagen": "futbolmodaes_img/nba-indiana-pacers/6989.jpg",
    "nombre": "Indiana Pacers Soul Swingman Stitched NBA Camisetas MILLER 31",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3268",
    "equipo": "nba-indiana-pacers",
    "imagen": "futbolmodaes_img/nba-indiana-pacers/3268.jpg",
    "nombre": "Indiana Pacers Reggie Miller 31 Soul Swingman Stitched Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "8596",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Clippers Azul City Edition Camiseta leonard 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7031",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/nba-la-clippers/7031.jpg",
    "nombre": "LA Clippers 2019-20 Azul Camiseta Leonard 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6826",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/nba-la-clippers/6826.png",
    "nombre": "Los Angeles Clippers NBA Camisetas LEONARD 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6824",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LA Clippers 2019-20 Blanco Camiseta Paul George 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6823",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/nba-la-clippers/6823.jpg",
    "nombre": "LA Clippers 2019-20 Azul Camiseta Paul George 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6822",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LA Clippers 2019-20 Blanco Camiseta Leonard 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4089",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Clippers Version Dorada NBA Camiseta LEONARD 2 2020",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3592",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Clippers Blanco City Edition Camiseta George 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3591",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Clippers Azul City Edition Camiseta George 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2141",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Clippers Blanco City Edition Camiseta LEONARD 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2113",
    "equipo": "nba-la-clippers",
    "imagen": "futbolmodaes_img/nba-la-clippers/2113.jpg",
    "nombre": "LA Clippers City Edition Leonard 2 NBA Camiseta Bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27171",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/nba-la-lakers/27171.jpg",
    "nombre": "L.A Lakers Blanco Swingman NBA Camisetas DONCIC 77",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27170",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/nba-la-lakers/27170.jpg",
    "nombre": "L.A Lakers Morado Swingman NBA Camisetas DONCIC 77",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27169",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/nba-la-lakers/27169.jpg",
    "nombre": "L.A Lakers Amarilo Swingman NBA Camisetas DONCIC 77",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "23327",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "L.A Lakers Swingman NBA Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "19101",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LLa Laker Amarillo NBA Camiseta James 23 KB 2021",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16981",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker Retro Camiseta Bryant 24 Purple",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16979",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker Retro Camiseta Bryant 24 Amarillo",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16980",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker 1996-97 Retro Camiseta Bryant 24 Amarillo",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16976",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker 1996-97 Retro Camiseta Bryant 24 Blanco",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16977",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker 2021 Verde Camiseta de James 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16978",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker Kobe Bryant 24 Camiseta Noche de Hollywood",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16974",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker 1996-97 Retro Camiseta Bryant 24 Azul",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16975",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker 1996-97 Retro Camiseta Bryant 8 Amarillo",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16969",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Laker kobe bryant 24 Edicion Limitada Retirada amarillo camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16970",
    "equipo": "nba-la-lakers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Lakers BRYANT 24 Amarillo-Negro NBA Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12299",
    "equipo": "nba-memphis-grizzlies",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Memphis Grizzlies Revolution 30 Swingman Camiseta BIBBY 10",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12298",
    "equipo": "nba-memphis-grizzlies",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Memphis Grizzlies Revolution 30 Swingman Camiseta ABDUR.RAHIM 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6307",
    "equipo": "nba-memphis-grizzlies",
    "imagen": "futbolmodaes_img/nba-memphis-grizzlies/6307.jpg",
    "nombre": "Memphis Grizzlies Swingman NBA Camiseta Revolucon 30 Calidad BIBBY 10",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4092",
    "equipo": "nba-memphis-grizzlies",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Memphis Grizzlies 75 Aniversario Swingman Camiseta MORANT 12",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4091",
    "equipo": "nba-memphis-grizzlies",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Memphis Grizzlies Revolution 30 Swingman Camiseta MORANT 12",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3601",
    "equipo": "nba-memphis-grizzlies",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Memphis Grizzlies Camiseta REEVES 50 2020",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "20902",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/nba-miami-heat/20902.jpg",
    "nombre": "Miami Heat 2023 NBA Camiseta BUTLER 22",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7627",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Miami Heat Swingman NBA Camiseta WHITESIDE 21 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7032",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/nba-miami-heat/7032.jpg",
    "nombre": "Miami Heat 2022 Diamante Logo 75 Aniversario NBA Camiseta HERRO 14",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6844",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Miami Heat Swingman NBA Camiseta Dwyane Wade 3 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2259",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Miami Heat Rosa Swingman NBA Camiseta WADE 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2126",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Miam Heat Wade 3 Negro revoluciÃ³n 30 Camiseta Night City",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2124",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/nba-miami-heat/2124.jpg",
    "nombre": "MIAMI HEAT Blanco Camiseta Wade 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2120",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "MIAMI HEAT Negro Camiseta Wade 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2118",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/nba-miami-heat/2118.jpg",
    "nombre": "Miami Heat 2021 Degradado Camiseta Wade 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2108",
    "equipo": "nba-miami-heat",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Miami Heat Swingman NBA Camisetas Wade 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16767",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves negro camiseta RUBIO 9",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16768",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves Retro camiseta GARNETT 21",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12432",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolve Swingman NBA Camiseta ROSE 25",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12431",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/nba-minnesota-timberwolves/12431.jpg",
    "nombre": "Minnesota Timberwolve Swingman NBA Camiseta TOWNS 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12430",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolve Swingman NBA Camiseta Rose 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12302",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves Swingman NBA Camiseta de WIGGINS 22",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7130",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolve Azul Swingman NBA Camiseta Karl-Anthony Towns 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6048",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves blanco camiseta TOWNS 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6047",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves blanco camiseta WIGGINS 22",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6046",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves blanco camiseta BUTLER 23",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4129",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves Azul camiseta GARNETT 21",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3074",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves NEGRO camiseta GARNETT 21",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2597",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves 2019 Blanco Camiseta TOWNS 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2250",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves Azul camiseta RUBIO 9",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2249",
    "equipo": "nba-minnesota-timberwolves",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Minnesota Timberwolves Negro camiseta Love 42",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6786",
    "equipo": "nba-new-orleans-pelicans",
    "imagen": "futbolmodaes_img/nba-new-orleans-pelicans/6786.jpg",
    "nombre": "New Orleans Hornets Retro Azul NBA Camisetas MOURNING 33#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6785",
    "equipo": "nba-new-orleans-pelicans",
    "imagen": "futbolmodaes_img/nba-new-orleans-pelicans/6785.jpg",
    "nombre": "New Orleans Hornets Retro Blanco NBA Camisetas MOURNING 33#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6783",
    "equipo": "nba-new-orleans-pelicans",
    "imagen": "futbolmodaes_img/nba-new-orleans-pelicans/6783.jpg",
    "nombre": "New Orleans Hornets Retro Blanco NBA Camisetas Curry 30#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6781",
    "equipo": "nba-new-orleans-pelicans",
    "imagen": "futbolmodaes_img/nba-new-orleans-pelicans/6781.jpg",
    "nombre": "New Orleans Hornets Retro Blanco NBA Camisetas JOHNSON 2#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6780",
    "equipo": "nba-new-orleans-pelicans",
    "imagen": "futbolmodaes_img/nba-new-orleans-pelicans/6780.jpg",
    "nombre": "New Orleans Hornets Retro Malla NBA Camisetas RICE 41#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6779",
    "equipo": "nba-new-orleans-pelicans",
    "imagen": "futbolmodaes_img/nba-new-orleans-pelicans/6779.jpg",
    "nombre": "New Orleans Hornets Retro Malla NBA Camisetas BOGUES 1#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12433",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "New York Knicks Azul Swingman NBA Camiseta PORZINGIS 6 Bordado 2017-18",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "8700",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/nba-new-york-knicks/8700.jpg",
    "nombre": "New York Knicks 1985-86 Swingman NBA Camiseta EWING 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "8699",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/nba-new-york-knicks/8699.jpg",
    "nombre": "New York Knicks Azul Swingman NBA Camiseta EWING 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7140",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/nba-new-york-knicks/7140.jpg",
    "nombre": "New York Knicks Mujer NBA Camisetas EWING 33",
    "precio_lista": 29.0,
    "precio_venta": 41.96
  },
  {
    "id": "7139",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/nba-new-york-knicks/7139.jpg",
    "nombre": "New York Knicks Blanco NBA Camisetas EWING 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4082",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "New York Knicks 1995-96 Net Camiseta EWING 33",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "3094",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/nba-new-york-knicks/3094.jpg",
    "nombre": "NEW YORK Anthony 7 blanco New Revolution 30 calidad Swingman NBA camisetas,bordado",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2208",
    "equipo": "nba-new-york-knicks",
    "imagen": "futbolmodaes_img/nba-new-york-knicks/2208.jpg",
    "nombre": "New York Knicks 91-92 Blanco Retro NBA Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "24810",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/24810.jpg",
    "nombre": "Bucks Verde ninos nba camiseta ANTETOKOUNMPO 34",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "20660",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/20660.jpg",
    "nombre": "Brooklyn Nets Blanco Ninos NBA Camiseta Durant 7",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8505",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "phila azul ninos nba camiseta simmons 25",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8504",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "la laker Ninos negro nba camiseta JAMES 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8503",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/8503.jpg",
    "nombre": "Dallas Mavericks Blanco Ninos NBA Camiseta y Shorts IRVING 2",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8502",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "paris azul ninos nba camiseta 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8501",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "la laker ninos nba camiseta purple james 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8500",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "la laker Ninos amarillo nba camiseta JAMES 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8499",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "la laker Ninos blanco nba camiseta JAMES 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8498",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "golden state warriors azul ninos nba camiseta curry 30",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8497",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/8497.jpg",
    "nombre": "Bucks blanco ninos nba camiseta ANTETOKOUNMPO 34",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8496",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/8496.jpg",
    "nombre": "Bucks negro ninos nba camiseta ANTETOKOUNMPO 34",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8495",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/8495.jpg",
    "nombre": "Chicago Bulls Rojo Ninos NBA Camiseta y Shorts Jordan 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8494",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/8494.jpg",
    "nombre": "Chicago Bulls Negro Ninos NBA Camiseta y Shorts Jordan 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "8493",
    "equipo": "nba-ninos-nba-camisetas",
    "imagen": "futbolmodaes_img/nba-ninos-nba-camisetas/8493.jpg",
    "nombre": "Chicago Bulls Ninos NBA Camiseta y Shorts Jordan 23",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "12311",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/nba-oklahoma-city-thunder/12311.jpg",
    "nombre": "Okalahoma City Thunder Azul NBA Camisetas GEORGE 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12310",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Okalahoma City Thunder Blanco NBA Camisetas WESTBROOK 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12308",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Okalahoma City Thunder Azul NBA Camisetas Anthony 7",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12307",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Okalahoma City Thunder NBA Camisetas Westbrook 0 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12306",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Okalahoma City Thunder Azul NBA Camisetas Westbrook 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "8600",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Okalahoma City Thunder NBA Camisetas GEORGE 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "8599",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Okalahoma City Thunder NBA Camisetas Westbrook 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6761",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/nba-oklahoma-city-thunder/6761.jpg",
    "nombre": "Okalahoma City Thunder Glow Edicion NBA Camisetas Calidad Revolution 30 Westbrook 0#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5479",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Oklahoma City Thunder revoluciÃ³n 30 Navidad NBA camisetas SERGE 9#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "5478",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Oklahoma City Thunder revoluciÃ³n 30 Navidad NBA camisetas REGGIE 15#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4095",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Okalahoma City Thunder 2019 Naranja Camiseta WESTBROOK 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2658",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Oklahoma City Thunder NBA Camisetas Russell Westbrook #0 negro revolution 30 swingman camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2656",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Oklahoma City Thunder NBA Camisetas SERGE Ibaka #9 azul revolution 30 SWINGMAN CAMISETA",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2601",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Oklahoma City Thunder NBA Camisetas Ibaka #9 swingman camisetas revolution 30 calidad",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2291",
    "equipo": "nba-oklahoma-city-thunder",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Oklahoma City Thunder NBA Camisetas Westbrook #0 azul,bordado swingman camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16789",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic Azul NBA Camiseta McGRADY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16790",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic Negro NBA Camiseta HARDAWAY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16785",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic Blanco NBA Camiseta HARDAWAY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16786",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic NBA Camiseta McGRADY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16788",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic Blanco NBA Camiseta McGRADY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6050",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic NBA camiseta ONEAL 32 Negro",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2299",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Orlando Magic Swingman NBA Camiseta O'Neal 32 blanco",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2298",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/nba-orlando-magic/2298.png",
    "nombre": "Orlando Magic Swingman NBA Camiseta O'Neal 32 azul",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2297",
    "equipo": "nba-orlando-magic",
    "imagen": "futbolmodaes_img/nba-orlando-magic/2297.png",
    "nombre": "Orlando Magic Swingman NBA Camiseta O'Neal 32 negro",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16938",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/nba-philadelphia-76ers/16938.jpg",
    "nombre": "PHILLADELPHIA 76ERS 1999-00 NBA Camiseta Iverson 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14810",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Ciudad Camiseta EMBIID 21",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14808",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers 1996-97 Camiseta Allen IVERSON 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14809",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Blanco Camiseta Simmons 25 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14807",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Rojo Camiseta ERVING 6 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14806",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers 1997-98 Retro Rojo Camiseta iverson 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12423",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/nba-philadelphia-76ers/12423.jpg",
    "nombre": "Philadelphia 76ers 1982-83 Swingman Camiseta EVRING 6",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12422",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Azul Swingman Camiseta SIMMONS 25",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "10857",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Swingman Rojo Camiseta FULTZ 20",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "10856",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Swingman Azul Camiseta FULTZ 20",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "10855",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Swingman Blanco Camiseta FULTZ 20",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9624",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/nba-philadelphia-76ers/9624.jpg",
    "nombre": "Philadelphia 76ers Azul NBA Camiseta de Allen Iverson 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7618",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Limited Edition 1995-96 Camiseta IVERSON 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7617",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers EMBIID 21 Blanco Swingman NBA Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7616",
    "equipo": "nba-philadelphia-76ers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Philadelphia 76ers Ciudad Camiseta SIMMONS 25",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "25026",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns 92-93 Azul NBA Camiseta BARKLEY 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "19793",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/nba-phoenix-suns/19793.png",
    "nombre": "Phoenix Suns City Edition NBA camiseta Deandre Ayton 22",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16922",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns 1992-93 Retro Swingman NBA Camiseta BARKLEY 34",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16923",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns Purple Swingman NBA Camiseta NASH 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16924",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns 2021 Naranja NBA Camiseta BOOKER 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "16921",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns Swingman Purple NBA Camiseta BOOKER 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "8604",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns Blanco Swingman Stitched NBA Camiseta NASH 13",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6815",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/nba-phoenix-suns/6815.jpg",
    "nombre": "Phoenix Suns City Edition NBA Camiseta Paul 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4107",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns BOOKER 1 Blanco NBA Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4106",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns Purple NBA Camiseta Paul 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4105",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns 34 Charles Barkley Soul Swingman Stitched Blanco NBA Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4104",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/nba-phoenix-suns/4104.jpg",
    "nombre": "Phoenix Suns Naranja NBA Camiseta Paul 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2397",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/nba-phoenix-suns/2397.jpg",
    "nombre": "Phoenix Suns Swingman NBA Camiseta Durant 35",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2393",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Phoenix Suns Dan Majerle #10 blanco revolution 30 calidad nba camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2391",
    "equipo": "nba-phoenix-suns",
    "imagen": "futbolmodaes_img/nba-phoenix-suns/2391.jpg",
    "nombre": "Phoenix Suns 2021 City Edition NBA Camiseta BOOKER 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "15599",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portlan Trail 2019 Negro Swingman Revolution 30 Camiseta McCollum 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "15598",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portlan Trail Rojo Swingman Revolution 30 Camiseta LILLARD 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12589",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portlan Trail Blazers Negro Swingman NBA Camiseta Damian Lillard 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12588",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portlan Trail Blazers Gris Swingman NBA Camiseta Damian Lillard 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4191",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portland Trail Blazers Rojo Swingman Revolution 30 Camiseta DREXLER 22",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4111",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portland Trail Blazers 2020 Rojo Swingman Revolution 30 Camiseta McCOLLUM 3",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4109",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portlan Trail 2019 Swingman Revolution 30 Camiseta LILLARD 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4065",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portlan Trail 2019 Rojo Swingman Revolution 30 Camiseta LILLARD 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2183",
    "equipo": "nba-portland-trail-blazers",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Portlan Trail Rojo Swingman Revolution 30 Camiseta LILLARD 0",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6777",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/nba-sacramento-kings/6777.jpg",
    "nombre": "Sacramento Kings Azul Stitched Retro Swingman NBA Camiseta COUSINS 15#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6776",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/nba-sacramento-kings/6776.jpg",
    "nombre": "Sacramento Kings Blanco Stitched Retro Swingman NBA Camiseta Williams 55#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6775",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/nba-sacramento-kings/6775.jpg",
    "nombre": "Sacramento Kings Retro NBA Camiseta Calidad Revolucion 30 Williams 55#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6774",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/nba-sacramento-kings/6774.jpg",
    "nombre": "Sacramento Kings Negro Swingman NBA Camiseta BIBBY 10#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6773",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Sacramento Kings Azul Swingman NBA Camiseta BIBBY 10",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6772",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Sacramento Kings Retro Swingman NBA Camiseta BIBBY 10",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6771",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Sacramento Kings Retro NBA Camiseta Azul Webber 4#",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6770",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Sacramento Kings NBA Camiseta Calidad Revolucion 30 Webber 4",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4116",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/nba-sacramento-kings/4116.jpg",
    "nombre": "Sacramento Kings Azul Swingman NBA Camisetas Jason Williams 55",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4115",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/nba-sacramento-kings/4115.jpg",
    "nombre": "Sacramento Kings Jason Williams 55 Swingman Blanco Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4113",
    "equipo": "nba-sacramento-kings",
    "imagen": "futbolmodaes_img/nba-sacramento-kings/4113.jpg",
    "nombre": "Sacramento Kings Negro Swingman NBA Camiseta Chris Webber 4",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12583",
    "equipo": "nba-san-antonio-spurs",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "San Antonio Spurs Negro NBA Camiseta ROOMAN 10",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12582",
    "equipo": "nba-san-antonio-spurs",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "San Antonio Spurs Blanco NBA Camiseta ROOMAN 10",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12434",
    "equipo": "nba-san-antonio-spurs",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "San Antonio Spurs 2024 NBA Camisetas WEMBANYAMA 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12313",
    "equipo": "nba-san-antonio-spurs",
    "imagen": "futbolmodaes_img/nba-san-antonio-spurs/12313.jpg",
    "nombre": "San Antonio Spurs 1998-99 Swingman NBA Camisetas DUNCAN 21",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12312",
    "equipo": "nba-san-antonio-spurs",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "San Antonio Spurs 1998 Retro Swingman NBA Camisetas DUNCAN 21",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9931",
    "equipo": "nba-san-antonio-spurs",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "San Antonio Spurs 1998-99 Swingman NBA Camisetas DUNCAN",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4327",
    "equipo": "nba-san-antonio-spurs",
    "imagen": "futbolmodaes_img/nba-san-antonio-spurs/4327.jpg",
    "nombre": "San Antonio Spurs NBA camisetas WEMBANYAMA 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12318",
    "equipo": "nba-seattle-supersonics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Supersonics Durant 35 Soul Swingman Verde Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12317",
    "equipo": "nba-seattle-supersonics",
    "imagen": "futbolmodaes_img/nba-seattle-supersonics/12317.jpg",
    "nombre": "Seattle Supersonics PAYTON 20 Soul Swingman Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12316",
    "equipo": "nba-seattle-supersonics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Supersonics NBA Camiseta de KEMP 40",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12315",
    "equipo": "nba-seattle-supersonics",
    "imagen": "futbolmodaes_img/nba-seattle-supersonics/12315.jpg",
    "nombre": "Seattle Supersonics Durant 35 Soul Swingman Blanco Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12314",
    "equipo": "nba-seattle-supersonics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Supersonics 34 Ray Allen Soul Swingman Blanco Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2245",
    "equipo": "nba-seattle-supersonics",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Supersonics Swingman NBA Camiseta KEMP 40",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14495",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 1998-99 Blanco Swingman NBA Camisetas CARTER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "13825",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors Rojo NBA Camisetas LEONARD 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "13823",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/nba-toronto-raptors/13823.jpg",
    "nombre": "Toronto Raptors Blanco NBA Camisetas LEONARD 2",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "13822",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/nba-toronto-raptors/13822.jpg",
    "nombre": "Toronto Raptors NBA Camisetas Tracy McGrady 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9726",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors Negro-Oro NBA Camisetas McGARDY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "9725",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors NBA Camisetas McGARDY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "7623",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 1998-99 Profunda Gris NBA Camiseta CARTER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6839",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 1998-99 Blanco NBA Camisetas McGARDY 1",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6835",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 1998-99 Negro-Oro NBA Camisetas CARTER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6834",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 1998-99 Negro-Rojo NBA Camisetas CARTER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "6831",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 1998-99 Gris NBA Camiseta CARTER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "4357",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors Blanco Soul Swingman Camisetas de NBA CARTER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2389",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors NBA Camisetas VINCE Carter 15 Azul",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "2388",
    "equipo": "nba-toronto-raptors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Toronto Raptors 1998-99 Rojo Swingman NBA Camisetas CARTER 15",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27177",
    "equipo": "nba-usa",
    "imagen": "futbolmodaes_img/nba-usa/27177.jpg",
    "nombre": "Chicago Bull USA NBA Camiseta de Jordan 9",
    "precio_lista": 26.0,
    "precio_venta": 37.62
  },
  {
    "id": "25417",
    "equipo": "nba-usa",
    "imagen": "futbolmodaes_img/nba-usa/25417.jpg",
    "nombre": "USA Swingman NBA Camisetas Bird 7",
    "precio_lista": 25.9,
    "precio_venta": 37.48
  },
  {
    "id": "21928",
    "equipo": "nba-usa",
    "imagen": "futbolmodaes_img/nba-usa/21928.jpg",
    "nombre": "Chicago Bull USA NBA Camiseta de Jordan 9 Blanco",
    "precio_lista": 26.0,
    "precio_venta": 37.62
  },
  {
    "id": "14804",
    "equipo": "nba-utah-jazz",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Utah Jazz Amarillo NBA Camiseta MITCHELL 45",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14658",
    "equipo": "nba-utah-jazz",
    "imagen": "futbolmodaes_img/nba-utah-jazz/14658.jpg",
    "nombre": "Utah Jazz NBA Camiseta MARAVICH 7",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "14659",
    "equipo": "nba-utah-jazz",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Utah Jazz NBA Camiseta MITCHELL 45 2019",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12586",
    "equipo": "nba-utah-jazz",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Utah Jazz Soul Swingman NBA Camiseta MITCHELL 45",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12291",
    "equipo": "nba-utah-jazz",
    "imagen": "futbolmodaes_img/nba-utah-jazz/12291.jpg",
    "nombre": "Utah Jazz Soul Swingman Purple Camiseta Malone 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "12290",
    "equipo": "nba-utah-jazz",
    "imagen": "futbolmodaes_img/nba-utah-jazz/12290.jpg",
    "nombre": "Utah Jazz Soul Swingman Blanco Camiseta Malone 32",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "30251",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/30251.jpg",
    "nombre": "AC Milan 25-26 4a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30020",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/30020.jpg",
    "nombre": "Manchester City 25-26 Especial Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29816",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/29816.jpg",
    "nombre": "Manchester City 25-26 2a Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29768",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/29768.jpg",
    "nombre": "Celta de Vigo 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29676",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/29676.jpg",
    "nombre": "Bar,celona 25-26 Version Musical Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29456",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/29456.jpg",
    "nombre": "Everton 25-26 4a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29436",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/29436.jpg",
    "nombre": "Real Madrid 2026 Marvel Ninos Camiseta y Shorts Negro",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29433",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/29433.jpg",
    "nombre": "Real Madrid 25-26 Estilo Retro Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29432",
    "equipo": "ninos-camisetas-2526-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2526-club-ninos/29432.jpg",
    "nombre": "Juventus 25-26 Especial Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30252",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/30252.jpg",
    "nombre": "AC Milan 26-27 4a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30250",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/30250.jpg",
    "nombre": "Manchester City 26-27 1a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30247",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/30247.jpg",
    "nombre": "Celtic FC 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "30206",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/30206.jpg",
    "nombre": "AC Milan 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30155",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/30155.jpg",
    "nombre": "Inter Milan 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30125",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester United 26-27 1a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30023",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/30023.jpg",
    "nombre": "Arsenal 26-27 1a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30012",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Juventus 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29957",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/29957.jpg",
    "nombre": "Ajax 26-27 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29719",
    "equipo": "ninos-camisetas-2627-club-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-2627-club-ninos/29719.jpg",
    "nombre": "Palmeiras 2026-27 2a Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "15350",
    "equipo": "ninos-camisetas-club-ninos-manga-larga",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester City 2019-20 2a Ninos Manga Larga Camisetas y Shorts",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "15349",
    "equipo": "ninos-camisetas-club-ninos-manga-larga",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester City 2019-20 1a Ninos Manga Larga Camisetas y Shorts",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "12337",
    "equipo": "ninos-camisetas-club-ninos-manga-larga",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 1a Equipacion Manga Larga Ninos Camiseta 2019-20",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "30393",
    "equipo": "ninos-camisetas-nacional-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-nacional-ninos/30393.jpg",
    "nombre": "Espana 2026-27 2a Babe Camiseta",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30019",
    "equipo": "ninos-camisetas-nacional-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-nacional-ninos/30019.jpg",
    "nombre": "Inglaterra 2026-27 2a Portero Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29906",
    "equipo": "ninos-camisetas-nacional-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-nacional-ninos/29906.jpg",
    "nombre": "Inglaterra 2026-27 Portero Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27353",
    "equipo": "ninos-camisetas-nacional-ninos",
    "imagen": "futbolmodaes_img/ninos-camisetas-nacional-ninos/27353.jpg",
    "nombre": "Camerun 2025-26 3a Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "29120",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Argentina 1994 2a Equipacion Retro Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29119",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 2016-17 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29117",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Francia 1998 1a Equipacion Retro Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29116",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Brasil 1998 1a Equipacion Retro Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29115",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bar,celona 15-16 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29114",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bar,celona 05-06 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29113",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Argentina 1986 1a Equipacion Retro Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29112",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 2013-14 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29111",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bar,celona 12-13 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29084",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester Unit ed 2006-07 Retro 1a Ninos Camisetas y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29083",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester Unit ed 2007-08 Retro 2a Ninos Camisetas y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29082",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Francia 1998 2a Equipacion Retro Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29081",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Bar,celona 09-10 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29080",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Sporting CP 01-03 1a Equipacion Retro Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29079",
    "equipo": "ninos-camisetas-retro-ninos-camiseta",
    "imagen": "futbolmodaes_img/ninos-camisetas-retro-ninos-camiseta/29079.jpg",
    "nombre": "Bar,celona 96-97 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29933",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/otro-club-afc-ajax/29933.jpg",
    "nombre": "AFC Ajax 26-27 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28675",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/otro-club-afc-ajax/28675.jpg",
    "nombre": "AFC Ajax 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28528",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/otro-club-afc-ajax/28528.jpg",
    "nombre": "Ajax 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28504",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28392",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 25-26 2a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28106",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax Doodle Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27858",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 25-26 1a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "27487",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Ajax 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27463",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29956",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 26-27 3a Equipacion Thai Camiseta ZINCHENKO 47",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "29954",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 26-27 1a Equipacion Thai Camiseta WEGHORST 25",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "29955",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 26-27 3a Equipacion Thai Camiseta WIJINDAL 5",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "29948",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 26-27 3a Equipacion Thai Camiseta ROSA 2",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "29949",
    "equipo": "otro-club-afc-ajax",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AFC Ajax 26-27 3a Equipacion Thai Camiseta KONADU 19",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "24681",
    "equipo": "otro-club-alahli-saudi",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Al-Ahli Saudi 23-24 3a Equipacion Jugadora Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "24682",
    "equipo": "otro-club-alahli-saudi",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Al-Ahli Saudi 23-24 2a Equipacion Jugadora Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "24680",
    "equipo": "otro-club-alahli-saudi",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Al-Ahli Saudi 23-24 1a Equipacion Jugadora Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28393",
    "equipo": "otro-club-alhilal",
    "imagen": "futbolmodaes_img/otro-club-alhilal/28393.jpg",
    "nombre": "AL-HILAL 25-26 2a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "27924",
    "equipo": "otro-club-alhilal",
    "imagen": "futbolmodaes_img/otro-club-alhilal/27924.jpg",
    "nombre": "AL-HILAL 25-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27861",
    "equipo": "otro-club-alhilal",
    "imagen": "futbolmodaes_img/otro-club-alhilal/27861.jpg",
    "nombre": "AL-HILAL 25-26 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "25033",
    "equipo": "otro-club-alhilal",
    "imagen": "futbolmodaes_img/otro-club-alhilal/25033.jpg",
    "nombre": "AL-HILAL 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26183",
    "equipo": "otro-club-alhilal",
    "imagen": "futbolmodaes_img/otro-club-alhilal/26183.jpg",
    "nombre": "AL-HILAL 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26348",
    "equipo": "otro-club-alhilal",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AL-HILAL 24-25 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "26349",
    "equipo": "otro-club-alhilal",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AL-HILAL 24-25 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "23467",
    "equipo": "otro-club-alittihad",
    "imagen": "futbolmodaes_img/otro-club-alittihad/23467.jpg",
    "nombre": "Ittihad 25-26 1a Equipacion Jugadora Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29272",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/otro-club-alnassr/29272.jpg",
    "nombre": "Al-Nassr 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29271",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/otro-club-alnassr/29271.jpg",
    "nombre": "Al-Nassr 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29110",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Al Nassr 2025-26 3a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29076",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Al Nassr 2025-26 2a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28986",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/otro-club-alnassr/28986.jpg",
    "nombre": "Al-Nassr 25-26 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28765",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Al Nassr 2025-26 1a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28267",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/otro-club-alnassr/28267.jpg",
    "nombre": "Al-Nassr 25-26 4a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "27649",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/otro-club-alnassr/27649.jpg",
    "nombre": "Al-Nassr 25-26 4a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27189",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/otro-club-alnassr/27189.jpg",
    "nombre": "Al Nassr 2025-26 Ninos Camisetas y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27168",
    "equipo": "otro-club-alnassr",
    "imagen": "futbolmodaes_img/otro-club-alnassr/27168.jpg",
    "nombre": "Al-Nassr 25-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21270",
    "equipo": "otro-club-argentina-club",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Satisfied 1a Equipacion Thai Camisetas 2023",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "21024",
    "equipo": "otro-club-argentina-club",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Plata 2a Equipacion Thai Camisetas 2023",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "21023",
    "equipo": "otro-club-argentina-club",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "La Plata 1a Equipacion Thai Camisetas 2023",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "21021",
    "equipo": "otro-club-argentina-club",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Racing Club de Avellaneda 1a Equipacion Thai Camisetas 2023",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "10279",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/otro-club-atlanta-united/10279.jpg",
    "nombre": "Atlanta United 26-27 Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29745",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas SANCHEZ 48",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29741",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas PITA 40",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29742",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas TORRES 23",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29743",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas SABA 11",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29744",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas REILLY 28",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29740",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas JACOB 55",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29735",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas MIHAJ 4",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29736",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas MIRANCHUK 59",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29737",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas MUYUMBA 8",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29738",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas HIBBERT 42",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29739",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas LATTE LATH 9",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29734",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas HERNANDEZ 2",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29729",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas GILL 16",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29730",
    "equipo": "otro-club-atlanta-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atlanta United 26-27 Thai Camisetas BERROCAL 6",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "27107",
    "equipo": "otro-club-atletico-river-plate",
    "imagen": "futbolmodaes_img/otro-club-atletico-river-plate/27107.jpg",
    "nombre": "Atletico River Plate 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14187",
    "equipo": "otro-club-atletico-river-plate",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atletico River Plate 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14186",
    "equipo": "otro-club-atletico-river-plate",
    "imagen": "futbolmodaes_img/otro-club-atletico-river-plate/14186.jpg",
    "nombre": "Atletico River Plate 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "12325",
    "equipo": "otro-club-atletico-river-plate",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Atletico River Plate 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29724",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/otro-club-benfica/29724.jpg",
    "nombre": "Benfica 25-26 3a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27644",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/otro-club-benfica/27644.jpg",
    "nombre": "Benfica 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27643",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27110",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/otro-club-benfica/27110.jpg",
    "nombre": "Benfica 25-26 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "25483",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/otro-club-benfica/25483.jpg",
    "nombre": "Benfica 25-26 1a Equipacion Jugador Version Camisetas de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "24180",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/otro-club-benfica/24180.jpg",
    "nombre": "Benfica 25-26 2a Equipacion Jugador Version Camisetas de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "15063",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/otro-club-benfica/15063.jpg",
    "nombre": "Benfica 25-26 2a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "25484",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de A.CABRAL 9",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "25485",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de BAH 6",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "25486",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de JOAO REGO 84",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "25487",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de J.MARIO 20",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "25488",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de DI MARIA 11",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "25489",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de ANTONIO S. 4",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "25490",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de JUAN BERNAT 14",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "25491",
    "equipo": "otro-club-benfica",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Benfica 24-25 1a Equipacion Thai Camisetas de AURSNES 8",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "28292",
    "equipo": "otro-club-boca-juniors",
    "imagen": "futbolmodaes_img/otro-club-boca-juniors/28292.png",
    "nombre": "Boca Juniors 2025-26 1a Ninos Camisetas y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27355",
    "equipo": "otro-club-boca-juniors",
    "imagen": "futbolmodaes_img/otro-club-boca-juniors/27355.jpg",
    "nombre": "Boca Juniors 2025-26 3a Ninos Camisetas y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "24575",
    "equipo": "otro-club-boca-juniors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boca Juniors 2025-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "22583",
    "equipo": "otro-club-boca-juniors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boca Juniors 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "21518",
    "equipo": "otro-club-boca-juniors",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Boca Juniors 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29310",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/29310.png",
    "nombre": "Gremio 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27515",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/27515.jpg",
    "nombre": "Bahia 25-26 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "27513",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/27513.jpg",
    "nombre": "Flamengo 25-26 Pre Match Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27512",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/27512.jpg",
    "nombre": "Flamengo 25-26 Pre Match Thai Mujer Camisetas de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27511",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/27511.jpg",
    "nombre": "Flamengo 25-26 2a Equipacion Thai Mujer Camisetas de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27075",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Palmeiras 2025-26 1a Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "22986",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/22986.jpg",
    "nombre": "Flamengo 25-26 1a Equipacion Camisetas y Shorts de Futbol",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "21022",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/21022.jpg",
    "nombre": "Cruzeiro 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "20670",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/20670.jpg",
    "nombre": "Flamengo 26-27 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "20257",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/20257.jpg",
    "nombre": "Bahia 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "20258",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/20258.jpg",
    "nombre": "Atletico Mineiro 25-26 1a Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "17482",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/17482.jpg",
    "nombre": "Gremio 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "17016",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/17016.jpg",
    "nombre": "Recife 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "17017",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/17017.jpg",
    "nombre": "Palmeiras 2025-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "12466",
    "equipo": "otro-club-brasileiro-sÃ©rie-a",
    "imagen": "futbolmodaes_img/otro-club-brasileiro-s-rie-a/12466.jpg",
    "nombre": "Palmeiras 2025-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "30246",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/30246.jpg",
    "nombre": "Celtic FC 26-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "30013",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/30013.jpg",
    "nombre": "Celtic FC 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28792",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/28792.jpg",
    "nombre": "Celtic FC 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28793",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Celtic FC 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28277",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/28277.jpg",
    "nombre": "Celtic FC 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27899",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Celtic FC 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "27610",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Celtic FC 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27240",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/27240.jpg",
    "nombre": "Celtic FC 25-26 Especial Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27234",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/27234.jpg",
    "nombre": "Celtic FC 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "22495",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Celtic FC 25-26 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "22494",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Celtic FC 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "17510",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/17510.jpg",
    "nombre": "Celtic FC 26-27 1a Equipacion Thai Camisetas ENGELS 27",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "17511",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/17511.jpg",
    "nombre": "Celtic FC 26-27 1a Equipacion Thai Camisetas FORREST 49",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "17509",
    "equipo": "otro-club-celtic-fc",
    "imagen": "futbolmodaes_img/otro-club-celtic-fc/17509.jpg",
    "nombre": "Celtic FC 26-27 1a Equipacion Thai Camisetas DONOVAN 51",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "23464",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23464.jpg",
    "nombre": "F1 Aston Martin 2025 Negro Camisetas",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "23462",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23462.jpg",
    "nombre": "F1 Aston Martin Polo Camisetas",
    "precio_lista": 26.0,
    "precio_venta": 37.62
  },
  {
    "id": "23463",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23463.jpg",
    "nombre": "F1 Aston Martin 2025 Blanco Camisetas",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "23460",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23460.jpg",
    "nombre": "Red Bull Rojo F1 Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "23461",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23461.jpg",
    "nombre": "F1 Aston Martin 2025 Gris Camisetas",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "23459",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23459.jpg",
    "nombre": "F1 Aston Martin 2025 Rojo Camisetas",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "23458",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23458.jpg",
    "nombre": "Red Bull Azul F1 Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "23457",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23457.jpg",
    "nombre": "Red Bull Negro F1 Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "23456",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23456.jpg",
    "nombre": "Red Bull Gris F1 Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "23091",
    "equipo": "otro-club-f1-aston-martin",
    "imagen": "futbolmodaes_img/otro-club-f1-aston-martin/23091.jpg",
    "nombre": "Red Bull Blanco F1 Camiseta",
    "precio_lista": 26.0,
    "precio_venta": 37.62
  },
  {
    "id": "29710",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/29710.png",
    "nombre": "Inter Miami 2026-27 2a Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29709",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/29709.png",
    "nombre": "Inter Miami 2026-27 2a Thai Camisetas MESSI 10",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "29708",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/29708.png",
    "nombre": "Inter Miami 2026-27 2a Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28174",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/28174.jpg",
    "nombre": "Inter Miami 2025-26 Pre Match Rosa Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28103",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/28103.jpg",
    "nombre": "Inter Miami 2025-26 3a Thai Camisetas MESSI 10",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "28102",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/28102.jpg",
    "nombre": "Inter Miami 2025-26 3a Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28101",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/28101.jpg",
    "nombre": "Inter Miami 2025-26 3a Jugador Version Camisetas",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "27366",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/27366.jpg",
    "nombre": "Inter Miami 2025-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27233",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/27233.jpg",
    "nombre": "Inter Miami 2025-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27160",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/27160.jpg",
    "nombre": "Inter Miami 2025-26 Pre Match Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27076",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/27076.jpg",
    "nombre": "Inter Miami 2025-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27053",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/27053.jpg",
    "nombre": "Inter Miami 2025-26 1a Equpacion Camisetas y Shorts Adult",
    "precio_lista": 20.5,
    "precio_venta": 29.66
  },
  {
    "id": "26956",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/26956.jpg",
    "nombre": "Inter Miami 2025-26 1a Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "26947",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/26947.jpg",
    "nombre": "Inter Miami 2025-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "26940",
    "equipo": "otro-club-inter-miami",
    "imagen": "futbolmodaes_img/otro-club-inter-miami/26940.jpg",
    "nombre": "Inter Miami 2025-26 1a Jugador Version Camisetas",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "16984",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/16984.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14722",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/14722.jpg",
    "nombre": "LA Galaxy 2025-26 Thai Camiseta de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "29764",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29764.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta YOSHIDA 4",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29765",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29765.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta YAMANE 2",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29766",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29766.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta THOMMY 27",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29763",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29763.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta WYNDER 22",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29762",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta KLAUSS 99",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29757",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta GARCES 25",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29758",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29758.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta PARENTE 16",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29759",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta RAMIREZ 17",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29760",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta ESSENGUE 51",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29761",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta LEPLEY 21",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29751",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29751.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta REUS 18",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29752",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29752.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta RIQUI PUIG 10",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "29753",
    "equipo": "otro-club-la-galaxy",
    "imagen": "futbolmodaes_img/otro-club-la-galaxy/29753.jpg",
    "nombre": "LA Galaxy 26-27 1a Equipacion Thai Camiseta GLESNES 5",
    "precio_lista": 22.9,
    "precio_venta": 33.14
  },
  {
    "id": "10267",
    "equipo": "otro-club-lafc",
    "imagen": "futbolmodaes_img/otro-club-lafc/10267.jpg",
    "nombre": "LOS ANGELES 2026-27 1a Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29721",
    "equipo": "otro-club-lafc",
    "imagen": "futbolmodaes_img/otro-club-lafc/29721.jpg",
    "nombre": "LOS ANGELES 2026-27 1a Thai Camiseta David MartÃ­nez 30",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "29720",
    "equipo": "otro-club-lafc",
    "imagen": "futbolmodaes_img/otro-club-lafc/29720.jpg",
    "nombre": "LOS ANGELES 2026-27 1a Thai Camiseta Timothy Tillman 11",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "25116",
    "equipo": "otro-club-lafc",
    "imagen": "futbolmodaes_img/otro-club-lafc/25116.jpg",
    "nombre": "LOS ANGELES 2026-27 1a Thai Camiseta Aaron Long 33",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "21966",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/21966.jpg",
    "nombre": "Chicago Fire 2026-27 Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18907",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/18907.jpg",
    "nombre": "Philadelphia Union 26-27 Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "16989",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/16989.jpg",
    "nombre": "Montreal 26-27 Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14754",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14754.jpg",
    "nombre": "Seattle Sounders 25-26 Thai Camisetas",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "14750",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14750.jpg",
    "nombre": "Toronto FC 26-27 Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14742",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14742.jpg",
    "nombre": "Real Salt Lake 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "14739",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Sporting Kansas City 23-24 1a Equipacion Thai Camisetas",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "14737",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14737.jpg",
    "nombre": "Orlando City 26-27 Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14736",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14736.jpg",
    "nombre": "PORTLAND TIMBERS 2025-26 1a Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14733",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "D.C. United 26-27 Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14734",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14734.jpg",
    "nombre": "Charlotte FC 25-26 1a Thai Camiseta de Futbol",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "14735",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14735.jpg",
    "nombre": "Charlotte FC 26-27 Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14732",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14732.jpg",
    "nombre": "Chicago Fire 2025-26 Thai Camisetas",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "14731",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14731.jpg",
    "nombre": "FC Cincinnati 26-27 Thai Camisetas de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14730",
    "equipo": "otro-club-major-league-soccer",
    "imagen": "futbolmodaes_img/otro-club-major-league-soccer/14730.jpg",
    "nombre": "New York Red Bulls 26-27 Thai Camiseta COWELL 7",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "21521",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/21521.jpg",
    "nombre": "Club America 25-26 Pre Match Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "21520",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/21520.jpg",
    "nombre": "Monterrey 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "19239",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/19239.jpg",
    "nombre": "Cruz Azul 26-27 1a Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "19238",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/19238.jpg",
    "nombre": "Chivas 25-26 Blanco Thai Camisetas de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "12727",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Club America 2024 Champion 1a Equipacion Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "12724",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Pumas Unam 1998 Retro Thai Camiseta",
    "precio_lista": 24.0,
    "precio_venta": 34.73
  },
  {
    "id": "11423",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/11423.jpg",
    "nombre": "TIGRES UANL 25-26 65 Aniversario Thai Camisetas de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "11422",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/11422.jpg",
    "nombre": "Club America 25-26 Thai Mujer Camiseta",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "11421",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/11421.jpg",
    "nombre": "Club America 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "10823",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "TIGRES UANL 24-25 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10822",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "TIGRES UANL 24-25 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10233",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/10233.png",
    "nombre": "Pumas Unam 25-26 1a Thai Camisetas de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "9091",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/9091.png",
    "nombre": "Club America 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "9090",
    "equipo": "otro-club-mexico-primera-divisiÃ³n",
    "imagen": "futbolmodaes_img/otro-club-mexico-primera-divisi-n/9090.jpg",
    "nombre": "Club America 25-26 Especial Thai Camiseta",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "16988",
    "equipo": "otro-club-new-york-city-fc",
    "imagen": "futbolmodaes_img/otro-club-new-york-city-fc/16988.jpg",
    "nombre": "New York City FC 26-27 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10237",
    "equipo": "otro-club-new-york-city-fc",
    "imagen": "futbolmodaes_img/otro-club-new-york-city-fc/10237.jpg",
    "nombre": "New York City FC 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "14725",
    "equipo": "otro-club-new-york-city-fc",
    "imagen": "futbolmodaes_img/otro-club-new-york-city-fc/14725.jpg",
    "nombre": "New York City FC 26-27 2a Equipacion Thai Camiseta GRAY 24",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "14724",
    "equipo": "otro-club-new-york-city-fc",
    "imagen": "futbolmodaes_img/otro-club-new-york-city-fc/14724.jpg",
    "nombre": "New York City FC 26-27 2a Thai Camiseta THIAGO MARTINS 13",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "10240",
    "equipo": "otro-club-new-york-city-fc",
    "imagen": "futbolmodaes_img/otro-club-new-york-city-fc/10240.jpg",
    "nombre": "New York City FC 26-27 2a Thai Camiseta NICO 7",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "10239",
    "equipo": "otro-club-new-york-city-fc",
    "imagen": "futbolmodaes_img/otro-club-new-york-city-fc/10239.jpg",
    "nombre": "New York City FC 26-27 2a Thai Camiseta ONEILL 21",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "10238",
    "equipo": "otro-club-new-york-city-fc",
    "imagen": "futbolmodaes_img/otro-club-new-york-city-fc/10238.jpg",
    "nombre": "New York City FC 26-27 2a Thai Camiseta MORALEZ 10",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "27104",
    "equipo": "otro-club-otro",
    "imagen": "futbolmodaes_img/otro-club-otro/27104.jpg",
    "nombre": "AtlÃ©tico Nacional 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "24868",
    "equipo": "otro-club-otro",
    "imagen": "futbolmodaes_img/otro-club-otro/24868.jpg",
    "nombre": "Lissabon 2025-26 1a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "23137",
    "equipo": "otro-club-otro",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Red Bull Salzburg 23-24 2a Thai Camisetas",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "22738",
    "equipo": "otro-club-otro",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lisbon 100 Aniversario Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "21267",
    "equipo": "otro-club-otro",
    "imagen": "futbolmodaes_img/otro-club-otro/21267.jpg",
    "nombre": "AtlÃ©tico Nacional 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "21004",
    "equipo": "otro-club-otro",
    "imagen": "futbolmodaes_img/otro-club-otro/21004.jpg",
    "nombre": "Liga Deportiva Universitaria 2a Equipacion Thai Camisetas de FÃºtbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "30245",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/30245.jpg",
    "nombre": "P.orto 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29407",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/29407.jpg",
    "nombre": "P.orto 25-26 Especial Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29315",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/29315.jpg",
    "nombre": "P.orto 25-26 2 Especial Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29314",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/29314.jpg",
    "nombre": "P.orto 25-26 1 Especial Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28984",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/28984.jpg",
    "nombre": "P.orto 25-26 1a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.9,
    "precio_venta": 31.69
  },
  {
    "id": "28297",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/28297.jpg",
    "nombre": "Porto 2025-26 2a Ninos Camisetas y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "28284",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/28284.jpg",
    "nombre": "Porto 2025-26 1a Ninos Camisetas y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "19628",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/19628.jpg",
    "nombre": "P.orto 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "17478",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "P.orto 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "13264",
    "equipo": "otro-club-porto",
    "imagen": "futbolmodaes_img/otro-club-porto/13264.jpg",
    "nombre": "P.orto 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "27686",
    "equipo": "otro-club-rangers-fc",
    "imagen": "futbolmodaes_img/otro-club-rangers-fc/27686.jpg",
    "nombre": "Rangers FC 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "21377",
    "equipo": "otro-club-rangers-fc",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Rangers FC 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "21374",
    "equipo": "otro-club-rangers-fc",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Rangers FC 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "23136",
    "equipo": "otro-club-red-bull-salzburg",
    "imagen": "futbolmodaes_img/otro-club-red-bull-salzburg/23136.jpg",
    "nombre": "Red Bull Salzburg 26-27 1a Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "21002",
    "equipo": "otro-club-red-bull-salzburg",
    "imagen": "futbolmodaes_img/otro-club-red-bull-salzburg/21002.jpg",
    "nombre": "Red Bull Salzburg 26-27 2a Equipacion Thai Camisetas",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "29879",
    "equipo": "otro-club-santos",
    "imagen": "futbolmodaes_img/otro-club-santos/29879.jpg",
    "nombre": "Santos 26-27 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27505",
    "equipo": "otro-club-santos",
    "imagen": "futbolmodaes_img/otro-club-santos/27505.jpg",
    "nombre": "Santos 25-26 1a Equipacion Thai Mujer Camisetas de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27235",
    "equipo": "otro-club-santos",
    "imagen": "futbolmodaes_img/otro-club-santos/27235.jpg",
    "nombre": "Santos 25-26 2a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27099",
    "equipo": "otro-club-santos",
    "imagen": "futbolmodaes_img/otro-club-santos/27099.jpg",
    "nombre": "Santos 25-26 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27092",
    "equipo": "otro-club-santos",
    "imagen": "futbolmodaes_img/otro-club-santos/27092.jpg",
    "nombre": "Santos 12-13 2a Equipacion Retro Thai Camisetas de Futbol",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "27091",
    "equipo": "otro-club-santos",
    "imagen": "futbolmodaes_img/otro-club-santos/27091.jpg",
    "nombre": "Santos 12-13 1a Equipacion Retro Thai Camisetas de Futbol",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "27090",
    "equipo": "otro-club-santos",
    "imagen": "futbolmodaes_img/otro-club-santos/27090.jpg",
    "nombre": "Santos 13-14 2a Equipacion Retro Thai Camisetas de Futbol",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "28100",
    "equipo": "otro-club-sao-paulo",
    "imagen": "futbolmodaes_img/otro-club-sao-paulo/28100.jpg",
    "nombre": "Sao Paulo 25-26 2a Jugador Version Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27508",
    "equipo": "otro-club-sao-paulo",
    "imagen": "futbolmodaes_img/otro-club-sao-paulo/27508.jpg",
    "nombre": "Sao Paulo 25-26 1a Thai Mujer Camisetas de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "27506",
    "equipo": "otro-club-sao-paulo",
    "imagen": "futbolmodaes_img/otro-club-sao-paulo/27506.jpg",
    "nombre": "Sao Paulo 25-26 Rojo Pre Match Thai Mujer Camisetas de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "20520",
    "equipo": "otro-club-sao-paulo",
    "imagen": "futbolmodaes_img/otro-club-sao-paulo/20520.jpg",
    "nombre": "Sao Paulo 25-26 Thai Mujer Camisetas de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "20519",
    "equipo": "otro-club-sao-paulo",
    "imagen": "futbolmodaes_img/otro-club-sao-paulo/20519.jpg",
    "nombre": "Sao Paulo 25-26 1a Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "19838",
    "equipo": "otro-club-sao-paulo",
    "imagen": "futbolmodaes_img/otro-club-sao-paulo/19838.jpg",
    "nombre": "Sao Paulo 25-26 2a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "11427",
    "equipo": "otro-club-sao-paulo",
    "imagen": "futbolmodaes_img/otro-club-sao-paulo/11427.jpg",
    "nombre": "Sao Paulo 25-26 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "14785",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders Verde Polo 2019-20",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "14784",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders Negro Polo 2019-20",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "14753",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 2a Equipacion Thai Camiseta 2019-20",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "14748",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 2a Equipacion Thai Camiseta 2019-20 Roldan 7",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14749",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 1a Equipacion Thai Camiseta 2019-20 RuidÃ­az 9",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14751",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 2a Equipacion Thai Camiseta 2019-20 Morris 13",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14752",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 1a Equipacion Thai Camiseta 2019-20 Morris 13",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14743",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 2a Equipacion Thai Camiseta 2019-20 Lodeiro 10",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14744",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 2a Equipacion Thai Camiseta 2019-20 Marshall 14",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14745",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 2a Equipacion Thai Camiseta 2019-20 RuidÃ­az 9",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14746",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 1a Equipacion Thai Camiseta 2019-20 Roldan 7",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14741",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 1a Equipacion Thai Camiseta 2019-20 Lodeiro 10",
    "precio_lista": 24.5,
    "precio_venta": 35.45
  },
  {
    "id": "14740",
    "equipo": "otro-club-seattle-sounders",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Seattle Sounders 1a Equipacion Thai Camiseta 2019-20",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "28289",
    "equipo": "otro-club-sporting-clube-de-portugal",
    "imagen": "futbolmodaes_img/otro-club-sporting-clube-de-portugal/28289.jpg",
    "nombre": "Lisbon 2025-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "26647",
    "equipo": "otro-club-sporting-clube-de-portugal",
    "imagen": "futbolmodaes_img/otro-club-sporting-clube-de-portugal/26647.jpg",
    "nombre": "SPORTING CLUB 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "15541",
    "equipo": "otro-club-sporting-clube-de-portugal",
    "imagen": "futbolmodaes_img/otro-club-sporting-clube-de-portugal/15541.jpg",
    "nombre": "SPORTING CLUB 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "15540",
    "equipo": "otro-club-sporting-clube-de-portugal",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lisbon 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18105",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/18105.jpg",
    "nombre": "A2 Polos Rojo",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "18106",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/18106.jpg",
    "nombre": "A2 Polos Blanco",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "18104",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/18104.jpg",
    "nombre": "A2 Polos Azul",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "16009",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/16009.jpg",
    "nombre": "Pony Polo 8071 1- 8071 9",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "16010",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Pony Polo 8071 10- 8071 18",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "16008",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/16008.jpg",
    "nombre": "Polo Man Big Horse A9 01-A9 09",
    "precio_lista": 18.0,
    "precio_venta": 26.05
  },
  {
    "id": "10212",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/10212.jpg",
    "nombre": "Man Big Horse Polo",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10211",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Man Big Horse Polo",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10210",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Man Big Horse Polo",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10187",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "RL Polo 8080 Verde 2019",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "10186",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/10186.jpg",
    "nombre": "RL Polo 8082 Negro 2019",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "10185",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/10185.jpg",
    "nombre": "RL Polo 8082 Rojo 2019",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "10184",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/10184.jpg",
    "nombre": "Polo 8083 Gris 2019",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "10183",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "RL Polo 8086 Azul Real 2019",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "10182",
    "equipo": "polo-hombre-polos",
    "imagen": "futbolmodaes_img/polo-hombre-polos/10182.jpg",
    "nombre": "RL Polo 8086 Azul 2019",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "10209",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10209.jpg",
    "nombre": "Pony Polo Mujer Rojo",
    "precio_lista": 14.5,
    "precio_venta": 20.98
  },
  {
    "id": "10208",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10208.jpg",
    "nombre": "Pony Polo Mujer Negro",
    "precio_lista": 14.5,
    "precio_venta": 20.98
  },
  {
    "id": "10207",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10207.jpg",
    "nombre": "Pony Polo Mujer Navy Blue",
    "precio_lista": 14.5,
    "precio_venta": 20.98
  },
  {
    "id": "10206",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10206.jpg",
    "nombre": "Pony Polo Mujer Naranja",
    "precio_lista": 14.5,
    "precio_venta": 20.98
  },
  {
    "id": "10205",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10205.jpg",
    "nombre": "Pony Polo Mujer Azul",
    "precio_lista": 14.5,
    "precio_venta": 20.98
  },
  {
    "id": "10204",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10204.jpg",
    "nombre": "Pony Polo Mujer Blanco",
    "precio_lista": 14.5,
    "precio_venta": 20.98
  },
  {
    "id": "10203",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10203.jpg",
    "nombre": "Pony Polo Mujer Gris",
    "precio_lista": 14.5,
    "precio_venta": 20.98
  },
  {
    "id": "10202",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10202.jpg",
    "nombre": "Mujer Polo Army Green",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "10201",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10201.jpg",
    "nombre": "Mujer Polo Verde",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "10200",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10200.jpg",
    "nombre": "Mujer Polo Cielo Azul",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "10199",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10199.jpg",
    "nombre": "Mujer Polo Rose",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "10198",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10198.jpg",
    "nombre": "Mujer Polo Rojo",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "10197",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10197.jpg",
    "nombre": "Mujer Polo Purple",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "10196",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10196.jpg",
    "nombre": "Mujer Polo Negro",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "10195",
    "equipo": "polo-mujer-polo",
    "imagen": "futbolmodaes_img/polo-mujer-polo/10195.jpg",
    "nombre": "Mujer Polo Pink",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "16586",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16586.jpg",
    "nombre": "Polo 9006 Verde Chaquetas-1",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16587",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16587.jpg",
    "nombre": "Polo 9006 Verde Chaquetas-2",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16585",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16585.jpg",
    "nombre": "Polo 9006 Sapphire Chaquetas-2",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16582",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16582.jpg",
    "nombre": "Polo 9006 Negro Chaquetas-3",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16583",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16583.jpg",
    "nombre": "Polo 9006 Negro Chaquetas-2",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16584",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16584.jpg",
    "nombre": "Polo 9006 Sapphire Chaquetas-1",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16578",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16578.jpg",
    "nombre": "Polo 9006 Gris Chaquetas",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16579",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16579.jpg",
    "nombre": "Polo 9006 Rojo Chaquetas",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16580",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16580.jpg",
    "nombre": "Polo 9006 Negro Chaquetas-1",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16581",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16581.jpg",
    "nombre": "Polo 9006 Blanco Chaquetas",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "16577",
    "equipo": "polo-polo-chaquetas",
    "imagen": "futbolmodaes_img/polo-polo-chaquetas/16577.jpg",
    "nombre": "Polo 9006 Azul Chaquetas",
    "precio_lista": 36.0,
    "precio_venta": 52.09
  },
  {
    "id": "30025",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/30025.jpg",
    "nombre": "Arsenal 26-27 1a Equipacion Thai Camisetas Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "30024",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/30024.jpg",
    "nombre": "Arsenal 26-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "30015",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/30015.jpg",
    "nombre": "Arsenal 26-27 2a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "30014",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/30014.jpg",
    "nombre": "Arsenal 26-27 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29809",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/29809.jpg",
    "nombre": "Arsenal 26-27 2a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29722",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/29722.jpg",
    "nombre": "Arsenal 26-27 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28586",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/28586.jpg",
    "nombre": "Arsenal 25-26 3a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28585",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/28585.jpg",
    "nombre": "Arsenal 25-26 3a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28417",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/28417.jpg",
    "nombre": "Arsenal 25-26 1a Equipacion Manga Larga Thai Camisetas de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28395",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/28395.jpg",
    "nombre": "Arsenal 25-26 2a Equipacion Manga Larga Thai Camisetas de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28213",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/28213.jpg",
    "nombre": "Arsenal 25-26 2a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28097",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/28097.jpg",
    "nombre": "Arsenal 25-26 2a Equipacion Jugador Version Camisetas de Futbol",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27866",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/27866.jpg",
    "nombre": "Arsenal 25-26 2a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "27688",
    "equipo": "premier-league-arsenal",
    "imagen": "futbolmodaes_img/premier-league-arsenal/27688.jpg",
    "nombre": "Arsenal 25-26 Portero Ninos Camisetas y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "30397",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30397.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "30396",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30396.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "30395",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30395.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29274",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/29274.jpg",
    "nombre": "Aston Villa 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28610",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/28610.jpg",
    "nombre": "Aston Villa 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28609",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/28609.jpg",
    "nombre": "Aston Villa 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27639",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/27639.jpg",
    "nombre": "Aston Villa 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26632",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/26632.jpg",
    "nombre": "Aston Villa 25-26 3a Equipacion Jugador Camiseta de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "26633",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/26633.jpg",
    "nombre": "Aston Villa 25-26 2a Equipacion Jugador Camiseta de Futbol",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "18485",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/18485.jpg",
    "nombre": "Aston Villa 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30420",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30420.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Thai Camiseta WATKINS 11",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "30418",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30418.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Thai Camiseta TIELEMANS 8",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "30419",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30419.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Thai Camiseta PAU 14",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "30416",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30416.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Thai Camiseta SANCHO 19",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "30417",
    "equipo": "premier-league-aston-villa",
    "imagen": "futbolmodaes_img/premier-league-aston-villa/30417.jpg",
    "nombre": "Aston Villa 26-27 1a Equipacion Thai Camiseta ROGERS 27",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "28270",
    "equipo": "premier-league-brighton",
    "imagen": "futbolmodaes_img/premier-league-brighton/28270.jpg",
    "nombre": "Brighton 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "24006",
    "equipo": "premier-league-brighton",
    "imagen": "futbolmodaes_img/premier-league-brighton/24006.jpg",
    "nombre": "Brighton 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "23661",
    "equipo": "premier-league-brighton",
    "imagen": "futbolmodaes_img/premier-league-brighton/23661.jpg",
    "nombre": "Brighton 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29636",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/29636.jpg",
    "nombre": "Chelsea 26-27 Pre Match Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29450",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/29450.jpg",
    "nombre": "Chelsea 26-27 1a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28763",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/28763.jpg",
    "nombre": "Chelsea 25-26 3a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28737",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/28737.jpg",
    "nombre": "Chelsea 25-26 3a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28736",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/28736.jpg",
    "nombre": "Chelsea 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28282",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/28282.jpg",
    "nombre": "Chelsea 25-26 2a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28281",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/28281.jpg",
    "nombre": "Chelsea 25-26 1a Equipacion Jugador Version Camiseta de Futbol",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27994",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/27994.jpg",
    "nombre": "Chelsea 25-26 2a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27530",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/27530.jpg",
    "nombre": "Chelsea 25-26 Portero Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27529",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/27529.jpg",
    "nombre": "Chelsea 25-26 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27500",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/27500.jpg",
    "nombre": "Chelsea 25-26 2a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27241",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/27241.jpg",
    "nombre": "Chelsea 25-26 1a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "26964",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/26964.jpg",
    "nombre": "Chelsea 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "26961",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/26961.jpg",
    "nombre": "Chelsea 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28760",
    "equipo": "premier-league-chelsea",
    "imagen": "futbolmodaes_img/premier-league-chelsea/28760.jpg",
    "nombre": "Chelsea 25-26 3a Equipacion Thai Camiseta Tosin 4",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "18938",
    "equipo": "premier-league-crystal-palace",
    "imagen": "futbolmodaes_img/premier-league-crystal-palace/18938.jpg",
    "nombre": "Crystal Palace 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18937",
    "equipo": "premier-league-crystal-palace",
    "imagen": "futbolmodaes_img/premier-league-crystal-palace/18937.jpg",
    "nombre": "Crystal Palace 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10350",
    "equipo": "premier-league-crystal-palace",
    "imagen": "futbolmodaes_img/premier-league-crystal-palace/10350.jpg",
    "nombre": "Crystal Palace 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29455",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29455.jpg",
    "nombre": "Everton 25-26 4a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29074",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29074.jpg",
    "nombre": "Everton 25-26 2a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29075",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29075.jpg",
    "nombre": "Everton 25-26 3a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29073",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29073.jpg",
    "nombre": "Everton 25-26 1a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "20147",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/20147.jpg",
    "nombre": "Everton 25-26 3a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "18939",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/18939.jpg",
    "nombre": "Everton 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18786",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/18786.jpg",
    "nombre": "Everton 25-26 2a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "18785",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/18785.jpg",
    "nombre": "Everton 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "15423",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/15423.jpg",
    "nombre": "Everton 25-26 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "15422",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/15422.jpg",
    "nombre": "Everton 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29634",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29634.jpg",
    "nombre": "Everton 25-26 4a Equipacion Thai Camiseta TARKOWSKI 6",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29631",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29631.jpg",
    "nombre": "Everton 25-26 4a Equipacion Thai Camiseta ROHL 34",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29632",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29632.jpg",
    "nombre": "Everton 25-26 4a Equipacion Thai Camiseta PATTERSON 2",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29633",
    "equipo": "premier-league-everton",
    "imagen": "futbolmodaes_img/premier-league-everton/29633.jpg",
    "nombre": "Everton 25-26 4a Equipacion Thai Camiseta NDIAYE 10",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29273",
    "equipo": "premier-league-fulham",
    "imagen": "futbolmodaes_img/premier-league-fulham/29273.jpg",
    "nombre": "Fulham 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27153",
    "equipo": "premier-league-fulham",
    "imagen": "futbolmodaes_img/premier-league-fulham/27153.jpg",
    "nombre": "Fulham 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18941",
    "equipo": "premier-league-fulham",
    "imagen": "futbolmodaes_img/premier-league-fulham/18941.jpg",
    "nombre": "Fulham 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29149",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/29149.jpg",
    "nombre": "HotSpur 25-26 3a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29148",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/29148.jpg",
    "nombre": "HotSpur 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29147",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Hotspur 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28211",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/28211.jpg",
    "nombre": "HotSpur 25-26 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28210",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/28210.jpg",
    "nombre": "Hotspur 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28199",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/28199.jpg",
    "nombre": "HotSpur 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27869",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/27869.jpg",
    "nombre": "HotSpur 25-26 1a Equipacion Jugadora Version Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27733",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/27733.jpg",
    "nombre": "Hotspur 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27716",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "HotSpur 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27165",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/27165.jpg",
    "nombre": "HotSpur 25-26 Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26965",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/26965.jpg",
    "nombre": "HotSpur 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28209",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/28209.jpg",
    "nombre": "HotSpur 25-26 2a Equipacion Thai Camiseta VAN DE VEN 37",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "28205",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/28205.jpg",
    "nombre": "HotSpur 25-26 2a Equipacion Thai Camiseta ROMERO 17",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "28206",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/28206.jpg",
    "nombre": "HotSpur 25-26 2a Equipacion Thai Camiseta RICHARLISON 9",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "28207",
    "equipo": "premier-league-hotspur",
    "imagen": "futbolmodaes_img/premier-league-hotspur/28207.jpg",
    "nombre": "HotSpur 25-26 2a Equipacion Thai Camiseta SOLANKE 19",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "28621",
    "equipo": "premier-league-leeds-united",
    "imagen": "futbolmodaes_img/premier-league-leeds-united/28621.jpg",
    "nombre": "Leeds United 25-26 2a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "28622",
    "equipo": "premier-league-leeds-united",
    "imagen": "futbolmodaes_img/premier-league-leeds-united/28622.jpg",
    "nombre": "Leeds United 25-26 3a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "28620",
    "equipo": "premier-league-leeds-united",
    "imagen": "futbolmodaes_img/premier-league-leeds-united/28620.jpg",
    "nombre": "Leeds United 25-26 1a Equipacion Ninos Camisetas y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "18944",
    "equipo": "premier-league-leeds-united",
    "imagen": "futbolmodaes_img/premier-league-leeds-united/18944.jpg",
    "nombre": "Leeds United 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18943",
    "equipo": "premier-league-leeds-united",
    "imagen": "futbolmodaes_img/premier-league-leeds-united/18943.jpg",
    "nombre": "Leeds United 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "18942",
    "equipo": "premier-league-leeds-united",
    "imagen": "futbolmodaes_img/premier-league-leeds-united/18942.jpg",
    "nombre": "Leeds United 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "24613",
    "equipo": "premier-league-leicester-city",
    "imagen": "futbolmodaes_img/premier-league-leicester-city/24613.jpg",
    "nombre": "Leicester City 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "10877",
    "equipo": "premier-league-leicester-city",
    "imagen": "futbolmodaes_img/premier-league-leicester-city/10877.jpg",
    "nombre": "Leicester City 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "10876",
    "equipo": "premier-league-leicester-city",
    "imagen": "futbolmodaes_img/premier-league-leicester-city/10876.jpg",
    "nombre": "Leicester City 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "30154",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/30154.jpg",
    "nombre": "Liverpool 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "30148",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/30148.jpg",
    "nombre": "Liverpool 26-27 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "30147",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/30147.jpg",
    "nombre": "Liverpool 26-27 1a Equipacion Thai Camiseta de Futbol Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29447",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/29447.jpg",
    "nombre": "Liverpool 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29443",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/29443.jpg",
    "nombre": "Liverpool 26-27 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29014",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/29014.jpg",
    "nombre": "Liverpool 25-26 3a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29013",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/29013.jpg",
    "nombre": "Liverpool 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28764",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Liverpool 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28672",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/28672.jpg",
    "nombre": "Liverpool 25-26 1a Equipacion Jugadora Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28671",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/28671.png",
    "nombre": "Liverpool 25-26 2a Equipacion Jugadora Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28582",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/28582.jpg",
    "nombre": "Liverpool 25-26 2a Equipacion Thai Camiseta Manga Larga",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28581",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/28581.jpg",
    "nombre": "Liverpool 25-26 2a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28580",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/28580.jpg",
    "nombre": "Liverpool 25-26 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28579",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/28579.jpg",
    "nombre": "Liverpool 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28578",
    "equipo": "premier-league-liverpool",
    "imagen": "futbolmodaes_img/premier-league-liverpool/28578.jpg",
    "nombre": "Liverpool 25-26 1a Equipacion Thai Camiseta Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28108",
    "equipo": "premier-league-lpswich",
    "imagen": "futbolmodaes_img/premier-league-lpswich/28108.jpg",
    "nombre": "Lpswich 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28109",
    "equipo": "premier-league-lpswich",
    "imagen": "futbolmodaes_img/premier-league-lpswich/28109.jpg",
    "nombre": "Lpswich 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28107",
    "equipo": "premier-league-lpswich",
    "imagen": "futbolmodaes_img/premier-league-lpswich/28107.jpg",
    "nombre": "Lpswich 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "30156",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/30156.jpg",
    "nombre": "Manchester City 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29445",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/29445.jpg",
    "nombre": "Manchester City 26-27 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "28985",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28985.jpg",
    "nombre": "Manchester City 25-26 3a Equipacion Jugador Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28475",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28475.jpg",
    "nombre": "Manchester City 25-26 2a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28474",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28474.jpg",
    "nombre": "Manchester City 25-26 KidSuper Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28473",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28473.jpg",
    "nombre": "Manchester City 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28472",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28472.jpg",
    "nombre": "Manchester City 25-26 2a Equipacion Thai Camiseta Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28471",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28471.jpg",
    "nombre": "Manchester City 25-26 1a Equipacion Thai Camiseta Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28280",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28280.jpg",
    "nombre": "Manchester City 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28173",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28173.jpg",
    "nombre": "Manchester City 25-26 2a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28148",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28148.jpg",
    "nombre": "Manchester City 25-26 2a Equipacion Jugador Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28147",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/premier-league-manchester-city/28147.jpg",
    "nombre": "Manchester City 25-26 1a Equipacion Jugador Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27459",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester City 25-26 2a Equipacion Portero Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27458",
    "equipo": "premier-league-manchester-city",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester City 25-26 1a Equipacion Portero Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30124",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester United 26-27 1a Equipacion Thai Camiseta Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "30119",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "M.United 26-27 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "30017",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/30017.jpg",
    "nombre": "Manchester United 26-27 1a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29723",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/29723.jpg",
    "nombre": "Manchester United 26-27 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "28664",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/28664.png",
    "nombre": "Manchester United 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28450",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/28450.jpg",
    "nombre": "Manchester United 25-26 2a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28444",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/28444.jpg",
    "nombre": "Manchester United 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28443",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/28443.jpg",
    "nombre": "Manchester Unit ed 25-26 2a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28105",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/28105.jpg",
    "nombre": "Manchester United 25-26 3a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27873",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/27873.jpg",
    "nombre": "Manchester United 25-26 3a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27872",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/27872.jpg",
    "nombre": "Manchester United 25-26 1a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27646",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/27646.jpg",
    "nombre": "M.United 25-26 3a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27510",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/premier-league-manchester-united/27510.jpg",
    "nombre": "M.United 25-26 1a Equipacion Thai Mujer Camiseta de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27232",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester United 25-26 1a Ninos Camisetas y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27122",
    "equipo": "premier-league-manchester-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Manchester United 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29150",
    "equipo": "premier-league-newcastle-united",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Newcastle United 25-26 Portero Rosa Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28118",
    "equipo": "premier-league-newcastle-united",
    "imagen": "futbolmodaes_img/premier-league-newcastle-united/28118.jpg",
    "nombre": "Newcastle United 25-26 3a EquipaciÃ³n Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28117",
    "equipo": "premier-league-newcastle-united",
    "imagen": "futbolmodaes_img/premier-league-newcastle-united/28117.jpg",
    "nombre": "Newcastle United 25-26 2a EquipaciÃ³n Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27863",
    "equipo": "premier-league-newcastle-united",
    "imagen": "futbolmodaes_img/premier-league-newcastle-united/27863.jpg",
    "nombre": "Newcastle United 25-26 1a EquipaciÃ³n Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "27109",
    "equipo": "premier-league-newcastle-united",
    "imagen": "futbolmodaes_img/premier-league-newcastle-united/27109.jpg",
    "nombre": "Newcastle United 25-26 1a EquipaciÃ³n Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27159",
    "equipo": "premier-league-sheffield-united",
    "imagen": "futbolmodaes_img/premier-league-sheffield-united/27159.jpg",
    "nombre": "Sheffield United 25-26 Conmemorativa Edicion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18948",
    "equipo": "premier-league-sheffield-united",
    "imagen": "futbolmodaes_img/premier-league-sheffield-united/18948.jpg",
    "nombre": "Sheffield United 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18949",
    "equipo": "premier-league-sheffield-united",
    "imagen": "futbolmodaes_img/premier-league-sheffield-united/18949.jpg",
    "nombre": "Sheffield United 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18947",
    "equipo": "premier-league-sheffield-united",
    "imagen": "futbolmodaes_img/premier-league-sheffield-united/18947.jpg",
    "nombre": "Sheffield United 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18924",
    "equipo": "premier-league-southampton",
    "imagen": "futbolmodaes_img/premier-league-southampton/18924.jpg",
    "nombre": "Southampton 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "15813",
    "equipo": "premier-league-southampton",
    "imagen": "futbolmodaes_img/premier-league-southampton/15813.jpg",
    "nombre": "Southampton 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "11428",
    "equipo": "premier-league-southampton",
    "imagen": "futbolmodaes_img/premier-league-southampton/11428.jpg",
    "nombre": "Southampton 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "18489",
    "equipo": "premier-league-west-bromwich",
    "imagen": "futbolmodaes_img/premier-league-west-bromwich/18489.jpg",
    "nombre": "West Bromwich 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "18490",
    "equipo": "premier-league-west-bromwich",
    "imagen": "futbolmodaes_img/premier-league-west-bromwich/18490.jpg",
    "nombre": "West Bromwich 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "18488",
    "equipo": "premier-league-west-bromwich",
    "imagen": "futbolmodaes_img/premier-league-west-bromwich/18488.jpg",
    "nombre": "West Bromwich 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "28981",
    "equipo": "premier-league-west-ham-united",
    "imagen": "futbolmodaes_img/premier-league-west-ham-united/28981.jpg",
    "nombre": "West Ham United 25-26 1a Equipacion Jugador Version Camiseta",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28695",
    "equipo": "premier-league-west-ham-united",
    "imagen": "futbolmodaes_img/premier-league-west-ham-united/28695.jpg",
    "nombre": "West Ham United 25-26 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28696",
    "equipo": "premier-league-west-ham-united",
    "imagen": "futbolmodaes_img/premier-league-west-ham-united/28696.jpg",
    "nombre": "West Ham United 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "28283",
    "equipo": "premier-league-west-ham-united",
    "imagen": "futbolmodaes_img/premier-league-west-ham-united/28283.jpg",
    "nombre": "West Ham 25-26 1a Ninos Camisetas y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "25097",
    "equipo": "premier-league-west-ham-united",
    "imagen": "futbolmodaes_img/premier-league-west-ham-united/25097.jpg",
    "nombre": "West Ham United 25-26 1a Equipacion Thai Mujer Camiseta",
    "precio_lista": 16.9,
    "precio_venta": 24.45
  },
  {
    "id": "25101",
    "equipo": "premier-league-west-ham-united",
    "imagen": "futbolmodaes_img/premier-league-west-ham-united/25101.jpg",
    "nombre": "West Ham United 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "10948",
    "equipo": "premier-league-wolverhampton-wanderers",
    "imagen": "futbolmodaes_img/premier-league-wolverhampton-wanderers/10948.jpg",
    "nombre": "Wolverhampton Wanderers 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "10947",
    "equipo": "premier-league-wolverhampton-wanderers",
    "imagen": "futbolmodaes_img/premier-league-wolverhampton-wanderers/10947.jpg",
    "nombre": "Wolverhampton Wanderers 25-26 1a Equipacion Thai Camiseta",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "18950",
    "equipo": "premier-league-wrexham",
    "imagen": "futbolmodaes_img/premier-league-wrexham/18950.jpg",
    "nombre": "Wrexham 25-26 1a Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30226",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/30226.jpg",
    "nombre": "AC Milan 26-27 3a Equipacion Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30227",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/30227.jpg",
    "nombre": "AC Milan 26-27 2a Equipacion Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30225",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/30225.jpg",
    "nombre": "AC Milan 26-27 1a Equipacion Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30205",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/30205.jpg",
    "nombre": "AC Milan 26-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "30204",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/30204.jpg",
    "nombre": "AC Milan 26-27 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29853",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/29853.jpg",
    "nombre": "AC Milan 25-26 3a Equipacion Jugadora Thai Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28470",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/28470.jpg",
    "nombre": "AC Milan 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28469",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/28469.jpg",
    "nombre": "AC Milan 25-26 3a Equipacion Manga Larga Thai Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28452",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/28452.jpg",
    "nombre": "AC Milan 25-26 3a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28198",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/28198.jpg",
    "nombre": "AC Milan 25-26 2a Equipacion Manga Larga Thai Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "28197",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/28197.jpg",
    "nombre": "AC Milan 25-26 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27535",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/27535.jpg",
    "nombre": "AC Milan 25-26 2a Portero Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27534",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/27534.jpg",
    "nombre": "AC Milan 25-26 3a Equipacion Portero Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27533",
    "equipo": "serie-a-ac-milan",
    "imagen": "futbolmodaes_img/serie-a-ac-milan/27533.jpg",
    "nombre": "AC Milan 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28438",
    "equipo": "serie-a-acf-fiorentina",
    "imagen": "futbolmodaes_img/serie-a-acf-fiorentina/28438.jpg",
    "nombre": "ACF Fiorentina 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "28439",
    "equipo": "serie-a-acf-fiorentina",
    "imagen": "futbolmodaes_img/serie-a-acf-fiorentina/28439.jpg",
    "nombre": "ACF Fiorentina 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "24179",
    "equipo": "serie-a-acf-fiorentina",
    "imagen": "futbolmodaes_img/serie-a-acf-fiorentina/24179.jpg",
    "nombre": "ACF Fiorentina 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "29011",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "AS Roma 2025-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28987",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/28987.jpg",
    "nombre": "AS Roma 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28553",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/28553.jpg",
    "nombre": "AS Roma 2025-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28531",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/28531.jpg",
    "nombre": "AS Roma 25-26 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28244",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/28244.jpg",
    "nombre": "AS Roma 2025-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "28223",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/28223.jpg",
    "nombre": "AS Roma 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28095",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/28095.jpg",
    "nombre": "AS Roma 25-26 1a Equipacion Jugador Camiseta",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "29010",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29010.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta TSIMIKAS 12",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "29008",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29008.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta WESLEY 43",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "29009",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29009.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta ZIOLKOWSKI 24",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "29005",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29005.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta PELLEGRINI 7",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "29006",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29006.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta SANGARE 66",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "29007",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29007.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta RENSCH 2",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "29003",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29003.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta SOULE 18",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "29004",
    "equipo": "serie-a-as-roma",
    "imagen": "futbolmodaes_img/serie-a-as-roma/29004.jpg",
    "nombre": "AS Roma 2025-26 2a Equipacion Thai Camiseta PISILLI 61",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30126",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/30126.jpg",
    "nombre": "Inter Milan 26-27 1a Equipacion Thai Mujer Camisetas de Futbol",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29877",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/29877.jpg",
    "nombre": "Inter Milan 26-27 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29145",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Inter Milan 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29144",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/29144.jpg",
    "nombre": "Inter Milan 25-26 3a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "29121",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/29121.jpg",
    "nombre": "Inter Milan 25-26 3a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "28215",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/28215.jpg",
    "nombre": "Inter Milan 25-26 Pre Match Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27857",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/27857.jpg",
    "nombre": "Inter Milan 25-26 2a Equipacion Jugador Version Camisetas de Futbol",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27830",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Inter Milan 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27829",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Inter Milan 25-26 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27828",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/27828.jpg",
    "nombre": "Inter Milan 25-26 2a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27806",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Inter Milan 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27805",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/27805.jpg",
    "nombre": "Inter Milan 25-26 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27638",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/27638.jpg",
    "nombre": "Inter Milan 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27498",
    "equipo": "serie-a-inter-milan",
    "imagen": "futbolmodaes_img/serie-a-inter-milan/27498.jpg",
    "nombre": "Inter Milan 25-26 Especial Ninos Camiseta y Shorts",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "30011",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Juventus 26-27 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 16.5,
    "precio_venta": 23.88
  },
  {
    "id": "30010",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/30010.jpg",
    "nombre": "Juventus 26-27 1a Equipacion Thai Camisetas Manga Larga",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "29986",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/29986.jpg",
    "nombre": "Juventus 26-27 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29109",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Juventus 25-26 3a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "29086",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/29086.jpg",
    "nombre": "Juventus 25-26 3a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "29085",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/29085.jpg",
    "nombre": "Juventus 25-26 3a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "28269",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/28269.jpg",
    "nombre": "Juventus 25-26 2a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "28104",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/28104.jpg",
    "nombre": "Juventus 25-26 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27991",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/27991.jpg",
    "nombre": "Juventus 25-26 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27966",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/27966.jpg",
    "nombre": "Juventus 25-26 2a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27404",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/serie-a-juventus/27404.jpg",
    "nombre": "Juventus 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27201",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Juventus 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27199",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Juventus 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27113",
    "equipo": "serie-a-juventus",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Juventus 25-26 1a Equipacion Thai Camisetas de Futbol",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "16181",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 19.0,
    "precio_venta": 27.49
  },
  {
    "id": "13310",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/serie-a-lazio/13310.jpg",
    "nombre": "Lazio 25-26 2a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "13311",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/serie-a-lazio/13311.jpg",
    "nombre": "Lazio 25-26 1a Equipacion Thai Camiseta de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "16210",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta PEDRO 9",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "16211",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/serie-a-lazio/16211.jpg",
    "nombre": "Lazio 25-26 2a Equipacion Thai Camiseta PEDRO 9",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "16213",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta LAZZARI 29",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "16203",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/serie-a-lazio/16203.jpg",
    "nombre": "Lazio 25-26 2a Equipacion Thai Camiseta PATRIC 4",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "16204",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta ROMAGNOLI 13",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "16205",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta MARUSIC 77",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "16207",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta PELLEGRINI 3",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "16208",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/serie-a-lazio/16208.jpg",
    "nombre": "Lazio 25-26 2a Equipacion Thai Camiseta ZACCAGNI 10",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "16198",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta TATY 19",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "16199",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/serie-a-lazio/16199.jpg",
    "nombre": "Lazio 25-26 2a Equipacion Thai Camiseta PELLEGRINI 3",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "16201",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Lazio 24-25 3a Equipacion Thai Camiseta ROVELLA 65",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "16202",
    "equipo": "serie-a-lazio",
    "imagen": "futbolmodaes_img/serie-a-lazio/16202.jpg",
    "nombre": "Lazio 25-26 2a Equipacion Thai Camiseta ROMAGNOLI 13",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "16855",
    "equipo": "serie-a-parma",
    "imagen": "futbolmodaes_img/serie-a-parma/16855.jpg",
    "nombre": "Parma 25-26 2a Equipacion Thai Camiseta",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "16853",
    "equipo": "serie-a-parma",
    "imagen": "futbolmodaes_img/serie-a-parma/16853.jpg",
    "nombre": "Parma 1a Equipacion Thai Camiseta 2025-26",
    "precio_lista": 19.5,
    "precio_venta": 28.22
  },
  {
    "id": "29637",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/29637.jpg",
    "nombre": "SSC Napoli 26-27 Pre Match Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "29319",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/29319.jpg",
    "nombre": "SSC Napoli 25-26 City Especial Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29317",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/29317.jpg",
    "nombre": "SSC Napoli 25-26 Halloween Azul Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "29316",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/29316.jpg",
    "nombre": "SSC Napoli 25-26 Halloween Rojo Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "25833",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/25833.jpg",
    "nombre": "SSC Napoli 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "26727",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/26727.jpg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "26728",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/26728.jpg",
    "nombre": "SSC Napoli 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "14082",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/14082.jpg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camiseta JESUS 5",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "14083",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/14083.jpg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camiseta LUKAKU 9",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "14076",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/14076.jpg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camiseta HOJLUND 19",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "14077",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camiseta MAZZOCCHI 30",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "14080",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/14080.jpg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camiseta LANG 70",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "14081",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/serie-a-ssc-napoli/14081.jpg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camiseta POLITANO 21",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "14078",
    "equipo": "serie-a-ssc-napoli",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "SSC Napoli 25-26 3a Equipacion Thai Camiseta MARIANUCCI 35",
    "precio_lista": 22.0,
    "precio_venta": 31.83
  },
  {
    "id": "24809",
    "equipo": "serie-a-venezia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "VENEZIA 23-24 2a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "24808",
    "equipo": "serie-a-venezia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "VENEZIA 23-24 3a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "24807",
    "equipo": "serie-a-venezia",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "VENEZIA 23-24 1a Equipacion Thai Camiseta",
    "precio_lista": 18.9,
    "precio_venta": 27.35
  },
  {
    "id": "28212",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/28212.jpg",
    "nombre": "Real Madrid 25-26 US Pack Camiseta",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  },
  {
    "id": "27927",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27927.jpg",
    "nombre": "Real Madrid 25-26 2a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27926",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27926.jpg",
    "nombre": "Real Madrid 25-26 2a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27925",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27925.jpg",
    "nombre": "Real Madrid 25-26 2a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27860",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27860.jpg",
    "nombre": "Real Madrid 25-26 3a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27856",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27856.jpg",
    "nombre": "Real Madrid 25-26 1a Equipacion Jugador Version Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27687",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27687.jpg",
    "nombre": "Real Madrid 25-26 Doodle Thai Camisetas de Futbol",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27683",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27683.jpg",
    "nombre": "Real Madrid 25-26 Pre Match Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27660",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27660.jpg",
    "nombre": "Real Madrid 25-26 1a Equipacion Portero Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27658",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27658.jpg",
    "nombre": "Real Madrid 25-26 1a Equipacion Portero Thai Camisetas",
    "precio_lista": 17.9,
    "precio_venta": 25.9
  },
  {
    "id": "27657",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27657.jpg",
    "nombre": "Real Madrid 25-26 1a Equipacion Ninos Camiseta y Shorts",
    "precio_lista": 15.0,
    "precio_venta": 21.71
  },
  {
    "id": "27654",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27654.jpg",
    "nombre": "Real Madrid 25-26 1a Equipacion Thai Mujer Camisetas",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27653",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27653.jpg",
    "nombre": "Real Madrid 25-26 1a Equipacion Thai Camisetas",
    "precio_lista": 17.5,
    "precio_venta": 25.32
  },
  {
    "id": "27645",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27645.jpg",
    "nombre": "Real Madrid 25-26 3a Equipacion Thai Mujer Camiseta",
    "precio_lista": 15.9,
    "precio_venta": 23.01
  },
  {
    "id": "27641",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27641.jpg",
    "nombre": "Real Madrid 1986-87 2a Retro Thai Camisetas",
    "precio_lista": 26.0,
    "precio_venta": 37.62
  },
  {
    "id": "27636",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27636.jpg",
    "nombre": "Real Madrid 25-26 Especial Ninos Camiseta y Shorts Blanco y Azul",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "27607",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27607.jpg",
    "nombre": "Real Madrid 25-26 Guerreros Jugador Camisetas",
    "precio_lista": 22.5,
    "precio_venta": 32.56
  },
  {
    "id": "27499",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27499.jpg",
    "nombre": "Real Madrid 25-26 Blanco y Negro Dragon Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27363",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27363.jpg",
    "nombre": "Real Madrid 25-26 Especial Ronaldo 7 Thai Camisetas",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "27284",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27284.jpg",
    "nombre": "Real Madrid 25-26 Dragon Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27283",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27283.jpg",
    "nombre": "Real Madrid 25-26 Rosa Dragon Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27282",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27282.jpg",
    "nombre": "Real Madrid 25-26 Pre MatchThai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27202",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27202.jpg",
    "nombre": "Real Madrid 25-26 3a Negro Portero Ninos Camiseta y Shorts",
    "precio_lista": 16.0,
    "precio_venta": 23.15
  },
  {
    "id": "27119",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27119.jpg",
    "nombre": "Real Madrid 25-26 Rosa Dragon Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "27093",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27093.jpg",
    "nombre": "Real Madrid 1998-2000 2a Retro Thai Camisetas",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "27088",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27088.jpg",
    "nombre": "Ronaldo 25-26 Especial Thai Camisetas-Con Ronaldo",
    "precio_lista": 19.9,
    "precio_venta": 28.8
  },
  {
    "id": "27080",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27080.jpg",
    "nombre": "Real Madrid 25-26 3a Equipacion Jugador Camisetas",
    "precio_lista": 21.0,
    "precio_venta": 30.39
  },
  {
    "id": "27062",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27062.jpg",
    "nombre": "Real Madrid 25-26 Negro-Verde Dragona Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27061",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27061.jpg",
    "nombre": "Real Madrid 25-26 Dragona Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "27057",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/27057.jpg",
    "nombre": "Real Madrid 25-26 Especial Ninos Camiseta y Shorts",
    "precio_lista": 15.5,
    "precio_venta": 22.43
  },
  {
    "id": "25454",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/25454.jpg",
    "nombre": "Real Madrid 25-26 1a Equipacion Portero Jugador Version Camisetas",
    "precio_lista": 21.5,
    "precio_venta": 31.11
  },
  {
    "id": "26725",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/26725.png",
    "nombre": "Real Madrid 25-26 Marvel Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "26797",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/26797.jpg",
    "nombre": "Real Madrid 25-26 Pre Match Thai Camiseta",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "24709",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/24709.jpg",
    "nombre": "Real Madrid 1998-2000 1a Retro Thai Camisetas",
    "precio_lista": 23.5,
    "precio_venta": 34.0
  },
  {
    "id": "22301",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/22301.png",
    "nombre": "Real Madrid 25-26 Marvel Thai Camisetas",
    "precio_lista": 18.5,
    "precio_venta": 26.77
  },
  {
    "id": "30276",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/placeholder.svg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas VINI JR. 7",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30275",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30275.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas TRENT 12",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30273",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30273.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas TCHOUAMENI 14",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30274",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30274.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas VALVERDE 8",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30270",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30270.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas MASTANTUONO 30",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30271",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30271.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas GONZALO 16",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30272",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30272.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas RODRYGO 11",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "30267",
    "equipo": "la-liga-real-madrid",
    "imagen": "futbolmodaes_img/la-liga-real-madrid/30267.jpg",
    "nombre": "Real Madrid 26-27 1a Equipacion Thai Camisetas HUIJSEN 24",
    "precio_lista": 20.0,
    "precio_venta": 28.94
  },
  {
    "id": "25561",
    "equipo": "nacional-espana",
    "imagen": "futbolmodaes_img/nacional-espana/25561.jpg",
    "nombre": "Espana 1996 Retro 1a Thai Camisetas",
    "precio_lista": 25.0,
    "precio_venta": 36.18
  }
];
