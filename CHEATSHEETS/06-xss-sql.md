# XSS

- Источник: небезопасная вставка HTML (innerHTML, dangerouslySetInnerHTML)
- Защита: не вставлять сырой HTML, sanitize (DOMPurify), CSP, escape, валидировать вход

# SQL-инъекции (бек)

- Параметризация запросов, ORM, валидация входа
- Никогда не конкатенировать строки в SQL

# Интервью

- Где XSS в React? — dangerouslySetInnerHTML, обработчики из данных
- Что делает CSP? — ограничивает источники скриптов/ресурсов
