const initialState = {
    carouselData : [
        {
            img : "assets/3.jpg",
            title : "Гарантированное качество",
            text : "Автосервис с безупречной репутацией."
        },
        {
            img : "assets/2.jpg",
            title : "Демократичные цены",
            text : "Таких цен в городе больше нет."
        }
    ],
    title : "test"
}
export default function app(state = initialState) {
    return state;
}