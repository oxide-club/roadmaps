# Roadmaps do Oxide Club

As trilhas conectam desafios, laboratórios e notas técnicas em caminhos de estudo dos fundamentos da Ciência da Computação. Cada trilha apresenta uma pergunta, objetivos, público e conhecimentos de entrada. O participante pode começar em qualquer material para o qual tenha os conhecimentos necessários.

Cada diretório `<slug>/index.md` contém uma trilha. O nome do diretório define seu endereço no site. O frontmatter descreve os materiais e suas relações; o corpo explica o sentido pedagógico, as escolhas e os limites. Use [o modelo](templates/index.md) e o [guia de contribuição](CONTRIBUTING.md).

## Validar

Use Node.js 24 ou posterior. Instale as dependências com `npm ci`. Execute `npm test` e `npm run check`. A validação local confere metadados, referências internas, datas e ausência de ciclos. O site também confere se cada material existe e está publicado nas fontes canônicas.

## Referências canônicas

| Referência | Fonte | Página no site |
| --- | --- | --- |
| `challenges:001-wc` | `challenges/001-wc/index.md` | `/desafios/001-wc` |
| `labs:001-binary-lab` | `labs/001-binary-lab/index.md` | `/labs/001-binary-lab/` |
| `notes:<slug>` | `notes/<slug>/index.md` | `/notas/<slug>/` |

Títulos, resumos, dificuldade e destinos pertencem às fontes canônicas. Não copie esses metadados para os nós. Notas não exigem prefixo numérico ou dificuldade e podem participar de qualquer parte da trilha.

## Relações e apresentação

- `recommended_next`: progressão recomendada.
- `suggested_preparation`: preparação ou contexto de apoio, sem bloqueio de acesso.
- `branch`: alternativa de aprofundamento.
- `convergence`: encontro de conhecimentos de caminhos diferentes.

Todas as relações têm direção. O grafo deve ser acíclico; referências adicionais que criariam ciclos podem ser explicadas no corpo do texto. `label` explica o sentido específico de uma relação. Uma seta nunca cria um requisito obrigatório.

`layout.primaryPath` destaca um caminho já conectado no grafo. `layout.branchOrder` orienta a ordem das ramificações. `groups` nomeia caminhos paralelos. O site calcula posições e setas a partir dessas orientações e das dimensões reais dos blocos. A largura da tela pode exigir outra organização. O conteúdo não declara coordenadas.

`relatedRoadmap` associa um nó a outra trilha publicada, sem duplicar a página do material. O mesmo material pode aparecer uma vez em cada trilha. Consulte a [proveniência do catálogo](docs/catalogue-source.md).

## Prévia e publicação

No repositório do site, use `ROADMAPS_SOURCE=/caminho/absoluto/roadmaps npm run dev`. Essa seleção local não é permitida em CI ou produção. Não edite `.content/roadmaps`, que é gerado pelo site.

Disponibilize e valide este repositório antes de integrar a versão do site que exige esta fonte. A automação usa `WEBSITE_DEPLOY_TOKEN` para solicitar a validação e a publicação do site após mudanças na `main`. Um disparo aceito não confirma deploy concluído.

Para remover um material ou torná-lo rascunho, atualize primeiro as trilhas que o referenciam. Preserve as atribuições e os avisos de licença; consulte [LICENSING.md](LICENSING.md).
