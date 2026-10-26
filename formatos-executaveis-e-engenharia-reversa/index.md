---
version: 1
title: Formatos Executáveis e Engenharia Reversa
summary: Investigue formatos e comportamentos a partir de bytes e código de máquina.
question:
  Como inferir formatos e comportamentos a partir de artefatos que não expõem diretamente
  suas estruturas ou seu código-fonte?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - Bytes, offsets e formatos; para a ramificação de programas, assembly e processos.
learningGoals:
  - produzir uma interpretação fundamentada de bytes ou execução e distinguir evidência observada de
    hipóteses.
draft: false
publishedAt: 2026-10-25
order: 6
featured: false
nodes:
  - ref: challenges:013-record-inspector
  - ref: challenges:014-mystery-image
  - ref: challenges:027-pe-inspector
  - ref: labs:007-compilation-lab
  - ref: labs:002-reverse-engineering-lab
  - ref: challenges:015-mystery-program
  - ref: challenges:029-minimal-debugger
  - ref: labs:006-processes-lab
    relatedRoadmap: sistemas-operacionais-processos-e-isolamento
  - ref: labs:013-syscalls-lab
    relatedRoadmap: sistemas-operacionais-processos-e-isolamento
edges:
  - from: challenges:013-record-inspector
    to: challenges:014-mystery-image
    type: recommended_next
  - from: challenges:014-mystery-image
    to: challenges:027-pe-inspector
    type: recommended_next
  - from: labs:007-compilation-lab
    to: labs:002-reverse-engineering-lab
    type: recommended_next
  - from: labs:002-reverse-engineering-lab
    to: challenges:015-mystery-program
    type: branch
  - from: labs:002-reverse-engineering-lab
    to: challenges:029-minimal-debugger
    type: branch
  - from: labs:006-processes-lab
    to: challenges:029-minimal-debugger
    type: suggested_preparation
    label: preparação
  - from: labs:013-syscalls-lab
    to: challenges:029-minimal-debugger
    type: suggested_preparation
    label: preparação
layout:
  primaryPath:
    - challenges:013-record-inspector
    - challenges:014-mystery-image
    - challenges:027-pe-inspector
  branchOrder:
    - challenges:015-mystery-program
    - challenges:029-minimal-debugger
groups:
  - title: Engenharia reversa de formatos
    nodes:
      - challenges:013-record-inspector
      - challenges:014-mystery-image
      - challenges:027-pe-inspector
  - title: Engenharia reversa de programas
    nodes:
      - labs:007-compilation-lab
      - labs:002-reverse-engineering-lab
      - challenges:015-mystery-program
      - challenges:029-minimal-debugger
---

## Sentido do percurso

A distinção entre inferência de um formato de arquivo e inferência de execução é didática: o primeiro ramo prioriza representação; o segundo, instruções, estados de processo e observabilidade.

## Escolhas e aprofundamentos

`027-pe-inspector` requer leitura segura de bytes, incluindo validação de limites e offsets; não envolve executar PE. `029-minimal-debugger` exige preparação em processos, sinais, ABI e syscalls, obtida nas trilhas 7 e 8.

## Conexões com outras trilhas

A trilha 1 prepara a leitura de formatos; as trilhas 7 e 8 preparam debugging.
