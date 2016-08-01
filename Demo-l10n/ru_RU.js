Jarosh.l10n.LOC = {  
   "-fun":{  
      "inflect":[  
         "x.toUpperCase()==\"ЧЕГО?\"",
         "1"
      ],
      "byNum":[  
         "!((x%100)>10&&(x%100)<20)&&(x%10)==1",
         "!((x%100)>10&&(x%100)<20)&&(x%10)>=2&&(x%10)<=4",
         "1"
      ],
      "byAge":[  
         "x<=10",
         "x>10 && x<=18",
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
      "welcome":"Добро пожаловать на демо-страницу JaroshJS-l10n",
      "today":[
          "Сегодня ",
          ["d"],
          " ",
          ["m"]
      ],
      "month_01":[  
         [  
            "inflect:ask",
            "января",
            "январь"
         ]
      ],
      "month_02":[  
         [  
            "inflect:ask",
            "февраля",
            "февраль"
         ]
      ],
      "month_03":[  
         [  
            "inflect:ask",
            "марта",
            "март"
         ]
      ],
      "month_04":[  
         [  
            "inflect:ask",
            "апреля",
            "апрель"
         ]
      ],
      "month_05":[  
         [  
            "inflect:ask",
            "мая",
            "май"
         ]
      ],
      "month_06":[  
         [  
            "inflect:ask",
            "июня",
            "июнь"
         ]
      ],
      "month_07":[  
         [  
            "inflect:ask",
            "июля",
            "июль"
         ]
      ],
      "month_08":[  
         [  
            "inflect:ask",
            "августа",
            "август"
         ]
      ],
      "month_09":[  
         [  
            "inflect:ask",
            "сентября",
            "сентябрь"
         ]
      ],
      "month_10":[  
         [  
            "inflect:ask",
            "октября",
            "октябрь"
         ]
      ],
      "month_11":[  
         [  
            "inflect:ask",
            "ноября",
            "ноябрь"
         ]
      ],
      "month_12":[  
         [  
            "inflect:ask",
            "декабря",
            "декабрь"
         ]
      ]
   },
   "TestPage":{  
      "smb_wrote_you":[  
         [  
            "byWeight:weight:height",
            [  
               "byGender:gender",
               "тощий",
               "тощая",
               "тощий"
            ],
            [  
               "byGender:gender",
               "стройный",
               "стройная",
               "стройный"
            ],
            [  
               "byGender:gender",
               "полный",
               "полная",
               "полный"
            ],
            [  
               "byGender:gender",
               "тучный",
               "тучная",
               "тучный"
            ]
         ],
         " ",
         [  
            "byGender:gender",
            [  
               "byAge:age",
               "мальчик",
               "юноша",
               "мужчина"
            ],
            [  
               "byAge:age",
               "девочка",
               "девушка",
               "женщина"
            ],
            "человек"
         ],
         " ",
         [  
            "byGender:gender",
            "отправил",
            "отправила",
            "отправил"
         ],
         " вам ",
         [  
            "num"
         ],
         " ",
         [  
            "byNum:num",
            "сообщение",
            "сообщения",
            "сообщений"
         ]
      ]
   }
};
