import React, { useState, useEffect } from "react";

const TimerPromo = () => {
  const [counter, setCounter] = useState(60); // Mulai dari 60 detik

  // Mengurangi nilai counter setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 59)); // Reset ke 59 jika mencapai 0
    }, 1000);

    return () => clearInterval(timer); // Membersihkan interval saat komponen tidak digunakan
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 15 } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 10 } as React.CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 24 } as React.CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": counter } as React.CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default TimerPromo;
