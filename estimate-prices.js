const ESTIMATOR_SERVICES = [
  {
    id: "blinds",
    icon: "▤",
    name: { en: "Install Window Blinds", es: "Instalar persianas", uk: "Встановлення жалюзі" },
    base: [100, 140],
    additionalUnit: [42, 62],
    scope: {
      en: ["Measure and position", "Install brackets and blinds", "Basic adjustment and cleanup"],
      es: ["Medición y colocación", "Instalación de soportes y persianas", "Ajuste básico y limpieza"],
      uk: ["Вимірювання та розмітка", "Монтаж кронштейнів і жалюзі", "Базове регулювання та прибирання"]
    },
    questions: [
      { id: "remove", label: { en: "Remove existing blinds?", es: "¿Retirar persianas existentes?", uk: "Зняти старі жалюзі?" }, add: [15, 25], perUnit: true },
      { id: "hardSurface", label: { en: "Brick, concrete, tile, or difficult surface?", es: "¿Ladrillo, concreto, azulejo o superficie difícil?", uk: "Цегла, бетон, плитка або складна поверхня?" }, add: [25, 45], perUnit: true },
      { id: "highAccess", label: { en: "High or difficult window access?", es: "¿Ventana alta o de acceso difícil?", uk: "Високе або складнодоступне вікно?" }, add: [30, 55], perUnit: true }
    ]
  },
  {
    id: "storm-door",
    icon: "▯",
    name: { en: "Install a Storm Door", es: "Instalar puerta contra tormentas", uk: "Встановлення штормових дверей" },
    base: [190, 275],
    additionalUnit: [175, 250],
    scope: {
      en: ["Install and level door", "Adjust closer and latch", "Basic exterior caulking"],
      es: ["Instalar y nivelar la puerta", "Ajustar cierre y pestillo", "Sellado exterior básico"],
      uk: ["Встановити та вирівняти двері", "Відрегулювати доводчик і замок", "Базова зовнішня герметизація"]
    },
    questions: [
      { id: "remove", label: { en: "Remove existing storm door?", es: "¿Retirar la puerta existente?", uk: "Демонтувати старі двері?" }, add: [40, 70] },
      { id: "opening", label: { en: "Does the opening need repair or major adjustment?", es: "¿La abertura necesita reparación o ajuste importante?", uk: "Отвір потребує ремонту або значної підгонки?" }, add: [100, 300] },
      { id: "dispose", label: { en: "Haul-away or disposal needed?", es: "¿Necesita retiro o eliminación?", uk: "Потрібне вивезення або утилізація?" }, add: [35, 65] }
    ]
  },
  {
    id: "interior-door",
    icon: "▥",
    name: { en: "Install a Prehung Interior Door", es: "Instalar puerta interior precolgada", uk: "Встановлення міжкімнатних дверей" },
    base: [325, 475],
    additionalUnit: [295, 440],
    scope: {
      en: ["Set and level prehung unit", "Shim and fasten frame", "Adjust swing and latch"],
      es: ["Colocar y nivelar la unidad", "Calzar y fijar el marco", "Ajustar apertura y pestillo"],
      uk: ["Встановити й вирівняти блок", "Розклинити та закріпити коробку", "Відрегулювати хід і замок"]
    },
    questions: [
      { id: "remove", label: { en: "Remove old door and frame?", es: "¿Retirar puerta y marco anteriores?", uk: "Демонтувати старі двері та коробку?" }, add: [85, 140] },
      { id: "opening", label: { en: "Opening needs repair or resizing?", es: "¿La abertura necesita reparación o cambio de tamaño?", uk: "Отвір потребує ремонту або зміни розміру?" }, add: [125, 325] },
      { id: "trim", label: { en: "Install new casing or trim?", es: "¿Instalar molduras nuevas?", uk: "Встановити нові лиштви?" }, add: [85, 165] }
    ]
  },
  {
    id: "tv",
    icon: "▣",
    name: { en: "TV Mounting", es: "Montaje de televisor", uk: "Монтаж телевізора" },
    base: [125, 190],
    additionalUnit: [105, 165],
    scope: {
      en: ["Mount customer-supplied bracket", "Level and secure television", "Basic external cable arrangement"],
      es: ["Montar soporte suministrado", "Nivelar y asegurar el televisor", "Organización externa básica de cables"],
      uk: ["Встановити кронштейн замовника", "Вирівняти та закріпити телевізор", "Базово організувати зовнішні кабелі"]
    },
    questions: [
      { id: "large", label: { en: "TV larger than 65 inches?", es: "¿TV mayor de 65 pulgadas?", uk: "Телевізор більший за 65 дюймів?" }, add: [45, 85], perUnit: true },
      { id: "masonry", label: { en: "Brick, concrete, or stone wall?", es: "¿Pared de ladrillo, concreto o piedra?", uk: "Цегляна, бетонна або кам'яна стіна?" }, add: [55, 110], perUnit: true },
      { id: "cover", label: { en: "Install an external cord cover?", es: "¿Instalar canaleta externa?", uk: "Встановити зовнішній кабель-канал?" }, add: [35, 70], perUnit: true }
    ]
  },
  {
    id: "drywall",
    icon: "□",
    name: { en: "Drywall Repair", es: "Reparación de drywall", uk: "Ремонт гіпсокартону" },
    base: [175, 285],
    additionalUnit: [135, 245],
    scope: {
      en: ["Patch and secure damaged area", "Tape and apply joint compound", "Sand ready for primer"],
      es: ["Reparar y asegurar el área", "Aplicar cinta y compuesto", "Lijar listo para imprimación"],
      uk: ["Закріпити та відновити ділянку", "Нанести стрічку й шпаклівку", "Відшліфувати під ґрунтування"]
    },
    questions: [
      { id: "large", label: { en: "Large or complex damaged area?", es: "¿Área dañada grande o compleja?", uk: "Велика або складна пошкоджена ділянка?" }, add: [175, 425] },
      { id: "paint", label: { en: "Prime and paint repaired area?", es: "¿Imprimar y pintar el área?", uk: "Ґрунтувати та фарбувати ділянку?" }, add: [90, 225] },
      { id: "ceiling", label: { en: "Is this a ceiling repair?", es: "¿Es una reparación de techo?", uk: "Це ремонт стелі?" }, add: [85, 190] },
      { id: "texture", label: { en: "Texture matching needed?", es: "¿Necesita igualar textura?", uk: "Потрібно відновити текстуру?" }, add: [75, 180] }
    ]
  },
  {
    id: "faucet",
    icon: "⌁",
    name: { en: "Replace a Faucet", es: "Reemplazar un grifo", uk: "Заміна змішувача" },
    base: [135, 235],
    additionalUnit: [115, 205],
    scope: {
      en: ["Remove existing faucet", "Install customer-supplied faucet", "Connect and test for visible leaks"],
      es: ["Retirar el grifo existente", "Instalar el grifo suministrado", "Conectar y comprobar fugas visibles"],
      uk: ["Демонтувати старий змішувач", "Встановити змішувач замовника", "Під'єднати та перевірити на видимі протікання"]
    },
    questions: [
      { id: "corroded", label: { en: "Corroded or difficult connections?", es: "¿Conexiones corroídas o difíciles?", uk: "Іржаві або складні з'єднання?" }, add: [55, 115], perUnit: true },
      { id: "valves", label: { en: "Replace shutoff valves?", es: "¿Reemplazar válvulas de cierre?", uk: "Замінити запірні крани?" }, add: [85, 165], perUnit: true }
    ]
  },
  {
    id: "light",
    icon: "✦",
    name: { en: "Install a Light Fixture", es: "Instalar una lámpara", uk: "Встановлення світильника" },
    base: [110, 190],
    additionalUnit: [90, 165],
    scope: {
      en: ["Remove existing fixture", "Install customer-supplied fixture", "Basic operational test"],
      es: ["Retirar lámpara existente", "Instalar lámpara suministrada", "Prueba básica de funcionamiento"],
      uk: ["Демонтувати старий світильник", "Встановити світильник замовника", "Базово перевірити роботу"]
    },
    questions: [
      { id: "high", label: { en: "High ceiling or difficult access?", es: "¿Techo alto o acceso difícil?", uk: "Висока стеля або складний доступ?" }, add: [85, 170], perUnit: true },
      { id: "chandelier", label: { en: "Complex chandelier assembly?", es: "¿Montaje complejo de araña?", uk: "Складне складання люстри?" }, add: [85, 225], perUnit: true },
      { id: "newBox", label: { en: "New electrical box or wiring changes needed?", es: "¿Caja nueva o cambios de cableado?", uk: "Потрібна нова коробка або зміни проводки?" }, quoteOnly: true }
    ]
  },
  {
    id: "assembly",
    icon: "◇",
    name: { en: "Furniture Assembly", es: "Montaje de muebles", uk: "Складання меблів" },
    base: [100, 165],
    additionalUnit: [80, 140],
    scope: {
      en: ["Assemble customer-supplied furniture", "Basic positioning", "Gather packaging for customer disposal"],
      es: ["Montar muebles suministrados", "Colocación básica", "Juntar embalaje para eliminación por el cliente"],
      uk: ["Зібрати меблі замовника", "Базово встановити на місце", "Зібрати пакування для утилізації замовником"]
    },
    questions: [
      { id: "large", label: { en: "Large wardrobe, cabinet, or complex item?", es: "¿Armario grande o artículo complejo?", uk: "Велика шафа або складний виріб?" }, add: [85, 195], perUnit: true },
      { id: "anchor", label: { en: "Wall anchoring required?", es: "¿Necesita fijación a la pared?", uk: "Потрібне кріплення до стіни?" }, add: [30, 80], perUnit: true }
    ]
  }
];

const ESTIMATOR_SETTINGS = {
  minimumVisit: 100,
  phoneDisplay: "216-214-4720",
  phoneLink: "12162144720",
  email: "veritassolutionllc@gmail.com"
};
