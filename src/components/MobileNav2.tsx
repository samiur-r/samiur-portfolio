/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react'

interface MobileNavProps {
  open: boolean
  handleSetOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNav2: React.FC<MobileNavProps> = ({ open, handleSetOpen }) => {
  if (!open) return null
  return (
    <div className="h-screen w-full fixed bg-slate-800">
      <ul>
        <li>Item 1</li>
      </ul>
    </div>
  )
}

export default MobileNav2
