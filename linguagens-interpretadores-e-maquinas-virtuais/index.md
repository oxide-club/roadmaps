---
version: 1
title: Linguagens, Interpretadores e Máquinas Virtuais
summary: Construa avaliadores e investigue a execução de linguagens e bytecode.
question: Como uma linguagem passa de representações sintáticas para execução?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - Estruturas de dados, expressões, stacks e controle de fluxo.
learningGoals:
  - construir avaliadores e um interpretador de bytecode com semântica, estados inválidos e testes
    definidos.
draft: false
publishedAt: 2026-10-25
order: 4
featured: true
nodes:
  - ref: challenges:019-rpn
  - ref: challenges:020-expressions
  - ref: challenges:021-bytecode
  - ref: labs:007-compilation-lab
  - ref: labs:020-dispatch-lab
edges:
  - from: challenges:019-rpn
    to: challenges:020-expressions
    type: recommended_next
  - from: challenges:020-expressions
    to: challenges:021-bytecode
    type: recommended_next
  - from: labs:007-compilation-lab
    to: challenges:021-bytecode
    type: suggested_preparation
    label: contexto de execução
  - from: challenges:021-bytecode
    to: labs:020-dispatch-lab
    type: branch
layout:
  primaryPath:
    - challenges:019-rpn
    - challenges:020-expressions
    - challenges:021-bytecode
  branchOrder:
    - labs:020-dispatch-lab
---

## Sentido do percurso

RPN permite começar pela avaliação antes de introduzir parsing mais rico; depois, a máquina de bytecode explicita instruções, estado e saltos. O laboratório histórico `009-vm-lab` não integra a progressão: o desafio `021-bytecode` cobre a construção da VM.

## Escolhas e aprofundamentos

O laboratório [`007-compilation-lab`](https://github.com/oxide-club/labs/tree/main/007-compilation-lab) é um percurso paralelo sobre toolchains e execução de programas nativos, não pré-requisito obrigatório para uma VM educacional. O laboratório [`020-dispatch-lab`](https://github.com/oxide-club/labs/tree/main/020-dispatch-lab) é uma extensão de investigação das estratégias de seleção de comportamento.

## Conexões com outras trilhas

A trilha [Compilação, ABI e Linking](/roadmaps/compilacao-abi-e-linking/) explica execução nativa e linking; a trilha [Rust Internals e Segurança de Abstrações](/roadmaps/rust-internals-e-seguranca-de-abstracoes/) explica dispatch no contexto de Rust.
