import { useState } from 'react'
import { files2 as filesArr, type File } from './files.ts'
import './App.css'

const MARGIN_PX = 20

const getSlashes = ({ depth }: { depth: number }): JSX.Element[] => {
  const slashesArr = []
  for (let i = 1; i < depth; i++) {
    slashesArr.push(
      <span key={depth} style={{ marginLeft: `${i * MARGIN_PX}px`, position: 'absolute', color: 'gray' }}>|</span>
    )
  } 
  return slashesArr
}

function Entry ({ entry, depth, root, directory }: { entry: File, depth: number, root?: boolean, directory?: string }): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false)
  const slashesElement = getSlashes({ depth })
  const newDirectory = directory ? directory + `/${entry.name}` : `./${entry.name}` 
  return (
    <>
    <div style={{ position: 'absolute', right: '50px', }}>
      {newDirectory}
    </div>
    <div>
      {entry?.children 
        ? <button
          className='left-icon'
          onClick={() => { setIsExpanded(prev => !prev) }}>
            <h3>{isExpanded ? '-' : '+'}</h3>
          </button>
        : <h3 className='left-icon'>Fil</h3>
      }
      {!root && slashesElement}
        <span style={{ marginLeft: `${depth * MARGIN_PX}px` }}>{entry.name}</span>
    </div>
    {isExpanded && entry?.children && 
      entry.children.map(entry => <Entry key={entry.name} entry={entry} depth={depth + 1} directory={newDirectory} />)
    }
    </>
  )
}

export default function App(): JSX.Element {
  return (
    <>
      {filesArr.map(entry => <Entry key={entry.name} entry={entry} depth={1} root={true} />)}
    </>
  )
}
