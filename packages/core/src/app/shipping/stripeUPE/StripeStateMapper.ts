export default function StripeStateMapper(country: string, state: string): string {

    const bigcommerceStates: any = {
        'MX': {
            'Ags.': 'AGU',
            'B.C.': 'BCN',
            'B.C.S.': 'BCS',
            'Camp.': 'CAM',
            'Coah.': 'COA',
            'Col.': 'COL',
            'Chis.': 'CHP',
            'Chih.': 'CHH',
            'Dgo.': 'DUR',
            'Gto.': 'GUA',
            'Gro.': 'GRO',
            'Hgo.': 'HID',
            'Jal.': 'JAL',
            'Méx.': 'MEX',
            'CDMX': 'MEX',
            'Mich.': 'MIC',
            'Mor.': 'MOR',
            'Nay.': 'NAY',
            'N.L.': 'NLE',
            'Oax.': 'OAX',
            'Pue.': 'PUE',
            'Qro.': 'QUE',
            'Q.R.': 'ROO',
            'S.L.P.': 'SLP',
            'Sin.': 'SIN',
            'Son.': 'SON',
            'Tab.': 'TAB',
            'Tamps.': 'TAM',
            'Tlax.': 'TLA',
            'Ver.': 'VER',
            'Yuc.': 'YUC',
            'Zac.': 'ZAC',
        },
        'AR': {
            'Ciudad Autónoma de Buenos Aires': 'C',
            'Buenos Aires': 'B',
            'Catamarca': 'K',
            'Chaco': 'H',
            'Chubut': 'U',
            'Córdoba': 'X',
            'Corrientes': 'W',
            'Entre Ríos': 'E',
            'Formosa': 'P',
            'Jujuy': 'Y',
            'La Pampa': 'L',
            'La Rioja': 'F',
            'Mendoza': 'M',
            'Misiones': 'N',
            'Neuquén': 'Q',
            'Salta': 'A',
            'San Juan': 'J',
            'San Luis': 'D',
            'Santa Fe': 'S',
            'Santiago del Estero': 'G',
            'Tierra del Fuego': 'V',
            'Tucumán': 'W',
        },
        'IN': {
            'Andhra Pradesh': 'AP',
            'Arunachal Pradesh': 'AR',
            'Assam': 'AS',
            'Bihar': 'BR',
            'Chhattisgarh': 'CG',
            'Goa': 'GA',
            'Gujarat': 'GJ',
            'Haryana': 'HR',
            'Himachal Pradesh': 'HP',
            'Jammu and Kashmir': 'JK',
            'Jharkhand': 'JH',
            'Karnataka': 'KA',
            'Kerala': 'KL',
            'Madhya Pradesh': 'MP',
            'Maharashtra': 'MH',
            'Manipur': 'MN',
            'Meghalaya': 'ML',
            'Mizoram': 'MZ',
            'Nagaland': 'NL',
            'Odisha': 'OR',
            'Punjab': 'PB',
            'Rajasthan': 'RJ',
            'Sikkim': 'SK',
            'Tamil Nadu': 'TN',
            'Tripura': 'TR',
            'Uttarakhand': 'UK',
            'Uttar Pradesh': 'UP',
            'West Bengal': 'WB',
            'Andaman and Nicobar Islands': 'AN',
            'Chandigarh': 'CH',
            'Dadra and Nagar Haveli and Daman and Diu': 'DN',
            'Lakshadweep': 'LD',
            'Delhi': 'DL',
            'Puducherry': 'PY',
            'Telangana': 'TS',
        },
        'ID': {
            'Bali': 'BA',
            'Banten': 'BT',
            'Bengkulu': 'BE',
            'Aceh': 'DA',
            'DKI Jakarta': 'JK',
            'Sumatera Utara': 'SU',
            'Sumatera Barat': 'SB',
            'Riau': 'SI',
            'Jambi': 'JA',
            'Sumatera Selatan': 'SS',
            'Lampung': 'LA',
            'Jawa Barat': 'JB',
            'Jawa Timur': 'JT',
            'Daerah Istimewa Yogyakarta': 'DY',
            'Kalimantan Barat': 'KB',
            'Kalimantan Tengah': 'KT',
            'Kalimantan Timur': 'KI',
            'Kalimantan Selatan': 'KS',
            'Nusa Tenggara Barat': 'NB',
            'Nusa Tenggara Timur': 'NT',
            'Sulawesi Selatan': 'SN',
            'Sulawesi Tengah': 'ST',
            'Sulawesi Utara': 'SA',
            'Sulawesi Tenggara': 'SG',
            'Maluku': 'MA',
            'Maluku Utara': 'MU',
            'Gorontalo': 'GO',
        },
        'MY': {
            'Johor': 'JHR',
            'Kedah': 'KDH',
            'Kelantan': 'KTN',
            'Melaka': 'MLK',
            'Negeri Sembilan': 'NSN',
            'Pahang': 'PHG',
            'Pulau Pinang': 'PNG',
            'Perak': 'PRK',
            'Perlis': 'PLS',
            'Selangor': 'SGR',
            'Terengganu': 'TRG',
            'Sabah': 'SBH',
            'Sarawak': 'SRW',
            'Kuala Lumpur': 'KUL',
            'Labuan': 'LBN',
            'Putrajaya': 'PJY',
        },
        'IE': {
            'Carlow': 'CW',
            'Cavan': 'CN',
            'Clare': 'CE',
            'Donegal': 'DL',
            'Dublin': 'D',
            'Galway': 'G',
            'Kildare': 'KE',
            'Kilkenny': 'KK',
            'Laois': 'LS',
            'Leitrim': 'LM',
            'Longford': 'LD',
            'Louth': 'LH',
            'Mayo': 'MO',
            'Meath': 'MH',
            'Monaghan': 'MN',
            'Offaly': 'OY',
            'Roscommon': 'RN',
            'Sligo': 'SO',
            'Tipperary': 'TA',
            'Waterford': 'WD',
            'Westmeath': 'WH',
            'Wexford': 'WX',
            'Wicklow': 'WW',
        },
        'ES': {
            'C': 'ACOR',
            'VI': 'ALAV',
            'AB': 'ALBA',
            'A': 'ALIC',
            'AL': 'ALME',
            'O': 'ASTU',
            'AV': 'AVIL',
            'BA': 'BADA',
            'PM': 'BALE',
            'B': 'BARC',
            'BU': 'BURG',
            'CC': 'CACE',
            'CA': 'CADI',
            'S': 'CANT',
            'CS': 'CAST',
            'CE': 'CEUT',
            'CR': 'CIUD',
            'CO': 'CORD',
            'CU': 'CUEN',
            'GI': 'GIRO',
            'GR': 'GRAN',
            'GU': 'GUAD',
            'SS': 'GUIP',
            'H': 'HUEL',
            'HU': 'HUES',
            'J': 'JAEN',
            'LO': 'LAR',
            'GC': 'LAS',
            'LE': 'LEON',
            'L': 'LLEI',
            'LU': 'LUGO',
            'M': 'MADR',
            'MA': 'MALA',
            'ML': 'MELI',
            'MU': 'MURC',
            'NA': 'NAVA',
            'OR': 'OURE',
            'P': 'PALE',
            'PO': 'PONT',
            'SA': 'SALA',
            'TF': 'SANT',
            'SG': 'SEGO',
            'SE': 'SEVI',
            'SO': 'SORI',
            'T': 'TARR',
            'TE': 'TERU',
            'TP': 'TOLE',
            'V': 'VALE',
            'VA': 'VALL',
            'BI': 'VIZC',
            'ZA': 'ZAMO',
            'Z': 'ZARA',
        }
    };

    if (bigcommerceStates[country]) {
        return bigcommerceStates[country][state] || state;
    }

    return state;
}
