export const userFilters = [{
  name: "בלה בלה בלה", groups : [
    {
      name: 'peformance',
      filters: [
        {
          name: 'durationMultiple',
          kind: 'SelectboxFilter',
          isMultiple: true,
          isActive: false,
          options: [
            { name: 'item1', id: 1 },
            { name: 'item2', id: 2 },
            { name: 'item3', id: 3 }
          ]
        },
        {
          name: 'durationSingle',
          kind: 'SelectboxFilter',
          isMultiple: false,
          isActive: false,
          options: [
            { name: 'item1', id: 1 },
            { name: 'item2', id: 2 },
            { name: 'item3', id: 3 }
          ]
        },
        {
          name: 'trustee',
          kind: 'AutocompleteFilter',
          isMultiple: true,
          isActive: false,
          _selected: [{ name: 'אלמגור - בריטמן נאמנויות בע"מ', id: 111 }],
          options: [
            { name: 'אלמגור - בריטמן נאמנויות בע"מ', id: 111 },
            { name: 'אלמגור - בריטמן נאמנויות בעמ', id: 222 },
            { name: 'אלמגור-בריטמן נאמנויות', id: 223 },
            { name: 'זיו האפט נאמנויות ואחזקות 2003 בע"מ', id: 224 },
            { name: 'חברה לנאמנות בנק איגוד', id: 225 },
            { name: 'חברה לנאמנות של בנק אגוד בע"מ', id: 226 },
            { name: 'חברה לנאמנות של בנק לאומי לישראל בע"מ', id: 2227 },
            { name: 'יובנק חברה לנאמנות', id: 2765 },
            { name: 'יובנק חברה לנאמנות בע"מ', id: 2654 },
            { name: 'יובנק חברה לנאמנות בעמ', id: 2543 },
            { name: 'מזרחי טפחות חברה לנאמנות', id: 2432 },
            { name: 'מזרחי טפחות חברה לנאמנות בע"מ', id: 2987 },
            { name: 'מזרחי טפחות חברה לנאמנות בעמ', id: 26789 },
            { name: 'משמרת- חברה לשירותי נאמנות בע"מ', id: 24567 },
            { name: 'פי דאבליו סי חברה לנאמנויות (1971) בע"מ', id: 22345 },
            { name: 'פי דאבליו סי חברה לנאמנות', id: 24321 },
            { name: 'פי דאבליו סי חברה לנאמניות', id: 27654 },
          ]
        },
        {
          name: 'exposure_currency_id',
          kind: 'DropdownFilter',
          isMultiple: false,
          isActive: true,
          _selected: { id: 4, name: 'd' },
          options: [
            { id: 0, name: 'a' },
            { id: 1, name: 'b' },
            { id: 2, name: 'c' },
            { id: 3, name: 'd' },
            { id: 4, name: 'e' },
            { id: 5, name: 'f' },
          ]
        },
      ],
    },
    {
      name: 'group-B',
      filters: [
        {
          name: 'manager_name',
          kind: 'AutocompleteFilter',
          isMultiple: false,
          isActive: true,
          options: [
            { name: 'הראל', id: 1 },
            { name: 'איביאי', id: 2 },
            { name: 'מירית', id: 3 },
            { name: 'למשקיע', id: 4 },
            { name: 'ישיר', id: 5 },
            { name: 'מיטב דש', id: 6 },
            { name: 'קסם', id: 7 },
            { name: 'אקסלנס נשואה', id: 7 },
            { name: 'אילים', id: 18 },
            { name: 'אנליסט', id: 19 },
            { name: 'אחריות', id: 10 },
            { name: 'מטרה', id: 111 },
            { name: 'מגדל', id: 112 },
            { name: 'רמקו', id: 1122 },
            { name: 'אפיקים', id: 1123 },
            { name: 'זיילר', id: 11234 },
            { name: 'אורלי', id: 121345 },
            { name: 'סימודן', id: 15432 },
            { name: 'גמול סהר', id: 12345 },
            { name: 'גאון', id: 16543 },
            { name: 'אפסילון', id: 1324566 },
            { name: 'דש', id: 5432345431 },
            { name: 'זלר אבלגון', id: 190 },
            { name: 'הראל קרנות נאמנות', id: 180 },
            { name: 'אפריל', id: 170 },
            { name: 'בורסון', id: 160 },
            { name: 'סיגמא', id: 150 },
            { name: 'ספנות', id: 1440 },
            { name: 'תשואות', id: 231 },
            { name: 'איפקס', id: 241 },
            { name: 'בלוך רוטשטיין', id: 251 },
            { name: 'זינגר ברנע', id: 261 },
            { name: 'אלטשולר שחם', id: 271 },
            { name: 'מודלים', id: 2881 },
            { name: 'כוון', id: 29991 },
            { name: 'אלומות', id: 200001 },
            { name: 'רוטשילד', id: 654561 },
            { name: 'תמיר פישמן', id: 4567871 },
            { name: 'קואטרו', id: 7654671 },
            { name: 'מרכנתיל', id: 16543456 },
            { name: 'מילניום', id: 165434567 },
            { name: 'נובה סטאר', id: 13466 },
            { name: 'קומפס', id: 1444 },
            { name: 'מנורה מבטחים', id: 1555 },
            { name: 'הלמן-אלדובי', id: 1666 },
            { name: 'הראל-רקנאטי', id: 1777 },
            { name: 'אפריקה ישראל', id: 1888 },
            { name: 'טרגטים', id: 199 },
            { name: 'פסגות', id: 12333 },
            { name: 'פרפקט', id: 14333 },
            { name: 'אריגטו', id: 15333 },
            { name: 'או.אם.אף.אוריון', id: 16333 },
            { name: 'ילין לפידות', id: 13777 },
            { name: 'טראקבול', id: 13888 },
            { name: 'איילון', id: 13999 },
            { name: 'מאור לוסקי', id: 14999 },
            { name: 'אלפא פלטינום', id: 15999 },
            { name: 'מור', id: 16999 },
            { name: 'פורסט', id: 17999 },
            { name: 'אגוד', id: 18999 },
            { name: 'אוצרית', id: 13 },
            { name: 'דיקלה', id: 134 },
            { name: 'יהב', id: 1344 },
            { name: 'ירושלים', id: 1 },
            { name: 'לאומי-פיא', id: 1 },
            { name: 'להק', id: 1 },
            { name: 'עמדה', id: 1 },
            { name: 'פועלים', id: 1 },
            { name: 'פסגות', id: 1 },
            { name: 'פסגות מדדים', id: 1 },
            { name: 'רקיע', id: 1 },
            { name: 'רשות ניירות ערך', id: 1 },
            { name: 'תכלית מדדים', id: 1 },
            { name: 'תכלית', id: 1 },
            { name: 'הראל קרנות מדד', id: 1 },
          ]
        },
        {
          name: 'managerFee',
          kind: 'QuantityFilter',
          isActive: true,
          _selected: [[5, 13]],
          options: [[2, 0], [3, 22], [3.5, 21], [4, 15]
            , [4.5, 14], [5, 13], [5.3, 20], [5.8, 30], [6.2, 10], [6.5, 3], [7, 0]]
        },
        {
          name: 'exposureRiskBonds',
          kind: 'DropdownFilter',
          isActive: true,
          options: [
            { name: 'Yes', id: 1 },
            { name: 'No', id: 2}
          ]
        },
      ]
    },
    {
      name: 'Special_Auto_group',
      filters: [
        {
          name: 'manager_name',
          kind: 'SpecialFilter',
          isActive: true,
          id: 1,

          _selected: {
            3: {
              1: {
                selected: [{ name: 'איביאי', id: 2 }]
              }
            }
          },
          options: [
            {
              id: 1,
              name: 'aa',
              filter: {
                kind: 'QuantityFilter',
                isActive: true,
                options: [[2, 0], [3, 22], [3.5, 21], [4, 15]
                  , [4.5, 14], [5, 13], [5.3, 20], [5.8, 30], [6.2, 10], [6.5, 3], [7, 0]]
              }
            },
            {
              id: 2,
              name: 'managers',
              filter: {
                kind: 'AutocompleteFilter',
                isMultiple: false,
                isActive: true,
                options: [
                  { name: 'הראל', id: 1 },
                  { name: 'איביאי', id: 2 },
                  { name: 'מירית', id: 3 },
                  { name: 'למשקיע', id: 4 },
                  { name: 'ישיר', id: 5 },
                  { name: 'מיטב דש', id: 6 },
                  { name: 'קסם', id: 7 },
                  { name: 'אקסלנס נשואה', id: 7 }
                ]
              }
            },
            {
              id: 3, name: 'b', options: [{
                id: 1, name: 'ba', filter: {
                  name: 'managers',
                  kind: 'AutocompleteFilter',
                  isMultiple: true,
                  options: [
                    { name: 'הראל', id: 1 },
                    { name: 'איביאי', id: 2 },
                    { name: 'מירית', id: 3 },
                    { name: 'למשקיע', id: 4 },
                    { name: 'ישיר', id: 5 },
                    { name: 'מיטב דש', id: 6 },
                    { name: 'קסם', id: 7 },
                    { name: 'אקסלנס נשואה', id: 7 }
                  ]
                }
              },
              {
                id: 4, name: 'bb', filter:
                {
                  name: 'durationMultiple',
                  kind: 'SelectboxFilter',
                  isMultiple: true,
                  options: [
                    { name: 'item1', id: 1 },
                    { name: 'item2', id: 2 },
                    { name: 'item3', id: 3 }
                  ]
                }
              }
              ]
            }
          ]
        }
      ]
    }]
}];

