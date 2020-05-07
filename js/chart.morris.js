$(function(){
  'use strict';

  new Morris.Bar({
    element: 'caloriesBar',
    data: [
      { y: 'DAY1', a: 100, b: 90, c: 80, d: 30 },
      { y: 'DAY2', a: 75,  b: 65, c: 75, d: 60 },
      { y: 'DAY3', a: 50,  b: 40, c: 45, d: 20 },
      { y: 'DAY4', a: 75,  b: 65, c: 85, d: 30 },
      { y: 'DAY5', a: 65,  b: 20, c: 60, d: 10 },
      { y: 'DAY6', a: 65,  b: 60, c: 60, d: 60 },
      { y: 'DAY7', a: 65,  b: 10, c: 60, d: 20 },
      { y: 'AVERAGE', a: 65,  b: 60, c: 60, d: 30 },
      { y: 'TARGET', a: 65,  b: 60, c: 60, d: 70 },
    ],
    xkey: 'y',
    ykeys: ['a', 'b', 'c', 'd'],
    labels: ['Breakfast', 'Lunch', 'Dinner', 'Late'],
    barColors: ['#013294', '#EC9624','#00CB01', '#E0009B'],
    stacked: true,
    gridTextSize: 11,
    hideHover: 'auto',
    resize: true
  });


  new Morris.Bar({
    element: 'biometricsBar',
    data: [
      { y: 'DAY1', a: 100, b: 90, c: 80, d: 30, e: 10 },
      { y: 'DAY2', a: 75,  b: 65, c: 75, d: 60, e: 18 },
      { y: 'DAY3', a: 50,  b: 40, c: 45, d: 20, e: 6 },
      { y: 'DAY4', a: 75,  b: 65, c: 85, d: 30, e: 20 },
      { y: 'DAY5', a: 65,  b: 20, c: 60, d: 10, e: 16 },
      { y: 'DAY6', a: 65,  b: 60, c: 60, d: 60, e: 10 },
      { y: 'DAY7', a: 65,  b: 10, c: 60, d: 20, e: 5 },
      { y: 'AVERAGE', a: 65,  b: 60, c: 60, d: 30 },
      { y: 'TARGET', a: 65,  b: 60, c: 60, d: 70 },
    ],
    xkey: 'y',
    ykeys: ['a', 'b', 'c', 'd', 'e'],
    labels: ['Hunger', 'Energy', 'Mood', 'Workouts', 'sleep'],
    barColors: ['#3099FF', '#FB0200','#00D000', '#F89A04', '#F89A04'],
    gridTextSize: 11,
    hideHover: 'auto',
    resize: true
  });

  new Morris.Bar({
    element: 'macrosBar',
    data: [
      { y: 'DAY1', a: 70, b: 90, c: 80 },
      { y: 'DAY2', a: 75,  b: 65, c: 75 },
      { y: 'DAY3', a: 50,  b: 40, c: 45 },
      { y: 'DAY4', a: 75,  b: 65, c: 85 },
      { y: 'DAY5', a: 65,  b: 20, c: 60 },
      { y: 'DAY6', a: 65,  b: 60, c: 60 },
      { y: 'DAY7', a: 65,  b: 10, c: 60 },
      { y: 'AVERAGE', a: 65,  b: 60, c: 60 },
      { y: 'TARGET', a: 65,  b: 60, c: 60 },
    ],
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['Protein', 'Fat', 'Carbs'],
    barColors: ['#3795FE', '#07C905','#D80091'],
    gridTextSize: 11,
    hideHover: 'auto',
    resize: true
  });


  new Morris.Donut({
    element: 'hydrationDonut',
    data: [
      {label: "Breakfast", value: 12},
      {label: "Lunch", value: 30},
      {label: "Dinner", value: 50},
      {label: "Late", value: 25}
    ],
    colors: ['#013294', '#EC9624','#00CB01', '#E0009B'],
    resize: true
  });

});
