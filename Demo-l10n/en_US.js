Jarosh.l10n.LOC = {  
   "-fun":{  
      "byNum":[  
         "x==1",
         "1"
      ],
      "byAge":[  
         "x<13",
         "x>=13 && x<=19",
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
      "welcome":"Welcome to the JaroshJS-l10n demo page",
      "today":[
          "Today is ",
          ["m"],
          " ",
          ["d"]
      ],
      "month_01":"January",
      "month_02":"February",
      "month_03":"March",
      "month_04":"April",
      "month_05":"May",
      "month_06":"June",
      "month_07":"July",
      "month_08":"August",
      "month_09":"September",
      "month_10":"October",
      "month_11":"November",
      "month_12":"December"
   },
   "TestPage":{  
      "smb_wrote_you":[  
         [  
            "byWeight:weight:height",
            "skinny",
            "well-shaped",
            "stout",
            "obese"
         ],
         " ",
         [  
            "byGender:gender",
            [  
               "byAge:age",
               "boy",
               "teen",
               "man"
            ],
            [  
               "byAge:age",
               "girl",
               "teen",
               "woman"
            ],
            "person"
         ],
         " sent you ",
         [  
            "num"
         ],
         " ",
         [  
            "byNum:num",
            "message",
            "messages"
         ]
      ]
   }
};
