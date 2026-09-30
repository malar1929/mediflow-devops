# Database

Store ordered, reviewable schema changes in `migrations/`. Put only synthetic, non-sensitive development fixtures in `seeds/`. Production schema changes should be applied through a controlled migration process; credentials belong in secret management, not this directory.

Select the database engine and migration tool before adding migration files.
