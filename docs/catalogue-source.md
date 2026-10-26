# Origem e transposição do catálogo

O catálogo inicial transpõe as dez trilhas do documento “Oxide Club — Trilhas curriculares do catálogo atual”, versão editorial de 25 de outubro de 2026, fornecido pelo mantenedor. As fontes das atividades são os repositórios `oxide-club/challenges` e `oxide-club/labs`.

As cinquenta atividades elegíveis foram conferidas nos arquivos canônicos locais. Não foram incluídos os laboratórios `004-arena-lab` e `009-vm-lab` nem os desafios `026-no-std` e `030-windows-inspector`. `007-compilation-lab` permanece ativo.

Os diagramas e as explicações textuais foram considerados em conjunto. Foram preservadas as seguintes distinções:

- A trilha de compilação começa com duas ramificações a partir de `007-compilation-lab`. A ordem da lista textual não cria uma dependência ABI → dynamic linking ausente do mapa.
- O debugger parte da investigação de engenharia reversa e se apoia em processos e syscalls. A lista textual não cria uma dependência de `015-mystery-program` para o debugger.
- IPC se apoia em processos e sincronização. Isolamento não é uma etapa anterior obrigatória para IPC cooperativo.
- GPU → attention é aprofundamento opcional, representado como ramificação e descrito com seu rótulo. Não bloqueia o laboratório de attention, que admite execução em CPU.
- O formato de imagem serve como contexto para engenharia reversa, sem tornar essa investigação obrigatória para a trilha gráfica.

O primeiro percurso dos caminhos paralelos orienta o destaque visual. Isso não altera a independência dos demais caminhos. As quatro trilhas destacadas seguem a recomendação editorial da seção 14 do catálogo.

Os textos de público explicitam que os conhecimentos de entrada já são necessários. Os resumos são adaptações editoriais; perguntas, conhecimentos de entrada e marcos de aprendizagem preservam a formulação da fonte.

O contrato aceita notas técnicas desde esta versão. Nenhuma nota foi associada por suposição às dez trilhas iniciais. O modelo contém uma referência sintética de nota para explicar o formato; ela não integra o catálogo.
