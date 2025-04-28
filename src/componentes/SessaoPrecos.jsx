const SessaoPrecos = ({precoAtual, precoAnterior}) => {
    return(
        <>
        <div className="container-preco">
           <p className="preco-atual">$ {precoAtual}</p>
           <p className="preco-anterior">$ {precoAnterior}</p>
        </div>
        </>
    )
}
export default SessaoPrecos;