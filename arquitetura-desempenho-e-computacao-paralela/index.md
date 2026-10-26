---
version: 1
title: Arquitetura, Desempenho e Computação Paralela
summary: Investigue como localidade, organização de dados e paralelismo afetam custos.
question: Como hierarquia de memória, organização de dados e paralelismo influenciam o custo de algoritmos?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - Arrays e matrizes, noções de complexidade e medições reproduzíveis.
learningGoals:
  - comparar implementações corretas, medir com metodologia documentada e explicar como padrões de
    acesso e paralelismo afetam custos observados.
draft: false
publishedAt: 2026-10-25
order: 10
featured: false
nodes:
  - ref: labs:005-cache-lab
  - ref: labs:008-matrix-lab
  - ref: labs:017-gpu-lab
  - ref: labs:018-attention-lab
edges:
  - from: labs:005-cache-lab
    to: labs:008-matrix-lab
    type: recommended_next
  - from: labs:008-matrix-lab
    to: labs:017-gpu-lab
    type: branch
  - from: labs:008-matrix-lab
    to: labs:018-attention-lab
    type: branch
  - from: labs:017-gpu-lab
    to: labs:018-attention-lab
    type: branch
    label: aprofundamento opcional
layout:
  primaryPath:
    - labs:005-cache-lab
    - labs:008-matrix-lab
  branchOrder:
    - labs:017-gpu-lab
    - labs:018-attention-lab
---

## Sentido do percurso

O laboratório de cache permite prever padrões de acesso num modelo; o de matrizes confronta essas hipóteses com a máquina real. As ramificações examinam dois usos distintos de operações numéricas: computação paralela e attention.

## Escolhas e aprofundamentos

A partir de multiplicação matricial, duas ramificações:

- [`017-gpu-lab`](https://github.com/oxide-club/labs/tree/main/017-gpu-lab): paralelismo massivo, kernels e reduções.
- [`018-attention-lab`](https://github.com/oxide-club/labs/tree/main/018-attention-lab): attention como algoritmo numérico com estabilidade e uso de memória.

O GPU lab não é pré-requisito obrigatório do attention lab; este último pode ser executado em CPU.

## Conexões com outras trilhas

A representação numérica da trilha 1 pode servir como apoio, mas não se inclui atividade não publicada como pré-requisito.
