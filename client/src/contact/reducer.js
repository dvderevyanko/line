const initialState = {
    title : "контакты",
    companyName : `<p>Общество с ограниченной ответственностью <strong>«Линия сервиса»</strong></p>`,
    unp : `<p>УНП 491331650</p>`,
    phones : `<p>Телефоны: <br/><strong>+375232556673</strong><br/><strong>+375 29 2004301</strong><br/><strong>+375 29 2002402</strong><br/><strong>+375 29 2004303</strong></p>`,
    address : `<p>Адрес: <strong>246000, г. &nbsp;Гомель, ул. Кленковская, 84</strong></p>`,
    schedule : `<p>График работы:&nbsp;с 9-00 до 18-00 (Воскресенье выходной)</p>`,
    email : `<p>E-mail: <a href="mailto:parts.serviceline@gmail.com">parts.serviceline@gmail.com</a><br>`,
    //social : `ВКонтакте: <a href="https://vk.com/">https://vk.com/</a><br>`
}

export default function about(state = initialState) {
    return state;
}