<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => d + " USD")
      .style("color", (d, i) => {
        // Apply colors based on the index (i)
        return (i === 0 || i === 3 || i === 5 || i === 7 || i === 8) ? "red" : "green";
      });

    // Add your code above this line
  </script>
</body>
