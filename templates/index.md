---
version: 1
title: Título da trilha
summary: Uma frase que descreve o objetivo do percurso.
question: Que mecanismo esta trilha ajuda a compreender?
audience: Pessoas que já possuem os conhecimentos de entrada abaixo.
prerequisites:
  - Conhecimento necessário para a entrada recomendada.
learningGoals:
  - Explicar o mecanismo investigado e seus limites.
draft: true
order: 0
nodes:
  - ref: challenges:001-wc
  - ref: labs:001-binary-lab
  - ref: notes:representacao-binaria
    context: Exemplo sintético de nota; substitua por uma nota publicada existente.
edges:
  - from: challenges:001-wc
    to: labs:001-binary-lab
    type: recommended_next
  - from: notes:representacao-binaria
    to: labs:001-binary-lab
    type: suggested_preparation
    label: Contexto de representação
layout:
  primaryPath:
    - challenges:001-wc
    - labs:001-binary-lab
---

## Sentido do percurso

Este é um modelo, não uma trilha publicada. Explique o que os materiais permitem investigar e por que as conexões são úteis.

## Escolhas e limites

Explique caminhos paralelos, aprofundamentos opcionais e preparações vindas de outras trilhas. Não apresente a ordem sugerida como um sistema de bloqueio.
