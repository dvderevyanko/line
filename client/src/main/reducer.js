const initialState = {
    content : {
        leftColumn : {
            title : "Чем мы занимаемся",
            desc : "Ремонт всех видов автомобилей",
            button : "Услуги и цены >>",
            link : "/pricelist"
        },
        rightColumn : {
            title : "Свяжитесь с нами",
            address : "г. Гомель, улица Олимпийская",
            phone : "+375447366637",
            mail : "remont@auto.by"
        }
    },
    cards : [
        {
            img : "/assets/services/oil.png",
            href : "/pricelist",
            title : "жидкости",
            text : "ремонт автомобилей",
            button : "узнать"
        },
        {
            img : "/assets/services/carriage.png",
            href : "#",
            title : "подвеска",
            text : "запчасти",
            button : "узнать"
        },
        {
            img : "/assets/services/engine.png",
            href : "#",
            title : "двигатель",
            text : "шиномонтаж",
            button : "узнать"
        },

        {
            img : "/assets/services/tire.png",
            href : "/pricelist",
            title : "шиномонтаж",
            text : "ремонт автомобилей",
            button : "узнать"
        },
        {
            img : "/assets/services/battery.png",
            href : "#",
            title : "электрика",
            text : "запчасти",
            button : "узнать"
        },
        {
            img : "/assets/services/muffler.png",
            href : "#",
            title : "сварка",
            text : "запчасти",
            button : "узнать"
        }
    ],
    title : "test"
}
export default function main(state = initialState) {
    return state;
}