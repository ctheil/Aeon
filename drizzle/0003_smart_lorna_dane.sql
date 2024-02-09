DO $$ BEGIN
 CREATE TYPE "account_type" AS ENUM('owner', 'admin', 'editor', 'member');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "account_type" "account_type" NOT NULL;