export const defaultFilter = [
  {
    name: 'peformance',
    filters: [
      {
        name: 'durationMultiple',
        kind: 'SelectboxFilter',
        isMultiple: true,
        isActive: false,
        options: [
          { name: 'item1', id: 1 },
          { name: 'item2', id: 2 },
          { name: 'item3', id: 3 }
        ]
      },
      {
        name: 'durationSingle',
        kind: 'SelectboxFilter',
        isMultiple: false,
        isActive: false,
        options: [
          { name: 'item1', id: 1 },
          { name: 'item2', id: 2 },
          { name: 'item3', id: 3 }
        ]
      },
      {
        name: 'trustee',
        kind: 'AutocompleteFilter',
        isMultiple: true,
        isActive: false,
        options: [
          { name: 'אלמגור - בריטמן נאמנויות בע"מ', id: 111 },
          { name: 'אלמגור - בריטמן נאמנויות בעמ', id: 222 },
          { name: 'אלמגור-בריטמן נאמנויות', id: 223 },
          { name: 'זיו האפט נאמנויות ואחזקות 2003 בע"מ', id: 224 },
          { name: 'חברה לנאמנות בנק איגוד', id: 225 },
          { name: 'חברה לנאמנות של בנק אגוד בע"מ', id: 226 },
          { name: 'חברה לנאמנות של בנק לאומי לישראל בע"מ', id: 2227 },
          { name: 'יובנק חברה לנאמנות', id: 2765 },
          { name: 'יובנק חברה לנאמנות בע"מ', id: 2654 },
          { name: 'יובנק חברה לנאמנות בעמ', id: 2543 },
          { name: 'מזרחי טפחות חברה לנאמנות', id: 2432 },
          { name: 'מזרחי טפחות חברה לנאמנות בע"מ', id: 2987 },
          { name: 'מזרחי טפחות חברה לנאמנות בעמ', id: 26789 },
          { name: 'משמרת- חברה לשירותי נאמנות בע"מ', id: 24567 },
          { name: 'פי דאבליו סי חברה לנאמנויות (1971) בע"מ', id: 22345 },
          { name: 'פי דאבליו סי חברה לנאמנות', id: 24321 },
          { name: 'פי דאבליו סי חברה לנאמניות', id: 27654 },
        ]
      },
      {
        name: 'exposure_currency_id',
        kind: 'DropdownFilter',
        isMultiple: false,
        isActive: true,
        options: [
          { id: 0, name: 'a' },
          { id: 1, name: 'b' },
          { id: 2, name: 'c' },
          { id: 3, name: 'd' },
          { id: 4, name: 'e' },
          { id: 5, name: 'f' },
        ]
      },
    ],
  },
  {
    name: 'group-B',
    filters: [
      {
        name: 'manager_name',
        kind: 'AutocompleteFilter',
        isMultiple: false,
        isActive: true,
        options: [
          { name: 'הראל', id: 1 },
          { name: 'איביאי', id: 2 },
          { name: 'מירית', id: 3 },
          { name: 'למשקיע', id: 4 },
          { name: 'ישיר', id: 5 },
          { name: 'מיטב דש', id: 6 },
          { name: 'קסם', id: 7 },
          { name: 'אקסלנס נשואה', id: 7 },
          { name: 'אילים', id: 18 },
          { name: 'אנליסט', id: 19 },
          { name: 'אחריות', id: 10 },
          { name: 'מטרה', id: 111 },
          { name: 'מגדל', id: 112 },
          { name: 'רמקו', id: 1122 },
          { name: 'אפיקים', id: 1123 },
          { name: 'זיילר', id: 11234 },
          { name: 'אורלי', id: 121345 },
          { name: 'סימודן', id: 15432 },
          { name: 'גמול סהר', id: 12345 },
          { name: 'גאון', id: 16543 },
          { name: 'אפסילון', id: 1324566 },
          { name: 'דש', id: 5432345431 },
          { name: 'זלר אבלגון', id: 190 },
          { name: 'הראל קרנות נאמנות', id: 180 },
          { name: 'אפריל', id: 170 },
          { name: 'בורסון', id: 160 },
          { name: 'סיגמא', id: 150 },
          { name: 'ספנות', id: 1440 },
          { name: 'תשואות', id: 231 },
          { name: 'איפקס', id: 241 },
          { name: 'בלוך רוטשטיין', id: 251 },
          { name: 'זינגר ברנע', id: 261 },
          { name: 'אלטשולר שחם', id: 271 },
          { name: 'מודלים', id: 2881 },
          { name: 'כוון', id: 29991 },
          { name: 'אלומות', id: 200001 },
          { name: 'רוטשילד', id: 654561 },
          { name: 'תמיר פישמן', id: 4567871 },
          { name: 'קואטרו', id: 7654671 },
          { name: 'מרכנתיל', id: 16543456 },
          { name: 'מילניום', id: 165434567 },
          { name: 'נובה סטאר', id: 13466 },
          { name: 'קומפס', id: 1444 },
          { name: 'מנורה מבטחים', id: 1555 },
          { name: 'הלמן-אלדובי', id: 1666 },
          { name: 'הראל-רקנאטי', id: 1777 },
          { name: 'אפריקה ישראל', id: 1888 },
          { name: 'טרגטים', id: 199 },
          { name: 'פסגות', id: 12333 },
          { name: 'פרפקט', id: 14333 },
          { name: 'אריגטו', id: 15333 },
          { name: 'או.אם.אף.אוריון', id: 16333 },
          { name: 'ילין לפידות', id: 13777 },
          { name: 'טראקבול', id: 13888 },
          { name: 'איילון', id: 13999 },
          { name: 'מאור לוסקי', id: 14999 },
          { name: 'אלפא פלטינום', id: 15999 },
          { name: 'מור', id: 16999 },
          { name: 'פורסט', id: 17999 },
          { name: 'אגוד', id: 18999 },
          { name: 'אוצרית', id: 13 },
          { name: 'דיקלה', id: 134 },
          { name: 'יהב', id: 1344 },
          { name: 'ירושלים', id: 1 },
          { name: 'לאומי-פיא', id: 1 },
          { name: 'להק', id: 1 },
          { name: 'עמדה', id: 1 },
          { name: 'פועלים', id: 1 },
          { name: 'פסגות', id: 1 },
          { name: 'פסגות מדדים', id: 1 },
          { name: 'רקיע', id: 1 },
          { name: 'רשות ניירות ערך', id: 1 },
          { name: 'תכלית מדדים', id: 1 },
          { name: 'תכלית', id: 1 },
          { name: 'הראל קרנות מדד', id: 1 },
        ]
      },
      {
        name: 'managerFee',
        kind: 'QuantityFilter',
        isActive: true,
        options: [[2, 0], [3, 22], [3.5, 21], [4, 15]
          , [4.5, 14], [5, 13], [5.3, 20], [5.8, 30], [6.2, 10], [6.5, 3], [7, 0]]
      },
      {
        name: 'exposureRiskBonds',
        kind: 'DropdownFilter',
        isActive: true,
        options: [
          { name: 'Yes', id: 1},
          { name: 'No', id: 2 }
        ]
      }    
    ]
  },
  {
    name: 'Special_Auto_group',
    filters: [
      {
        name: 'manager_name',
        kind: 'SpecialFilter',
        isActive: true,
        id: 1,
        options: [
          {
            id: 1,
            name: 'aa',
            filter: {
              kind: 'QuantityFilter',
              isActive: true,
              options: [[2, 0], [3, 22], [3.5, 21], [4, 15]
                , [4.5, 14], [5, 13], [5.3, 20], [5.8, 30], [6.2, 10], [6.5, 3], [7, 0]]
            }
          },
          {
            id: 2,
            name: 'managers',
            filter: {
              kind: 'AutocompleteFilter',
              isMultiple: false,
              isActive: true,
              options: [
                { name: 'הראל', id: 1 },
                { name: 'איביאי', id: 2 },
                { name: 'מירית', id: 3 },
                { name: 'למשקיע', id: 4 },
                { name: 'ישיר', id: 5 },
                { name: 'מיטב דש', id: 6 },
                { name: 'קסם', id: 7 },
                { name: 'אקסלנס נשואה', id: 7 }
              ]
            }
          },
          {
            id: 3, name: 'b', options: [{
              id: 1, name: 'ba', filter: {
                name: 'managers',
                kind: 'AutocompleteFilter',
                isMultiple: true,
                options: [
                  { name: 'הראל', id: 1 },
                  { name: 'איביאי', id: 2 },
                  { name: 'מירית', id: 3 },
                  { name: 'למשקיע', id: 4 },
                  { name: 'ישיר', id: 5 },
                  { name: 'מיטב דש', id: 6 },
                  { name: 'קסם', id: 7 },
                  { name: 'אקסלנס נשואה', id: 7 }
                ]
              }
            },
            {
              id: 4, name: 'bb', filter:
              {
                name: 'durationMultiple',
                kind: 'SelectboxFilter',
                isMultiple: true,
                options: [
                  { name: 'item1', id: 1 },
                  { name: 'item2', id: 2 },
                  { name: 'item3', id: 3 }
                ]
              }
            }
            ]
          }
        ]
      }
    ]
  }
]

