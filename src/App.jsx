import React from 'react'
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import FilterButtons from './components/Filterbuttons';

const App = () => {
  return (
     <main className="min-h-screen bg-slate-950">

      <div className="max-w-4xl mx-auto py-16 px-6">

        <Header />
        <TodoInput/>
        <FilterButtons />
      </div>

    </main>

  )
}

export default App
