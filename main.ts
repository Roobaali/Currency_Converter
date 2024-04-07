#! /usr/bin/env node

import inquirer from "inquirer";

const currency :any = {
USD : 1,
Euro : 0.922506,
BRITISH_POUND : 0.791083,
Indian_Rupees: 83.294761,
Australian_Dollar	: 1.520168,
Canadian_Dollar :	1.359049,	
Singapore_Dollar : 1.348826,	
Swiss_Franc :	0.901916,	
Malaysian_Ringgit :	4.746057,	
Japanese_Yen :	151.630795,	
ChineseYuan_Renminbi	: 7.233266,	
Enezuelan_Bolivar	: 3612525.385430,   	
TurkishLira	: 32.023921,	
TrinidadianDollar :	6.722676,
ThaiBaht :	36.739069,
TaiwanNew_Dollar :	32.151900,
SwissFranc	: 0.901916,
SwedishKrona	: 10.652090,
SriLankanRupee	:299.037289	,
SouthKoreanWon	: 1353.020283,	
SouthAfrican_Rand	: 18.689404,	
SingaporeDollar :	1.34882,
SaudiArabian_Riyal :	3.750000,	
RussianRuble	: 92.438370,
RomanianNew_Leu :	4.583499,
Qatari_Riyal :	3.640000,
Polish_Zloty :	3.949498,
Philippine_Peso :	56.495676,
Pakistani_Rupee	: 277.855798,	
OmaniRial :	0.385047,	
NorwegianKrone :	10.730052,
NewZealandDollar :	1.663060,
NepaleseRupee	: 133.334088,	
MexicanPeso	: 16.461600,
MauritianRupee	: 47.165227,
MalaysianRinggit	: 4.746057,
Libyan_Dinar	: 4.833999,
Kuwaiti_Dinar	: 0.308603,
Kazakhstani_Tenge	: 445.617520,
JapaneseYen	: 151.630795,	
Israeli_Shekel	: 3.753341,	
Iranian_Rial	: 42002.630712,	
Indonesian_Rupiah	: 15887.506437,
Indian_Rupee	: 83.294761,	
Icelandic_Krona	: 138.752338,	
Hungarian_Forint	: 360.033255,	
HongKong_Dollar	: 7.828885,
Emirati_Dirham :	3.672500,	
Danish_Krone	: 6.882256,	
Czech_Koruna	: 23.347904,	
Colombian_Peso	: 3764.794422,	
ChineseYuanRenminbi	: 7.233266,	
Chilean_Peso	: 948.758305,	
CanadianDollar	: 1.359049,	
Bulgarian_Lev	: 1.804266,	
Bruneian_Dollar	: 1.34882,
British_Pound	: 0.791083,	
Brazilian_Real :	5.070439,	
BotswanaPula	: 13.716317,
Bahraini_Dinar	: 0.376000,
AustralianDollar	: 1.520168,
Argentine_Peso	: 862.501069	
}

let user_answer = await inquirer.prompt(
    [
        {
            name : "From",
            message : "Enter From currency",
            type : "list",
            choices : ["USD","Euro","BRITISH_POUND","Indian_Rupees","Australian_Dollar","Canadian_Dollar","Singapore_Dollar","Swiss_Franc",
            "Malaysian_Ringgit","Japanese_Yen","ChineseYuan_Renminbi","Enezuelan_Bolivar","TurkishLira","TrinidadianDollar","ThaiBaht",
            "TaiwanNew_Dollar","SwissFranc","SwedishKrona","SriLankanRupee","SouthKoreanWon","SouthAfrican_Rand","SingaporeDollar",
            "SaudiArabian_Riyal","RussianRuble","RomanianNew_Leu","Qatari_Riyal","Polish_Zloty","Philippine_Peso","Pakistani_Rupee","OmaniRial",
            "NorwegianKrone","NewZealandDollar","NepaleseRupee","MexicanPeso","MauritianRupee","MalaysianRinggit","Libyan_Dinar","Kuwaiti_Dinar",
            "Kazakhstani_Tenge","JapaneseYen","Israeli_Shekel","Iranian_Rial","Indonesian_Rupiah","Indian_Rupee","Icelandic_Krona",
            "Hungarian_Forint","HongKong_Dollar","Emirati_Dirham","Danish_Krone","Czech_Koruan","Colombian_Peso","ChineseYuanRenminbi",
            "Chilean_Peso","CanadianDollar","Bulgarian_Lev","Bruneian_Dollar","British_Pound","Brazilian_Real","BotswanaPula","Bahraini_Dinar",
            "AustralianDollar","Argentine_Peso"]

        },
        {
            name : "To",
            message : "Enter To currency",
            type : "list",
            choices : ["USD","Euro","BRITISH_POUND","Indian_Rupees","Australian_Dollar","Canadian_Dollar","Singapore_Dollar","Swiss_Franc",
            "Malaysian_Ringgit","Japanese_Yen","ChineseYuan_Renminbi","Enezuelan_Bolivar","TurkishLira","TrinidadianDollar","ThaiBaht",
            "TaiwanNew_Dollar","SwissFranc","SwedishKrona","SriLankanRupee","SouthKoreanWon","SouthAfrican_Rand","SingaporeDollar",
            "SaudiArabian_Riyal","RussianRuble","RomanianNew_Leu","Qatari_Riyal","Polish_Zloty","Philippine_Peso","Pakistani_Rupee","OmaniRial",
            "NorwegianKrone","NewZealandDollar","NepaleseRupee","MexicanPeso","MauritianRupee","MalaysianRinggit","Libyan_Dinar","Kuwaiti_Dinar",
            "Kazakhstani_Tenge","JapaneseYen","Israeli_Shekel","Iranian_Rial","Indonesian_Rupiah","Indian_Rupee","Icelandic_Krona",
            "Hungarian_Forint","HongKong_Dollar","Emirati_Dirham","Danish_Krone","Czech_Koruan","Colombian_Peso","ChineseYuanRenminbi",
            "Chilean_Peso","CanadianDollar","Bulgarian_Lev","Bruneian_Dollar","British_Pound","Brazilian_Real","BotswanaPula","Bahraini_Dinar",
            "AustralianDollar","Argentine_Peso"]
        },
        {
            name : "Amount",
            message : "Enter your amount",
            type : 'number'
        }
    ]
)

let fromAmount = currency[user_answer.From]
let toAmount = currency[user_answer.To]
let amount = user_answer.Amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)