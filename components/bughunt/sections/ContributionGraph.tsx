"use client";

import { useState, useMemo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";

const ContributionGraph = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const weeks = 52;
  const days = 7;
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Generate deterministic pseudo-random contributions
  const contributions = useMemo(() => {
    const data: number[][] = [];
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807 + 0) % 2147483647;
      return seed / 2147483647;
    };
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        const r = rand();
        if (r < 0.3) week.push(0);
        else if (r < 0.55) week.push(1);
        else if (r < 0.75) week.push(2);
        else if (r < 0.9) week.push(3);
        else week.push(4);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getColor = (level: number) => {
    const lightColors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
    const darkColors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
    return isDark ? darkColors[level] : lightColors[level];
  };

  const getDateLabel = (weekIndex: number, dayIndex: number) => {
    const startDate = new Date(2025, 0, 5); // First Monday of 2025
    const date = new Date(startDate);
    date.setDate(date.getDate() + weekIndex * 7 + dayIndex);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getContribText = (level: number) => {
    if (level === 0) return "No contributions";
    const counts = [0, 2, 5, 8, 12];
    return `${counts[level]} contributions`;
  };

  // Approximate month positions
  const monthPositions = useMemo(() => {
    const positions: { label: string; x: number }[] = [];
    for (let m = 0; m < 12; m++) {
      const weekApprox = Math.floor((m / 12) * weeks);
      positions.push({ label: monthLabels[m], x: weekApprox * 14 });
    }
    return positions;
  }, []);

  return (
    <section id="contributions">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        📈 Contribution Graph
      </h2>
      <div className="border border-border rounded-md p-4 overflow-x-auto">
        <div className="text-xs text-muted-foreground mb-1">
          <div className="flex" style={{ marginLeft: "30px", gap: "0px" }}>
            {monthPositions.map((m, i) => (
              <span key={i} style={{ position: "relative", left: `${m.x - i * 40}px`, minWidth: "40px" }}>
                {m.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-0.5">
          <div className="flex flex-col gap-0.5 mr-1 text-xs text-muted-foreground" style={{ paddingTop: "0px" }}>
            {dayLabels.map((label, i) => (
              <div key={i} style={{ height: "11px", lineHeight: "11px", fontSize: "10px" }}>
                {label}
              </div>
            ))}
          </div>
          {contributions.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map((level, di) => (
                <Tooltip key={di}>
                  <TooltipTrigger asChild>
                    <div
                      className="rounded-sm cursor-pointer"
                      style={{
                        width: "11px",
                        height: "11px",
                        backgroundColor: getColor(level),
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    <p>{getContribText(level)} on {getDateLabel(wi, di)}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 mt-2 justify-end text-xs text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="rounded-sm"
              style={{ width: "11px", height: "11px", backgroundColor: getColor(level) }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
};

export default ContributionGraph;
