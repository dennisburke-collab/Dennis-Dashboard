import React, { useState } from 'react';

function App() {
  const defaultSchedule = [
    { period: 1, time: "9:30 - 10:09", title: "Sculpture - Student Teaching" },
    { period: 2, time: "—", title: "No second hour" },
    { period: 3, time: "—", title: "Third hour — Free" },
    { period: 4, time: "—", title: "Illustration" },
    { period: 5, time: "—", title: "House Wiring" },
    { period: 6, time: "—", title: "Sixth hour — Free" },
    { period: 7, time: "—", title: "Graphic Design" },
    { period: 8, time: "—", title: "Graphic Design" }
  ];

  const [tasks, setTasks] = useState([
    { id: 1, title: "Logo project due (GD1)", due: "2025-09-12", completed: false },
    { id: 2, title: "Safety quiz review (House Wiring)", due: "2025-09-10", completed: true }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Teaching Dashboard</h1>

      <section style={{ marginBottom: 20 }}>
        <h2>Today — Summary</h2>
        <p><strong>First Class:</strong> Sculpture - Student Teaching</p>
        <p><strong>Time:</strong> 9:30 AM - 10:09 AM</p>
        <p><strong>Reminder:</strong> No second hour — Third hour free. 4th: Illustration. 5th: House Wiring. 6th free. 7th/8th: Graphic Design.</p>
        <h3>Today's Schedule</h3>
        <ul>
          {defaultSchedule.map(item => (
            <li key={item.period}>
              {item.time !== "—" ? item.time + " — " : ""}{item.title}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Today's Tasks</h2>
        <ul>
          {tasks.map(t => (
            <li key={t.id}>
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title} — {t.due}</span>
              <button onClick={() => toggleTask(t.id)} style={{ marginLeft: 10 }}>
                {t.completed ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
