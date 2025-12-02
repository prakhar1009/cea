-- Database Initialization Script for Compiledger CEA
-- Week 0: Infrastructure Provisioning

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create application user with limited privileges
CREATE USER cea_app WITH PASSWORD 'cea_app_dev_pass';

-- Grant necessary permissions
GRANT CONNECT ON DATABASE compiledger TO cea_app;
GRANT USAGE ON SCHEMA public TO cea_app;
GRANT CREATE ON SCHEMA public TO cea_app;

-- Create read-only replica user (for future read replicas)
CREATE USER cea_readonly WITH PASSWORD 'cea_readonly_pass';
GRANT CONNECT ON DATABASE compiledger TO cea_readonly;
GRANT USAGE ON SCHEMA public TO cea_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO cea_readonly;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO cea_readonly;

-- Set up Row-Level Security support
-- Tables will be created by Prisma migrations, but we prepare the ground
ALTER DATABASE compiledger SET app.current_tenant_id = '';
ALTER DATABASE compiledger SET app.is_admin = 'false';

-- Create audit log function for change tracking
CREATE OR REPLACE FUNCTION audit_log_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log (table_name, operation, new_data, changed_at)
        VALUES (TG_TABLE_NAME, 'INSERT', row_to_json(NEW), NOW());
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log (table_name, operation, old_data, new_data, changed_at)
        VALUES (TG_TABLE_NAME, 'UPDATE', row_to_json(OLD), row_to_json(NEW), NOW());
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log (table_name, operation, old_data, changed_at)
        VALUES (TG_TABLE_NAME, 'DELETE', row_to_json(OLD), NOW());
        RETURN OLD;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Log initialization
DO $$
BEGIN
    RAISE NOTICE '✅ Database initialized for Compiledger CEA';
    RAISE NOTICE '   - Extensions enabled: uuid-ossp, pgcrypto';
    RAISE NOTICE '   - Users created: cea_app, cea_readonly';
    RAISE NOTICE '   - RLS support configured';
    RAISE NOTICE '   - Audit log trigger function created';
    RAISE NOTICE '';
    RAISE NOTICE '⏭️  Next step: Run Prisma migrations to create schema';
END $$;
