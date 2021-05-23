import React from 'react';
import avatar from '@src/assets/images/avatars/avatar-blank.png';

const App = (): JSX.Element => {
  return (
    <section>
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src={avatar} alt="" />
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="mb-4">
              <p className="text-xl leading-tight">Carmelo Buelvas Comas</p>
              <p className="text-sm leading-tight text-grey-dark">Software Engineer</p>
            </div>
            <div>
              <button
                type="submit"
                className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
