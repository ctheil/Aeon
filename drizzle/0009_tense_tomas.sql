ALTER TABLE "users" ADD COLUMN "reset_token" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "reset_token_expiration" date;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "verification_token" text;