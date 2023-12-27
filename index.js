let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];
  
  function updateData(view) {
    const newData = data.map(item => {
      return {
        title: item.title,
        timeframe: {
          current: item.timeframes[view].current,
          previous: item.timeframes[view].previous
        }
      };
    });
  
    updateUI(newData);
  }
  
  function updateUI(newData) {
    newData.forEach((item, index) => {
      const activityElement = document.querySelector(`.${item.title.toLowerCase()}`);
      activityElement.querySelector('.begin p').innerText = item.title;
      activityElement.querySelector('.end p:nth-child(1)').innerText = `${item.timeframe.current}hrs`;
      activityElement.querySelector('.end p:nth-child(2)').innerText = `Previous - ${item.timeframe.previous}hrs`;
    });
  }
  
  document.getElementById("daily").addEventListener("click", function() {
    updateData("daily");
  });
  
  document.getElementById("weekly").addEventListener("click", function() {
    updateData("weekly");
  });
  
  document.getElementById("monthly").addEventListener("click", function() {
    updateData("monthly");
  });
  