const ESTIMATOR_CATEGORIES = {
  "all": {
    "en": "All Services",
    "es": "Todos",
    "uk": "Усі послуги"
  },
  "doors": {
    "en": "Doors",
    "es": "Puertas",
    "uk": "Двері"
  },
  "windows": {
    "en": "Windows & Blinds",
    "es": "Ventanas y persianas",
    "uk": "Вікна та жалюзі"
  },
  "walls": {
    "en": "Walls & Painting",
    "es": "Paredes y pintura",
    "uk": "Стіни та фарбування"
  },
  "mounting": {
    "en": "Mounting",
    "es": "Montaje",
    "uk": "Монтаж"
  },
  "carpentry": {
    "en": "Trim & Carpentry",
    "es": "Molduras y carpintería",
    "uk": "Оздоблення та столярні роботи"
  },
  "assembly": {
    "en": "Assembly",
    "es": "Montaje de muebles",
    "uk": "Складання"
  },
  "plumbing": {
    "en": "Fixture Replacement",
    "es": "Reemplazo de accesorios",
    "uk": "Заміна сантехніки"
  },
  "electrical": {
    "en": "Fixture Installation",
    "es": "Instalación eléctrica básica",
    "uk": "Встановлення приладів"
  },
  "maintenance": {
    "en": "Maintenance",
    "es": "Mantenimiento",
    "uk": "Обслуговування"
  },
  "exterior": {
    "en": "Exterior",
    "es": "Exterior",
    "uk": "Зовнішні роботи"
  }
};

