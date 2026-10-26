---
version: 1
title: Concorrência, Sincronização e Execução Assíncrona
summary: Investigue sincronização, visibilidade e execução cooperativa.
question: Como atividades simultâneas compartilham estado e progridem sem violar invariantes?
audience: Pessoas que já possuem os conhecimentos de entrada indicados nesta trilha.
prerequisites:
  - Modelo básico de threads, estado mutável e estruturas compartilhadas.
learningGoals:
  - explicar interleavings e invariantes de sincronização, investigar modelos de visibilidade e
    diferenciar concorrência cooperativa de paralelismo.
draft: false
publishedAt: 2026-10-25
order: 9
featured: false
nodes:
  - ref: labs:010-concurrency-lab
  - ref: labs:019-atomics-lab
  - ref: labs:015-async-lab
  - ref: challenges:031-ipc-snapshots
  - ref: labs:006-processes-lab
edges:
  - from: labs:010-concurrency-lab
    to: labs:019-atomics-lab
    type: branch
  - from: labs:010-concurrency-lab
    to: labs:015-async-lab
    type: branch
  - from: labs:010-concurrency-lab
    to: challenges:031-ipc-snapshots
    type: convergence
  - from: labs:006-processes-lab
    to: challenges:031-ipc-snapshots
    type: convergence
layout:
  primaryPath:
    - labs:010-concurrency-lab
  branchOrder:
    - labs:019-atomics-lab
    - labs:015-async-lab
---

## Sentido do percurso

Atomicidade, ordenação, exclusão mútua e agendamento cooperativo são problemas distintos. Não se deve exigir que todos passem por memory ordering avançado para estudar a semântica de futures.

## Escolhas e aprofundamentos

Após a base, há dois aprofundamentos independentes:

- [`019-atomics-lab`](https://github.com/oxide-club/labs/tree/main/019-atomics-lab): visibilidade, memory ordering e relações de sincronização.
- [`015-async-lab`](https://github.com/oxide-club/labs/tree/main/015-async-lab): executor cooperativo com `Future`, `Poll` e `Waker`.

O desafio [`031-ipc-snapshots`](https://github.com/oxide-club/challenges/tree/main/031-ipc-snapshots) é uma convergência com [`006-processes-lab`](https://github.com/oxide-club/labs/tree/main/006-processes-lab) da trilha [Sistemas Operacionais, Processos e Isolamento](/roadmaps/sistemas-operacionais-processos-e-isolamento/); aplica coordenação e consistência entre processos.

## Conexões com outras trilhas

A trilha [Sistemas Operacionais, Processos e Isolamento](/roadmaps/sistemas-operacionais-processos-e-isolamento/) fornece os mecanismos de processos e IPC usados na convergência.
