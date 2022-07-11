// import { createContext } from "react";

const userDetails = {
    firstName: "Israel",
    lastName: "Israeli",
    dob: "13/12/1987",
    email: "israel@gmail.com",
    level: "student",
    classId: "cjxp2149",
    permissions: "viewer",
    TF: [
      { Value: 21.3, Date: "1/6/2022" },
      { Value: 23.4, Date: "3/6/2022" },
      { Value: 25.6, Date: "4/6/2022" },
    ],
    TR: [
      { Value: 12, Date: "3/6/2022" },
      { Value: 13, Date: "6/6/2022" },
      { Value: 14, Date: "10/6/2022" },
    ],
    calibration: { x: 145, y: 21 },
    isActive: true,
    currentBook: { name: "Harry potter", genre: "Fantasy" },
  };
  let assesmentResults = [
    {
      date: "4/6/2022",
      testAnswer: [
        {
          questionId: 2,
          answer: true,
        },
        {
          questionId: 3,
          answer: false,
        },
        {
          questionId: 4,
          answer: true,
        },
        {
          questionId: 5,
          answer: false,
        },
      ],
      result: {
        WPM: 95,
        STD: 4,
        CMP: 5,
      },
  
      isActive: true,
    },
    {
      date: "5/6/2022",
      testAnswer: [
        {
          questionId: 2,
          answer: false,
        },
        {
          questionId: 3,
          answer: true,
        },
        {
          questionId: 4,
          answer: true,
        },
        {
          questionId: 5,
          answer: false,
        },
      ],
      result: {
        WPM: 87,
        STD: 3,
        CMP: 6,
      },
  
      isActive: true,
    },
  ];
  let assesmentsTemplates = [
    {
      img: "text-7-76.png",
      level: 7,
      words: 117,
      questions: [
        {
          title: "Before the 1840s, all guns were of the single shot type",
          orderNum: 1,
          answer: true,
        },
        {
          title: "The main weakness of early rifles was their slow loading",
          orderNum: 2,
          answer: true,
        },
        {
          title: "Samuel colt was afraid of guns when he was young",
          orderNum: 3,
          answer: false,
        },
        {
          title: "He was working on board ship when he started on his invention",
          orderNum: 4,
          answer: true,
        },
        {
          title: "Colt's first revolver could shoot five times without reloading",
          orderNum: 5,
          answer: true,
        },
        {
          title: "The revolving shell chamber was inspired by the ship's compass",
          orderNum: 6,
          answer: false,
        },
        {
          title: "Colt's first factory was a huge success",
          orderNum: 7,
          answer: false,
        },
        {
          title: "The six-shooter was developed at the time of the Mexican War",
          orderNum: 8,
          answer: true,
        },
        {
          title: "The Army placed an order with Colt for two thousand revolvers",
          orderNum: 9,
          answer: false,
        },
        {
          title: "The six-shooter was call 'The gun that won the West'",
          orderNum: 10,
          answer: true,
        },
      ],
      lines: [
        {
          orderNum: 1,
          chars: 37,
        },
        {
          orderNum: 2,
          chars: 39,
        },
        {
          orderNum: 3,
          chars: 38,
        },
        {
          orderNum: 4,
          chars: 31,
        },
        {
          orderNum: 5,
          chars: 34,
        },
        {
          orderNum: 6,
          chars: 37,
        },
        {
          orderNum: 7,
          chars: 37,
        },
        {
          orderNum: 8,
          chars: 38,
        },
        {
          orderNum: 9,
          chars: 37,
        },
        {
          orderNum: 10,
          chars: 36,
        },
        {
          orderNum: 11,
          chars: 33,
        },
        {
          orderNum: 12,
          chars: 36,
        },
        {
          orderNum: 13,
          chars: 35,
        },
        {
          orderNum: 14,
          chars: 38,
        },
        {
          orderNum: 15,
          chars: 37,
        },
        {
          orderNum: 16,
          chars: 32,
        },
      ],
    },
  
    {
      img: "text-10-87.png",
      level: 10,
      words: 120,
      questions: [
        {
          title: "Amundsen was an explorer from Sweden",
          orderNum: 1,
          answer: false,
        },
        {
          title: "He was noted for his thoroughness",
          orderNum: 2,
          answer: true,
        },
        {
          title: "He found the Northwest Passage",
          orderNum: 3,
          answer: true,
        },
        {
          title:
            "On his second expedition, he was planning to go to the South Pole",
          orderNum: 4,
          answer: false,
        },
        {
          title: "Amundsen established a base station on the ice cap",
          orderNum: 5,
          answer: true,
        },
        {
          title: "He set up five supply stations",
          orderNum: 6,
          answer: false,
        },
        {
          title: "Dog teams and sledges were used to carry supplies",
          orderNum: 7,
          answer: true,
        },
        {
          title: "It took eleven months to reach the pole",
          orderNum: 8,
          answer: true,
        },
        {
          title: "Amundsen flew the Swedish flag over the South Pole",
          orderNum: 9,
          answer: false,
        },
        {
          title: "The South Pole was discovered in the year 1911",
          orderNum: 10,
          answer: true,
        },
      ],
      lines: [
        {
          orderNum: 1,
          chars: 32,
        },
        {
          orderNum: 2,
          chars: 26,
        },
        {
          orderNum: 3,
          chars: 38,
        },
        {
          orderNum: 4,
          chars: 36,
        },
        {
          orderNum: 5,
          chars: 34,
        },
        {
          orderNum: 6,
          chars: 33,
        },
        {
          orderNum: 7,
          chars: 37,
        },
        {
          orderNum: 8,
          chars: 39,
        },
        {
          orderNum: 9,
          chars: 37,
        },
        {
          orderNum: 10,
          chars: 35,
        },
        {
          orderNum: 11,
          chars: 32,
        },
        {
          orderNum: 12,
          chars: 37,
        },
        {
          orderNum: 13,
          chars: 36,
        },
        {
          orderNum: 14,
          chars: 35,
        },
        {
          orderNum: 15,
          chars: 33,
        },
        {
          orderNum: 16,
          chars: 37,
        },
        {
          orderNum: 17,
          chars: 21,
        },
      ],
    },
  ];
  
  const fakeData = {
    userDetails,
    assesmentResults,
    assesmentsTemplates,
  };
  
  const tests =
    [
      {
        // img: "/src/assets/img/exams/text-7-76.png",
        img: "text-7-76",
        level: 7,
        words: 117,
        questions:
          [
            {
              title: "Before the 1840s, all guns were of the single shot type",
              orderNum: 1,
              answer: true
            },
            {
              title: "The main weakness of early rifles was their slow loading",
              orderNum: 2,
              answer: true
            },
            {
              title: "Samuel colt was afraid of guns when he was young",
              orderNum: 3,
              answer: false
            },
            {
              title: "He was working on board ship when he started on his invention",
              orderNum: 4,
              answer: true
            },
            {
              title: "Colt's first revolver could shoot five times without reloading",
              orderNum: 5,
              answer: true
            },
            {
              title: "The revolving shell chamber was inspired by the ship's compass",
              orderNum: 6,
              answer: false
            },
            {
              title: "Colt's first factory was a huge success",
              orderNum: 7,
              answer: false
            },
            {
              title: "The six-shooter was developed at the time of the Mexican War",
              orderNum: 8,
              answer: true
            },
            {
              title: "The Army placed an order with Colt for two thousand revolvers",
              orderNum: 9,
              answer: false
            },
            {
              title: "The six-shooter was call 'The gun that won the West'",
              orderNum: 10,
              answer: true
            }
  
          ],
        lines:
          [
            {
              orderNum: 1,
              chars: 37,
            },
            {
              orderNum: 2,
              chars: 39,
            },
            {
              orderNum: 3,
              chars: 38,
            },
            {
              orderNum: 4,
              chars: 31,
            },
            {
              orderNum: 5,
              chars: 34,
            },
            {
              orderNum: 6,
              chars: 37,
            },
            {
              orderNum: 7,
              chars: 37,
            },
            {
              orderNum: 8,
              chars: 38,
            },
            {
              orderNum: 9,
              chars: 37,
            },
            {
              orderNum: 10,
              chars: 36,
            },
            {
              orderNum: 11,
              chars: 33,
            },
            {
              orderNum: 12,
              chars: 36,
            },
            {
              orderNum: 13,
              chars: 35,
            },
            {
              orderNum: 14,
              chars: 38,
            },
            {
              orderNum: 15,
              chars: 37,
            },
            {
              orderNum: 16,
              chars: 32,
            }
          ],
      },
  
      {
  
        img: "text-10-87.png",
        level: 10,
        words: 120,
        questions:
          [
            {
              title: "Amundsen was an explorer from Sweden",
              orderNum: 1,
              answer: false
            },
            {
              title: "He was noted for his thoroughness",
              orderNum: 2,
              answer: true
            },
            {
              title: "He found the Northwest Passage",
              orderNum: 3,
              answer: true
            },
            {
              title: "On his second expedition, he was planning to go to the South Pole",
              orderNum: 4,
              answer: false
            },
            {
              title: "Amundsen established a base station on the ice cap",
              orderNum: 5,
              answer: true
            },
            {
              title: "He set up five supply stations",
              orderNum: 6,
              answer: false
            },
            {
              title: "Dog teams and sledges were used to carry supplies",
              orderNum: 7,
              answer: true
            },
            {
              title: "It took eleven months to reach the pole",
              orderNum: 8,
              answer: true
            },
            {
              title: "Amundsen flew the Swedish flag over the South Pole",
              orderNum: 9,
              answer: false
            },
            {
              title: "The South Pole was discovered in the year 1911",
              orderNum: 10,
              answer: true
            }
  
          ],
        lines:
          [
            {
              orderNum: 1,
              chars: 32,
            },
            {
              orderNum: 2,
              chars: 26,
            },
            {
              orderNum: 3,
              chars: 38,
            },
            {
              orderNum: 4,
              chars: 36,
            },
            {
              orderNum: 5,
              chars: 34,
            },
            {
              orderNum: 6,
              chars: 33,
            },
            {
              orderNum: 7,
              chars: 37,
            },
            {
              orderNum: 8,
              chars: 39,
            },
            {
              orderNum: 9,
              chars: 37,
            },
            {
              orderNum: 10,
              chars: 35,
            },
            {
              orderNum: 11,
              chars: 32,
            },
            {
              orderNum: 12,
              chars: 37,
            },
            {
              orderNum: 13,
              chars: 36,
            },
            {
              orderNum: 14,
              chars: 35,
            },
            {
              orderNum: 15,
              chars: 33,
            },
            {
              orderNum: 16,
              chars: 37,
            },
            {
              orderNum: 17,
              chars: 21,
            }
          ],
      }
    ]
  


// const fakeDataContext = createContext({});

// export default {headerContext, popupContext};

  export { fakeData, tests };
  