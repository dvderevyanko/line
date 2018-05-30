const initialState = {
    cards : [
        {
            img : "/assets/work/services/oil.png",
            href : "/pricelist",
            title : "жидкости",
            text : "ремонт автомобилей",
            button : "узнать"
        },
        {
            img : "/assets/work/services/carriage.png",
            href : "#",
            title : "подвеска",
            text : "запчасти",
            button : "узнать"
        },
        {
            img : "/assets/work/services/engine.png",
            href : "#",
            title : "двигатель",
            text : "шиномонтаж",
            button : "узнать"
        },

        {
            img : "/assets/work/services/tire.png",
            href : "/pricelist",
            title : "шиномонтаж",
            text : "ремонт автомобилей",
            button : "узнать"
        },
        {
            img : "/assets/work/services/battery.png",
            href : "#",
            title : "электрика",
            text : "запчасти",
            button : "узнать"
        },
        {
            img : "/assets/work/services/muffler.png",
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