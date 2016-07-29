Jarosh.l10n.LOC = {  
   "-fun":{  
      "byNum":[  
         "x==1",
         "1"
      ],
      "byAge":[  
         "x<13",
         "x>=13 && x<=19",
         "x>=20 && x<=28",
         "1"
      ],
      "byGender":[  
         "x && x.toUpperCase()==\"MALE\"",
         "x && x.toUpperCase()==\"FEMALE\"",
         "1"
      ],
      "byWeight":[  
         "weight\/height\/height*100*100<18.5",
         "x1\/x2\/x2*100*100>=18.5 && x1\/x2\/x2*100*100<25",
         "x1\/x2\/x2*100*100>=25 && x1\/x2\/x2*100*100<30",
         "1"
      ]
   },
   "":{  
      "welcome":"La bienvenida a la página del JaroshJS-l10n",
      "today":"Hoy es el",
      "month_01":"enero",
      "month_02":"febrero",
      "month_03":"marzo",
      "month_04":"abril",
      "month_05":"mayo",
      "month_06":"junio",
      "month_07":"julio",
      "month_08":"agosto",
      "month_09":"septiembre",
      "month_10":"octubre",
      "month_11":"noviembre",
      "month_12":"diciembre"
   },
   "TestPage":{  
      "smb_wrote_you":[  
         [  
            "byGender:gender",
            [  
               "byAge:age",
               "el niño",
               "el chico",
               "el muchacho",
               "el hombre"
            ],
            [  
               "byAge:age",
               "la niña",
               "la chica",
               "la muchacha",
               "la mujer"
            ],
            "la persona"
         ],
         " ",
         [  
            "byWeight:weight:height",
            [  
               "byGender:gender",
               "flaco",
               "flaca",
               "flaca"
            ],
            [  
               "byGender:gender",
               "esbelto",
               "esbelta",
               "esbelta"
            ],
            [  
               "byGender:gender",
               "grueso",
               "gruesa",
               "gruesa"
            ],
            [  
               "byGender:gender",
               "obeso",
               "obesa",
               "obesa"
            ]
         ],
         " le envió ",
         [  
            "num"
         ],
         " ",
         [  
            "byNum:num",
            "mensaje",
            "mensajes"
         ]
      ]
   }
};
