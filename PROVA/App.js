import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div class="header"> 

        <h1>Ac 1 - Internet Web</h1>
         <h3>O que é React?</h3> 
          <p>Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros. É uma biblioteca que utiliza a linguagem de programação Javascript. Não pode ser chamada de framework, visto que não possui regras e organizações de arquivos restritos em seus códigos. Além disso, tem como objetivo facilitar a conexão entre diferentes partes de uma página. Por ser voltado exclusivamente à criação de UIs, o React é usado somente em front-end.</p>
          <h3>O que é SPA?</h3>
          <p>SPA significa Single Page Application trabalha como uma aplicação que carrega apenas um documento Web e depois atualiza o conteúdo do documento por meio de APIs JavaScript. Ele traz melhor experiência do usuário através da rápida navegação entre as páginas. Porém não significa que a aplicação terá apenas uma página, mesmo que o nome expecífique a “Aplicação de Página Única”.
          Um exemplo de SPA é o Gmail, que ao abrirmos, podemos executar ações sem recarregar a página inteira, como enviar uma mensagem.</p>
          <h3>Para que serve o NPX no React?</h3>
          <p> Basicamente, ele cria uma instalação temporária do React de modo que, a cada novo projeto, você esteja usando a versão mais recente do React não qualquer versão atual no momento da execução da instalação global acima. O comando NPX é o executor de pacote usado pelo npm para executar pacotes no lugar de uma instalação global. Diferentemente do npm que é o gerenciador de pacotes node e instala na sua máquina um pacote para que você possa utiliza-lo em outros projetos sem precisar baixar novamente. Já o npx irá usar o pacote sem precisar baixar em sua máquina, sendo assim permite a instalação de um pacote no seu projeto ou até mesmo usar esse pacote, sem baixar os arquivos em sua máquina.</p>
        
        <div class="titulo">
        <h2>Luiza e Nicolle</h2>
        </div>

        <div class="linha">
        <div class="coluna-50">
          <div class="conteudo">
          
          <h3>Cor preferida: Preto</h3>
          <h3>Bairro: Aclimação</h3>
          <h3>Cantor preferido: Coldplay</h3>
          <h3>Idade: 16 anos</h3>
         
          </div>
        </div>

        <div class="coluna-50">
          <div class="conteudo">
            
            <h3>Cor preferida: Preto</h3>
            <h3>Bairro: Moema</h3>
            <h3>Cantor preferido: Imagine Dragons </h3>
            <h3>Idade: 17 anos</h3>
            
          </div>
        </div>  

        </div>
                
        </div>
      </header>
    </div>
  );
}

export default App;