const ESTIMATOR_SERVICES = [
  {
    "id": "blinds-install",
    "category": "windows",
    "icon": "▤",
    "name": {
      "en": "Install Window Blinds",
      "es": "Instalar persianas",
      "uk": "Встановлення жалюзі"
    },
    "base": [
      100,
      145
    ],
    "additionalUnit": [
      40,
      65
    ],
    "scope": {
      "en": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "es": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "uk": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Remove existing blinds?",
          "es": "Remove existing blinds?",
          "uk": "Remove existing blinds?"
        },
        "add": [
          15,
          25
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Brick, concrete, tile, or difficult mounting surface?",
          "es": "Brick, concrete, tile, or difficult mounting surface?",
          "uk": "Brick, concrete, tile, or difficult mounting surface?"
        },
        "add": [
          25,
          50
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "High or difficult window access?",
          "es": "High or difficult window access?",
          "uk": "High or difficult window access?"
        },
        "add": [
          35,
          65
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "blinds-repair",
    "category": "windows",
    "icon": "◫",
    "name": {
      "en": "Repair Window Blinds",
      "es": "Reparar persianas",
      "uk": "Ремонт жалюзі"
    },
    "base": [
      100,
      175
    ],
    "additionalUnit": [
      70,
      135
    ],
    "scope": {
      "en": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "es": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "uk": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Multiple blinds need repair?",
          "es": "Multiple blinds need repair?",
          "uk": "Multiple blinds need repair?"
        },
        "add": [
          55,
          100
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Replacement parts may be required?",
          "es": "Replacement parts may be required?",
          "uk": "Replacement parts may be required?"
        },
        "quoteOnly": true
      },
      {
        "id": "q3",
        "label": {
          "en": "Large or specialty blind system?",
          "es": "Large or specialty blind system?",
          "uk": "Large or specialty blind system?"
        },
        "add": [
          60,
          140
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "storm-door",
    "category": "doors",
    "icon": "▯",
    "name": {
      "en": "Install a Storm Door",
      "es": "Instalar puerta contra tormentas",
      "uk": "Встановлення штормових дверей"
    },
    "base": [
      190,
      285
    ],
    "additionalUnit": [
      175,
      260
    ],
    "scope": {
      "en": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ],
      "es": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ],
      "uk": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Remove existing storm door?",
          "es": "Remove existing storm door?",
          "uk": "Remove existing storm door?"
        },
        "add": [
          40,
          75
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Opening needs repair or major adjustment?",
          "es": "Opening needs repair or major adjustment?",
          "uk": "Opening needs repair or major adjustment?"
        },
        "add": [
          100,
          325
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Haul-away or disposal needed?",
          "es": "Haul-away or disposal needed?",
          "uk": "Haul-away or disposal needed?"
        },
        "add": [
          35,
          70
        ]
      }
    ]
  },
  {
    "id": "interior-door",
    "category": "doors",
    "icon": "▥",
    "name": {
      "en": "Install a Prehung Interior Door",
      "es": "Instalar puerta interior precolgada",
      "uk": "Встановлення міжкімнатних дверей"
    },
    "base": [
      325,
      485
    ],
    "additionalUnit": [
      295,
      450
    ],
    "scope": {
      "en": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ],
      "es": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ],
      "uk": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Remove old door and frame?",
          "es": "Remove old door and frame?",
          "uk": "Remove old door and frame?"
        },
        "add": [
          85,
          145
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Opening needs repair or resizing?",
          "es": "Opening needs repair or resizing?",
          "uk": "Opening needs repair or resizing?"
        },
        "add": [
          125,
          350
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Install new casing or trim?",
          "es": "Install new casing or trim?",
          "uk": "Install new casing or trim?"
        },
        "add": [
          85,
          175
        ]
      }
    ]
  },
  {
    "id": "door-repair",
    "category": "doors",
    "icon": "⌑",
    "name": {
      "en": "Door Adjustment or Repair",
      "es": "Ajuste o reparación de puerta",
      "uk": "Регулювання або ремонт дверей"
    },
    "base": [
      100,
      220
    ],
    "additionalUnit": [
      85,
      180
    ],
    "scope": {
      "en": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ],
      "es": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ],
      "uk": [
        "Basic installation or repair labor",
        "Alignment and operational adjustment",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Door or frame has visible damage?",
          "es": "Door or frame has visible damage?",
          "uk": "Door or frame has visible damage?"
        },
        "add": [
          75,
          200
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Lock or hardware replacement needed?",
          "es": "Lock or hardware replacement needed?",
          "uk": "Lock or hardware replacement needed?"
        },
        "add": [
          35,
          100
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Exterior door?",
          "es": "Exterior door?",
          "uk": "Exterior door?"
        },
        "add": [
          45,
          110
        ]
      }
    ]
  },
  {
    "id": "tv-mount",
    "category": "mounting",
    "icon": "▣",
    "name": {
      "en": "TV Mounting",
      "es": "Montaje de televisor",
      "uk": "Монтаж телевізора"
    },
    "base": [
      125,
      195
    ],
    "additionalUnit": [
      105,
      175
    ],
    "scope": {
      "en": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ],
      "es": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ],
      "uk": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "TV larger than 65 inches?",
          "es": "TV larger than 65 inches?",
          "uk": "TV larger than 65 inches?"
        },
        "add": [
          45,
          90
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Brick, concrete, or stone wall?",
          "es": "Brick, concrete, or stone wall?",
          "uk": "Brick, concrete, or stone wall?"
        },
        "add": [
          55,
          120
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "Install an external cord cover?",
          "es": "Install an external cord cover?",
          "uk": "Install an external cord cover?"
        },
        "add": [
          35,
          75
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "shelves",
    "category": "mounting",
    "icon": "≡",
    "name": {
      "en": "Install Shelves",
      "es": "Instalar estantes",
      "uk": "Встановлення полиць"
    },
    "base": [
      100,
      175
    ],
    "additionalUnit": [
      45,
      90
    ],
    "scope": {
      "en": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ],
      "es": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ],
      "uk": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Floating or heavy-duty shelves?",
          "es": "Floating or heavy-duty shelves?",
          "uk": "Floating or heavy-duty shelves?"
        },
        "add": [
          45,
          110
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Brick, concrete, or tile wall?",
          "es": "Brick, concrete, or tile wall?",
          "uk": "Brick, concrete, or tile wall?"
        },
        "add": [
          35,
          85
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Precise layout across multiple walls?",
          "es": "Precise layout across multiple walls?",
          "uk": "Precise layout across multiple walls?"
        },
        "add": [
          40,
          100
        ]
      }
    ]
  },
  {
    "id": "curtain-rods",
    "category": "mounting",
    "icon": "⌁",
    "name": {
      "en": "Install Curtain Rods",
      "es": "Instalar barras de cortina",
      "uk": "Встановлення карнизів"
    },
    "base": [
      100,
      150
    ],
    "additionalUnit": [
      35,
      65
    ],
    "scope": {
      "en": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ],
      "es": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ],
      "uk": [
        "Layout and secure mounting",
        "Leveling and basic adjustment",
        "Basic cable or hardware organization"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Remove existing hardware?",
          "es": "Remove existing hardware?",
          "uk": "Remove existing hardware?"
        },
        "add": [
          15,
          30
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Brick, concrete, or tile surface?",
          "es": "Brick, concrete, or tile surface?",
          "uk": "Brick, concrete, or tile surface?"
        },
        "add": [
          25,
          55
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "High or difficult access?",
          "es": "High or difficult access?",
          "uk": "High or difficult access?"
        },
        "add": [
          30,
          65
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "drywall",
    "category": "walls",
    "icon": "□",
    "name": {
      "en": "Drywall Repair",
      "es": "Reparación de drywall",
      "uk": "Ремонт гіпсокартону"
    },
    "base": [
      175,
      295
    ],
    "additionalUnit": [
      135,
      255
    ],
    "scope": {
      "en": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ],
      "es": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ],
      "uk": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Large or complex damaged area?",
          "es": "Large or complex damaged area?",
          "uk": "Large or complex damaged area?"
        },
        "add": [
          175,
          450
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Prime and paint repaired area?",
          "es": "Prime and paint repaired area?",
          "uk": "Prime and paint repaired area?"
        },
        "add": [
          90,
          240
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Ceiling repair?",
          "es": "Ceiling repair?",
          "uk": "Ceiling repair?"
        },
        "add": [
          85,
          200
        ]
      },
      {
        "id": "q4",
        "label": {
          "en": "Texture matching needed?",
          "es": "Texture matching needed?",
          "uk": "Texture matching needed?"
        },
        "add": [
          75,
          190
        ]
      }
    ]
  },
  {
    "id": "ceiling",
    "category": "walls",
    "icon": "▱",
    "name": {
      "en": "Ceiling Repair",
      "es": "Reparación de techo",
      "uk": "Ремонт стелі"
    },
    "base": [
      225,
      375
    ],
    "additionalUnit": [
      180,
      325
    ],
    "scope": {
      "en": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ],
      "es": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ],
      "uk": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Water damage or loose material?",
          "es": "Water damage or loose material?",
          "uk": "Water damage or loose material?"
        },
        "add": [
          100,
          300
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Texture matching needed?",
          "es": "Texture matching needed?",
          "uk": "Texture matching needed?"
        },
        "add": [
          85,
          220
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Prime and paint repaired area?",
          "es": "Prime and paint repaired area?",
          "uk": "Prime and paint repaired area?"
        },
        "add": [
          125,
          300
        ]
      }
    ]
  },
  {
    "id": "painting-room",
    "category": "walls",
    "icon": "▧",
    "name": {
      "en": "Paint a Room",
      "es": "Pintar una habitación",
      "uk": "Фарбування кімнати"
    },
    "base": [
      350,
      850
    ],
    "additionalUnit": [
      300,
      750
    ],
    "scope": {
      "en": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ],
      "es": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ],
      "uk": [
        "Surface preparation for stated scope",
        "Professional repair or finish work",
        "Basic work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Major wall preparation needed?",
          "es": "Major wall preparation needed?",
          "uk": "Major wall preparation needed?"
        },
        "add": [
          150,
          450
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Ceiling included?",
          "es": "Ceiling included?",
          "uk": "Ceiling included?"
        },
        "add": [
          150,
          350
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Trim and doors included?",
          "es": "Trim and doors included?",
          "uk": "Trim and doors included?"
        },
        "add": [
          175,
          450
        ]
      }
    ]
  },
  {
    "id": "baseboards",
    "category": "carpentry",
    "icon": "△",
    "name": {
      "en": "Install Baseboards or Trim",
      "es": "Instalar zócalos o molduras",
      "uk": "Встановлення плінтусів або лиштв"
    },
    "base": [
      175,
      350
    ],
    "additionalUnit": [
      90,
      180
    ],
    "scope": {
      "en": [
        "Measure, cut, fit, and fasten",
        "Basic finish preparation",
        "Work-area cleanup"
      ],
      "es": [
        "Measure, cut, fit, and fasten",
        "Basic finish preparation",
        "Work-area cleanup"
      ],
      "uk": [
        "Measure, cut, fit, and fasten",
        "Basic finish preparation",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Old trim removal needed?",
          "es": "Old trim removal needed?",
          "uk": "Old trim removal needed?"
        },
        "add": [
          75,
          175
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Many corners or complex cuts?",
          "es": "Many corners or complex cuts?",
          "uk": "Many corners or complex cuts?"
        },
        "add": [
          75,
          225
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Caulking and paint touch-up included?",
          "es": "Caulking and paint touch-up included?",
          "uk": "Caulking and paint touch-up included?"
        },
        "add": [
          100,
          275
        ]
      }
    ]
  },
  {
    "id": "cabinet-hardware",
    "category": "carpentry",
    "icon": "⋮",
    "name": {
      "en": "Install Cabinet Hardware",
      "es": "Instalar herrajes de gabinete",
      "uk": "Встановлення меблевої фурнітури"
    },
    "base": [
      100,
      180
    ],
    "additionalUnit": [
      12,
      25
    ],
    "scope": {
      "en": [
        "Measure, cut, fit, and fasten",
        "Basic finish preparation",
        "Work-area cleanup"
      ],
      "es": [
        "Measure, cut, fit, and fasten",
        "Basic finish preparation",
        "Work-area cleanup"
      ],
      "uk": [
        "Measure, cut, fit, and fasten",
        "Basic finish preparation",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "New holes must be drilled?",
          "es": "New holes must be drilled?",
          "uk": "New holes must be drilled?"
        },
        "add": [
          25,
          55
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Templates or exact alignment required?",
          "es": "Templates or exact alignment required?",
          "uk": "Templates or exact alignment required?"
        },
        "add": [
          20,
          45
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "Existing holes need repair?",
          "es": "Existing holes need repair?",
          "uk": "Existing holes need repair?"
        },
        "add": [
          50,
          125
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "furniture",
    "category": "assembly",
    "icon": "◇",
    "name": {
      "en": "Furniture Assembly",
      "es": "Montaje de muebles",
      "uk": "Складання меблів"
    },
    "base": [
      100,
      175
    ],
    "additionalUnit": [
      80,
      150
    ],
    "scope": {
      "en": [
        "Assembly of customer-supplied product",
        "Basic positioning and adjustment",
        "Packaging gathered for customer disposal"
      ],
      "es": [
        "Assembly of customer-supplied product",
        "Basic positioning and adjustment",
        "Packaging gathered for customer disposal"
      ],
      "uk": [
        "Assembly of customer-supplied product",
        "Basic positioning and adjustment",
        "Packaging gathered for customer disposal"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Large wardrobe, cabinet, or complex item?",
          "es": "Large wardrobe, cabinet, or complex item?",
          "uk": "Large wardrobe, cabinet, or complex item?"
        },
        "add": [
          85,
          210
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Wall anchoring required?",
          "es": "Wall anchoring required?",
          "uk": "Wall anchoring required?"
        },
        "add": [
          30,
          85
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "More than three boxes?",
          "es": "More than three boxes?",
          "uk": "More than three boxes?"
        },
        "add": [
          65,
          160
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "faucet",
    "category": "plumbing",
    "icon": "⌁",
    "name": {
      "en": "Replace a Faucet",
      "es": "Reemplazar un grifo",
      "uk": "Заміна змішувача"
    },
    "base": [
      135,
      245
    ],
    "additionalUnit": [
      115,
      215
    ],
    "scope": {
      "en": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ],
      "es": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ],
      "uk": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Corroded or difficult connections?",
          "es": "Corroded or difficult connections?",
          "uk": "Corroded or difficult connections?"
        },
        "add": [
          55,
          125
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Replace shutoff valves?",
          "es": "Replace shutoff valves?",
          "uk": "Replace shutoff valves?"
        },
        "add": [
          85,
          175
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "Disposal or cleanup of old fixture?",
          "es": "Disposal or cleanup of old fixture?",
          "uk": "Disposal or cleanup of old fixture?"
        },
        "add": [
          20,
          45
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "toilet",
    "category": "plumbing",
    "icon": "◉",
    "name": {
      "en": "Replace a Toilet",
      "es": "Reemplazar un inodoro",
      "uk": "Заміна унітаза"
    },
    "base": [
      175,
      325
    ],
    "additionalUnit": [
      155,
      285
    ],
    "scope": {
      "en": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ],
      "es": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ],
      "uk": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Remove and dispose of existing toilet?",
          "es": "Remove and dispose of existing toilet?",
          "uk": "Remove and dispose of existing toilet?"
        },
        "add": [
          50,
          100
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Flange or floor may need repair?",
          "es": "Flange or floor may need repair?",
          "uk": "Flange or floor may need repair?"
        },
        "add": [
          100,
          350
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Install bidet seat or accessory?",
          "es": "Install bidet seat or accessory?",
          "uk": "Install bidet seat or accessory?"
        },
        "add": [
          45,
          110
        ]
      }
    ]
  },
  {
    "id": "garbage-disposal",
    "category": "plumbing",
    "icon": "◌",
    "name": {
      "en": "Replace Garbage Disposal",
      "es": "Reemplazar triturador",
      "uk": "Заміна подрібнювача відходів"
    },
    "base": [
      175,
      325
    ],
    "additionalUnit": [
      160,
      295
    ],
    "scope": {
      "en": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ],
      "es": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ],
      "uk": [
        "Remove existing customer fixture",
        "Install customer-supplied replacement",
        "Visible leak check"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Existing unit is rusted or seized?",
          "es": "Existing unit is rusted or seized?",
          "uk": "Existing unit is rusted or seized?"
        },
        "add": [
          55,
          140
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Sink plumbing needs adjustment?",
          "es": "Sink plumbing needs adjustment?",
          "uk": "Sink plumbing needs adjustment?"
        },
        "add": [
          75,
          200
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Electrical connection needs modification?",
          "es": "Electrical connection needs modification?",
          "uk": "Electrical connection needs modification?"
        },
        "quoteOnly": true
      }
    ]
  },
  {
    "id": "light-fixture",
    "category": "electrical",
    "icon": "✦",
    "name": {
      "en": "Install a Light Fixture",
      "es": "Instalar una lámpara",
      "uk": "Встановлення світильника"
    },
    "base": [
      110,
      200
    ],
    "additionalUnit": [
      90,
      175
    ],
    "scope": {
      "en": [
        "Remove existing fixture",
        "Install customer-supplied replacement",
        "Basic operational test"
      ],
      "es": [
        "Remove existing fixture",
        "Install customer-supplied replacement",
        "Basic operational test"
      ],
      "uk": [
        "Remove existing fixture",
        "Install customer-supplied replacement",
        "Basic operational test"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "High ceiling or difficult access?",
          "es": "High ceiling or difficult access?",
          "uk": "High ceiling or difficult access?"
        },
        "add": [
          85,
          180
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Complex chandelier assembly?",
          "es": "Complex chandelier assembly?",
          "uk": "Complex chandelier assembly?"
        },
        "add": [
          85,
          240
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "New electrical box or wiring changes needed?",
          "es": "New electrical box or wiring changes needed?",
          "uk": "New electrical box or wiring changes needed?"
        },
        "quoteOnly": true
      }
    ]
  },
  {
    "id": "ceiling-fan",
    "category": "electrical",
    "icon": "✣",
    "name": {
      "en": "Replace a Ceiling Fan",
      "es": "Reemplazar ventilador de techo",
      "uk": "Заміна стельового вентилятора"
    },
    "base": [
      175,
      350
    ],
    "additionalUnit": [
      155,
      310
    ],
    "scope": {
      "en": [
        "Remove existing fixture",
        "Install customer-supplied replacement",
        "Basic operational test"
      ],
      "es": [
        "Remove existing fixture",
        "Install customer-supplied replacement",
        "Basic operational test"
      ],
      "uk": [
        "Remove existing fixture",
        "Install customer-supplied replacement",
        "Basic operational test"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "High or vaulted ceiling?",
          "es": "High or vaulted ceiling?",
          "uk": "High or vaulted ceiling?"
        },
        "add": [
          85,
          225
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Fan requires complex assembly?",
          "es": "Fan requires complex assembly?",
          "uk": "Fan requires complex assembly?"
        },
        "add": [
          55,
          150
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "New box, brace, or wiring changes needed?",
          "es": "New box, brace, or wiring changes needed?",
          "uk": "New box, brace, or wiring changes needed?"
        },
        "quoteOnly": true
      }
    ]
  },
  {
    "id": "screen-repair",
    "category": "windows",
    "icon": "▦",
    "name": {
      "en": "Window Screen Repair",
      "es": "Reparar mosquitero",
      "uk": "Ремонт москітної сітки"
    },
    "base": [
      100,
      165
    ],
    "additionalUnit": [
      45,
      90
    ],
    "scope": {
      "en": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "es": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "uk": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Frame is bent or damaged?",
          "es": "Frame is bent or damaged?",
          "uk": "Frame is bent or damaged?"
        },
        "add": [
          45,
          120
        ],
        "perUnit": true
      },
      {
        "id": "q2",
        "label": {
          "en": "Pet-resistant or specialty screen?",
          "es": "Pet-resistant or specialty screen?",
          "uk": "Pet-resistant or specialty screen?"
        },
        "add": [
          25,
          60
        ],
        "perUnit": true
      },
      {
        "id": "q3",
        "label": {
          "en": "New frame fabrication required?",
          "es": "New frame fabrication required?",
          "uk": "New frame fabrication required?"
        },
        "add": [
          75,
          180
        ],
        "perUnit": true
      }
    ]
  },
  {
    "id": "storm-window",
    "category": "windows",
    "icon": "▤",
    "name": {
      "en": "Storm Window Repair",
      "es": "Reparar ventana contra tormentas",
      "uk": "Ремонт штормового вікна"
    },
    "base": [
      125,
      240
    ],
    "additionalUnit": [
      100,
      210
    ],
    "scope": {
      "en": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "es": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ],
      "uk": [
        "Measurement and basic installation/repair",
        "Standard mounting hardware labor",
        "Basic adjustment and cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Glass or frame replacement needed?",
          "es": "Glass or frame replacement needed?",
          "uk": "Glass or frame replacement needed?"
        },
        "add": [
          75,
          250
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Hardware or latches missing?",
          "es": "Hardware or latches missing?",
          "uk": "Hardware or latches missing?"
        },
        "add": [
          35,
          100
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "High or difficult access?",
          "es": "High or difficult access?",
          "uk": "High or difficult access?"
        },
        "add": [
          45,
          110
        ]
      }
    ]
  },
  {
    "id": "caulking",
    "category": "maintenance",
    "icon": "≈",
    "name": {
      "en": "Caulking and Weather Sealing",
      "es": "Sellado y calafateo",
      "uk": "Герметизація та ущільнення"
    },
    "base": [
      100,
      200
    ],
    "additionalUnit": [
      60,
      125
    ],
    "scope": {
      "en": [
        "Labor for selected maintenance scope",
        "Standard tools and setup",
        "Basic cleanup"
      ],
      "es": [
        "Labor for selected maintenance scope",
        "Standard tools and setup",
        "Basic cleanup"
      ],
      "uk": [
        "Labor for selected maintenance scope",
        "Standard tools and setup",
        "Basic cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Old caulk removal needed?",
          "es": "Old caulk removal needed?",
          "uk": "Old caulk removal needed?"
        },
        "add": [
          45,
          125
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Exterior or high-access area?",
          "es": "Exterior or high-access area?",
          "uk": "Exterior or high-access area?"
        },
        "add": [
          55,
          150
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Large number of openings?",
          "es": "Large number of openings?",
          "uk": "Large number of openings?"
        },
        "add": [
          75,
          225
        ]
      }
    ]
  },
  {
    "id": "gutter-cleaning",
    "category": "maintenance",
    "icon": "⌇",
    "name": {
      "en": "Gutter Cleaning",
      "es": "Limpieza de canaletas",
      "uk": "Очищення ринв"
    },
    "base": [
      150,
      300
    ],
    "additionalUnit": [
      110,
      225
    ],
    "scope": {
      "en": [
        "Labor for selected maintenance scope",
        "Standard tools and setup",
        "Basic cleanup"
      ],
      "es": [
        "Labor for selected maintenance scope",
        "Standard tools and setup",
        "Basic cleanup"
      ],
      "uk": [
        "Labor for selected maintenance scope",
        "Standard tools and setup",
        "Basic cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Two-story or difficult roof access?",
          "es": "Two-story or difficult roof access?",
          "uk": "Two-story or difficult roof access?"
        },
        "add": [
          100,
          250
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Downspout flushing needed?",
          "es": "Downspout flushing needed?",
          "uk": "Downspout flushing needed?"
        },
        "add": [
          45,
          110
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Heavy debris or gutter guards?",
          "es": "Heavy debris or gutter guards?",
          "uk": "Heavy debris or gutter guards?"
        },
        "add": [
          75,
          190
        ]
      }
    ]
  },
  {
    "id": "fence-repair",
    "category": "exterior",
    "icon": "╫",
    "name": {
      "en": "Fence or Gate Repair",
      "es": "Reparación de cerca o portón",
      "uk": "Ремонт паркану або хвіртки"
    },
    "base": [
      200,
      450
    ],
    "additionalUnit": [
      175,
      375
    ],
    "scope": {
      "en": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ],
      "es": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ],
      "uk": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Posts need resetting or replacement?",
          "es": "Posts need resetting or replacement?",
          "uk": "Posts need resetting or replacement?"
        },
        "add": [
          150,
          450
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Concrete work required?",
          "es": "Concrete work required?",
          "uk": "Concrete work required?"
        },
        "add": [
          125,
          350
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Custom fabrication or major alignment?",
          "es": "Custom fabrication or major alignment?",
          "uk": "Custom fabrication or major alignment?"
        },
        "add": [
          150,
          500
        ]
      }
    ]
  },
  {
    "id": "deck-repair",
    "category": "exterior",
    "icon": "▰",
    "name": {
      "en": "Minor Deck Repair",
      "es": "Reparación menor de terraza",
      "uk": "Дрібний ремонт тераси"
    },
    "base": [
      250,
      550
    ],
    "additionalUnit": [
      200,
      475
    ],
    "scope": {
      "en": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ],
      "es": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ],
      "uk": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "Structural framing may be damaged?",
          "es": "Structural framing may be damaged?",
          "uk": "Structural framing may be damaged?"
        },
        "add": [
          200,
          650
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Replace multiple boards or railing sections?",
          "es": "Replace multiple boards or railing sections?",
          "uk": "Replace multiple boards or railing sections?"
        },
        "add": [
          150,
          500
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Staining or sealing included?",
          "es": "Staining or sealing included?",
          "uk": "Staining or sealing included?"
        },
        "add": [
          175,
          450
        ]
      }
    ]
  },
  {
    "id": "mailbox",
    "category": "exterior",
    "icon": "▨",
    "name": {
      "en": "Mailbox Installation",
      "es": "Instalación de buzón",
      "uk": "Встановлення поштової скриньки"
    },
    "base": [
      125,
      250
    ],
    "additionalUnit": [
      100,
      210
    ],
    "scope": {
      "en": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ],
      "es": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ],
      "uk": [
        "Labor for selected repair scope",
        "Basic alignment and fastening",
        "Work-area cleanup"
      ]
    },
    "questions": [
      {
        "id": "q1",
        "label": {
          "en": "New post and concrete required?",
          "es": "New post and concrete required?",
          "uk": "New post and concrete required?"
        },
        "add": [
          100,
          250
        ]
      },
      {
        "id": "q2",
        "label": {
          "en": "Remove existing post?",
          "es": "Remove existing post?",
          "uk": "Remove existing post?"
        },
        "add": [
          45,
          100
        ]
      },
      {
        "id": "q3",
        "label": {
          "en": "Masonry or wall-mounted installation?",
          "es": "Masonry or wall-mounted installation?",
          "uk": "Masonry or wall-mounted installation?"
        },
        "add": [
          75,
          200
        ]
      }
    ]
  }
];

const ESTIMATOR_SETTINGS = {
  minimumVisit: 100,
  phoneDisplay: "216-214-4720",
  phoneLink: "12162144720",
  email: "veritassolutionllc@gmail.com",
  serviceArea: "Greater Cleveland, Ohio"
};
