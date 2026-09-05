"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type MealRow = {
  meal: string;
  date: string;
  totalKey: string;
};

type MealPlan = {
  title: string;
  rows: MealRow[];
};

const STORAGE_KEY = "meal-analysis-totals";

const mealPlans: MealPlan[] = [
  {
    title: "September Meal Plan 1",
    rows: [
      {
        meal: "Spaghetti Bolognese",
        date: "03/09/2026",
        totalKey: "sept-plan1-spaghetti-03-09",
      },
      {
        meal: "Breaded Fish with Potato Waffles",
        date: "04/09/2026",
        totalKey: "sept-plan1-fish-04-09",
      },
      {
        meal: "Salmon en croute",
        date: "07/09/2026",
        totalKey: "sept-plan1-salmon-07-09",
      },
      {
        meal: "Jerk Chicken with Rice",
        date: "08/09/2026",
        totalKey: "sept-plan1-jerk-chicken-08-09",
      },
      {
        meal: "Sausage, Mash and Gravy",
        date: "09/09/2026",
        totalKey: "sept-plan1-sausage-09-09",
      },
      {
        meal: "Spaghetti Bolognese",
        date: "10/09/2026",
        totalKey: "sept-plan1-spaghetti-10-09",
      },
      {
        meal: "Breaded Fish with Potato Waffles",
        date: "11/09/2026",
        totalKey: "sept-plan1-fish-11-09",
      },
      {
        meal: "Salmon en croute",
        date: "28/09/2026",
        totalKey: "sept-plan1-salmon-28-09",
      },
      {
        meal: "Jerk Chicken with Rice",
        date: "29/09/2026",
        totalKey: "sept-plan1-jerk-chicken-29-09",
      },
      {
        meal: "Sausage, Mash and Gravy",
        date: "30/09/2026",
        totalKey: "sept-plan1-sausage-30-09",
      },
    ],
  },
  {
    title: "September Meal Plan 2",
    rows: [
      { meal: "Southern Baked Chicken/ Potato Wedges", date: "14/09/2026", totalKey: "sept-plan2-southern-baked-chicken" },
      { meal: "Salmon Fish Cake", date: "15/09/2026", totalKey: "sept-plan2-salmon-fish-cake" },
      { meal: "Chicken and Leek Pie", date: "16/09/2026", totalKey: "sept-plan2-chicken-leek-pie" },
      { meal: "Beef Burrito", date: "17/09/2026", totalKey: "sept-plan2-beef-burrito" },
      { meal: "Breaded Fish with Potato Waffles", date: "18/09/2026", totalKey: "sept-plan2-fish-waffles" },
    ],
  },
  {
    title: "September Meal Plan 3",
    rows: [
      { meal: "Chicken Pasta Salad", date: "21/09/2026", totalKey: "sept-plan3-chicken-pasta-salad" },
      { meal: "Pepperoni Roll Ups", date: "22/09/2026", totalKey: "sept-plan3-pepperoni-roll-ups" },
      { meal: "BBQ Chicken Drumstick", date: "23/09/2026", totalKey: "sept-plan3-bbq-chicken-drumstick" },
      { meal: "Lasagne", date: "24/09/2026", totalKey: "sept-plan3-lasagne" },
      { meal: "Breaded Fish with Potato Waffles", date: "25/09/2026", totalKey: "sept-plan3-fish-waffles" },
    ],
  },
  {
    title: "October Meal Plan 1",
    rows: [
      {
        meal: "Spaghetti Bolognese",
        date: "01/10/2026",
        totalKey: "oct-plan1-spaghetti-01-10",
      },
      {
        meal: "Breaded Fish with Potato Waffles",
        date: "02/10/2026",
        totalKey: "oct-plan1-fish-02-10",
      },
      {
        meal: "Salmon en croute",
        date: "19/10/2026",
        totalKey: "oct-plan1-salmon-19-10",
      },
      {
        meal: "Jerk Chicken with Rice",
        date: "20/10/2026",
        totalKey: "oct-plan1-jerk-chicken-20-10",
      },
      {
        meal: "Sausage, Mash and Gravy",
        date: "21/10/2026",
        totalKey: "oct-plan1-sausage-21-10",
      },
      {
        meal: "Spaghetti Bolognese",
        date: "22/10/2026",
        totalKey: "oct-plan1-spaghetti-22-10",
      },
      {
        meal: "Breaded Fish with Potato Waffles",
        date: "23/10/2026",
        totalKey: "oct-plan1-fish-23-10",
      },
    ],
  },
  {
    title: "October Meal Plan 2",
    rows: [
      { meal: "Southern Baked Chicken/ Potato Wedges", date: "05/10/2026", totalKey: "oct-plan2-southern-baked-chicken" },
      { meal: "Salmon Fish Cake", date: "06/10/2026", totalKey: "oct-plan2-salmon-fish-cake" },
      { meal: "Chicken and Leek Pie", date: "07/10/2026", totalKey: "oct-plan2-chicken-leek-pie" },
      { meal: "Beef Burrito", date: "08/10/2026", totalKey: "oct-plan2-beef-burrito" },
      { meal: "Breaded Fish with Potato Waffles", date: "09/10/2026", totalKey: "oct-plan2-fish-waffles" },
    ],
  },
  {
    title: "October Meal Plan 3",
    rows: [
      { meal: "Chicken Pasta Salad", date: "12/10/2026", totalKey: "oct-plan3-chicken-pasta-salad" },
      { meal: "Pepperoni Roll Ups", date: "13/10/2026", totalKey: "oct-plan3-pepperoni-roll-ups" },
      { meal: "BBQ Chicken Drumstick", date: "14/10/2026", totalKey: "oct-plan3-bbq-chicken-drumstick" },
      { meal: "Lasagne", date: "15/10/2026", totalKey: "oct-plan3-lasagne" },
      { meal: "Breaded Fish with Potato Waffles", date: "16/10/2026", totalKey: "oct-plan3-fish-waffles" },
    ],
  },
];

