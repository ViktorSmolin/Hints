Пример CSP (заголовок сервера):
Content-Security-Policy:
default-src 'self';
script-src 'self' 'nonce-{{nonce}}';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
object-src 'none';
base-uri 'self';
frame-ancestors 'none';

Как применять:

- На SSR генерировать nonce и добавлять к инлайновым скриптам
- На фронте избегать inline-скриптов
