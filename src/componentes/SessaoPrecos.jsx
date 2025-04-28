const SessaoPrecos = ({precoAtual, precoAnterior, desconto}) => {
    return(
        <>
        <div className="container-preco">
           <p className="preco-atual">$ {precoAtual}</p>
           {desconto == true ?
           <p className="preco-anterior">$ {precoAnterior} </p>
           :
           ""
            }   
        </div>
        </>
    )
}
export default SessaoPrecos;