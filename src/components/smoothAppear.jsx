import { useEffect, useState } from "react";

export default function SmoothAppear({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-80'
      }`}
    >
      {children}
    </div>
  );
}
