
const Button = ({color, onClick}) => {

  return (
    <button  onClick={onClick} style={{ backgroundColor: color }} className='btn'>
      More artists
    </button>)
}

Button.defaultProps = {
  color: 'steelblue',
}



export default Button
