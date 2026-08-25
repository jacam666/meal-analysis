import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold text-center text-black dark:text-white">Welcome to Playground Pantry Meal Analysis</h1>
      </main>
      <div className="flex flex-col items-center justify-center w-full  px-16 py-8 bg-white dark:bg-black">
        <h1 className="text-center py-6">September Meal Plan 1</h1>
        <table className="w-full max-w-6xl border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Meal</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Date</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Total Number</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Salmon en croute</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Jerk Chicken with Rice</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sausage, Mash and Gravy</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Spaghetti Bolognese</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Breaded Fish with Potato Waffles</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center w-full  px-16 py-8 bg-white dark:bg-black">
        <h1 className="text-center py-6">September Meal Plan 2</h1>
        <table className="w-full max-w-6xl border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Meal</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Date</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Total Number</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Southern Baked Chicken/ Potato Wedges</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Salmon Fish Cake</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Chicken and Leek Pie</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Beef Burrito</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Breaded Fish with Potato Waffles</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center w-full  px-16 py-8 bg-white dark:bg-black">
        <h1 className="text-center py-6">September Meal Plan 3</h1>
        <table className="w-full max-w-6xl border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Meal</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Date</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Total Number</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Chicken Pasta Salad</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pepperoni Roll Ups</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">BBQ Chicken Drumstick</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lasagne</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Breaded Fish with Potato Waffles</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
