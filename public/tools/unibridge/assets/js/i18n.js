(function () {
  var T = {
    // ── Navigation ──
    nav_home: { en: 'Home', ru: 'Главная' },

    // ── Homepage ──
    hero_title_1: { en: 'Your Bridge to ', ru: 'Ваш мост к ' },
    hero_title_2: { en: 'Studying in Austria', ru: 'учёбе в Австрии' },
    hero_subtitle: {
      en: 'Everything international students from Central Asia need to know about paperwork — before and after arriving in Vienna.',
      ru: 'Всё, что нужно знать студентам из Центральной Азии о документах — до и после приезда в Вену.'
    },
    country_label: { en: 'Where are you from?', ru: 'Откуда вы?' },
    country_placeholder: { en: 'Select your country…', ru: 'Выберите страну…' },
    modal_before: { en: '📋 Before Arriving in Austria', ru: '📋 До приезда в Австрию' },
    modal_after: { en: '📝 After Arriving in Austria', ru: '📝 После приезда в Австрию' },
    modal_visa: { en: 'Visa', ru: 'Виза' },
    modal_housing: { en: 'Housing', ru: 'Жильё' },
    modal_insurance: { en: 'Health Insurance', ru: 'Медстраховка' },
    modal_admin: { en: 'Address Registration', ru: 'Регистрация адреса' },
    urgency_text: {
      en: '⚠️ Visa appointment slots open 3 months ahead — start collecting documents early!',
      ru: '⚠️ Запись на визу открывается за 3 месяца — начните собирать документы заранее!'
    },
    progress_title: { en: 'Your Progress', ru: 'Ваш прогресс' },
    progress_visa: { en: 'Visa', ru: 'Виза' },
    progress_housing: { en: 'Housing', ru: 'Жильё' },
    progress_insurance: { en: 'Insurance', ru: 'Страховка' },
    progress_admin: { en: 'Registration', ru: 'Регистрация' },
    quick_title: { en: 'What do you need help with?', ru: 'С чем вам нужна помощь?' },
    testimonials_title: { en: 'Student Stories', ru: 'Истории студентов' },
    testimonial_1_text: {
      en: '"UniBridge helped me understand the visa process step by step. I got my permit on the first try!"',
      ru: '«UniBridge помог мне понять процесс получения визы шаг за шагом. Я получил разрешение с первого раза!»'
    },
    testimonial_1_name: { en: 'Aibek N., Kazakhstan', ru: 'Айбек Н., Казахстан' },
    testimonial_2_text: {
      en: '"Finding student housing in Vienna was so stressful until I found this guide. The comparison tool is amazing!"',
      ru: '«Поиск студенческого жилья в Вене был стрессом, пока я не нашёл этот гид. Инструмент сравнения — просто класс!»'
    },
    testimonial_2_name: { en: 'Dilnoza K., Uzbekistan', ru: 'Дильноза К., Узбекистан' },
    testimonial_3_text: {
      en: '"The insurance and registration sections saved me so much time. Everything was in one place."',
      ru: '«Разделы о страховке и регистрации сэкономили мне кучу времени. Всё в одном месте.»'
    },
    testimonial_3_name: { en: 'Azamat T., Kyrgyzstan', ru: 'Азамат Т., Кыргызстан' },

    // ── Visa page ──
    visa_title: { en: 'Visa', ru: 'Виза' },
    visa_subtitle: {
      en: 'Student Visa (Aufenthaltsbewilligung Studierende) — everything you need to apply',
      ru: 'Студенческая виза (Aufenthaltsbewilligung Studierende) — всё для подачи заявки'
    },
    visa_docs: { en: '📄 Documents Required', ru: '📄 Необходимые документы' },
    visa_doc_1: { en: 'Valid passport (at least 12 months validity)', ru: 'Действующий паспорт (минимум 12 месяцев)' },
    visa_doc_2: { en: 'Passport-sized biometric photos (35 x 45 mm)', ru: 'Биометрические фото (35 x 45 мм)' },
    visa_doc_3: { en: 'University admission letter (Zulassungsbescheid)', ru: 'Письмо о зачислении (Zulassungsbescheid)' },
    visa_doc_4: { en: 'Proof of financial means (€ 12,707.44/year or blocked account)', ru: 'Подтверждение финансов (€ 12 707,44/год или блокированный счёт)' },
    visa_doc_5: { en: 'Proof of accommodation in Austria', ru: 'Подтверждение жилья в Австрии' },
    visa_doc_6: { en: 'Health insurance covering Austria', ru: 'Медицинская страховка для Австрии' },
    visa_doc_7: { en: 'Birth certificate (apostilled & translated)', ru: 'Свидетельство о рождении (апостиль + перевод)' },
    visa_doc_8: { en: 'Criminal record certificate (apostilled & translated)', ru: 'Справка о несудимости (апостиль + перевод)' },
    visa_doc_9: { en: 'Completed application form (signed)', ru: 'Заполненная анкета (подписанная)' },
    visa_docs_counter: { en: ' complete', ru: ' готово' },
    visa_meeting: { en: '📅 Scheduling a Meeting', ru: '📅 Запись на приём' },
    visa_meeting_p: {
      en: 'You must schedule an appointment at the Austrian Embassy or Consulate in your home country.',
      ru: 'Вы должны записаться на приём в Посольство или Консульство Австрии в вашей стране.'
    },
    visa_meeting_1: { en: 'Visit the embassy website for your country to book online', ru: 'Зайдите на сайт посольства для онлайн-записи' },
    visa_meeting_2: { en: 'Appointments may have 2–6 week wait times — book early', ru: 'Ожидание записи 2–6 недель — записывайтесь заранее' },
    visa_meeting_3: { en: 'Bring all original documents + one copy of each', ru: 'Возьмите все оригиналы + по одной копии' },
    visa_meeting_4: { en: 'Arrive 15 minutes before your scheduled time', ru: 'Приходите за 15 минут до назначенного времени' },
    visa_meeting_tip: {
      en: 'Tip: Some embassies allow walk-in submission on specific days — check the local website.',
      ru: 'Совет: некоторые посольства принимают без записи в определённые дни — проверьте на сайте.'
    },
    visa_payments: { en: '💳 Necessary Payments', ru: '💳 Необходимые платежи' },
    visa_pay_1: { en: 'Visa application fee: ~ € 160', ru: 'Визовый сбор: ~ € 160' },
    visa_pay_2: { en: 'Residence permit fee: ~ € 160', ru: 'Сбор за разрешение на проживание: ~ € 160' },
    visa_pay_3: { en: 'Translation & apostille costs: ~ € 50–150 per document', ru: 'Перевод и апостиль: ~ € 50–150 за документ' },
    visa_pay_4: { en: 'Blocked account deposit: € 12,707.44 (refundable, drawn monthly)', ru: 'Блокированный счёт: € 12 707,44 (возвратный, ежемесячные списания)' },
    visa_pay_5: { en: 'Health insurance: ~ € 60–80 / month', ru: 'Медстраховка: ~ € 60–80 / месяц' },
    visa_pay_note: { en: 'Payments are usually made by bank transfer; some embassies accept card.', ru: 'Оплата обычно банковским переводом; некоторые посольства принимают карту.' },
    visa_timeline: { en: '⏳ Application Timeline', ru: '⏳ Сроки подачи' },
    visa_tl_1_title: { en: '6–8 months before', ru: 'За 6–8 месяцев' },
    visa_tl_1_desc: { en: 'Receive university admission & start gathering documents', ru: 'Получить зачисление и начать сбор документов' },
    visa_tl_2_title: { en: '4–6 months before', ru: 'За 4–6 месяцев' },
    visa_tl_2_desc: { en: 'Open blocked bank account, arrange insurance & housing', ru: 'Открыть блокированный счёт, оформить страховку и жильё' },
    visa_tl_3_title: { en: '3–4 months before', ru: 'За 3–4 месяца' },
    visa_tl_3_desc: { en: 'Book embassy appointment & get translations/apostilles', ru: 'Записаться в посольство, сделать переводы/апостили' },
    visa_tl_4_title: { en: '2–3 months before', ru: 'За 2–3 месяца' },
    visa_tl_4_desc: { en: 'Submit application at the embassy', ru: 'Подать заявку в посольстве' },
    visa_tl_5_title: { en: '6–12 weeks before', ru: 'За 6–12 недель' },
    visa_tl_5_desc: { en: 'Wait for visa decision (processing time varies)', ru: 'Ожидание решения (сроки варьируются)' },
    visa_tl_6_title: { en: '2 weeks before', ru: 'За 2 недели' },
    visa_tl_6_desc: { en: 'Receive visa & book flights', ru: 'Получить визу и купить билеты' },
    visa_contacts: { en: '📞 Useful Contacts', ru: '📞 Полезные контакты' },
    visa_contacts_embassy: { en: 'Austrian Embassy general info:', ru: 'Посольства Австрии:' },
    visa_contacts_embassy_link: { en: 'Find your nearest embassy', ru: 'Найти ближайшее посольство' },
    visa_contacts_ma35: { en: 'MA 35 (Vienna immigration):', ru: 'MA 35 (иммиграция Вены):' },
    visa_contacts_email: { en: 'Email (MA 35):', ru: 'Email (MA 35):' },
    visa_contacts_phone: { en: 'Phone (MA 35):', ru: 'Телефон (MA 35):' },
    visa_countdown_label: { en: 'Your program starts in', ru: 'До начала вашей программы' },
    visa_countdown_days: { en: ' days', ru: ' дн.' },
    visa_countdown_set: { en: 'Set start date:', ru: 'Укажите дату начала:' },
    visa_countdown_past: { en: 'Your program has already started!', ru: 'Ваша программа уже началась!' },
    visa_faq_title: { en: 'Frequently Asked Questions', ru: 'Часто задаваемые вопросы' },
    visa_faq_1_q: { en: 'What if my visa is delayed?', ru: 'Что делать, если виза задерживается?' },
    visa_faq_1_a: {
      en: 'Contact your university\'s international office — they can issue a letter supporting your enrollment. You may also contact MA 35 directly for a status update. In some cases, a temporary entry on a tourist visa is possible (max 90 days), but consult a lawyer first.',
      ru: 'Свяжитесь с международным отделом вашего университета — они могут выдать письмо. Также можно обратиться в MA 35 за статусом. В некоторых случаях возможен въезд по туристической визе (макс. 90 дней), но сначала проконсультируйтесь с юристом.'
    },
    visa_faq_2_q: { en: 'Can I enter Austria on a tourist visa and convert it?', ru: 'Можно ли въехать по туристической визе и переоформить её?' },
    visa_faq_2_a: {
      en: 'Technically, you can enter the Schengen area on a tourist visa, but you cannot convert it to a residence permit from within Austria. You must apply for a student residence permit from your home country.',
      ru: 'Технически можно въехать по туристической визе, но переоформить её в ВНЖ внутри Австрии нельзя. Заявку на студенческое ВНЖ нужно подавать из своей страны.'
    },
    visa_faq_3_q: { en: 'How long is the residence permit valid?', ru: 'На сколько выдаётся ВНЖ?' },
    visa_faq_3_a: {
      en: 'The initial student residence permit is typically valid for 12 months and can be renewed annually as long as you maintain your student status and meet all requirements.',
      ru: 'Первичное студенческое ВНЖ обычно выдаётся на 12 месяцев и продлевается ежегодно при сохранении статуса студента и выполнении всех требований.'
    },
    visa_faq_4_q: { en: 'Can I work while studying?', ru: 'Можно ли работать во время учёбы?' },
    visa_faq_4_a: {
      en: 'Yes, students with a residence permit can work up to 20 hours/week. If you earn below the Geringfügigkeitsgrenze (€ 518.44/mo in 2024), you do not need a separate work permit.',
      ru: 'Да, студенты с ВНЖ могут работать до 20 часов в неделю. Если заработок ниже порога (€ 518,44/мес. в 2024), отдельное разрешение на работу не нужно.'
    },
    back_home: { en: '← Back to Home', ru: '← На главную' },

    // ── Housing page ──
    housing_title: { en: 'Housing', ru: 'Жильё' },
    housing_subtitle: {
      en: 'Student dormitories and shared flats in Vienna — find your new home',
      ru: 'Студенческие общежития и квартиры в Вене — найдите свой новый дом'
    },
    housing_compare_btn: { en: 'Compare', ru: 'Сравнить' },
    housing_compare_title: { en: 'Comparison', ru: 'Сравнение' },
    housing_compare_price: { en: 'Price', ru: 'Цена' },
    housing_compare_occupants: { en: 'Occupants', ru: 'Жильцы' },
    housing_compare_location: { en: 'Location', ru: 'Район' },
    housing_compare_colivers: { en: 'Co-livers', ru: 'Соседи' },
    housing_calc_title: { en: 'Total Cost Calculator', ru: 'Калькулятор расходов' },
    housing_calc_rent: { en: 'Monthly Rent (€)', ru: 'Аренда в месяц (€)' },
    housing_calc_deposit: { en: 'Deposit (€)', ru: 'Залог (€)' },
    housing_calc_utilities: { en: 'Utilities / month (€)', ru: 'Коммунальные / мес. (€)' },
    housing_calc_first: { en: '1st month total:', ru: 'Итого за 1-й месяц:' },
    housing_calc_monthly: { en: 'Ongoing monthly:', ru: 'Ежемесячно:' },
    housing_view: { en: 'View on', ru: 'Смотреть на' },
    housing_colivers_label: { en: 'Co-livers:', ru: 'Соседи:' },
    housing_none_private: { en: 'None — private studio', ru: 'Нет — отдельная студия' },

    // ── Insurance page ──
    insurance_title: { en: 'Health Insurance', ru: 'Медицинская страховка' },
    insurance_subtitle: {
      en: 'Student health insurance in Austria — providers, costs, and how to sign up',
      ru: 'Студенческая медстраховка в Австрии — провайдеры, стоимость и как оформить'
    },
    ins_providers: { en: '🏢 Insurance Providers', ru: '🏢 Страховые компании' },
    ins_providers_note: {
      en: 'Note: ÖGK is the standard public insurance accepted everywhere. Private options may have limitations.',
      ru: 'Примечание: ÖGK — стандартная государственная страховка, принимается везде. У частных могут быть ограничения.'
    },
    ins_payments: { en: '💰 Insurance Payments', ru: '💰 Оплата страховки' },
    ins_payments_intro: { en: 'Self-insured students pay a monthly contribution directly to the insurer.', ru: 'Самозастрахованные студенты платят ежемесячный взнос напрямую страховщику.' },
    ins_pay_1: { en: 'ÖGK student rate: € 65.73 / month (2024/25)', ru: 'Тариф ÖGK для студентов: € 65,73 / мес. (2024/25)' },
    ins_pay_2: { en: 'Payment methods: Direct debit (SEPA), bank transfer, or Erlagschein', ru: 'Способы оплаты: прямой дебет (SEPA), банковский перевод или Erlagschein' },
    ins_pay_3: { en: 'Payment frequency: Monthly or quarterly', ru: 'Частота: ежемесячно или ежеквартально' },
    ins_pay_4: { en: 'Penalty for late payment: Coverage may lapse after 6 weeks', ru: 'Штраф за просрочку: покрытие может прекратиться через 6 недель' },
    ins_pay_note: {
      en: 'If you work part-time (up to Geringfügigkeitsgrenze of € 518.44/mo), your employer covers insurance.',
      ru: 'Если вы работаете (до € 518,44/мес.), страховку покрывает работодатель.'
    },
    ins_docs: { en: '📄 Documents Required', ru: '📄 Необходимые документы' },
    ins_doc_1: { en: 'Valid passport or residence permit', ru: 'Действующий паспорт или ВНЖ' },
    ins_doc_2: { en: 'Confirmation of enrollment (Studienbestätigung / Inskriptionsbestätigung)', ru: 'Подтверждение зачисления (Studienbestätigung)' },
    ins_doc_3: { en: 'Meldezettel (proof of address registration)', ru: 'Meldezettel (подтверждение регистрации адреса)' },
    ins_doc_4: { en: 'Austrian bank account details (IBAN)', ru: 'Реквизиты австрийского банковского счёта (IBAN)' },
    ins_doc_5: { en: 'Completed application form from the insurer', ru: 'Заполненная анкета от страховщика' },
    ins_doc_6: { en: 'Passport-sized photo (for e-card)', ru: 'Фото на документ (для e-card)' },
    ins_timeslot: { en: '🗓️ Reserve Timeslot', ru: '🗓️ Запись на приём' },
    ins_timeslot_intro: { en: 'Register with ÖGK in person at a service center or online:', ru: 'Зарегистрируйтесь в ÖGK лично или онлайн:' },
    ins_ts_1: { en: 'Online:', ru: 'Онлайн:' },
    ins_ts_1_link: { en: 'ÖGK Self-Insurance Portal', ru: 'Портал самострахования ÖGK' },
    ins_ts_2: { en: 'In person: ÖGK Wien, Wienerbergstraße 15–19, 1100 Wien', ru: 'Лично: ÖGK Wien, Wienerbergstraße 15–19, 1100 Wien' },
    ins_ts_3: { en: 'Hours: Mon–Fri 07:30–14:30', ru: 'Часы работы: Пн–Пт 07:30–14:30' },
    ins_ts_4: { en: 'Wait time: Walk-in, typically 15–45 min', ru: 'Время ожидания: без записи, обычно 15–45 мин' },
    ins_ts_tip: {
      en: 'Tip: Arrive early in the morning for shorter wait times. Bring all documents listed above.',
      ru: 'Совет: приходите рано утром, чтобы подождать меньше. Возьмите все документы.'
    },

    // ── Admin page ──
    admin_title: { en: 'Address Registration', ru: 'Регистрация адреса' },
    admin_subtitle: {
      en: 'Register your address (Meldezettel) and prepare your MA 35 residence permit appointment',
      ru: 'Зарегистрируйте адрес (Meldezettel) и подготовьтесь к визиту в MA 35'
    },
    admin_meldezettel: { en: '📋 Meldezettel (Address Registration)', ru: '📋 Meldezettel (Регистрация адреса)' },
    admin_melde_p: {
      en: 'You must register your Austrian address within <strong>3 days</strong> of moving in.',
      ru: 'Вы должны зарегистрировать адрес в Австрии в течение <strong>3 дней</strong> после заселения.'
    },
    admin_melde_1: { en: 'Download the Meldezettel form from', ru: 'Скачайте бланк Meldezettel с' },
    admin_melde_2: { en: 'Fill in the form and have your landlord sign it', ru: 'Заполните бланк и попросите арендодателя подписать' },
    admin_melde_3: { en: 'Bring it to any Meldeservice (registration office)', ru: 'Отнесите в любой Meldeservice (бюро регистрации)' },
    admin_melde_4: { en: 'Required: passport + signed Meldezettel form', ru: 'Нужно: паспорт + подписанный Meldezettel' },
    admin_melde_5: { en: 'Free of charge — no appointment needed', ru: 'Бесплатно — запись не нужна' },
    admin_ma35: { en: '🏛️ MA 35 Residence Permit', ru: '🏛️ MA 35 — Вид на жительство' },
    admin_ma35_p: {
      en: 'After registering your address, you need to apply at <strong>MA 35</strong> for your student residence permit (Aufenthaltstitel).',
      ru: 'После регистрации адреса подайте заявку в <strong>MA 35</strong> на студенческое ВНЖ (Aufenthaltstitel).'
    },
    admin_ma35_1: { en: 'Documents needed: Passport, Meldezettel, admission letter, insurance, financial proof, photos', ru: 'Документы: паспорт, Meldezettel, зачисление, страховка, финансы, фото' },
    admin_ma35_2: { en: 'Application: Submit online or in person', ru: 'Подача: онлайн или лично' },
    admin_ma35_3: { en: 'Processing time: 4–8 weeks', ru: 'Сроки: 4–8 недель' },
    admin_ma35_4: { en: 'Pick-up: In person at MA 35 with appointment', ru: 'Получение: лично в MA 35 по записи' },
    admin_form_heading: { en: 'Submit Your Details for MA 35 Appointment', ru: 'Отправьте данные для записи в MA 35' },
    admin_fname: { en: 'First Name', ru: 'Имя' },
    admin_lname: { en: 'Last Name', ru: 'Фамилия' },
    admin_address: { en: 'Austrian Address', ru: 'Адрес в Австрии' },
    admin_upload: { en: 'Upload Documents (passport, Meldezettel, etc.)', ru: 'Загрузите документы (паспорт, Meldezettel и т.д.)' },
    admin_submit: { en: 'Send to MA 35', ru: 'Отправить в MA 35' },
    admin_success_title: { en: 'Submission Received!', ru: 'Заявка принята!' },
    admin_success_text: {
      en: 'Your details have been recorded. In a full version of UniBridge, this would forward your documents to MA 35 and book an appointment for picking up your student residence permit.',
      ru: 'Ваши данные сохранены. В полной версии UniBridge они будут отправлены в MA 35 для записи на получение ВНЖ.'
    },
    admin_success_link: { en: 'Visit MA 35 website directly →', ru: 'Перейти на сайт MA 35 →' },
    admin_status_title: { en: 'Your Application Status', ru: 'Статус вашей заявки' },
    admin_step_1: { en: 'Gather Documents', ru: 'Собрать документы' },
    admin_step_2: { en: 'Register Address', ru: 'Зарегистрировать адрес' },
    admin_step_3: { en: 'Submit to MA 35', ru: 'Подать в MA 35' },
    admin_step_4: { en: 'Pick Up Permit', ru: 'Получить ВНЖ' },
    admin_preview_title: { en: 'Selected Files:', ru: 'Выбранные файлы:' }
  };

  function getLang() {
    return localStorage.getItem('ub-lang') || 'en';
  }

  function setLang(lang) {
    localStorage.setItem('ub-lang', lang);
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[key] && T[key][lang] !== undefined) {
        if (el.tagName === 'INPUT' && el.type !== 'file') {
          el.placeholder = T[key][lang];
        } else if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = T[key][lang];
        } else {
          el.textContent = T[key][lang];
        }
      }
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'RU' : 'EN';
    document.documentElement.lang = lang;
  }

  function init() {
    var lang = getLang();
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = getLang();
        var next = current === 'en' ? 'ru' : 'en';
        setLang(next);
        applyLang(next);
      });
    }
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.UB_I18N = { T: T, applyLang: applyLang, getLang: getLang };
})();
