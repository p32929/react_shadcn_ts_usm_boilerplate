import React from 'react'
import { Button } from "@/components/ui/button";
import { controller } from '@/lib/StatesController';
import { useSelector } from 'react-redux';

interface Props {

}

const App: React.FC<Props> = (props) => {
  // Hooks
  const states = useSelector(() => controller.states);

  return (
    <div>
      <h1>Counter: {states.counter}</h1>
      <Button onClick={() => {
        controller.increase()
      }}>+++</Button>
      <Button onClick={() => {
        controller.decrease()
      }}>---</Button>
    </div>
  )

}

export default App;