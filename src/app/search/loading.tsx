import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <Loader className="animate-spin w-full" size={40}></Loader>
    </div>
  )
}

export default loading