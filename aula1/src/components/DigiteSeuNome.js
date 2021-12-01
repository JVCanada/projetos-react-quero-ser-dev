import React, { useState, Component } from 'react'

    // USANDO CLASSE:

    class CadastroNome extends Component {

        constructor(props) {
            super(props)
            this.state = {
                nome: ''
            }
        }
            
        render() {
            return (
                <div>
                    <h2> { this.state.nome } </h2>
                    <input type="text"
                    placeholder="Digite seu nome"
                    value={this.state.nome}
                    onChange={(event) => this.setState({nome:event.target.value})} />
                </div>
            )
        }
    
    }

    // USANDO FUNÇÃO:

    // export default props => {

    // const [nome, setNome] = useState('')

    // return(
    //     <>
    //         <div>
    //             <h2> { nome } </h2>
    //             <input type="text"
    //             placeholder="Digite seu nome"
    //             value={ nome }
    //             onChange={ event => setNome(event.target.value) }/> 


    //         </div>

    //     </>
    // )
    // }

    
export default CadastroNome

