import React from 'react'

interface SidebarToggleProps {
    setOpen?: (open: boolean) => void;
    open?: boolean;
}

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ setOpen, open }) => {
  return (
    <div>
    <style>
        {
            `
/* From Uiverse.io by vinodjangid07 */ 
#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(253, 255, 243);
  border-radius: 5px;
  transition-duration: .3s;
}

/* #checkbox:checked + .toggle .bars {
  margin-left: 13px;
} */

#checkbox:checked + .toggle #bar2 {
  transform: translateY(14px) rotate(60deg);
  margin-left: 0;
  transform-origin: right;
  transition-duration: .3s;
  z-index: 2;
}

#checkbox:checked + .toggle #bar1 {
  transform: translateY(28px) rotate(-60deg);
  transition-duration: .3s;
  transform-origin: left;
  z-index: 1;
}

#checkbox:checked + .toggle {
  transform: rotate(-90deg);
}
/* #checkbox:checked + .toggle #bar3 {
  transform: rotate(90deg);
  transition-duration: .3s;
  transform-origin:right;
} */

            `
        }
    </style>
    <input 
    id="checkbox" 
    type="checkbox"
    checked={open}
    onChange={() => setOpen && setOpen(!open)}
    />
    <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
    </label>
    </div>
  )
}

export default SidebarToggle