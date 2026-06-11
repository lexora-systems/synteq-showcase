# Security Policy

This is a sanitized showcase repository for Synteq. It should not contain production secrets, customer data, internal logs, service account files, API keys, webhook signing keys, database URLs, or production deployment configuration.

## Reporting a Vulnerability

Please report suspected vulnerabilities privately to the project owner instead of opening a public issue. Include:

- A concise description of the issue.
- The affected file or example.
- Steps to reproduce or verify the concern.
- Any suggested remediation.

Do not include exploit details, real credentials, customer data, or private infrastructure information in public channels.

## Scope

In scope:

- Documentation and sample-code issues in this showcase repository.
- Accidental disclosure risks in examples or assets.
- Security concerns in the demonstrated patterns.

Out of scope:

- Production environment probing.
- Attempts to access private infrastructure.
- Social engineering.
- Denial-of-service testing.

## Sanitization Standard

Before public submission, this repository should be scanned for:

- `.env` files.
- Private keys and service account JSON.
- API keys, tokens, passwords, webhook secrets, and database URLs.
- Private logs, customer data, and internal-only operational notes.
