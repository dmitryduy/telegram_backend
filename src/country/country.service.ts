import { Injectable } from "@nestjs/common";
import { ICountry } from "./country.interface";
import { language } from "./country.types";

const countries = [
  {
    "en": "Ascension",
    "ru": "Остров Вознесения",
    "dialCode": "247",
    "mask": "0000"
  },
  {
    "en": "Andorra",
    "ru": "Андорра",
    "dialCode": "376",
    "mask": "000-000"
  },
  {
    "en": "United Arab Emirates",
    "ru": "Объединенные Арабские Эмираты",
    "dialCode": "9715",
    "mask": "0-000-0000"
  },
  {
    "en": "Afghanistan",
    "ru": "Афганистан",
    "dialCode": "93",
    "mask": "00-000-0000"
  },
  {
    "en": "Antigua & Barbuda",
    "ru": "Антигуа и Барбуда",
    "dialCode": "1268",
    "mask": "000-0000"
  },
  {
    "en": "Anguilla",
    "ru": "Ангилья",
    "dialCode": "1264",
    "mask": "000-0000"
  },
  {
    "en": "Albania",
    "ru": "Албания",
    "dialCode": "355",
    "mask": "(000)000-000"
  },
  {
    "en": "Armenia",
    "ru": "Армения",
    "dialCode": "374",
    "mask": "00-000-000"
  },
  {
    "en": "Netherlands Antilles",
    "ru": "Нидерландские Антильские острова",
    "dialCode": "5999",
    "mask": "000-0000"
  },
  {
    "en": "Angola",
    "ru": "Ангола",
    "dialCode": "244",
    "mask": "(000)000-000"
  },
  {
    "en": "Australian bases in Antarctica",
    "ru": "Австралийская антарктическая база",
    "dialCode": "6721",
    "mask": "00-000"
  },
  {
    "en": "Argentina",
    "ru": "Аргентина",
    "dialCode": "54",
    "mask": "(000)000-0000"
  },
  {
    "en": "American Samoa",
    "ru": "Американское Самоа",
    "dialCode": "1684",
    "mask": "()000-0000"
  },
  {
    "en": "Austria",
    "ru": "Австрия",
    "dialCode": "43",
    "mask": "(000)000-0000"
  },
  {
    "en": "Australia",
    "ru": "Австралия",
    "dialCode": "61",
    "mask": "0-0000-0000"
  },
  {
    "en": "Aruba",
    "ru": "Аруба",
    "dialCode": "297",
    "mask": "000-0000"
  },
  {
    "en": "Azerbaijan",
    "ru": "Азербайджан",
    "dialCode": "994",
    "mask": "00-000-00-00"
  },
  {
    "en": "Bosnia and Herzegovina",
    "ru": "Босния и Герцеговина",
    "dialCode": "387",
    "mask": "00-0000"
  },
  {
    "en": "Barbados",
    "ru": "Барбадос",
    "dialCode": "1246",
    "mask": "()000-0000"
  },
  {
    "en": "Bangladesh",
    "ru": "Бангладеш",
    "dialCode": "880",
    "mask": "00-000-000"
  },
  {
    "en": "Belgium",
    "ru": "Бельгия",
    "dialCode": "32",
    "mask": "(000)000-000"
  },
  {
    "en": "Burkina Faso",
    "ru": "Буркина Фасо",
    "dialCode": "226",
    "mask": "00-00-0000"
  },
  {
    "en": "Bulgaria",
    "ru": "Болгария",
    "dialCode": "359",
    "mask": "(000)000-000"
  },
  {
    "en": "Bahrain",
    "ru": "Бахрейн",
    "dialCode": "973",
    "mask": "0000-0000"
  },
  {
    "en": "Burundi",
    "ru": "Бурунди",
    "dialCode": "257",
    "mask": "00-00-0000"
  },
  {
    "en": "Benin",
    "ru": "Бенин",
    "dialCode": "229",
    "mask": "00-00-0000"
  },
  {
    "en": "Bermuda",
    "ru": "Бермудские острова",
    "dialCode": "1441",
    "mask": "()000-0000"
  },
  {
    "en": "Brunei Darussalam",
    "ru": "Бруней-Даруссалам",
    "dialCode": "673",
    "mask": "000-0000"
  },
  {
    "en": "Bolivia",
    "ru": "Боливия",
    "dialCode": "591",
    "mask": "0-000-0000"
  },
  {
    "en": "Brazil",
    "ru": "Бразилия",
    "dialCode": "559",
    "mask": "(00)0000-0000"
  },
  {
    "en": "Bahamas",
    "ru": "Багамские Острова",
    "dialCode": "1242",
    "mask": "000-0000"
  },
  {
    "en": "Bhutan",
    "ru": "Бутан",
    "dialCode": "975",
    "mask": "0-000-000"
  },
  {
    "en": "Botswana",
    "ru": "Ботсвана",
    "dialCode": "267",
    "mask": "00-000-000"
  },
  {
    "en": "Belarus",
    "ru": "Беларусь (Белоруссия)",
    "dialCode": "375",
    "mask": "(00)000-00-00"
  },
  {
    "en": "Belize",
    "ru": "Белиз",
    "dialCode": "501",
    "mask": "000-0000"
  },
  {
    "en": "Dem. Rep. Congo",
    "ru": "Дем. Респ. Конго (Киншаса)",
    "dialCode": "243",
    "mask": "(000)000-000"
  },
  {
    "en": "Central African Republic",
    "ru": "Центральноафриканская Республика",
    "dialCode": "236",
    "mask": "00-00-0000"
  },
  {
    "en": "Congo (Brazzaville)",
    "ru": "Конго (Браззавиль)",
    "dialCode": "242",
    "mask": "00-000-0000"
  },
  {
    "en": "Switzerland",
    "ru": "Швейцария",
    "dialCode": "41",
    "mask": "00-000-0000"
  },
  {
    "en": "Cote d’Ivoire (Ivory Coast)",
    "ru": "Кот-д’Ивуар",
    "dialCode": "225",
    "mask": "00-000-000"
  },
  {
    "en": "Cook Islands",
    "ru": "Острова Кука",
    "dialCode": "682",
    "mask": "00-000"
  },
  {
    "en": "Chile",
    "ru": "Чили",
    "dialCode": "56",
    "mask": "0-0000-0000"
  },
  {
    "en": "Cameroon",
    "ru": "Камерун",
    "dialCode": "237",
    "mask": "0000-0000"
  },
  {
    "en": "China (PRC)",
    "ru": "Китайская Н.Р.",
    "dialCode": "86",
    "mask": "00-00000-00000"
  },
  {
    "en": "Colombia",
    "ru": "Колумбия",
    "dialCode": "57",
    "mask": "(000)000-0000"
  },
  {
    "en": "Costa Rica",
    "ru": "Коста-Рика",
    "dialCode": "506",
    "mask": "0000-0000"
  },
  {
    "en": "Cuba",
    "ru": "Куба",
    "dialCode": "53",
    "mask": "0-000-0000"
  },
  {
    "en": "Cape Verde",
    "ru": "Кабо-Верде",
    "dialCode": "238",
    "mask": "(000)00-00"
  },
  {
    "en": "Curacao",
    "ru": "Кюрасао",
    "dialCode": "599",
    "mask": "000-0000"
  },
  {
    "en": "Cyprus",
    "ru": "Кипр",
    "dialCode": "357",
    "mask": "00-000-000"
  },
  {
    "en": "Czech Republic",
    "ru": "Чехия",
    "dialCode": "420",
    "mask": "(000)000-000"
  },
  {
    "en": "Germany",
    "ru": "Германия",
    "dialCode": "49",
    "mask": "000-000"
  },
  {
    "en": "Djibouti",
    "ru": "Джибути",
    "dialCode": "253",
    "mask": "00-00-00-00"
  },
  {
    "en": "Denmark",
    "ru": "Дания",
    "dialCode": "45",
    "mask": "00-00-00-00"
  },
  {
    "en": "Dominica",
    "ru": "Доминика",
    "dialCode": "1767",
    "mask": "()000-0000"
  },
  {
    "en": "Dominican Republic",
    "ru": "Доминиканская Республика",
    "dialCode": "1849",
    "mask": "()000-0000"
  },
  {
    "en": "Algeria",
    "ru": "Алжир",
    "dialCode": "213",
    "mask": "00-000-0000"
  },
  {
    "en": "Ecuador ",
    "ru": "Эквадор ",
    "dialCode": "593",
    "mask": "00-000-0000"
  },
  {
    "en": "Ecuador",
    "ru": "Эквадор",
    "dialCode": "593",
    "mask": "0-000-0000"
  },
  {
    "en": "Estonia ",
    "ru": "Эстония ",
    "dialCode": "372",
    "mask": "0000-0000"
  },
  {
    "en": "Estonia",
    "ru": "Эстония",
    "dialCode": "372",
    "mask": "000-0000"
  },
  {
    "en": "Egypt",
    "ru": "Египет",
    "dialCode": "20",
    "mask": "(000)000-0000"
  },
  {
    "en": "Eritrea",
    "ru": "Эритрея",
    "dialCode": "291",
    "mask": "0-000-000"
  },
  {
    "en": "Spain",
    "ru": "Испания",
    "dialCode": "34",
    "mask": "(000)000-000"
  },
  {
    "en": "Ethiopia",
    "ru": "Эфиопия",
    "dialCode": "251",
    "mask": "00-000-0000"
  },
  {
    "en": "Finland",
    "ru": "Финляндия",
    "dialCode": "358",
    "mask": "(000)000-00-00"
  },
  {
    "en": "Fiji",
    "ru": "Фиджи",
    "dialCode": "679",
    "mask": "00-00000"
  },
  {
    "en": "Falkland Islands",
    "ru": "Фолклендские острова",
    "dialCode": "500",
    "mask": "00000"
  },
  {
    "en": "F.S. Micronesia",
    "ru": "Ф.Ш. Микронезии",
    "dialCode": "691",
    "mask": "000-0000"
  },
  {
    "en": "Faroe Islands",
    "ru": "Фарерские острова",
    "dialCode": "298",
    "mask": "000-000"
  },
  {
    "en": "Mayotte",
    "ru": "Майотта",
    "dialCode": "262",
    "mask": "00000-0000"
  },
  {
    "en": "France",
    "ru": "Франция",
    "dialCode": "33",
    "mask": "(000)000-000"
  },
  {
    "en": "St Pierre & Miquelon",
    "ru": "Сен-Пьер и Микелон",
    "dialCode": "508",
    "mask": "00-0000"
  },
  {
    "en": "Guadeloupe",
    "ru": "Гваделупа",
    "dialCode": "590",
    "mask": "(000)000-000"
  },
  {
    "en": "Gabon",
    "ru": "Габон",
    "dialCode": "241",
    "mask": "0-00-00-00"
  },
  {
    "en": "Grenada",
    "ru": "Гренада",
    "dialCode": "1473",
    "mask": "()000-0000"
  },
  {
    "en": "Rep. of Georgia",
    "ru": "Грузия",
    "dialCode": "995",
    "mask": "(000)000-000"
  },
  {
    "en": "Guiana (French)",
    "ru": "Фр. Гвиана",
    "dialCode": "594",
    "mask": "00000-0000"
  },
  {
    "en": "Ghana",
    "ru": "Гана",
    "dialCode": "233",
    "mask": "(000)000-000"
  },
  {
    "en": "Gibraltar",
    "ru": "Гибралтар",
    "dialCode": "350",
    "mask": "000-00000"
  },
  {
    "en": "Greenland",
    "ru": "Гренландия",
    "dialCode": "299",
    "mask": "00-00-00"
  },
  {
    "en": "Gambia",
    "ru": "Гамбия",
    "dialCode": "220",
    "mask": "(000)00-00"
  },
  {
    "en": "Guinea",
    "ru": "Гвинея",
    "dialCode": "224",
    "mask": "00-000-000"
  },
  {
    "en": "Equatorial Guinea",
    "ru": "Экваториальная Гвинея",
    "dialCode": "240",
    "mask": "00-000-0000"
  },
  {
    "en": "Greece",
    "ru": "Греция",
    "dialCode": "30",
    "mask": "(000)000-0000"
  },
  {
    "en": "Guatemala",
    "ru": "Гватемала",
    "dialCode": "502",
    "mask": "0-000-0000"
  },
  {
    "en": "Guam",
    "ru": "Гуам",
    "dialCode": "1671",
    "mask": "()000-0000"
  },
  {
    "en": "Guinea-Bissau",
    "ru": "Гвинея-Бисау",
    "dialCode": "245",
    "mask": "0-000000"
  },
  {
    "en": "Guyana",
    "ru": "Гайана",
    "dialCode": "592",
    "mask": "000-0000"
  },
  {
    "en": "Hong Kong",
    "ru": "Гонконг",
    "dialCode": "852",
    "mask": "0000-0000"
  },
  {
    "en": "Honduras",
    "ru": "Гондурас",
    "dialCode": "504",
    "mask": "0000-0000"
  },
  {
    "en": "Croatia",
    "ru": "Хорватия",
    "dialCode": "385",
    "mask": "00-000-000"
  },
  {
    "en": "Haiti",
    "ru": "Гаити",
    "dialCode": "509",
    "mask": "00-00-0000"
  },
  {
    "en": "Hungary",
    "ru": "Венгрия",
    "dialCode": "36",
    "mask": "(000)000-000"
  },
  {
    "en": "Indonesia ",
    "ru": "Индонезия ",
    "dialCode": "628",
    "mask": "(00)000-00-000"
  },
  {
    "en": "Ireland",
    "ru": "Ирландия",
    "dialCode": "353",
    "mask": "(000)000-000"
  },
  {
    "en": "Israel ",
    "ru": "Израиль ",
    "dialCode": "9725",
    "mask": "0-000-0000"
  },
  {
    "en": "Israel",
    "ru": "Израиль",
    "dialCode": "972",
    "mask": "0-000-0000"
  },
  {
    "en": "India",
    "ru": "Индия",
    "dialCode": "91",
    "mask": "(0000)000-000"
  },
  {
    "en": "Diego Garcia",
    "ru": "Диего-Гарсия",
    "dialCode": "246",
    "mask": "000-0000"
  },
  {
    "en": "Iraq",
    "ru": "Ирак",
    "dialCode": "964",
    "mask": "(000)000-0000"
  },
  {
    "en": "Iran",
    "ru": "Иран",
    "dialCode": "98",
    "mask": "(000)000-0000"
  },
  {
    "en": "Iceland",
    "ru": "Исландия",
    "dialCode": "354",
    "mask": "000-0000"
  },
  {
    "en": "Italy",
    "ru": "Италия",
    "dialCode": "39",
    "mask": "(000)0000-000"
  },
  {
    "en": "Jamaica",
    "ru": "Ямайка",
    "dialCode": "1876",
    "mask": "()000-0000"
  },
  {
    "en": "Jordan",
    "ru": "Иордания",
    "dialCode": "962",
    "mask": "0-0000-0000"
  },
  {
    "en": "Japan ",
    "ru": "Япония ",
    "dialCode": "81",
    "mask": "00-0000-0000"
  },
  {
    "en": "Japan",
    "ru": "Япония",
    "dialCode": "81",
    "mask": "(000)000-000"
  },
  {
    "en": "Kenya",
    "ru": "Кения",
    "dialCode": "254",
    "mask": "000-000000"
  },
  {
    "en": "Kyrgyzstan",
    "ru": "Киргизия",
    "dialCode": "996",
    "mask": "(000)000-000"
  },
  {
    "en": "Cambodia",
    "ru": "Камбоджа",
    "dialCode": "855",
    "mask": "00-000-000"
  },
  {
    "en": "Kiribati",
    "ru": "Кирибати",
    "dialCode": "686",
    "mask": "00-000"
  },
  {
    "en": "Comoros",
    "ru": "Коморы",
    "dialCode": "269",
    "mask": "00-00000"
  },
  {
    "en": "Saint Kitts & Nevis",
    "ru": "Сент-Китс и Невис",
    "dialCode": "1869",
    "mask": "000-0000"
  },
  {
    "en": "Kuwait",
    "ru": "Кувейт",
    "dialCode": "965",
    "mask": "0000-0000"
  },
  {
    "en": "Cayman Islands",
    "ru": "Каймановы острова",
    "dialCode": "1345",
    "mask": "()000-0000"
  },
  {
    "en": "Kazakhstan",
    "ru": "Казахстан",
    "dialCode": "76",
    "mask": "(00)000-00-00"
  },
  {
    "en": "Kazakhstan",
    "ru": "Казахстан",
    "dialCode": "77",
    "mask": "(00)000-00-00"
  },
  {
    "en": "Laos ",
    "ru": "Лаос ",
    "dialCode": "85620",
    "mask": "(00)000-000"
  },
  {
    "en": "Laos",
    "ru": "Лаос",
    "dialCode": "856",
    "mask": "00-000-000"
  },
  {
    "en": "Lebanon ",
    "ru": "Ливан ",
    "dialCode": "961",
    "mask": "00-000-000"
  },
  {
    "en": "Lebanon",
    "ru": "Ливан",
    "dialCode": "961",
    "mask": "0-000-000"
  },
  {
    "en": "Saint Lucia",
    "ru": "Сент-Люсия",
    "dialCode": "1758",
    "mask": "000-0000"
  },
  {
    "en": "Liechtenstein",
    "ru": "Лихтенштейн",
    "dialCode": "423",
    "mask": "(000)000-0000"
  },
  {
    "en": "Sri Lanka",
    "ru": "Шри-Ланка",
    "dialCode": "94",
    "mask": "00-000-0000"
  },
  {
    "en": "Liberia",
    "ru": "Либерия",
    "dialCode": "231",
    "mask": "00-000-000"
  },
  {
    "en": "Lesotho",
    "ru": "Лесото",
    "dialCode": "266",
    "mask": "0-000-0000"
  },
  {
    "en": "Lithuania",
    "ru": "Литва",
    "dialCode": "370",
    "mask": "(000)00-000"
  },
  {
    "en": "Luxembourg",
    "ru": "Люксембург",
    "dialCode": "352",
    "mask": "(000)000-000"
  },
  {
    "en": "Latvia",
    "ru": "Латвия",
    "dialCode": "371",
    "mask": "00-000-000"
  },
  {
    "en": "Libya",
    "ru": "Ливия",
    "dialCode": "218",
    "mask": "00-000-000"
  },
  {
    "en": "Morocco",
    "ru": "Марокко",
    "dialCode": "212",
    "mask": "00-0000-000"
  },
  {
    "en": "Monaco",
    "ru": "Монако",
    "dialCode": "377",
    "mask": "00-000-000"
  },
  {
    "en": "Moldova",
    "ru": "Молдова",
    "dialCode": "373",
    "mask": "0000-0000"
  },
  {
    "en": "Montenegro",
    "ru": "Черногория",
    "dialCode": "382",
    "mask": "00-000-000"
  },
  {
    "en": "Madagascar",
    "ru": "Мадагаскар",
    "dialCode": "261",
    "mask": "00-00-00000"
  },
  {
    "en": "Marshall Islands",
    "ru": "Маршалловы Острова",
    "dialCode": "692",
    "mask": "000-0000"
  },
  {
    "en": "Republic of Macedonia",
    "ru": "Респ. Македония",
    "dialCode": "389",
    "mask": "00-000-000"
  },
  {
    "en": "Mali",
    "ru": "Мали",
    "dialCode": "223",
    "mask": "00-00-0000"
  },
  {
    "en": "Burma (Myanmar)",
    "ru": "Бирма (Мьянма)",
    "dialCode": "95",
    "mask": "000-000"
  },
  {
    "en": "Mongolia",
    "ru": "Монголия",
    "dialCode": "976",
    "mask": "00-00-0000"
  },
  {
    "en": "Macau",
    "ru": "Макао",
    "dialCode": "853",
    "mask": "0000-0000"
  },
  {
    "en": "Northern Mariana Islands",
    "ru": "Северные Марианские острова Сайпан",
    "dialCode": "1670",
    "mask": "000-0000"
  },
  {
    "en": "Martinique",
    "ru": "Мартиника",
    "dialCode": "596",
    "mask": "(000)00-00-00"
  },
  {
    "en": "Mauritania",
    "ru": "Мавритания",
    "dialCode": "222",
    "mask": "00-00-0000"
  },
  {
    "en": "Montserrat",
    "ru": "Монтсеррат",
    "dialCode": "1664",
    "mask": "()000-0000"
  },
  {
    "en": "Malta",
    "ru": "Мальта",
    "dialCode": "356",
    "mask": "0000-0000"
  },
  {
    "en": "Mauritius",
    "ru": "Маврикий",
    "dialCode": "230",
    "mask": "000-0000"
  },
  {
    "en": "Maldives",
    "ru": "Мальдивские острова",
    "dialCode": "960",
    "mask": "000-0000"
  },
  {
    "en": "Malawi",
    "ru": "Малави",
    "dialCode": "265",
    "mask": "0-0000-0000"
  },
  {
    "en": "Mexico",
    "ru": "Мексика",
    "dialCode": "52",
    "mask": "00-00-0000"
  },
  {
    "en": "Malaysia",
    "ru": "Малайзия",
    "dialCode": "60",
    "mask": "0-000-000"
  },
  {
    "en": "Mozambique",
    "ru": "Мозамбик",
    "dialCode": "258",
    "mask": "00-000-000"
  },
  {
    "en": "Namibia",
    "ru": "Намибия",
    "dialCode": "264",
    "mask": "00-000-0000"
  },
  {
    "en": "New Caledonia",
    "ru": "Новая Каледония",
    "dialCode": "687",
    "mask": "00-0000"
  },
  {
    "en": "Niger",
    "ru": "Нигер",
    "dialCode": "227",
    "mask": "00-00-0000"
  },
  {
    "en": "Norfolk Island",
    "ru": "Норфолк (остров)",
    "dialCode": "6723",
    "mask": "00-000"
  },
  {
    "en": "Nigeria ",
    "ru": "Нигерия ",
    "dialCode": "234",
    "mask": "(000)000-0000"
  },
  {
    "en": "Nicaragua",
    "ru": "Никарагуа",
    "dialCode": "505",
    "mask": "0000-0000"
  },
  {
    "en": "Netherlands",
    "ru": "Нидерланды",
    "dialCode": "31",
    "mask": "00-000-0000"
  },
  {
    "en": "Norway",
    "ru": "Норвегия",
    "dialCode": "47",
    "mask": "(000)00-000"
  },
  {
    "en": "Nepal",
    "ru": "Непал",
    "dialCode": "977",
    "mask": "00-000-000"
  },
  {
    "en": "Nauru",
    "ru": "Науру",
    "dialCode": "674",
    "mask": "000-0000"
  },
  {
    "en": "Niue",
    "ru": "Ниуэ",
    "dialCode": "683",
    "mask": "0000"
  },
  {
    "en": "New Zealand",
    "ru": "Новая Зеландия",
    "dialCode": "64",
    "mask": "(000)000-0000"
  },
  {
    "en": "Oman",
    "ru": "Оман",
    "dialCode": "968",
    "mask": "00-000-000"
  },
  {
    "en": "Panama",
    "ru": "Панама",
    "dialCode": "507",
    "mask": "000-0000"
  },
  {
    "en": "Peru",
    "ru": "Перу",
    "dialCode": "51",
    "mask": "(000)000-000"
  },
  {
    "en": "French Polynesia",
    "ru": "Французская Полинезия (Таити)",
    "dialCode": "689",
    "mask": "00-00-00"
  },
  {
    "en": "Papua New Guinea",
    "ru": "Папуа-Новая Гвинея",
    "dialCode": "675",
    "mask": "(000)00-000"
  },
  {
    "en": "Philippines",
    "ru": "Филиппины",
    "dialCode": "63",
    "mask": "(000)000-0000"
  },
  {
    "en": "Pakistan",
    "ru": "Пакистан",
    "dialCode": "92",
    "mask": "(000)000-0000"
  },
  {
    "en": "Poland",
    "ru": "Польша",
    "dialCode": "48",
    "mask": "(000)000-000"
  },
  {
    "en": "Palestine",
    "ru": "Палестина",
    "dialCode": "970",
    "mask": "00-000-0000"
  },
  {
    "en": "Portugal",
    "ru": "Португалия",
    "dialCode": "351",
    "mask": "00-000-0000"
  },
  {
    "en": "Palau",
    "ru": "Палау",
    "dialCode": "680",
    "mask": "000-0000"
  },
  {
    "en": "Paraguay",
    "ru": "Парагвай",
    "dialCode": "595",
    "mask": "(000)000-000"
  },
  {
    "en": "Qatar",
    "ru": "Катар",
    "dialCode": "974",
    "mask": "0000-0000"
  },
  {
    "en": "Reunion",
    "ru": "Реюньон",
    "dialCode": "262",
    "mask": "00000-0000"
  },
  {
    "en": "Romania",
    "ru": "Румыния",
    "dialCode": "40",
    "mask": "00-000-0000"
  },
  {
    "en": "Serbia",
    "ru": "Сербия",
    "dialCode": "381",
    "mask": "00-000-0000"
  },
  {
    "en": "Russia",
    "ru": "Россия",
    "dialCode": "7",
    "mask": "(000)000-00-00"
  },
  {
    "en": "Rwanda",
    "ru": "Руанда",
    "dialCode": "250",
    "mask": "(000)000-000"
  },
  {
    "en": "Saudi Arabia ",
    "ru": "Саудовская Аравия ",
    "dialCode": "9665",
    "mask": "-0000-0000"
  },
  {
    "en": "Saudi Arabia",
    "ru": "Саудовская Аравия",
    "dialCode": "966",
    "mask": "0-000-0000"
  },
  {
    "en": "Solomon Islands ",
    "ru": "Соломоновы Острова ",
    "dialCode": "677",
    "mask": "000-0000"
  },
  {
    "en": "Solomon Islands",
    "ru": "Соломоновы Острова",
    "dialCode": "677",
    "mask": "00000"
  },
  {
    "en": "Seychelles",
    "ru": "Сейшелы",
    "dialCode": "248",
    "mask": "0-000-000"
  },
  {
    "en": "Sudan",
    "ru": "Судан",
    "dialCode": "249",
    "mask": "00-000-0000"
  },
  {
    "en": "Sweden",
    "ru": "Швеция",
    "dialCode": "46",
    "mask": "00-000-0000"
  },
  {
    "en": "Singapore",
    "ru": "Сингапур",
    "dialCode": "65",
    "mask": "0000-0000"
  },
  {
    "en": "Saint Helena",
    "ru": "Остров Святой Елены",
    "dialCode": "290",
    "mask": "0000"
  },
  {
    "en": "Tristan da Cunha",
    "ru": "Тристан-да-Кунья",
    "dialCode": "290",
    "mask": "0000"
  },
  {
    "en": "Slovenia",
    "ru": "Словения",
    "dialCode": "386",
    "mask": "00-000-000"
  },
  {
    "en": "Slovakia",
    "ru": "Словакия",
    "dialCode": "421",
    "mask": "(000)000-000"
  },
  {
    "en": "Sierra Leone",
    "ru": "Сьерра-Леоне",
    "dialCode": "232",
    "mask": "00-000000"
  },
  {
    "en": "San Marino",
    "ru": "Сан-Марино",
    "dialCode": "378",
    "mask": "0000-000000"
  },
  {
    "en": "Senegal",
    "ru": "Сенегал",
    "dialCode": "221",
    "mask": "00-000-0000"
  },
  {
    "en": "Somalia ",
    "ru": "Сомали ",
    "dialCode": "252",
    "mask": "0-000-000"
  },
  {
    "en": "Suriname ",
    "ru": "Суринам ",
    "dialCode": "597",
    "mask": "000-0000"
  },
  {
    "en": "Suriname",
    "ru": "Суринам",
    "dialCode": "597",
    "mask": "000-000"
  },
  {
    "en": "South Sudan",
    "ru": "Южный Судан",
    "dialCode": "211",
    "mask": "00-000-0000"
  },
  {
    "en": "Sao Tome and Principe",
    "ru": "Сан-Томе и Принсипи",
    "dialCode": "239",
    "mask": "00-00000"
  },
  {
    "en": "El Salvador",
    "ru": "Сальвадор",
    "dialCode": "503",
    "mask": "00-00-0000"
  },
  {
    "en": "Sint Maarten",
    "ru": "Синт-Маартен",
    "dialCode": "1721",
    "mask": "()000-0000"
  },
  {
    "en": "Syrian Arab Republic",
    "ru": "Сирийская арабская республика",
    "dialCode": "963",
    "mask": "00-0000-000"
  },
  {
    "en": "Swaziland",
    "ru": "Свазиленд",
    "dialCode": "268",
    "mask": "00-00-0000"
  },
  {
    "en": "Turks & Caicos",
    "ru": "Тёркс и Кайкос",
    "dialCode": "1649",
    "mask": "000-0000"
  },
  {
    "en": "Chad",
    "ru": "Чад",
    "dialCode": "235",
    "mask": "00-00-00-00"
  },
  {
    "en": "Togo",
    "ru": "Того",
    "dialCode": "228",
    "mask": "00-000-000"
  },
  {
    "en": "Thailand ",
    "ru": "Таиланд ",
    "dialCode": "66",
    "mask": "00-000-0000"
  },
  {
    "en": "Thailand",
    "ru": "Таиланд",
    "dialCode": "66",
    "mask": "00-000-000"
  },
  {
    "en": "Tajikistan",
    "ru": "Таджикистан",
    "dialCode": "992",
    "mask": "00-000-0000"
  },
  {
    "en": "Tokelau",
    "ru": "Токелау",
    "dialCode": "690",
    "mask": "0000"
  },
  {
    "en": "East Timor",
    "ru": "Восточный Тимор",
    "dialCode": "670",
    "mask": "000-0000"
  },
  {
    "en": "Turkmenistan",
    "ru": "Туркменистан",
    "dialCode": "993",
    "mask": "0-000-0000"
  },
  {
    "en": "Tunisia",
    "ru": "Тунис",
    "dialCode": "216",
    "mask": "00-000-000"
  },
  {
    "en": "Tonga",
    "ru": "Тонга",
    "dialCode": "676",
    "mask": "00000"
  },
  {
    "en": "Turkey",
    "ru": "Турция",
    "dialCode": "90",
    "mask": "(000)000-0000"
  },
  {
    "en": "Trinidad & Tobago",
    "ru": "Тринидад и Тобаго",
    "dialCode": "1868",
    "mask": "000-0000"
  },
  {
    "en": "Tuvalu ",
    "ru": "Тувалу ",
    "dialCode": "68890",
    "mask": "0000"
  },
  {
    "en": "Tuvalu",
    "ru": "Тувалу",
    "dialCode": "6882",
    "mask": "0000"
  },
  {
    "en": "Taiwan",
    "ru": "Тайвань",
    "dialCode": "886",
    "mask": "0000-0000"
  },
  {
    "en": "Tanzania",
    "ru": "Танзания",
    "dialCode": "255",
    "mask": "00-000-0000"
  },
  {
    "en": "Ukraine",
    "ru": "Украина",
    "dialCode": "380",
    "mask": "(00)000-00-00"
  },
  {
    "en": "Uganda",
    "ru": "Уганда",
    "dialCode": "256",
    "mask": "(000)000-000"
  },
  {
    "en": "United Kingdom",
    "ru": "Великобритания",
    "dialCode": "44",
    "mask": "00-0000-0000"
  },
  {
    "en": "Uruguay",
    "ru": "Уругвай",
    "dialCode": "598",
    "mask": "0-000-00-00"
  },
  {
    "en": "Uzbekistan",
    "ru": "Узбекистан",
    "dialCode": "998",
    "mask": "00-000-0000"
  },
  {
    "en": "Vatican City",
    "ru": "Ватикан",
    "dialCode": "3966",
    "mask": "00000"
  },
  {
    "en": "Saint Vincent & the Grenadines",
    "ru": "Сент-Винсент и Гренадины",
    "dialCode": "1784",
    "mask": "000-0000"
  },
  {
    "en": "Venezuela",
    "ru": "Венесуэла",
    "dialCode": "58",
    "mask": "(000)000-0000"
  },
  {
    "en": "British Virgin Islands",
    "ru": "Британские Виргинские острова",
    "dialCode": "1284",
    "mask": "()000-0000"
  },
  {
    "en": "US Virgin Islands",
    "ru": "Американские Виргинские острова",
    "dialCode": "1340",
    "mask": "()000-0000"
  },
  {
    "en": "Vietnam",
    "ru": "Вьетнам",
    "dialCode": "84",
    "mask": "(000)0000-000"
  },
  {
    "en": "Vanuatu ",
    "ru": "Вануату ",
    "dialCode": "678",
    "mask": "00-00000"
  },
  {
    "en": "Vanuatu",
    "ru": "Вануату",
    "dialCode": "678",
    "mask": "00000"
  },
  {
    "en": "Wallis and Futuna",
    "ru": "Уоллис и Футуна",
    "dialCode": "681",
    "mask": "00-0000"
  },
  {
    "en": "Samoa",
    "ru": "Самоа",
    "dialCode": "685",
    "mask": "00-0000"
  },
  {
    "en": "Yemen",
    "ru": "Йемен",
    "dialCode": "967",
    "mask": "00-000-000"
  },
  {
    "en": "South Africa",
    "ru": "Южно-Африканская Респ.",
    "dialCode": "27",
    "mask": "00-000-0000"
  },
  {
    "en": "Zambia",
    "ru": "Замбия",
    "dialCode": "260",
    "mask": "00-000-0000"
  },
  {
    "en": "Zimbabwe",
    "ru": "Зимбабве",
    "dialCode": "263",
    "mask": "0-000000"
  },
  {
    "en": "USA and Canada",
    "ru": "США и Канада",
    "dialCode": "1",
    "mask": "(000)000-0000"
  }
];

@Injectable()
export class CountryService{
  getCountries(language: language): ICountry[] {
    return countries.map(country => ({
      mask: country.mask,
      name: country[language],
      dialCode: country.dialCode
    }));
  }
}