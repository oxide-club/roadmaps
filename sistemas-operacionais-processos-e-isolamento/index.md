---
version: 1
title: Sistemas Operacionais, Processos e Isolamento
summary: Investigue processos, permissões de memória, isolamento e comunicação.
question: Como o sistema operacional oferece execução, memória, comunicação e isolamento?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - C básico, processos e observação de erros de execução.
learningGoals:
  - explicar o que cada mecanismo do sistema operacional garante, o que apenas restringe e quais
    propriedades exigem sincronização adicional.
draft: false
publishedAt: 2026-10-25
order: 8
featured: false
nodes:
  - ref: labs:013-syscalls-lab
  - ref: labs:006-processes-lab
  - ref: labs:022-page-protection-lab
  - ref: labs:016-isolation-lab
  - ref: challenges:031-ipc-snapshots
  - ref: labs:010-concurrency-lab
    relatedRoadmap: concorrencia-sincronizacao-e-execucao-assincrona
  - ref: challenges:029-minimal-debugger
edges:
  - from: labs:013-syscalls-lab
    to: labs:006-processes-lab
    type: recommended_next
  - from: labs:006-processes-lab
    to: labs:022-page-protection-lab
    type: recommended_next
  - from: labs:022-page-protection-lab
    to: labs:016-isolation-lab
    type: recommended_next
  - from: labs:006-processes-lab
    to: challenges:031-ipc-snapshots
    type: recommended_next
  - from: labs:010-concurrency-lab
    to: challenges:031-ipc-snapshots
    type: suggested_preparation
    label: sincronização
  - from: labs:013-syscalls-lab
    to: challenges:029-minimal-debugger
    type: convergence
  - from: labs:006-processes-lab
    to: challenges:029-minimal-debugger
    type: convergence
layout:
  primaryPath:
    - labs:013-syscalls-lab
    - labs:006-processes-lab
    - labs:022-page-protection-lab
    - labs:016-isolation-lab
---

## Sentido do percurso

A trilha distingue observação de syscalls, mecanismos de processos, permissões de páginas, limites de recursos e comunicação cooperativa. Isolamento é investigado sob modelo de ameaça e não equivale a uma sandbox pronta para produção.

## Escolhas e aprofundamentos

O desafio [`029-minimal-debugger`](https://github.com/oxide-club/challenges/tree/main/029-minimal-debugger) é um caminho de instrumentação após processos e syscalls, apoiado também por assembly e ABI. O desafio `031-ipc-snapshots` pode ser cursado após processos e fundamentos de sincronização da trilha 9: isolamento não deve ser tratado como pré-requisito rígido para IPC cooperativo.

## Conexões com outras trilhas

Debugging conecta-se à trilha 6; IPC conecta-se à trilha 9; page protection conecta-se à trilha 7.
