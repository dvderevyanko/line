import {SET_PRICELIST_CONTENT} from '../constants/constants'
import repairBrakeCaliper from '../components/template/pricelist/repairBrakeCaliper'
import mainPricelist from '../components/template/pricelist/mainPricelist'

const initialState = {
    navList : [
        {
            title : 'Тормозная система',
            inner : [{
                title : 'Ремонт тормозных суппортов',
                content : repairBrakeCaliper()
            },
            {
                title : 'Замена барабанных тормозов',
                content : '2'
            },
            {
                title : 'Замена тормозных колодок',
                content : '3'
            },
            {
                title : 'Проточка тормозных дисков',
                content : '4'
            },
            {
                title : 'Замена тормозных дисков',
                content : '5'
            }
            ]
        },
        {
            title : 'Замена жидкостей',
            inner : [{
                title : 'Замена моторного масла',
                content : '6'
            },
            {
                title : 'Замена масла в АКПП',
                content : '7'
            },
            {
                title : 'Замена масла в МКПП',
                content : '8'
            },
            {
                title : 'Замена антифриза',
                content : '9'
            },
            {
                title : 'Замена жидкости в ГУР',
                content : '10'
            },
            {
                title : 'Замена масла в редукторе',
                content : '11'
            }
            ]
     
        },
        {
            title : 'Ремонт и Заправка кондиционеров',
            content : '12'
        },
        {
            title : 'Шиномонтаж',
            content : '13'
        }
    ],
    currentContent : mainPricelist(),
    title : "Цены"
}

export default function priceList(state = initialState, action) {
        switch (action.type) {
        case SET_PRICELIST_CONTENT : {
            return Object.assign({}, state, {currentContent : action.payload});
        }
        default: return state;
    }
}