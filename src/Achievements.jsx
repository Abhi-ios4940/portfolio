import React from "react";
import "./App.css";

const Achievements = () => {
  const data = [
    {
      icon: "🔥",
      title: "50-Day Streak on LeetCode",
      desc: "Maintained a 50-day daily problem-solving streak on LeetCode.",
      date: "April 2025",
    },
    {
      icon: "💡",
      title: "150 LeetCode Questions Solved",
      desc: "Solved 150 coding questions, improving problem-solving skills.",
      date: "April 2025",
    },
    {
      icon: "🏆",
      title: "Placed in S1 List",
      desc: "Recognized among top 50% students.",
      date: "August 2024",
    },
  ];

  return (
    <div className="achievements">
      <h1>Achievements</h1>

      <div className="ach-container">
        {data.map((item, index) => (
          <div className="ach-card" key={index}>
            <div className="left">
              <div className="icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
            <div className="date">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;