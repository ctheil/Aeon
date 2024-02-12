DO $$ BEGIN
 CREATE TYPE "account_type" AS ENUM('owner', 'admin', 'editor', 'member', 'unassigned');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"colors" json,
	"typography" json,
	"company_name" text,
	"onboarding" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"hashed_password" text NOT NULL,
	"account_type" "account_type" NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
