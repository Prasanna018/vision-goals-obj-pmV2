/* eslint-disable no-cond-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';



const HierarchicalTree = () => {
  // create svg ref here //

  const svgRef = useRef();

  // The JSON data from your uploaded file
  const data = {
    "name": "Vision",
    "type": "folder",
    "children": [
      {
        "name": "Economic Development",
        "type": "folder",
        "goal": "Economic Development",
        "children": [
          {
            "name": "Reduce peak period travel times",
            "type": "folder",
            "objective": "Reduce peak period travel times",
            "children": [
              {
                "name": "Average travel time during AM and PM peak periods on major corridors",
                "type": "leaf",
                "pm": "Average travel time during AM and PM peak periods on major corridors"
              }
            ]
          },
          {
            "name": "Increase transportation investment focusing on economic vitality",
            "type": "folder",
            "objective": "Increase transportation investment which focuses on economic vitality",
            "children": [
              {
                "name": "Change in employment/economic output in areas with  transportation facilities",
                "type": "leaf",
                "pm": "Change in employment or economic output in areas with  transportation facilities"
              }
            ]
          },
          {
            "name": "Improve reliability of travel to regional activity centers",
            "type": "folder",
            "objective": "Improve reliability of travel to regional activity centers",
            "children": [
              {
                "name": "Planning Time Index (95th percentile travel time / free-flow travel time)",
                "type": "leaf",
                "pm": "Planning Time Index (95th percentile travel time / free-flow travel time) to/from activity centers"
              }
            ]
          },
          {
            "name": "Increase multimodal access to regional activity centers",
            "type": "folder",
            "objective": "Increase multimodal access to regional activity centers",
            "children": [
              {
                "name": "Percentage of population within ½ mile of transit routes serving activity centers",
                "type": "leaf",
                "pm": "Percentage of population within ½ mile of transit routes serving activity centers"
              }
            ]
          },
          {
            "name": "Reduce freight bottlenecks",
            "type": "folder",
            "objective": "Reduce freight bottlenecks",
            "children": [
              {
                "name": "Average truck travel time index (TTTI) on freight-priority corridors",
                "type": "leaf",
                "pm": "Average truck travel time index (TTTI) on freight-priority corridors"
              }
            ]
          },
          {
            "name": "Expand and maintain regional network of sidewalks, bike lanes, and trails",
            "type": "folder",
            "objective": "Expand and maintain a regional network of sidewalks, bike lanes, and multi-use trails",
            "children": [
              {
                "name": "Total miles of sidewalks, bike lanes, and multi-use trails regionwide",
                "type": "leaf",
                "pm": "Total miles of sidewalks, bike lanes, and multi-use trails regionwide"
              }
            ]
          }
        ]
      },
      {
        "name": "Equity/Accessibility",
        "type": "folder",
        "goal": "Equity/Accessibility",
        "children": [
          {
            "name": "Reduce trip lengths with focus on EJ populations",
            "type": "folder",
            "objective": "Reduce trip lengths for all people with a focus on Environmental Justice (EJ) populations",
            "children": [
              {
                "name": "Average trip length by mode and population group (EJ vs. non-EJ)",
                "type": "leaf",
                "pm": "Average trip length (in miles or minutes) by mode and population group (EJ vs. non-EJ)"
              }
            ]
          },
          {
            "name": "Increase access to jobs/services via transit, walking, biking for EJ populations",
            "type": "folder",
            "objective": "Increase access to jobs and community services via transit, walking, and biking for all people with a focus on EJ populations",
            "children": [
              {
                "name": "Percentage of EJ population within ½-mile walk of frequent transit service",
                "type": "leaf",
                "pm": "Percentage of EJ population within a ½-mile walk of frequent transit service"
              },
              {
                "name": "Number of jobs accessible within 30 minutes by transit/walking/biking (EJ vs. non-EJ)",
                "type": "leaf",
                "pm": "Number of jobs accessible within 30 minutes by transit, walking, or biking, disaggregated by EJ vs. non-EJ populations"
              }
            ]
          }
        ]
      },
      {
        "name": "Safety",
        "type": "folder",
        "goal": "Safety",
        "children": [
          {
            "name": "Reduce motorized fatalities and serious injuries",
            "type": "folder",
            "objective": "Reduce the number and rate of motorized fatalities and serious injuries",
            "children": [
              {
                "name": "Total number of motor vehicle fatalities (annual)",
                "type": "leaf",
                "pm": "Total number of motor vehicle fatalities (annual)"
              },
              {
                "name": "Total number of serious injuries from motor vehicle crashes",
                "type": "leaf",
                "pm": "Total number of serious injuries resulting from motor vehicle crashes"
              },
              {
                "name": "Fatality rate per 100 million VMT",
                "type": "leaf",
                "pm": "Fatality rate per 100 million VMT"
              },
              {
                "name": "Serious injury rate per 100 million VMT",
                "type": "leaf",
                "pm": "Serious injury rate per 100 million VMT"
              }
            ]
          },
          {
            "name": "Reduce non-motorized fatalities and serious injuries",
            "type": "folder",
            "objective": "Reduce the number of non-motorized fatalities and serious injuries",
            "children": [
              {
                "name": "Non-motorized fatality/serious injury rate per capita or per 100,000 population",
                "type": "leaf",
                "pm": "Non-motorized fatality and serious injury rate per capita or per 100,000 population"
              }
            ]
          }
        ]
      },
      {
        "name": "System Management",
        "type": "folder",
        "goal": "System Management",
        "children": [
          {
            "name": "Improve condition of all bridges",
            "type": "folder",
            "objective": "Improve the condition of all bridges",
            "children": [
              {
                "name": "Percentage of NHS bridges (by deck area) in good condition",
                "type": "leaf",
                "pm": "Percentage of NHS bridges (by deck area) in good condition"
              },
              {
                "name": "Percentage of NHS bridges (by deck area) in poor condition",
                "type": "leaf",
                "pm": "Percentage of NHS bridges (by deck area) in poor condition"
              }
            ]
          },
          {
            "name": "Improve lane miles of pavements in good/poor condition",
            "type": "folder",
            "objective": "Improve the lane miles of pavements in good and poor condition",
            "children": [
              {
                "name": "Percentage of Interstate lane miles in good condition",
                "type": "leaf",
                "pm": "Percentage of Interstate lane miles in good condition"
              },
              {
                "name": "Percentage of Interstate lane miles in poor condition",
                "type": "leaf",
                "pm": "Percentage of Interstate lane miles in poor condition"
              }
            ]
          },
          {
            "name": "Improve percent of transit vehicles/facilities in good/poor condition",
            "type": "folder",
            "objective": "Improve percent of transit vehicles and facilities in good and poor condition",
            "children": [
              {
                "name": "Percentage of transit revenue vehicles exceeding useful life benchmark",
                "type": "leaf",
                "pm": "Percentage of transit revenue vehicles that exceed useful life benchmark (ULB)"
              },
              {
                "name": "Percentage of non-revenue vehicles exceeding useful life benchmark",
                "type": "leaf",
                "pm": "Percentage of non-revenue vehicles exceeding ULB"
              },
              {
                "name": "Percentage of facilities rated below 3.0 on FTA's TERM scale",
                "type": "leaf",
                "pm": "Percentage of facilities rated below 3.0 on FTA's TERM scale (Transit Economic Requirements Model)"
              }
            ]
          }
        ]
      },
      {
        "name": "Environment",
        "type": "folder",
        "goal": "Environment",
        "children": [
          {
            "name": "Reduce transportation-related pollutants",
            "type": "folder",
            "objective": "Reduce transportation-related pollutants",
            "children": [
              {
                "name": "Total tons of transportation-related emissions per year (CO₂, NO₂, VOCs, PM2.5)",
                "type": "leaf",
                "pm": "Total tons of transportation-related emissions per year (CO₂, NO₂, VOCs, PM2.5)"
              },
              {
                "name": "Emissions per capita or per vehicle mile traveled (VMT)",
                "type": "leaf",
                "pm": "Emissions per capita or per vehicle mile traveled (VMT)"
              }
            ]
          },
          {
            "name": "Reduce impact on environmentally sensitive areas",
            "type": "folder",
            "objective": "Reduce impact of plan on environmentally sensitive areas",
            "children": [
              {
                "name": "Acres of environmentally sensitive land impacted by transportation projects",
                "type": "leaf",
                "pm": "Acres of environmentally sensitive land directly impacted by funded or programmed transportation projects"
              }
            ]
          }
        ]
      }
    ]
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    // Set dimensions and margins
    const margin = { top: 120, right: 50, bottom: 50, left: 50 };
    const width = 2400 - margin.left - margin.right;
    const height = 3900 - margin.top - margin.bottom;
    const horizontalSpacing = 600; // Horizontal spacing between columns
    const verticalSpacing = 100; // Minimum vertical spacing between nodes
    let i = 0;
    const duration = 750;

    // Create the tree layout
    const tree = d3.tree().size([height, width])
      .separation((a, b) => {
        // Custom separation function to prevent overlapping
        return (a.parent === b.parent ? 1 : 2) * verticalSpacing;
      });

    //  diagonal here
    // Create diagonal path generator
    const diagonal = d3.linkHorizontal()
      .x(d => d ? d.y : 0)
      .y(d => d ? d.x : 0);

    const g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Initialize root
    const root = d3.hierarchy(data);
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse all children initially except first level
    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    // Keep first level (Goals) expanded, collapse others
    if (root.children) {
      root.children.forEach(child => {
        if (child.children) {
          child.children.forEach(collapse);
        }
      });
    }

    // Add column headers with proper spacing
    const headers = [
      { text: "Goals", col: 1 },
      { text: "Objectives", col: 2 },
      { text: "Performance Measures (PMs)", col: 3 }
    ];

    g.selectAll("text.header")
      .data(headers)
      .enter()
      .append("text")
      .attr("class", "header")
      .attr("x", d => d.col * horizontalSpacing)
      .attr("y", -80)
      .attr("text-anchor", "middle")
      .style("font-size", "36px")
      .style("font-weight", "bold")
      .style("fill", "#1e40af")
      .text(d => d.text);

    // Function to wrap text
    function wrapText(text, width) {
      text.each(function () {
        const text = d3.select(this);
        const words = text.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1; // ems
        const y = text.attr("y");
        const dy = parseFloat(text.attr("dy"));
        let tspan = text.text(null).append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dy", dy + "em");

        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan")
              .attr("x", 0)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }

    function update(source) {
      // Compute the new tree layout
      const treeData = tree(root);
      const nodes = treeData.descendants();
      const links = treeData.descendants().slice(1);

      // Set horizontal positions based on depth
      nodes.forEach(d => {
        d.y = d.depth * horizontalSpacing;
      });

      // Set consistent box dimensions
      const boxWidth = 500;
      const boxHeight = 120;

      // Adjust vertical positions to prevent overlapping
      const nodesByDepth = {};
      nodes.forEach(d => {
        if (!nodesByDepth[d.depth]) nodesByDepth[d.depth] = [];
        nodesByDepth[d.depth].push(d);
      });

      // Sort nodes by their original x position within each depth level
      Object.keys(nodesByDepth).forEach(depth => {
        nodesByDepth[depth].sort((a, b) => a.x - b.x);

        // Adjust positions to prevent overlapping
        for (let i = 1; i < nodesByDepth[depth].length; i++) {
          const current = nodesByDepth[depth][i];
          const previous = nodesByDepth[depth][i - 1];
          const minDistance = boxHeight + 40;

          if (current.x - previous.x < minDistance) {
            current.x = previous.x + minDistance;
          }
        }
      });

      // Update the nodes
      const node = g.selectAll("g.node")
        .data(nodes, d => d.id || (d.id = ++i));

      // Enter any new nodes at the parent's previous position
      const nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${source.y0 || 0},${source.x0 || 0})`)
        .on("click", (event, d) => {
          if (d.children || d._children) {
            toggle(d);
            update(d);
          }
        })
        .style("cursor", d => (d.children || d._children) ? "pointer" : "default");

      // Add rectangles with consistent size
      nodeEnter.append("rect")
        .attr("x", -boxWidth / 2)
        .attr("y", -boxHeight / 2)
        .attr("width", boxWidth)
        .attr("height", boxHeight)
        .attr("rx", 8)
        .style("fill", d => {
          if (d.depth === 0) return "#e0f2fe"; // Vision - light blue
          if (d.depth === 1) return "#e8f5e8"; // Goals - light green
          if (d.depth === 2) return "#fff3e0"; // Objectives - light orange
          return "#f3e5f5"; // PMs - light purple
        })
        .style("stroke", d => {
          if (d.depth === 0) return "#0369a1"; // Vision - blue
          if (d.depth === 1) return "#16a34a"; // Goals - green
          if (d.depth === 2) return "#ea580c"; // Objectives - orange
          return "#9333ea"; // PMs - purple
        })
        .style("stroke-width", "2px");

      // Add text with wrapping
      nodeEnter.append("text")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .style("font-size", "24px")
        .style("font-weight", "bold")
        .style("fill", "#1f2937")
        .style("pointer-events", "none")
        .text(d => d.data.name)
        .call(wrapText, boxWidth - 20); // Wrap text within box width

      // Add expand/collapse indicator for nodes with children
      nodeEnter.append("circle")
        .attr("cx", boxWidth / 2 - 20)
        .attr("cy", -boxHeight / 2 + 20)
        .attr("r", 10)
        .style("fill", "#3b82f6")
        .style("stroke", "#1e40af")
        .style("stroke-width", "2px")
        .style("display", d => (d.children || d._children) ? "block" : "none");

      nodeEnter.append("text")
        .attr("x", boxWidth / 2 - 20)
        .attr("y", -boxHeight / 2 + 20)
        .attr("dy", "0.50em")
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "white")
        .style("pointer-events", "none")
        .style("display", d => (d.children || d._children) ? "block" : "none")
        .text(d => d.children ? "−" : "+");

      // Transition nodes to their new position
      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate.transition()
        .duration(duration)
        .attr("transform", d => `translate(${d.y},${d.x})`);

      // Update expand/collapse indicators
      nodeUpdate.select("text:last-child")
        .text(d => d.children ? "−" : "+");

      // Remove any exiting nodes
      const nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", d => `translate(${source.y || 0},${source.x || 0})`)
        .remove();

      nodeExit.select("rect").style("fill-opacity", 1e-6);
      nodeExit.select("text").style("fill-opacity", 1e-6);

      // Update the links
      const link = g.selectAll("path.link")
        .data(links, d => d.id);

      // Enter any new links at the parent's previous position
      const linkEnter = link.enter().insert("path", "g")
        .attr("class", "link")
        .style("fill", "none")
        .style("stroke", "#94a3b8")
        .style("stroke-width", "3px")
        .attr("d", d => {
          const o = { x: source.x0 || 0, y: source.y0 || 0 };
          return diagonal({ source: o, target: o });
        });

      // Transition links to their new position
      linkEnter.merge(link).transition()
        .duration(duration)
        .attr("d", d => diagonal({ source: d.parent || d, target: d }))
        .style("stroke", "#94a3b8");

      // Remove any exiting links
      link.exit().transition()
        .duration(duration)
        .attr("d", d => {
          const o = { x: source.x || 0, y: source.y || 0 };
          return diagonal({ source: o, target: o });
        })
        .remove();

      // Store the old positions for transition
      nodes.forEach(d => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    function toggle(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    }

    // Initial render
    update(root);

  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transportation Performance Measures
          </h1>
        </div>

        <div className="overflow-auto border-2 border-gray-200 rounded-lg bg-white shadow-lg">
          <svg ref={svgRef}></svg>
        </div>
      </div>
    </div>
  );
};

export default HierarchicalTree;