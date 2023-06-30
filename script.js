// const wheel = document.getElementById("wheel");
// const spinBtn = document.getElementById("spin-btn");
// const finalValue = document.getElementById("final-value");
// // Object that stores values of minimum and maximum angle for a value
// const rotationValues = [
//   { minDegree: 0, maxDegree: 30, value: "try again" },
//   { minDegree: 31, maxDegree: 90, value: 1 },
//   { minDegree: 91, maxDegree: 150, value: 6 },
//   { minDegree: 151, maxDegree: 210, value: 5 },
//   { minDegree: 211, maxDegree: 270, value: 4 },
//   { minDegree: 271, maxDegree: 330, value: 3 },
//   { minDegree: 331, maxDegree: 360, value: 2 },
// ];
// // Size of each piece
// const data = [16, 16, 16, 16, 16, 16];
// // Background color for each piece
// var pieColors = [
//   "#8b35bc",
//   "#b163da",
//   "#8b35bc",
//   "#b163da",
//   "#8b35bc",
//   "#b163da",
// ];
// // Create chart
// let myChart = new Chart(wheel, {
//   // Plugin for displaying text on pie chart
//   plugins: [ChartDataLabels],
//   // Chart Type Pie
//   type: "pie",
//   data: {
//     // Labels (values which are to be displayed on chart)
//     labels: ["try again", 2, 3, 4, 5, 6],
//     // Settings for dataset/pie
//     datasets: [
//       {
//         backgroundColor: pieColors,
//         data: data,
//       },
//     ],
//   },
//   options: {
//     // Responsive chart
//     responsive: true,
//     animation: { duration: 0 },
//     plugins: {
//       // Hide tooltip and legend
//       tooltip: false,
//       legend: {
//         display: false,
//       },
//       // Display labels inside pie chart
//       datalabels: {
//         color: "#ffffff",
//         formatter: (_, context) =>
//           context.chart.data.labels[context.dataIndex],
//         font: { size: 24 },
//       },
//     },
//     rotation: -Math.PI / 2, // Initial rotation (starting from top)
//   },
// });
// // Display value based on the randomAngle
// const valueGenerator = (angleValue) => {
//   for (let i of rotationValues) {
//     // If the angleValue is between min and max then display it
//     if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
//       finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
//       spinBtn.disabled = false;
//       break;
//     }
//   }
// };
// // Spinner count
// let count = 0;
// // 100 rotations for animation and last rotation for result
// let resultValue = 101;
// let isFirstSpin = true; // Flag for first spin
// // Start spinning
// spinBtn.addEventListener("click", () => {
//   spinBtn.disabled = true;
//   // Empty final value
//   finalValue.innerHTML = `<p>Good Luck!</p>`;
//   // Generate random degrees to stop at
//   let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
//   // Interval for rotation animation
//   let rotationInterval = window.setInterval(() => {
//     // Set rotation for pie chart
//     /*
//     Initially, to make the pie chart rotate faster, we set resultValue to 101 so it rotates 101 degrees at a time, and this reduces by 1 with every count. Eventually, on the last rotation, we rotate by 1 degree at a time.
//     */
//     myChart.options.rotation = myChart.options.rotation + (resultValue * Math.PI) / 180;
//     // Update chart with new value
//     myChart.update();
//     // If rotation > 360 reset it back to 0
//     if (myChart.options.rotation >= 2 * Math.PI) {
//       count += 1;
//       resultValue -= 5;
//       myChart.options.rotation = 0;
//     } else if (
//       count > 15 &&
//       myChart.options.rotation >= (randomDegree * Math.PI) / 180 &&
//       isFirstSpin
//     ) {
//       // Display a pop-up message on the first spin
//       alert("Try Again");
//       clearInterval(rotationInterval);
//       count = 0;
//       resultValue = 101;
//       isFirstSpin = false; // Set the flag to false after the first spin
//     } else if (
//       count > 15 &&
//       myChart.options.rotation >= (randomDegree * Math.PI) / 180
//     ) {
//       valueGenerator(randomDegree);
//       clearInterval(rotationInterval);
//       count = 0;
//       resultValue = 1; // Set resultValue to 1 for subsequent spins
//     }
//   }, 10);
// });








// document.addEventListener("DOMContentLoaded", function () {
//     const wheel = document.getElementById("wheel");
//     const spinBtn = document.getElementById("spin-btn");
//     const finalValue = document.getElementById("final-value");
  
