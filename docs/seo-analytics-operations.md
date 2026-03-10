# SEO and Analytics Operations

Canonical hosts:
- `https://www.carlomagno.xyz`
- `https://toukan.dev`

Sitemaps:
- `https://www.carlomagno.xyz/sitemap.xml`
- `https://toukan.dev/sitemap.xml`

Search Console properties:
- `https://www.carlomagno.xyz/`
- `https://toukan.dev/`

## GA4 event map

`carlomagno.xyz`
- `email_click`
- `contact_open`
- `writing_open`
- `writing_archive_open`
- `now_open`
- `pgp_download`

`toukan.dev`
- `country_page_view`
- `country_page_open`
- `service_page_view`
- `service_page_open`
- `problem_page_view`
- `problem_page_open`
- `countries_hub_view`
- `services_hub_view`
- `problems_hub_view`
- `contact_form_submit`
- `book_call_click`
- `email_click`
- `phone_click`

Recommended GA4 custom definitions:
- `site`
- `locale`
- `page_type`
- `country`
- `service`
- `problem`
- `target`

## Toukan query clusters

Prioritize pages and experiments around these clusters:

1. Critical operations security
- vendor access control
- privileged access review
- remote access hardening
- incident visibility across distributed operations

2. Secure internal systems
- audit trails for operational workflows
- role-based access for contractors and operators
- resilient internal systems for approvals and reporting

3. Operational intelligence
- remote asset visibility
- telemetry cleanup
- multi-site reporting
- operational dashboards teams can trust

4. Stack or environment intent
- AWS security review
- SIEM tuning
- OT-adjacent asset inventory
- logging and alert design for critical operations

## Weekly review

Every week:
- Review Search Console queries by country: Honduras, El Salvador, Guatemala, Costa Rica.
- Review landing pages with impressions but low CTR.
- Review landing pages with clicks but weak contact activity.
- Identify one new page or rewrite from actual query demand, not generic keyword lists.
- Keep titles, descriptions, and internal links aligned with the winning queries.

## First pages to monitor

`toukan.dev`
- `/es/countries/honduras`
- `/es/countries/el-salvador`
- `/es/countries/guatemala`
- `/es/countries/costa-rica`
- `/es/services/critical-infrastructure-cybersecurity`
- `/es/services/secure-software-systems`
- `/es/services/operational-intelligence`
- `/es/problems/remote-asset-visibility`
- `/es/problems/vendor-and-privileged-access-control`
- `/es/problems/incident-visibility-across-remote-sites`
- `/es/problems/secure-internal-systems-with-audit-trails`

`carlomagno.xyz`
- `/en`
- `/en/writings`
- `/en/now`
- `/en/contact`

## Operating rules

- Do not ship thin country pages.
- Do not create pages for problems Toukan does not actually solve.
- Prefer pages built around operator pain over generic service marketing.
- Use Carlomagno writings to reinforce authority and link selectively where the topics genuinely overlap.
