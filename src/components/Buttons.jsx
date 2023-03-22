


export const Buttons = ({ onPress, text }) => {

    return (
          <button className='px-2 py-1 text-teal-500 bg-blue-800 my-6 mx-0.5 rounded-sm font-bold' onClick={onPress}>{text}</button>
    );
  };