//     const rotationValues = [
//       { minDegree: 0, maxDegree: 30, value: 2 },
//       { minDegree: 31, maxDegree: 90, value: 1 },
//       { minDegree: 91, maxDegree: 150, value: 6 },
//       { minDegree: 151, maxDegree: 210, value: 5 },
//       { minDegree: 211, maxDegree: 270, value: 4 },
//       { minDegree: 271, maxDegree: 330, value: 3 },
//       { minDegree: 331, maxDegree: 360, value: 2 },
//     ];
  
//     const data = [16, 16, 16, 16, 16, 16];
  
//     const pieColors = [
//       "#8b35bc",
//       "#b163da",
//       "#8b35bc",
//       "#b163da",
//       "#8b35bc",
//       "#b163da",
//     ];
  
//     let spinCount = 0;
  
//     let myChart = new Chart(wheel, {
//       plugins: [ChartDataLabels],
//       type: "pie",
//       data: {
//         labels: ["Try Again", 2, 3, 4, 5, 6],
//         datasets: [
//           {
//             backgroundColor: pieColors,
//             data: data,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         animation: { duration: 0 },
//         plugins: {
//           tooltip: false,
//           legend: {
//             display: false,
//           },
//           datalabels: {
//             color: "#ffffff",
//             formatter: (_, context) =>
//               context.chart.data.labels[context.dataIndex],
//             font: { size: 24 },
//           },
//         },
//       },
//     });
  
//     spinBtn.addEventListener("click", function () {
//       if (spinCount === 0) {
//         finalValue.innerHTML = "<p>Try Again</p>";
//         spinCount++;
//       } else {
//         spinBtn.disabled = true;
//         finalValue.innerHTML = "<p>Spinning...</p>";
  
//         let randomDegree = Math.floor(Math.random() * 360);
  
//         let rotationInterval = setInterval(() => {
//           myChart.options.rotation += 10;
//           myChart.update();
  
//           if (myChart.options.rotation >= randomDegree) {
//             clearInterval(rotationInterval);
//             let finalAngle = myChart.options.rotation % 360;
//             valueGenerator(finalAngle);
//             spinBtn.disabled = false;
//           }
//         }, 10);
//       }
//     });
  
//     function valueGenerator(angleValue) {
//       for (let i of rotationValues) {
//         if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
//           finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
//           break;
//         }
//       }
//     }
//   });
  






// const wheel = document.getElementById("wheel");
// const spinBtn = document.getElementById("spin-btn");
// const finalValue = document.getElementById("final-value");

// // Object that stores values of minimum and maximum angle for a value
// const rotationValues = [
//   { minDegree: 0, maxDegree: 30, value: 2 },
//   { minDegree: 31, maxDegree: 90, value: 1 },
//   { minDegree: 91, maxDegree: 150, value: 6 },
//   { minDegree: 151, maxDegree: 210, value: 5 },
//   { minDegree: 211, maxDegree: 270, value: 4 },
//   { minDegree: 271, maxDegree: 330, value: 3 },
//   { minDegree: 331, maxDegree: 360, value: 2 },
// ];

// // Size of each piece
// const data = [16, 16, 16, 16, 16, 16];


// // Background color for each piece
// const pieColors = [
//   "#57FEFF",
//   "#FFA500",
//   "#57FEFF",
//   "#FFA500",
//   "#57FEFF",
//   "#FFA500",
// ];

// // Create chart
// const myChart = new Chart(wheel, {
//   // Plugin for displaying text on pie chart
//   plugins: [ChartDataLabels],
//   // Chart Type Pie
//   type: "pie",
//   data: {
//     // Labels (values which are to be displayed on chart)
//     labels: ["1.2000 Rs","2.Scratch card","3.Laptop ","4.10000 Rs" , "5.Mystery Box","6.Better luck"],
//     // Settings for dataset/pie
//     datasets: [
//       {
//         backgroundColor: pieColors,
//         data: data,
//       },
//     ],
//   },
//   options: {
//     // Responsive chart
//     responsive: true,
//     animation: { duration: 0 },
//     plugins: {
//       // Hide tooltip and legend
//       tooltip: false,
//       legend: {
//         display: false,
//       },
//       // Display labels inside pie chart
//       datalabels: {
//         color: "#ffffff",
//         formatter: (_, context) => context.chart.data.labels[context.dataIndex],
//         font: { size: 24 },
//       },
//     },
//   },
// });

