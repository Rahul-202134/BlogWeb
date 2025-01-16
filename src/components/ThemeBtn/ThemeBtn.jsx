import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';

export default function ThemeBtn() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.mode);

  const onChangeBtn = () => {
    dispatch(toggleTheme());
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer mt-2">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode} 
        onChange={onChangeBtn}
      />
      <div
        className="border-2 border-black w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
        rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
        after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
    </label>
  );
}
