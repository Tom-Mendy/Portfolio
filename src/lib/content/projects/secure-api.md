---
title: Secure Cloud-Native API
description: A complete CI/CD pipeline for a Node.js API with automated security scans and K8s deployment.
date: 2025-12-01
tags: ["Kubernetes", "Docker", "Trivy", "GitHub Actions"]
---

## 🔹 Résumé

- **Objectif** : Sécuriser le cycle de vie d'une API de bout en bout.
- **Contexte** : Simulation d'un environnement de production avec haute disponibilité.

## 🔹 Architecture

L'architecture repose sur un cluster Kubernetes géré (EKS) avec un Ingress Controller NGINX.

- **Frontend** : Svelte (pour le dashboard d'admin)
- **Backend** : Node.js API
- **Database** : PostgreSQL (avec Secrets management via HashiCorp Vault)

## 🔹 Sécurité intégrée

- **CI** : Scan SAST avec SonarQube et Linting systématique.
- **Build** : Scan d'image Docker avec Trivy. Blocage si vulnérabilités `CRITICAL` trouvées.
- **Runtime** : Network Policies strictes (Deny All par défaut) et Falco pour la détection d'intrusions.

## 🔹 CI/CD

Le pipeline GitHub Actions est segmenté en 4 étapes :

1. `Lint & Test`
2. `Security Scan (SAST + Container)`
3. `Push to Registry (GHCR)`
4. `Deploy to Staging/Prod`

## 🔹 Limites & améliorations

- **Limites** : Le monitoring (Prometheus/Grafana) est basique. Pas de rotation automatique des certificats SSL (cert-manager non configuré).
- **Prochaines étapes** : Implémenter OPA (Open Policy Agent) pour valider les manifestes K8s avant déploiement.
