---
version: 1
title: Representação de Dados e Protocolos
summary: Investigue bytes, codificações, parsing e robustez no processamento de dados.
question: Como dados são representados, transformados e interpretados em fluxos de bytes?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - Loops, funções, arrays e leitura/escrita de dados.
learningGoals:
  - interpretar bytes com contratos explícitos, diferenciar layout em memória de formato externo e
    explicar erros de framing e parsing.
draft: false
publishedAt: 2026-10-25
order: 1
featured: true
nodes:
  - ref: challenges:001-wc
  - ref: challenges:004-hexdump
  - ref: labs:001-binary-lab
  - ref: challenges:005-base64
  - ref: challenges:013-record-inspector
  - ref: labs:011-protocol-lab
  - ref: labs:021-fuzzing-lab
  - ref: challenges:003-rle
  - ref: challenges:006-stream-search
edges:
  - from: challenges:001-wc
    to: challenges:004-hexdump
    type: recommended_next
  - from: challenges:004-hexdump
    to: labs:001-binary-lab
    type: recommended_next
  - from: labs:001-binary-lab
    to: challenges:005-base64
    type: recommended_next
  - from: challenges:005-base64
    to: challenges:013-record-inspector
    type: recommended_next
  - from: challenges:013-record-inspector
    to: labs:011-protocol-lab
    type: recommended_next
  - from: labs:011-protocol-lab
    to: labs:021-fuzzing-lab
    type: recommended_next
  - from: challenges:004-hexdump
    to: challenges:003-rle
    type: branch
  - from: challenges:004-hexdump
    to: challenges:006-stream-search
    type: branch
layout:
  primaryPath:
    - challenges:001-wc
    - challenges:004-hexdump
    - labs:001-binary-lab
    - challenges:005-base64
    - challenges:013-record-inspector
    - labs:011-protocol-lab
    - labs:021-fuzzing-lab
  branchOrder:
    - challenges:003-rle
    - challenges:006-stream-search
---

## Sentido do percurso

O percurso começa com leitura e inspeção de dados, avança para contratos de representação e culmina em mensagens parciais e entradas adversariais. Não exige programação de redes desde a primeira atividade; o foco é a semântica do stream.

## Escolhas e aprofundamentos

Os desafios [`003-rle`](https://github.com/oxide-club/challenges/tree/main/003-rle) (compressão) e [`006-stream-search`](https://github.com/oxide-club/challenges/tree/main/006-stream-search) (busca incremental) são ramificações após os primeiros exercícios de manipulação de bytes. O laboratório de fuzzing é uma investigação posterior à compreensão de parsing e limites.

## Conexões com outras trilhas

Os desafios de formatos e engenharia reversa da trilha 6 reutilizam os mesmos conhecimentos de offsets, limites e endianness.
