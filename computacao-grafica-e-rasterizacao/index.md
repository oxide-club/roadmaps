---
version: 1
title: Computação Gráfica e Rasterização
summary: Investigue representação de imagens, transformações e rasterização em software.
question:
  Como imagens são representadas e produzidas por transformações geométricas e algoritmos de
  rasterização?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - Arrays, coordenadas, operações aritméticas e formatos de imagem.
learningGoals:
  - produzir imagens válidas e explicar como layout, transformações e regras geométricas determinam
    os pixels de saída.
draft: false
publishedAt: 2026-10-25
order: 5
featured: false
nodes:
  - ref: challenges:002-ppm
  - ref: challenges:007-image-bug
  - ref: challenges:008-image-transform
  - ref: challenges:009-triangle
  - ref: challenges:014-mystery-image
edges:
  - from: challenges:002-ppm
    to: challenges:007-image-bug
    type: branch
  - from: challenges:007-image-bug
    to: challenges:008-image-transform
    type: branch
  - from: challenges:008-image-transform
    to: challenges:009-triangle
    type: branch
  - from: challenges:002-ppm
    to: challenges:014-mystery-image
    type: branch
    label: formato como objeto
layout:
  primaryPath:
    - challenges:002-ppm
    - challenges:007-image-bug
    - challenges:008-image-transform
    - challenges:009-triangle
  branchOrder:
    - challenges:014-mystery-image
---

## Sentido do percurso

A progressão vai dos bytes RGB às relações entre índices, coordenadas e geometria. Não presume GPU: a rasterização é estudada inicialmente como algoritmo em software.

## Escolhas e aprofundamentos

O desafio [`014-mystery-image`](https://github.com/oxide-club/challenges/tree/main/014-mystery-image) acrescenta uma investigação aplicada de engenharia reversa de formato e também aparece na trilha 6.

## Conexões com outras trilhas

Os conceitos de layout e memória aproximam esta trilha das trilhas 1 e 10.
