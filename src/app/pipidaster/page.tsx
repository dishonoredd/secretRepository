"use client";

import { useAppSelector } from "../store";

export default function Window() {
  const data = useAppSelector((state) => state.formSlice.data);

  const fullName = data.surname + " " + data.name + " " + data.otchestvo;

  return (
    <div className="bg-purple-600 flex items-center justify-center h-screen">
      <p className="text-white">
        Если бы вы были ебаным пидорасом вас бы звали {fullName}
      </p>
    </div>
  );
}