// // Spinner count
// let count = 0;
// // 100 rotations for animation and last rotation for result
// let resultValue = 101;
// // Flag to determine if it's the first spin or not
// let isFirstSpin = true;

// // Display value based on the randomAngle
// const valueGenerator = (angleValue) => {
//   let selectedValue;

//   if (isFirstSpin) {
//     selectedValue = "Try Again";
//     isFirstSpin = false;
//   } else {
//     const randomIndex = Math.floor(Math.random() * rotationValues.length);
//     selectedValue = rotationValues[randomIndex].value;
//   }

//   finalValue.innerHTML = `<p>Value: ${selectedValue}</p>`;
//   spinBtn.disabled = false;
// };

// // Start spinning
// spinBtn.addEventListener("click", () => {
//   spinBtn.disabled = true;
//   finalValue.innerHTML = `<p>Good Luck!</p>`;

//   const randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
//   let rotationInterval = window.setInterval(() => {
//     myChart.options.rotation = myChart.options.rotation + resultValue;
//     myChart.update();

//     if (myChart.options.rotation >= 360) {
//       count += 1;
//       resultValue -= 5;
//       myChart.options.rotation = 0;
//     } else if (count > 15 && myChart.options.rotation === randomDegree) {
//       valueGenerator(randomDegree);
//       clearInterval(rotationInterval);
//       count = 0;
//       resultValue = 101;
//     }
//   }, 10);
// });







const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

// Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: "🔁 Try Again" },
  { minDegree: 31, maxDegree: 90, value: "💰 2000 Rs" },
  { minDegree: 91, maxDegree: 150, value: "🎁 Scratch Card" },
  { minDegree: 151, maxDegree: 210, value: "💻 Laptop" },
  { minDegree: 211, maxDegree: 270, value: "💰 10,000 Rs" },
  { minDegree: 271, maxDegree: 330, value: "🎁 Mystery Box" },
  { minDegree: 331, maxDegree: 360, value: "🔮 Better Luck" },
];

// Size of each piece
const data = [16, 16, 16, 16, 16, 16, 16];

// Background color for each piece
const pieColors = [
  "#6ec007",
  "#C4A484",
  "#57FEFF",
  "#ffdf00",
  "#FFE5B4",
  "#FFA500",
  "#B76E79",
];

// Create chart
const myChart = new Chart(wheel, {
  plugins: [ChartDataLabels], // Plugin for displaying text on pie chart
  type: "pie", // Chart Type: Pie
  data: {
    labels: [
      "🔁 Try Again",
      "💰 2000 Rs",
      "🎁 Scratch Card",
      "💻 Laptop",
      "💰 10,000 Rs",
      "🎁 Mystery Box",
      "🔮 Better Luck",
    ], // Labels (values to be displayed on the chart)
    datasets: [
      {
        backgroundColor: pieColors, // Background color for each piece
        data: data, // Size of each piece
      },
    ],
  },
  options: {
    responsive: true, // Responsive chart
    animation: { duration: 0 }, // Disable animation
    plugins: {
      tooltip: false, // Hide tooltip
      legend: {
        display: false, // Hide legend
      },
      datalabels: {
        color: "#ffffff",
        font: {
          size: 18, // Adjust the font size here (default: 24)
        },
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
      },
    },
  },
});

// Spinner count
let count = 0;
// 100 rotations for animation and the last rotation for the result
let resultValue = 101;
// Flag to determine if it's the first spin or not
let isFirstSpin = true;

// Display value based on the randomAngle
const valueGenerator = (angleValue) => {
  let selectedValue;

  if (isFirstSpin) {
    selectedValue = "🔁 Try Again";
    isFirstSpin = false;
  } else {
    const randomIndex = Math.floor(Math.random() * rotationValues.length);
    selectedValue = rotationValues[randomIndex].value;
  }

  finalValue.innerHTML = `<p>Value: ${selectedValue}</p>`;
  spinBtn.disabled = false;
};

// Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = "<p>Good Luck!</p>";

  // Generate random degrees to stop at
  const randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

  // Interval for rotation animation
  const rotationInterval = window.setInterval(() => {
    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();

    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation === randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});

