const initialState = {
    title : "контакты",
    companyName : `<p><strong>Автосервис — на Кленковской</strong></p>`,
    phones : `<p>Телефон: <strong>+375 29 7397972</strong>,<strong>+375 29 7397972</strong></p>`,
    address : `<p>Адрес: <strong>г. &nbsp;Гомель, ул. Кленковская, 84</strong></p>`,
    schedule : `<p>График работы:&nbsp;с 10-00 до 21-00 (Воскресенье выходной)</p>`,
    email : `<p>E-mail: <a href="mailto:dvderevyanko@yandex.ru">dvderevyanko@yandex.ru</a><br>`,
    social : `ВКонтакте: <a href="https://vk.com/">https://vk.com/</a><br>`
}

export default function about(state = initialState) {
    return state;
}