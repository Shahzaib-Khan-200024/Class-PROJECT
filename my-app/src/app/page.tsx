// 'use client';

// import { useRef, useState } from 'react';
// import { nanoid } from 'nanoid';

// export default function Home() {
//   const [tasks, setTasks] = useState([]);

//   const inputReference = useRef<HTMLInputElement>(null);

//   const handleAddTask = () => {
//     const inputValue = inputReference?.current?.value?.trim();
//     if (inputValue) {
//       setTasks([{ title: inputValue, id: nanoid() }, ...tasks]);
//       inputReference.current.value = ''; // Clear input after adding task
//     }
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       handleAddTask();
//     }
//   };

//   const handleRemoveTask = (id: string) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Task Manager
//         </h1>
//         <div className="flex gap-2 mb-4">
//           <input
//             ref={inputReference}
//             onKeyDown={handleKeyDown}
//             placeholder="Enter your task..."
//             className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             onClick={handleAddTask}
//             className="bg-purple-600 text-white rounded-lg px-4 py-2 transition-all hover:bg-purple-800 hover:shadow-lg hover:scale-105 active:scale-95"
//           >
//             Add Task
//           </button>
//         </div>
//         <ul className="space-y-2">
//           {tasks.map((elem) => (
//             <li
//               key={elem.id}
//               className="bg-gray-100 p-3 rounded-lg shadow-sm border-l-4 border-purple-500 flex justify-between items-center"
//             >
//               <span>{elem.title}</span>
//               <button
//                 onClick={() => handleRemoveTask(elem.id)}
//                 className="text-red-500 hover:text-red-700 transition-all"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


'use client';

import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';

interface Task {
  id: string;
  title: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const inputReference = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    const inputValue = inputReference.current?.value?.trim();  // Optional chaining
    if (inputValue) {
      setTasks((prevTasks) => [{ title: inputValue, id: nanoid() }, ...prevTasks]);
      if (inputReference.current) {  // Explicit null check
        inputReference.current.value = ''; // Clear input after adding task
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleRemoveTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Task Manager
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            ref={inputReference}
            onKeyDown={handleKeyDown}
            placeholder="Enter your task..."
            className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-purple-600 text-white rounded-lg px-4 py-2 transition-all hover:bg-purple-800 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((elem) => (
            <li
              key={elem.id}
              className="bg-gray-100 p-3 rounded-lg shadow-sm border-l-4 border-purple-500 flex justify-between items-center"
            >
              <span>{elem.title}</span>
              <button
                onClick={() => handleRemoveTask(elem.id)}
                className="text-red-500 hover:text-red-700 transition-all"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
