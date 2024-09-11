const start = () => {


    while (true) {
        let opcao = "sair"
        switch(opcao){
            case "cadastrar": 
                console.log("Cadastro")
                break
            case "listar":
                console.log("listar")
                break
            case "sair":
                return    
        }
    }
}

start()