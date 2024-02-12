CREATE TABLE IF NOT EXISTS "settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"colors" json,
	"typography" json,
	"company_name" text,
	"onboarding" boolean DEFAULT true,
	"updated_at" timestamp
);
