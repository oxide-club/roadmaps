---
version: 1
title: Compilação, ABI e Linking
summary: Investigue como compilação, ABI, símbolos e bibliotecas cooperam na execução.
question: Como código, símbolos, interfaces binárias e bibliotecas cooperam na execução de programas?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - Compilar C, manipular object files e inspecionar código de máquina básico.
learningGoals:
  - explicar fronteiras entre compilador, linker, loader, runtime e kernel e relacionar defeitos a
    violações de seus contratos.
draft: false
publishedAt: 2026-10-25
order: 7
featured: true
nodes:
  - ref: labs:007-compilation-lab
  - ref: labs:012-abi-lab
  - ref: labs:014-dynamic-linking-lab
  - ref: challenges:025-rust-c-ffi
  - ref: challenges:028-function-interposition
  - ref: labs:020-dispatch-lab
  - ref: labs:023-elf-hardening-lab
  - ref: labs:022-page-protection-lab
    relatedRoadmap: sistemas-operacionais-processos-e-isolamento
edges:
  - from: labs:007-compilation-lab
    to: labs:012-abi-lab
    type: recommended_next
  - from: labs:007-compilation-lab
    to: labs:014-dynamic-linking-lab
    type: recommended_next
  - from: labs:012-abi-lab
    to: challenges:025-rust-c-ffi
    type: convergence
  - from: labs:014-dynamic-linking-lab
    to: challenges:025-rust-c-ffi
    type: convergence
  - from: labs:014-dynamic-linking-lab
    to: challenges:028-function-interposition
    type: branch
  - from: labs:007-compilation-lab
    to: labs:020-dispatch-lab
    type: branch
  - from: labs:014-dynamic-linking-lab
    to: labs:023-elf-hardening-lab
    type: branch
  - from: labs:022-page-protection-lab
    to: labs:023-elf-hardening-lab
    type: suggested_preparation
    label: preparação
layout:
  primaryPath:
    - labs:007-compilation-lab
    - labs:014-dynamic-linking-lab
  branchOrder:
    - challenges:028-function-interposition
    - labs:020-dispatch-lab
    - labs:023-elf-hardening-lab
---

## Sentido do percurso

A exploração começa pelo ciclo fonte–object file–executável e se bifurca entre ABI, linking dinâmico, code generation e hardening. A interposição é aplicação dos contratos de resolução dinâmica, não um substituto do laboratório que os investiga.

## Escolhas e aprofundamentos

Após a base, há quatro aprofundamentos:

- [`025-rust-c-ffi`](https://github.com/oxide-club/challenges/tree/main/025-rust-c-ffi): interoperabilidade e ownership através da ABI.
- [`028-function-interposition`](https://github.com/oxide-club/challenges/tree/main/028-function-interposition): interposição preservando comportamento, erros e reentrancy.
- [`020-dispatch-lab`](https://github.com/oxide-club/labs/tree/main/020-dispatch-lab): observação de generics, trait objects e código gerado.
- [`023-elf-hardening-lab`](https://github.com/oxide-club/labs/tree/main/023-elf-hardening-lab): análise de mitigações e políticas no ELF.

O laboratório [`022-page-protection-lab`](https://github.com/oxide-club/labs/tree/main/022-page-protection-lab) é preparação cruzada importante para o hardening, não parte do núcleo obrigatório de linking.

## Conexões com outras trilhas

As trilhas [Rust Internals e Segurança de Abstrações](/roadmaps/rust-internals-e-seguranca-de-abstracoes/), [Formatos Executáveis e Engenharia Reversa](/roadmaps/formatos-executaveis-e-engenharia-reversa/) e [Sistemas Operacionais, Processos e Isolamento](/roadmaps/sistemas-operacionais-processos-e-isolamento/) aproveitam diretamente essa base.
