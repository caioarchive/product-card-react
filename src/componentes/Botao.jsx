import Icone from '../assets/icon-cart.svg'
const Botao = () => {
    return(
        <>
        
        <button className='botaoComprar'>
            <img src={Icone} alt="" className='icone    ' />
            Add to Cart
        </button>
        </>
    )
}
export default Botao;