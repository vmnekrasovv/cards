"use strict";

let category = [
	{
		'id': '1',
		'name': {
			'lat': 'Abstraction',
			'rus': 'Абстракция'
		},
		'path': 'images/design/abstraction/',
		'files': ["1018.svg","1019.svg","1028.svg","1045.svg","1049.svg","1050.svg"]
	},

	{
		'id': '2',
		'name': {
			'lat': 'Exclusive',
			'rus': 'Эксклюзив'
		},
		'path': 'images/design/exclusive/',
		'files': ["25001.svg","25002.svg","25003.svg","25004.svg","25005.svg","25006.svg","25007.svg","25008.svg","25009.svg","25010.svg","25011.svg","Bonnie_Clyde-01.svg","breast-01.svg","girl-01.svg","girl_02-01.svg","hands_02-01.svg","hands_03-01.svg","king-01.svg","knife-01.svg","lotus-01.svg","love_01-01.svg","love_02-01.svg","love_03-01.svg","opa-01.svg","opa_02-01.svg","pew-01.svg","sexy-01.svg","smil-01.svg","weapon-01.svg","wine-01.svg"]
	},

	{
		'id': '3',
		'name': {
			'lat': 'Crypto',
			'rus': 'Криптовалюта'
		},
		'path': 'images/design/crypto/',
		'files': ["14001.svg","14002.svg","14003.svg","14004.svg","14005.svg","14006.svg","14007.svg","14008.svg","14009.svg","14010.svg","14011.svg","14012.svg","14013.svg","14014.svg","14015.svg","14016.svg","14017.svg","14018.svg","14019.svg","14020.svg","14021.svg","14022.svg","14023.svg","14024.svg","14025.svg","14026.svg","14027.svg","14028.svg","14029.svg","14030.svg","14031.svg"]
	},

	{
		'id': '4',
		'name': {
			'lat': 'Money',
			'rus': 'Деньги'
		},
		'path': 'images/design/money/',
		'files': ["6001.svg","6002.svg","6003.svg","6004.svg","6005.svg","6006.svg","6007.svg","6008.svg","6009.svg","6010.svg","6011.svg","6012.svg","6013.svg","6014.svg","6015.svg","6016.svg","6018.svg","6019.svg","6020.svg","6021.svg","6022.svg","6023.svg","6024.svg","6025.svg","6026.svg","6027.svg","6028.svg","6029.svg","6030.svg","6031.svg","6032.svg","6033.svg","6034.svg","6035.svg","6036.svg","6037.svg","6038.svg","6040.svg","6041.svg","6042.svg","6043.svg","6044.svg","6045.svg","6046.svg","6047.svg","EnshteinBitkoin.svg","money-01.svg","money_06-01.svg","scrooge_02-01.svg","scrooge_03-01.svg"]
	},

	{
		'id': '5',
		'name': {
			'lat': 'Brands',
			'rus': 'Бренды'
		},
		'path': 'images/design/brands/',
		'files': ["3001.svg","3002.svg","3003.svg","3004.svg","3005.svg","3006.svg","3007.svg","3008.svg","3009.svg","3010.svg","3011.svg","3012.svg","3013.svg","3014.svg","3015.svg","3017.svg","3018.svg","3019.svg","3020.svg","3021.svg","3022.svg","3023.svg","3024.svg","3025.svg","3026.svg","3027.svg","3028.svg","3029.svg","3030.svg","3031.svg","3032.svg","3033.svg","3034.svg","3035.svg","3036.svg","3037.svg","3038.svg","3039.svg","3040.svg","3041.svg","3042.svg","3043.svg","3044.svg","3045.svg","3046.svg","3047.svg","3048.svg","3049.svg","3050.svg","3052.svg","adidas-01.svg","apple-01.svg","burberry-01 (1).svg","burberry-01.svg","Lacoste.svg","LVpattern.svg","nike.svg","prada.svg","stoneisland-01.svg"]
	},

	{
		'id': '6',
		'name': {
			'lat': 'Animals',
			'rus': 'Животные'
		},
		'path': 'images/design/animals/',
		'files': ["7001.svg","7002.svg","7003.svg","7004.svg","7005.svg","7006.svg","7007.svg","7008.svg","7009.svg","7010.svg","7011.svg","7012.svg","7013.svg","7014.svg","7015.svg","7016.svg","7017.svg","7018.svg","7019.svg","7020.svg","7021.svg","7022.svg","7023.svg","7024.svg","7025.svg","7026.svg","7027.svg","7028.svg","7029.svg","7030.svg","7031.svg","7032.svg","7033.svg","7034.svg","7035.svg","7036.svg","7037.svg","7040.svg","7041.svg","7042.svg","7046.svg","7047.svg","7048.svg","7049.svg","7052.svg","7053.svg","7054.svg","7055.svg","7060.svg","7061.svg","7063.svg","7064.svg","7065.svg","7066.svg","7067.svg","7068.svg","7069.svg"]
	},

	{
		'id': '7',
		'name': {
			'lat': 'Cars',
			'rus': 'Машины'
		},
		'path': 'images/design/cars/',
		'files': ["15001.svg","15002.svg","15003.svg","15004.svg","15005.svg","15006.svg","15010.svg","15011.svg","15012.svg","15013.svg","15014.svg","15015.svg","15016.svg","15017.svg","15018.svg","15019.svg","15021.svg","15022.svg","15023.svg","15024.svg","15025.svg","15026.svg","15027.svg","15028.svg","15029.svg","15030.svg","15031.svg","15032.svg","15033.svg","15034.svg","15035.svg","15036.svg","15037.svg","15038.svg","15039.svg","15040.svg","15041.svg","15042.svg","15043.svg","15045.svg","15046.svg","15047.svg","15048.svg","15049.svg","15050.svg","15051.svg","15052.svg","15053.svg","15054.svg","15055.svg","15056.svg"]
	},

	{
		'id': '8',
		'name': {
			'lat': 'anime',
			'rus': 'Аниме'
		},
		'path': 'images/design/anime/',
		'files': ["2001.svg","2002.svg","2003.svg","2004.svg","2005.svg","2006.svg","2007.svg","2008.svg","2009.svg","2010.svg","2011.svg","2012.svg","2013.svg","2014.svg","2015.svg","2016.svg","2017.svg","2018.svg","2019.svg","2020.svg","2021.svg","2022.svg","2023.svg","2024.svg","2025.svg","2026.svg","2027.svg","2028.svg","2029.svg","2030.svg","2031.svg","2032.svg","2033.svg","2034.svg","2035.svg","2036.svg","2037.svg","2038.svg","2039.svg","2040.svg","2041.svg","2042.svg","2043.svg","2044.svg","2045.svg","2046.svg","2047.svg","2048.svg","2049.svg","2050.svg","2051.svg","2052.svg","2054.svg","2055.svg","2056.svg","2057.svg","2058.svg","2059.svg","2060.svg","2061.svg","2062.svg","2063.svg","AimeGirl+.svg","Akira+.svg","anime_02-01.svg","anime_03-01.svg","naruto+.svg","SeilorMoon+.svg"]
	},

	{
		'id': '9',
		'name': {
			'lat': 'art',
			'rus': 'Искусство'
		},
		'path': 'images/design/art/',
		'files': ["10001.svg","10002.svg","david-01.svg","GameOn.svg","picaso.svg","Rene_Magritte-01.svg","salvador_dali-01.svg","van_gog_02-01.svg","vedmak.svg","vedmak2.svg","vedmak3.svg"]
	},

	{
		'id': '10',
		'name': {
			'lat': 'cards',
			'rus': 'Карточные дизайны'
		},
		'path': 'images/design/cards/',
		'files': ["11001.svg","11002.svg","11003.svg","11004.svg","11005.svg","11006.svg","11007.svg","11008.svg","11009.svg","11010.svg","11011.svg","11012.svg","11013.svg","11014.svg","11015.svg","11016.svg","11017.svg","11018.svg","11019.svg","11020.svg","11021.svg","11022.svg"]
	},

	{
		'id': '11',
		'name': {
			'lat': 'cartoon',
			'rus': 'Мультфильмы'
		},
		'path': 'images/design/cartoon/',
		'files': ["19001.svg","19002.svg","19003.svg","19004.svg","19005.svg","19006.svg","19007.svg","19008.svg","19009.svg","19010.svg","19011.svg","19012.svg","19013.svg","19014.svg","19015.svg","19016.svg","19017.svg","19018.svg","19019.svg","19020.svg","19021.svg"]
	},

	{
		'id': '12',
		'name': {
			'lat': 'characters',
			'rus': 'Персонажи из игр'
		},
		'path': 'images/design/characters/',
		'files': ["21001.svg","21002.svg","21003.svg","21004.svg","21005.svg","21006.svg","21008.svg","21009.svg","21010.svg","21011.svg","21012.svg","21013.svg","21014.svg","21015.svg","21016.svg","21017.svg","21018.svg","21019.svg","21020.svg","21021.svg","21022.svg","21023.svg","21024.svg","21025.svg","21026.svg","21027.svg","21028.svg","21029.svg"]
	},

	{
		'id': '13',
		'name': {
			'lat': 'cimema',
			'rus': 'Кино'
		},
		'path': 'images/design/cinema/',
		'files': ["007.svg","banny.svg","BigL.svg","CartelyeBatman.svg","dartvader.svg","DCcomics.svg","eminem.svg","Garfild-01.svg","horror-01.svg","Joker.svg","jon.svg","logobatmen.svg","marvel-01.svg","marvel.svg","marvel_02-01.svg","marvel_03-01.svg","mouse-01.svg","PinkPanter.svg","rickandmorty-01.svg","scrooge_01-01.svg","Shrek.svg","Shrek2.svg","Stich.svg","Stich2.svg","Vader.svg"]
	},

	{
		'id': '14',
		'name': {
			'lat': 'city',
			'rus': 'Города'
		},
		'path': 'images/design/city/',
		'files': ["4001.svg","4002.svg","4003.svg","4004.svg","4005.svg","4006.svg","4007.svg","4008.svg","4009.svg","4010.svg","4011.svg","4012.svg","4013.svg","4014.svg","4015.svg","4016.svg","4017.svg","4018.svg","4020.svg","4021.svg","Armeniya.svg","city_04-01.svg","city_06-01.svg","Greatbritain_01-01.svg","Paris_02-01.svg","Tbilisi.svg"]
	},

	{
		'id': '15',
		'name': {
			'lat': 'cosmos',
			'rus': 'Космос'
		},
		'path': 'images/design/cosmos/',
		'files': ["13001.svg","13002.svg","13003.svg","13004.svg","13005.svg","13006.svg","13007.svg","13008.svg","13009.svg","13010.svg","13011.svg","13012.svg","13013.svg","13014.svg","13015.svg","13016.svg","13017.svg","13018.svg","13019.svg","13021.svg","13022.svg","13023.svg","13024.svg"]
	},

	{
		'id': '16',
		'name': {
			'lat': 'games',
			'rus': 'Игры'
		},
		'path': 'images/design/games/',
		'files': ["8001.svg","8002.svg","8003.svg","8004.svg","8005.svg","8006.svg","8007.svg","8008.svg","8009.svg","8010.svg","8011.svg","8012.svg","8013.svg","8014.svg"]
	},

	{
		'id': '17',
		'name': {
			'lat': 'horoscope',
			'rus': 'Гороскоп'
		},
		'path': 'images/design/horoscope/',
		'files': ["5001.svg","5002.svg","5003.svg","5004.svg","5005.svg","5006.svg","5007.svg","5008.svg","5009.svg","5010.svg","5011.svg","5012.svg","5013.svg","5014.svg","5015.svg","5016.svg","5017.svg","5018.svg","5019.svg","5020.svg","5021.svg","5022.svg","5023.svg","5024.svg","5025.svg","5026.svg","5027.svg","5028.svg","5029.svg","5030.svg","5031.svg","5032.svg","5033.svg","5034.svg","5035.svg"]
	},

	{
		'id': '18',
		'name': {
			'lat': 'it',
			'rus': 'АйТи'
		},
		'path': 'images/design/it/',
		'files': ["9001.svg","9002.svg","9003.svg","9004.svg","9005.svg","9006.svg","9007.svg","brain.svg","Code1.svg"]
	},

	{
		'id': '19',
		'name': {
			'lat': 'motorcycle',
			'rus': 'Мотоциклы'
		},
		'path': 'images/design/motorcycle/',
		'files': ["17001.svg","17002.svg","17003.svg","17004.svg","17005.svg","17006.svg","17007.svg"]
	},

	{
		'id': '20',
		'name': {
			'lat': 'music',
			'rus': 'Музыка'
		},
		'path': 'images/design/music/',
		'files': ["guitar-01.svg"]
	},

	{
		'id': '21',
		'name': {
			'lat': 'mythical',
			'rus': 'Мифические'
		},
		'path': 'images/design/mythical/',
		'files': ["16001.svg","16002.svg","16003.svg","16004.svg","16005.svg","16006.svg","16007.svg","16009.svg","16010.svg","16011.svg","16012.svg","16013.svg","16014.svg","16015.svg","16016.svg","16017.svg","16018.svg","16019.svg","16020.svg","16021.svg","16022.svg","16023.svg"]
	},

	{
		'id': '22',
		'name': {
			'lat': 'nature',
			'rus': 'Природа'
		},
		'path': 'images/design/nature/',
		'files': ["22001.svg","22002.svg","22003.svg","22004.svg","22005.svg","22006.svg","22007.svg","22008.svg","22009.svg","22010.svg","22011.svg","22012.svg","22013.svg","22014.svg","22015.svg","flower2.svg","flowerPattern.svg","gory.svg","mountain2.svg","mountains-01 (1).svg","mountains-01.svg","nature-01.svg","nature_03-01.svg","nature_04-01.svg","nature_05-01.svg","nature_06-01.svg","nature_07-01.svg","sea.svg","sea_02-01.svg","travel.svg"]
	},

	{
		'id': '23',
		'name': {
			'lat': 'patriot',
			'rus': 'Патриот'
		},
		'path': 'images/design/patriot/',
		'files': ["20001.svg","20002.svg","20003.svg","20004.svg","20005.svg","20006.svg","20008.svg","20009.svg","20010.svg","20011.svg","20012.svg","20013.svg","20014.svg","20015.svg","20016.svg","20017.svg","20018.svg","20019.svg","20020.svg","20021.svg","20022.svg","20023.svg","20024.svg","20025.svg","20026.svg","20027.svg","20028.svg","20029.svg","20030.svg","20031.svg"]
	},

	{
		'id': '24',
		'name': {
			'lat': 'quotes',
			'rus': 'Цитаты'
		},
		'path': 'images/design/quotes/',
		'files': ["24001.svg","24002.svg","24003.svg","24004.svg","24005.svg","24006.svg","24007.svg","24008.svg","24009.svg","24010.svg","24011.svg"]
	},

	{
		'id': '25',
		'name': {
			'lat': 'sport',
			'rus': 'Спорт'
		},
		'path': 'images/design/sport/',
		'files': ["23001.svg","23002.svg","23003.svg","23004.svg","23005.svg","23006.svg","23007.svg","23008.svg","23009.svg","23010.svg","23011.svg","23012.svg","23013.svg","23014.svg","23015.svg","23016.svg","23017.svg","23018.svg","23019.svg","23020.svg","23021.svg","23022.svg","23023.svg","23024.svg","23025.svg","23026.svg","23027.svg","23028.svg","23029.svg","avangard_02-01.svg","chicago_blackhawks-01.svg","cka-01.svg","dynamo_moscow-01.svg","everlast.svg","juventus_01-01.svg","juventus_02-01.svg","juventus_03-01.svg","logoHok2.svg","lokomotiv_01-01.svg","lokomotiv_02-01.svg","messi-01.svg","real_madrid-01.svg","salavat_yulaev-01.svg","san_jose_sharks-01.svg","zenit_01-01.svg","zenit_03-01.svg"]
	},

	{
		'id': '26',
		'name': {
			'lat': 'taro',
			'rus': 'Карты Таро'
		},
		'path': 'images/design/taro/',
		'files': ["12001.svg","12002.svg","12003.svg","12004.svg","12005.svg","12006.svg","12007.svg","12008.svg"]
	},

	/*{
		'id': '',
		'name': {
			'lat': '',
			'rus': ''
		},
		'path': 'images/design/',
		'files': 
	},*/
]; 