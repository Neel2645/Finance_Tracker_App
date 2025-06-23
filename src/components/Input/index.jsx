import './styles.css'

const Input = ({label,state,placeholder,setState,type}) => {
  return (
    <div className='input-wrapper'>
        <p className='label-input'>{label}</p>
        <input
            type={type}
            value={state}
            placeholder={placeholder}
            onChange={(e) => setState(e.target.value)}
            className='custom-input'
        />
    </div>
  )
}

export default Input