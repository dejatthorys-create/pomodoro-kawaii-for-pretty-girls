# 🌸 Kawaii Focus Timer

Um temporizador Pomodoro fofo e funcional desenvolvido para transformar a rotina de estudos em um momento mais leve e produtivo. Este projeto foi criado com foco em **User Experience (UX)** e microinterações sonoras satisfatórias.



## ✨ Funcionalidades

* **Timer Personalizável**: Atalhos para 15, 25 e 50 minutos, além de opção de tempo customizado.
* **Sistema de Ciclos**: Contador automático de ciclos de foco concluídos com persistência de dados.
* **Feedback Sonoro**:
    * Sons de clique satisfatórios ao interagir com botões.
    * Som de digitação (estilo máquina de escrever) no bloco de notas.
    * Alarme fofo ao finalizar o tempo de foco.
* **Bloguinho de Notas**: Área dedicada para anotar metas do dia, com salvamento local.
* **Rádio Lofi**: Atalhos rápidos para playlists de estudo no YouTube.
* **Design Kawaii**: Interface em tons pastel, totalmente responsiva e amigável.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído "vanilla" (puro), focado em dominar os fundamentos da web:

1.  **HTML5**: Estruturação semântica dos elementos.
2.  **CSS3**: Design responsivo e estilização personalizada.
3.  **JavaScript**:
    * Manipulação de DOM.
    * API de Áudio para microinterações.
    * **LocalStorage**: Para manter o progresso dos ciclos mesmo após fechar o navegador.
    * Lógica de temporização com `setInterval`.

## 🛠️ Desafios Técnicos Superados

Durante o desenvolvimento, enfrentei e resolvi desafios reais de engenharia de software:
* **Gestão de Áudio**: Implementação de lógica para evitar atrasos em sons curtos usando `currentTime = 0`.
* **Segurança de Navegador**: Resolução de erros de *OpaqueResponseBlocking* e *NotSupportedError* migrando de ativos externos para ativos locais.
* **Persistência**: Uso de `localStorage` para garantir que a usuária não perca seu progresso ao atualizar a página.

## 🎨 Como rodar o projeto

1.  Clone este repositório ou baixe a pasta do projeto.
2.  Certifique-se de que os arquivos de áudio (`click.mp3`, `type.mp3`, `finish.mp3`) estão na mesma pasta que o `index.html`.
3.  Abra o projeto usando o **Live Server** no VS Code para garantir que todas as funcionalidades de áudio funcionem corretamente.

---
Desenvolvido com 💖 por Michele Vegas como parte da jornada para a área de Tecnologia (ADS).