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
		'files': ["25001.svg","25002.svg","25003.svg","25004.svg","25005.svg","25006.svg","25007.svg","25008.svg","25009.svg","25010.svg","25011.svg"]
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
		'files': ["6001.svg","6002.svg","6003.svg","6004.svg","6005.svg","6006.svg","6007.svg","6008.svg","6009.svg","6010.svg","6011.svg","6012.svg","6013.svg","6014.svg","6015.svg","6016.svg","6018.svg","6019.svg","6020.svg","6021.svg","6022.svg","6023.svg","6024.svg","6025.svg","6026.svg","6027.svg","6028.svg","6029.svg","6030.svg","6031.svg","6032.svg","6033.svg","6034.svg","6035.svg","6036.svg","6037.svg","6038.svg","6040.svg","6041.svg","6042.svg","6043.svg","6044.svg","6045.svg","6046.svg","6047.svg"]
	},

	{
		'id': '5',
		'name': {
			'lat': 'Brands',
			'rus': 'Бренды'
		},
		'path': 'images/design/brands/',
		'files':["3001.svg","3002.svg","3003.svg","3004.svg","3005.svg","3006.svg","3007.svg","3008.svg","3009.svg","3010.svg","3011.svg","3012.svg","3013.svg","3014.svg","3015.svg","3017.svg","3018.svg","3019.svg","3020.svg","3021.svg","3022.svg","3023.svg","3024.svg","3025.svg","3026.svg","3027.svg","3028.svg","3029.svg","3030.svg","3031.svg","3032.svg","3033.svg","3034.svg","3035.svg","3036.svg","3037.svg","3038.svg","3039.svg","3040.svg","3041.svg","3042.svg","3043.svg","3044.svg","3045.svg","3046.svg","3047.svg","3048.svg","3049.svg","3050.svg","3052.svg"]
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
		'files': ["2001.svg","2002.svg","2003.svg","2004.svg","2005.svg","2006.svg","2007.svg","2008.svg","2009.svg","2010.svg","2011.svg","2012.svg","2013.svg","2014.svg","2015.svg","2016.svg","2017.svg","2018.svg","2019.svg","2020.svg","2021.svg","2022.svg","2023.svg","2024.svg","2025.svg","2026.svg","2027.svg","2028.svg","2029.svg","2030.svg","2031.svg","2032.svg","2033.svg","2034.svg","2035.svg","2036.svg","2037.svg","2038.svg","2039.svg","2040.svg","2041.svg","2042.svg","2043.svg","2044.svg","2045.svg","2046.svg","2047.svg","2048.svg","2049.svg","2050.svg","2051.svg","2052.svg","2054.svg","2055.svg","2056.svg","2057.svg","2058.svg","2059.svg","2060.svg","2061.svg","2062.svg","2063.svg"]
	},

	/*{
		'id': '',
		'name': {
			'lat': '',
			'rus': ''
		},
		'path': 'images/design/',
		'files': [
			''
		]
	},*/
]; 