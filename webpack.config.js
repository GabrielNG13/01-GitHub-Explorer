//Exportando o caminho raiz do projeto
const path = require('path')

module.exports = {
    //Usando require para acessar o arquivo ao invés de src/index.js
    //Evita problemas de incompatibilidade de / ou \ entre SOs
    entry: path.resolve(__dirname,'src','index.jsx'),
    //Define o arquivo de saída
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    //Identifica as extensões que podem ser lidas
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //Descreve como a aplicação vai se comportar quando for
    //efetuada a importação de cada tipo de arquivo
    module: {
        //Regras contendo um objeto para cada tipo de arquivo
        //Verificações através de expressões regulares
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
}