export default function Home() {
  const [savedTotals, setSavedTotals] = useState<Record<string, string>>({});
  const [draftTotals, setDraftTotals] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedTotalsValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedTotalsValue) {
      return;
    }

    try {
      const parsedTotals = JSON.parse(savedTotalsValue) as Record<string, string>;
      setSavedTotals(parsedTotals);
      setDraftTotals(parsedTotals);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const persistTotals = (nextTotals: Record<string, string>) => {
    setSavedTotals(nextTotals);
    setDraftTotals(nextTotals);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTotals));
  };

  const handleDraftChange = (key: string, value: string) => {
    setDraftTotals((currentDrafts) => ({
      ...currentDrafts,
      [key]: value,
    }));
  };

  const handleSave = (key: string) => {
    const value = draftTotals[key] ?? "";

    if (value === "") {
      const nextTotals = { ...savedTotals };
      delete nextTotals[key];
      persistTotals(nextTotals);
      return;
    }

    const nextTotals = { ...savedTotals, [key]: value };
    persistTotals(nextTotals);
  };

  const handleTotalDelete = (key: string) => {
    const nextTotals = { ...savedTotals };
    delete nextTotals[key];
    persistTotals(nextTotals);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black px-3 py-4 font-sans dark:bg-black sm:px-4 lg:px-6">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-18 px-16 bg-black dark:bg-black sm:items-start">
        <Image
          src="/images/3d-logo-image-removebg-preview.png"
          alt="Playground Pantry Logo"
          width={400}
          height={400}
          loading="eager"
          className="mb-8 justify-center items-center mx-auto"
        />
        <h1 className="text-3xl md:text-6xl font-bold text-center text-white dark:text-white"
          style={{ fontFamily: "'Noto Serif Dives Akuru', serif" }}
        >
          Welcome to Playground Pantry Meal Analysis</h1>
      </main>

      {mealPlans.map((plan) => (
        <div key={plan.title} className="mt-4 flex w-full max-w-6xl flex-col items-center justify-center rounded-lg bg-black px-2 py-4 dark:bg-black sm:px-4">
          <h1 className="text-center text-white text-2xl py-6">{plan.title}</h1>
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 text-white py-2">Meal</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 text-white py-2">Date</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 text-white py-2">Total Number</th>
              </tr>
            </thead>
            <tbody>
              {plan.rows.map((row) => (
                <tr key={row.totalKey}>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 text-white py-2">{row.meal}</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 text-white py-2">{row.date}</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-2 text-white py-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        value={draftTotals[row.totalKey] ?? ""}
                        onChange={(event) => handleDraftChange(row.totalKey, event.target.value)}
                        className="w-full min-w-[80px] rounded border border-gray-300 bg-white px-2 py-1 text-center text-gray-900 outline-none ring-0 focus:border-blue-500 dark:border-gray-600 dark:bg-black"
                        placeholder="0"
                      />
                      <button
                        type="button"
                        onClick={() => handleSave(row.totalKey)}
                        className="rounded border border-blue-300 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 transition hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTotalDelete(row.totalKey)}
                        className="rounded border border-red-300 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 transition hover:bg-red-100 dark:border-red-700 dark:bg-red-900/30 dark:text-red-200"
                        aria-label={`Delete total for ${row.meal}`}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
