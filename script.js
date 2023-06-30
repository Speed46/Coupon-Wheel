





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

